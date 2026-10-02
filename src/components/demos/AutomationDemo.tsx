"use client";

import "@xyflow/react/dist/style.css";

import {
  Background,
  BackgroundVariant,
  BaseEdge,
  EdgeLabelRenderer,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  useEdgesState,
  useNodesState,
  getSmoothStepPath,
  useReactFlow,
  type Connection,
  type Edge,
  type EdgeProps,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { track } from "@/lib/track";

/* ═══════════════════════════════════════════════════════════ catalogue */

type Cat = "trigger" | "crm" | "message" | "data" | "logic" | "ai";

const CATS: Record<Cat, { label: string; color: string }> = {
  trigger: { label: "Déclencheurs", color: "var(--color-flow-trigger)" },
  crm: { label: "Contact & CRM", color: "var(--color-flow-crm)" },
  message: { label: "Email & messagerie", color: "var(--color-flow-message)" },
  data: { label: "Webhooks & données", color: "var(--color-flow-data)" },
  logic: { label: "Logique", color: "var(--color-flow-logic)" },
  ai: { label: "Actions IA", color: "var(--color-flow-ai)" },
};

/** Les actions réellement disponibles dans WePushX CRM. */
const CATALOG: Record<Cat, string[]> = {
  trigger: [
    "Formulaire soumis",
    "Nouveau lead publicitaire",
    "Appel manqué",
    "Tag ajouté",
    "Rendez-vous réservé",
    "Webhook entrant",
    "Paiement reçu",
  ],
  crm: [
    "Create Contact",
    "Find Contact",
    "Update Contact Field",
    "Add Contact Tag",
    "Remove Contact Tag",
    "Assign to User",
    "Remove Assigned User",
    "Add Note",
    "Add Task",
    "Delete Contact",
    "Copy Contact to Sub-Account",
    "Modify Engagement Score",
    "Add Contact Follower",
    "Remove Contact Follower",
    "Enable/Disable DND",
    "Edit Conversation",
    "Associate Records",
    "Add Associated Records to Workflow",
    "Remove Associated Records from Workflow",
    "Find Object Record / Company",
    "Update Custom Object Data",
  ],
  message: [
    "Send Email",
    "Send SMS",
    "Send WhatsApp",
    "Send Facebook Messenger",
    "Send Instagram DM",
    "Send Live Chat Message",
    "Send Slack Message",
    "Send Internal Notification",
    "Send Review Request",
    "Reply to Facebook Comment",
    "Reply to Instagram Comment",
    "Facebook Interactive Messenger",
    "Instagram Interactive Messenger",
    "GMB Messaging",
    "Manual Action",
    "Call",
  ],
  data: ["Webhook", "Custom Webhook", "Google Sheets", "Custom Code", "Text Formatter", "Arrays"],
  logic: [
    "If/Else",
    "Wait",
    "Goal Event",
    "Split",
    "Go To",
    "Remove From Workflow",
    "Drip Mode",
    "Update Custom Value",
  ],
  ai: [
    "AI Prompt / GPT",
    "AI Decision Maker",
    "AI Intent Detection",
    "AI Summarize",
    "AI Translate",
    "AI Agent",
    "AI Extract Data",
    "AI Email Parser",
    "AI Image Generation",
    "AI Analyze Image",
  ],
};

/* ══════════════════════════════════════════════════════════════ icônes */

const ICONS: Record<Cat, React.ReactNode> = {
  trigger: <path d="M8 1 2.5 8.5H7L6 15l5.5-7.5H7L8 1Z" />,
  crm: <><circle cx="8" cy="5.2" r="2.6" /><path d="M2.8 14c.4-2.9 2.6-4.4 5.2-4.4s4.8 1.5 5.2 4.4" /></>,
  message: <path d="M2 3.5h12v8H6.5L3 14.2V11.5H2v-8Z" />,
  data: <><path d="M2 8h3.5M10.5 8H14" /><rect x="5.5" y="5" width="5" height="6" rx="1.4" /></>,
  logic: <><path d="M8 3v3M8 6 4.5 9.5V14M8 6l3.5 3.5V14" /><circle cx="8" cy="2.2" r="1.2" /></>,
  ai: <path d="M8 1.6 9.5 6l4.4 1.5L9.5 9 8 13.4 6.5 9 2.1 7.5 6.5 6 8 1.6Z" />,
};

const Icon = ({ cat, className = "h-3.5 w-3.5" }: { cat: Cat; className?: string }) => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    {ICONS[cat]}
  </svg>
);

/* ═══════════════════════════════════════════════════════════════ nœuds */

type StepData = { label: string; cat: Cat; note?: string; __active?: boolean };
type StepNode = Node<StepData, "step">;

const handleCls = "!h-2 !w-2 !rounded-full !border-0 hover:!h-3.5 hover:!w-3.5 transition-all";

function StepNodeView({ data, selected }: NodeProps<StepNode>) {
  const c = CATS[data.cat].color;
  const on = Boolean(data.__active);

  return (
    <div
      className="flex min-w-[208px] max-w-[262px] items-start gap-3 rounded-[0.9rem] px-3.5 py-3 backdrop-blur-xl transition-all duration-300"
      style={{
        // surfaces dérivées des tokens : lisibles sur crème comme sur encre
        background: on
          ? `color-mix(in srgb, ${c} 14%, var(--color-ink-2))`
          : "color-mix(in srgb, var(--color-fg) 5%, var(--color-ink-2))",
        border: `1px solid ${on ? c : selected ? "var(--color-violet-bright)" : "var(--color-line)"}`,
        boxShadow: on
          ? `0 0 0 3px color-mix(in srgb, ${c} 18%, transparent), 0 20px 44px -26px ${c}`
          : "0 12px 30px -28px rgba(0,0,0,0.9)",
      }}
    >
      <Handle type="target" position={Position.Top} className={handleCls} />

      <span
        className="mt-px flex h-7 w-7 shrink-0 items-center justify-center rounded-[0.5rem]"
        style={{ background: `color-mix(in srgb, ${c} 16%, transparent)`, color: c }}
      >
        <Icon cat={data.cat} className="h-4 w-4" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-[0.92rem] font-medium leading-tight text-fg">{data.label}</span>
        {data.note && <span className="mt-1 block text-[0.74rem] leading-snug text-muted">{data.note}</span>}
      </span>

      <Handle type="source" position={Position.Bottom} className={handleCls} />
    </div>
  );
}

const nodeTypes = { step: StepNodeView };

/* ═════════════════════════════════════════════════════════════ liaisons */

/** Liaison avec bouton de suppression : sans lui, impossible de défaire un lien. */
function WpxEdge({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, markerEnd, style, label, selected }: EdgeProps) {
  const { setEdges } = useReactFlow();
  const [path, labelX, labelY] = getSmoothStepPath({
    sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition, borderRadius: 14,
  });

  return (
    <>
      <BaseEdge id={id} path={path} markerEnd={markerEnd} style={style} interactionWidth={26} />
      <EdgeLabelRenderer>
        <div
          className="nodrag nopan group absolute flex items-center gap-1.5"
          style={{ transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`, pointerEvents: "all" }}
        >
          {label && <span className="rounded bg-ink/80 px-1 text-[0.6rem] text-muted backdrop-blur-sm">{label}</span>}
          <button
            type="button"
            aria-label="Supprimer la liaison"
            onClick={() => setEdges((eds) => eds.filter((e) => e.id !== id))}
            className={`flex h-4 w-4 items-center justify-center rounded-full border border-line bg-ink text-[0.6rem] leading-none text-muted transition-all duration-200 hover:border-danger hover:text-danger ${
              selected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            ×
          </button>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

const edgeTypes = { wpx: WpxEdge };

/* ════════════════════════════════════════════════════════ scénario seed */

const N = (id: string, x: number, y: number, cat: Cat, label: string, note?: string): StepNode => ({
  id,
  type: "step",
  position: { x, y },
  data: { cat, label, note },
});

const seedNodes: StepNode[] = [
  N("1", 40, 0, "trigger", "Formulaire soumis", "Landing page Meta Ads"),
  N("2", 40, 104, "crm", "Create Contact", "Nom, téléphone, source"),
  N("3", 40, 208, "ai", "AI Intent Detection", "Analyse du message entrant"),
  N("4", 40, 312, "logic", "If/Else", "Lead chaud ou froid ?"),
  N("5", -196, 430, "crm", "Assign to User", "Commercial disponible"),
  N("6", -196, 534, "message", "Send WhatsApp", "Message + lien de réservation"),
  N("7", 292, 430, "logic", "Wait", "1 jour ouvré"),
  N("8", 292, 534, "message", "Send Email", "Séquence de réchauffement"),
  N("9", 40, 652, "logic", "Goal Event", "Rendez-vous réservé"),
];

const stroke = "color-mix(in srgb, var(--color-fg) 28%, transparent)";
const eStyle = { stroke, strokeWidth: 1.2 };
const marker = { type: MarkerType.ArrowClosed, color: stroke, width: 12, height: 12 };
const E = (id: string, source: string, target: string, label?: string): Edge => ({
  id,
  source,
  target,
  label,
  type: "wpx",
  style: eStyle,
  markerEnd: marker,
  labelStyle: { fill: "#a89cb2", fontSize: 9.5 },
  labelBgStyle: { fill: "transparent" },
});

const seedEdges: Edge[] = [
  E("e1", "1", "2"),
  E("e2", "2", "3"),
  E("e3", "3", "4"),
  E("e4", "4", "5", "chaud"),
  E("e5", "4", "7", "froid"),
  E("e6", "5", "6"),
  E("e7", "7", "8"),
  E("e8", "6", "9"),
  E("e9", "8", "9"),
];

/* ═══════════════════════════════════════════════════════════════ palette */

function Palette({ onAdd }: { onAdd: (cat: Cat, label: string) => void }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<Cat | null>(null);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return (Object.keys(CATALOG) as Cat[])
      .map((cat) => ({ cat, items: CATALOG[cat].filter((i) => i.toLowerCase().includes(needle)) }))
      .filter((g) => g.items.length > 0);
  }, [q]);

  const searching = q.trim().length > 0;

  return (
    <div className="flex h-full flex-col">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Chercher une action…"
        aria-label="Chercher une action"
        className="w-full border-b border-line bg-transparent pb-2.5 text-[0.82rem] text-fg placeholder:text-faint focus:border-violet-bright focus:outline-none"
      />

      <div className="mt-2 min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1" data-lenis-prevent>
        {filtered.map(({ cat, items }) => {
          const expanded = searching || open === cat;
          return (
            <div key={cat} className="border-b border-line/60 last:border-0">
              <button
                type="button"
                onClick={() => setOpen(open === cat ? null : cat)}
                className="flex w-full items-center gap-2 py-2.5 text-left"
                style={{ color: CATS[cat].color }}
                aria-expanded={expanded}
              >
                <Icon cat={cat} className="h-3 w-3" />
                <span className="font-mono text-[0.55rem] uppercase tracking-[0.14em]">{CATS[cat].label}</span>
                <span className="ml-auto text-[0.58rem] text-faint">{items.length}</span>
              </button>

              {expanded && (
                <div className="space-y-px pb-2">
                  {items.map((label) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => onAdd(cat, label)}
                      className="group flex w-full items-center gap-2 py-1 pl-5 text-left text-[0.78rem] text-fg/65 transition-colors hover:text-fg"
                    >
                      <span
                        className="h-px w-2 shrink-0 transition-all duration-300 group-hover:w-4"
                        style={{ background: CATS[cat].color }}
                      />
                      <span className="truncate">{label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        {filtered.length === 0 && <p className="py-6 text-center text-[0.76rem] text-faint">Aucune action ne correspond.</p>}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════ flow */

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState<StepNode>(seedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(seedEdges);
  const [active, setActive] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  /** Pointeur grossier = doigt. On neutralise alors la capture du geste. */
  const [touch, setTouch] = useState(false);
  /** Sur mobile le canevas est inerte tant que l'édition n'est pas activée :
      sinon React Flow avale le glissement et la page ne défile plus. */
  const [editing, setEditing] = useState(false);

  const canvas = useRef<HTMLDivElement>(null);
  const nextId = useRef(seedNodes.length + 1);
  const cancelled = useRef(false);
  const { screenToFlowPosition } = useReactFlow();

  useEffect(() => () => { cancelled.current = true; }, []);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const sync = () => setTouch(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const canInteract = !touch || editing;

  const onConnect = useCallback(
    (c: Connection) => {
      setEdges((eds) => addEdge({ ...c, type: "wpx", style: eStyle, markerEnd: marker }, eds));
      track("demo_interact", { service: "automations", action: "connect_nodes" });
    },
    [setEdges],
  );

  /**
   * Le bloc est déposé au centre du canevas *visible*, converti en coordonnées
   * du graphe : une position fixe finit hors écran dès que la vue a bougé.
   */
  const addNode = useCallback(
    (cat: Cat, label: string) => {
      const r = canvas.current?.getBoundingClientRect();
      const base = r
        ? screenToFlowPosition({ x: r.left + r.width * 0.55, y: r.top + r.height * 0.45 })
        : { x: 300, y: 200 };
      const jitter = () => (Math.random() - 0.5) * 70;
      const id = String(nextId.current++);

      setNodes((ns) => [
        ...ns.map((n) => ({ ...n, selected: false })),
        {
          id,
          type: "step" as const,
          position: { x: base.x + jitter(), y: base.y + jitter() },
          data: { cat, label },
          selected: true,
        },
      ]);

      setPaletteOpen(false);
      // sur mobile la palette masque le canevas : on y ramène l'utilisateur
      if (touch) {
        requestAnimationFrame(() =>
          canvas.current?.scrollIntoView({ behavior: "smooth", block: "center" }),
        );
      }
      track("demo_interact", { service: "automations", action: "add_node", node: label });
    },
    [screenToFlowPosition, setNodes, touch],
  );

  const run = async () => {
    if (running) return;
    setRunning(true);
    cancelled.current = false;
    track("demo_interact", { service: "automations", action: "run_flow" });

    const order: string[] = [];
    const seen = new Set<string>();
    const queue = nodes.filter((n) => n.data.cat === "trigger").map((n) => n.id);
    if (!queue.length && nodes.length) queue.push(nodes[0].id);

    while (queue.length) {
      const id = queue.shift() as string;
      if (seen.has(id)) continue;
      seen.add(id);
      order.push(id);
      edges.filter((e) => e.source === id).forEach((e) => queue.push(e.target));
    }

    for (const id of order) {
      if (cancelled.current) return;
      setActive(id);
      setEdges((eds) => eds.map((e) => ({ ...e, animated: e.target === id })));
      await new Promise((r) => setTimeout(r, 560));
    }

    setActive(null);
    setEdges((eds) => eds.map((e) => ({ ...e, animated: false })));
    setRunning(false);
  };

  const reset = () => {
    cancelled.current = true;
    setNodes(seedNodes);
    setEdges(seedEdges);
    setActive(null);
    setRunning(false);
    nextId.current = seedNodes.length + 1;
    requestAnimationFrame(() => { cancelled.current = false; });
  };

  const painted = nodes.map((n) => (n.id === active ? { ...n, data: { ...n.data, __active: true } } : n));

  return (
    <div className="grid gap-x-8 gap-y-4 lg:grid-cols-[210px_1fr]">
      {/* ---- palette : accordéon sur mobile, colonne à gauche sur desktop ---- */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setPaletteOpen((o) => !o)}
          className="label flex min-h-11 items-center gap-2 text-violet-bright"
          aria-expanded={paletteOpen}
        >
          <span className="text-base leading-none">{paletteOpen ? "−" : "+"}</span>
          {paletteOpen ? "Masquer les actions" : "Ajouter une action"}
        </button>
      </div>
      <div
        className={`${paletteOpen ? "flex" : "hidden"} h-[360px] flex-col lg:flex lg:h-[clamp(620px,82vh,860px)]`}
      >
        <Palette onAdd={addNode} />
      </div>

      {/* ---- canevas : transparent, sans cadre ---- */}
      <div className="relative">
        {/* Commandes : empilées au-dessus du canevas sur mobile (sinon elles
            recouvrent le scénario), flottantes en haut à droite sur desktop. */}
        <div className="mb-3 flex flex-wrap items-center gap-2 lg:absolute lg:right-0 lg:top-0 lg:z-10 lg:mb-0 lg:justify-end">
          {touch && (
            <button
              type="button"
              onClick={() => setEditing((e) => !e)}
              aria-pressed={editing}
              className={`flex min-h-11 items-center rounded-full border px-4 text-[0.72rem] transition-colors ${
                editing ? "border-violet-bright bg-violet text-snow" : "border-line text-muted"
              }`}
            >
              {editing ? "Terminer" : "Manipuler"}
            </button>
          )}
          <button
            type="button"
            onClick={reset}
            className="min-h-11 rounded-full border border-line px-4 text-[0.72rem] text-muted transition-colors hover:text-fg"
          >
            Réinitialiser
          </button>
          <button
            type="button"
            onClick={run}
            disabled={running}
            className="min-h-11 rounded-full bg-violet px-4 text-[0.72rem] font-medium text-snow transition-colors hover:bg-violet-bright disabled:opacity-50"
          >
            {running ? "Exécution…" : "Lancer un lead"}
          </button>
        </div>

        <div ref={canvas} className="h-[clamp(380px,52vh,520px)] w-full lg:h-[clamp(620px,82vh,860px)]">
        <ReactFlow
          nodes={painted}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          deleteKeyCode={["Backspace", "Delete"]}
          fitView
          fitViewOptions={{ padding: 0.1, maxZoom: 1 }}
          minZoom={0.3}
          maxZoom={1.4}
          className="wpx-flow"
          proOptions={{ hideAttribution: true }}
          /* Gestes : au doigt, tant que l'édition n'est pas activée, le canevas
             ne capte rien et le geste vertical défile la page normalement.
             preventScrolling={false} empêche React Flow d'appeler
             preventDefault() sur la molette et le toucher. */
          preventScrolling={false}
          panOnDrag={canInteract}
          nodesDraggable={canInteract}
          nodesConnectable={canInteract}
          elementsSelectable={canInteract}
          zoomOnScroll={!touch}
          zoomOnPinch
          zoomOnDoubleClick={false}
          /* React Flow peint sa propre couleur de fond : on la neutralise
             pour que le fond de la page traverse le canevas. */
          style={{ background: "transparent", ["--xy-background-color" as string]: "transparent" }}
          defaultEdgeOptions={{ type: "wpx", style: eStyle, markerEnd: marker }}
        >
          <Background variant={BackgroundVariant.Dots} gap={28} size={1} color="rgba(245,240,248,0.07)" />
        </ReactFlow>
        </div>
      </div>

      <p className="text-[0.7rem] leading-relaxed text-faint lg:col-start-2">
        {touch
          ? "Touchez « Manipuler » pour déplacer et relier les blocs, puis « Terminer » pour reprendre le défilement de la page."
          : "Ajoutez une action, tirez un trait d'un point à l'autre pour relier deux blocs. Survolez une liaison pour la supprimer, ou sélectionnez-la et appuyez sur Suppr."}
      </p>
    </div>
  );
}

export function AutomationDemo() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
