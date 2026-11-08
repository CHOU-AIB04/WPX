import type { Metadata } from "next";
import { Lines, Reveal } from "@/components/ui/motion";
import { CategoryTags } from "@/components/blog/CategoryTags";
import { PostCard } from "@/components/blog/PostCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts } from "@/lib/blog";
import { abs, breadcrumbLd, pageMeta, webPageLd } from "@/lib/seo";

const TITLE = "Blog marketing digital au Maroc : guides et prix";
const DESCRIPTION =
  "Guides marketing digital pour les PME au Maroc : prix d'un site web, choix d'un CRM WhatsApp, SEO et GEO, Google Ads ou Meta Ads. Concret, chiffré, local.";

export const metadata: Metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: "/blog",
  image: { url: "/blog/opengraph-image", alt: TITLE },
});

/** Plus récents d'abord. */
const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({ path: "/blog", name: TITLE, description: DESCRIPTION, type: "CollectionPage" }),
          breadcrumbLd([{ name: "Blog", path: "/blog" }]),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": `${abs("/blog")}#blog`,
            name: "Blog WePushX",
            url: abs("/blog"),
            inLanguage: "fr-MA",
            blogPost: posts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: abs(`/blog/${p.slug}`), datePublished: p.date })),
          },
        ]}
      />

      <section className="relative overflow-hidden pb-14 pt-36 md:pt-44">
        <div className="container-x">
          <Lines as="h1" intro eyebrow="Blog marketing digital au Maroc" className="display text-[clamp(2.8rem,8.5vw,8.5rem)]">
            <span key="1">Des guides,</span>
            <span key="2" className="serif-accent text-gradient">pas du blabla.</span>
          </Lines>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-xl text-lg text-fg/65">
              Prix réels, délais, erreurs à éviter : ce que nous appliquons chaque jour pour les PME marocaines, écrit pour que vous
              puissiez décider seul.
            </p>
            <CategoryTags className="mt-10" />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <div className="container-x">
          <div className="grid gap-px overflow-hidden rounded-[1.8rem] border border-line bg-line md:grid-cols-2">
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
