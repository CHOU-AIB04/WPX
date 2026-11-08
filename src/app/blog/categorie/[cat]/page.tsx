import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Lines } from "@/components/ui/motion";
import { CategoryTags } from "@/components/blog/CategoryTags";
import { PostCard } from "@/components/blog/PostCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { MIN_POSTS_TO_INDEX_CATEGORY, blogCategories, categoryById, postsInCategory } from "@/lib/blog";
import { breadcrumbLd, pageMeta, webPageLd } from "@/lib/seo";

type Props = { params: Promise<{ cat: string }> };

export function generateStaticParams() {
  return blogCategories.filter((c) => postsInCategory(c.id).length > 0).map((c) => ({ cat: c.id }));
}

export const dynamicParams = false;

const titleOf = (name: string) => `${name} : guides pour PME au Maroc`;
const descriptionOf = (name: string) =>
  `Nos guides ${name.toLowerCase()} pour les PME au Maroc : prix, méthodes, délais et erreurs à éviter, par l'équipe WePushX à Casablanca.`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = categoryById((await params).cat);
  if (!c) return {};
  return pageMeta({
    title: titleOf(c.name),
    description: descriptionOf(c.name),
    path: `/blog/categorie/${c.id}`,
    image: { url: "/blog/opengraph-image", alt: titleOf(c.name) },
    // Pas de page de catégorie maigre dans Google : indexée à partir de 3 articles.
    noindex: postsInCategory(c.id).length < MIN_POSTS_TO_INDEX_CATEGORY,
  });
}

export default async function CategoryPage({ params }: Props) {
  const c = categoryById((await params).cat);
  if (!c) notFound();
  const posts = postsInCategory(c.id);
  const path = `/blog/categorie/${c.id}`;

  return (
    <>
      <JsonLd
        data={[
          webPageLd({ path, name: titleOf(c.name), description: descriptionOf(c.name), type: "CollectionPage" }),
          breadcrumbLd([
            { name: "Blog", path: "/blog" },
            { name: c.name, path },
          ]),
        ]}
      />
      <section className="relative overflow-hidden pb-14 pt-36 md:pt-44">
        <div className="container-x">
          <Lines as="h1" intro eyebrow="Blog · Catégorie" className="display text-[clamp(2.6rem,7vw,7rem)]">
            <span key="1">{c.name}</span>
          </Lines>
          <CategoryTags active={c.id} className="mt-10" />
        </div>
      </section>
      <section className="border-t border-line py-16 md:py-24">
        <div className="container-x grid gap-px overflow-hidden rounded-[1.8rem] border border-line bg-line md:grid-cols-2">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
