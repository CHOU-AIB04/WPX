import Link from "next/link";
import { blogCategories, postsInCategory } from "@/lib/blog";

/** Étiquettes de catégorie, avec le nombre d'articles. */
export function CategoryTags({ active, className = "" }: { active?: string; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      <li>
        <Link
          href="/blog"
          className={`inline-flex rounded-full border px-4 py-2 text-sm transition-colors ${!active ? "border-violet-bright bg-violet text-snow" : "border-line text-fg/75 hover:border-violet-bright hover:text-fg"}`}
        >
          Tous les articles
        </Link>
      </li>
      {blogCategories.map((c) => {
        const n = postsInCategory(c.id).length;
        if (!n) return null;
        const on = active === c.id;
        return (
          <li key={c.id}>
            <Link
              href={`/blog/categorie/${c.id}`}
              className={`inline-flex rounded-full border px-4 py-2 text-sm transition-colors ${on ? "border-violet-bright bg-violet text-snow" : "border-line text-fg/75 hover:border-violet-bright hover:text-fg"}`}
            >
              {c.name} <span className="ml-1.5 opacity-60">{n}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
