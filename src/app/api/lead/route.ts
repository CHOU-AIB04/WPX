import { NextResponse } from "next/server";

type Lead = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message?: string;
  plan?: string;
  eventId?: string;
  page?: string;
  utm?: Record<string, string>;
  website?: string; // honeypot
};

const clean = (v: unknown, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Lead;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // bot : champ caché rempli -> on répond OK sans rien faire
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const lead = {
    name: clean(body.name, 120),
    email: clean(body.email, 160).toLowerCase(),
    phone: clean(body.phone, 40),
    company: clean(body.company, 160),
    service: clean(body.service, 400),
    budget: clean(body.budget, 80),
    message: clean(body.message, 2000),
    plan: clean(body.plan, 40),
    eventId: clean(body.eventId, 80),
    page: clean(body.page, 300),
    utm: body.utm && typeof body.utm === "object" ? body.utm : {},
    source: "wepushx.com",
    createdAt: new Date().toISOString(),
  };

  if (!lead.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email) || lead.message.length < 20) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 422 });
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) {
    console.warn("[lead] LEAD_WEBHOOK_URL absent, lead non transmis :", lead.email);
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!res.ok) throw new Error(`webhook ${res.status}`);
    return NextResponse.json({ ok: true, forwarded: true });
  } catch (e) {
    console.error("[lead] échec webhook", e);
    return NextResponse.json({ ok: false, error: "forward_failed" }, { status: 502 });
  }
}
