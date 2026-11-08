import Link from "next/link";
import { Arrow } from "@/components/ui/Button";
import { categoryById, formatDate, type BlogPost } from "@/lib/blog";
import { readingTime } from "@/lib/blog-content";

/** Carte d'article : liste du blog, articles liés, pages de catégorie. */
export function PostCard({ post, headingLevel = "h2" }: { post: BlogPost; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <article className="bg-ink">
      <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col p-8 transition-colors duration-500 hover:bg-ink-2 md:p-9">
        <p className="label text-violet-bright">{categoryById(post.category)?.name}</p>
        <H className="display mt-6 text-[clamp(1.4rem,2.2vw,1.9rem)] leading-[1.08]">{post.title}</H>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-fg/60">{post.excerpt}</p>
        <p className="label mt-auto flex items-center justify-between gap-4 pt-8 text-faint">
          <span>
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {readingTime(post.slug)} min
          </span>
          <Arrow className="h-4 w-4 text-faint transition-all duration-500 group-hover:translate-x-1 group-hover:text-violet-bright" />
        </p>
      </Link>
    </article>
  );
}
