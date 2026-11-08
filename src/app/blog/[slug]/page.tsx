import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, Button, SectionLabel } from "@/components/ui/Button";
import { Lines, Reveal } from "@/components/ui/motion";
import { MarkStatic } from "@/components/brand/MarkStatic";
import { articleComponents } from "@/components/blog/mdx";
import { PostCard } from "@/components/blog/PostCard";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { AUTHOR, blogPosts, categoryById, formatDate, postBySlug, relatedPosts, resolvePrices } from "@/lib/blog";
import { readingTime, tableOfContents, wordCount } from "@/lib/blog-content";
import { allOffers, offerHref } from "@/lib/catalog";
import { cityBySlug } from "@/lib/cities";
import { showPrices } from "@/lib/geo";
import { ORG_ID, abs, breadcrumbLd, faqLd, logoUrl, pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = postBySlug((await params).slug);
  if (!post) return {};
  const meta = pageMeta({
    title: post.metaTitle,
    description: post.description,
    path: `/blog/${post.slug}`,
    socialTitle: post.title,
    image: { url: `/blog/${post.slug}/opengraph-image`, alt: post.title },
  });
  return {
    ...meta,
    keywords: post.keywords,
    authors: [{ name: AUTHOR.name }],
    openGraph: {
      ...meta.openGraph,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [AUTHOR.name],
      section: categoryById(post.category)?.name,
      tags: post.keywords,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = postBySlug((await params).slug);
  if (!post) notFound();

  // Les articles citent des prix : même règle que /tarifs (src/lib/geo.ts).
  const priced = await showPrices();
  const { default: Body } = await import(`@/content/blog/${post.slug}.mdx`);

  const path = `/blog/${post.slug}`;
  const category = categoryById(post.category);
  const toc = tableOfContents(post.slug);
  const minutes = readingTime(post.slug);
  const faq = post.faq.map((f) => ({ q: f.q, a: resolvePrices(f.a, priced) }));

  // Maillage : offres et villes liées, puis les tarifs.
  const further = [
    ...post.offers.flatMap((id) => allOffers.filter((o) => o.id === id)).map((o) => ({ href: offerHref(o), label: o.name, kind: o.kind === "service" ? "Service" : "WePushX CRM" })),
    ...post.cities.flatMap((s) => {
      const c = cityBySlug(s);
      return c ? [{ href: `/${c.slug}`, label: c.eyebrow, kind: "Près de chez vous" }] : [];
    }),
    { href: "/tarifs", label: "Tous nos tarifs et le simulateur", kind: "Tarifs" },
  ];

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${abs(path)}#article`,
    headline: post.title,
    description: post.description,
    url: abs(path),
    mainEntityOfPage: { "@id": `${abs(path)}#webpage`, "@type": "WebPage", url: abs(path) },
    image: abs(`${path}/opengraph-image`),
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: "fr-MA",
    articleSection: category?.name,
    keywords: post.keywords.join(", "),
    wordCount: wordCount(post.slug),
    timeRequired: `PT${minutes}M`,
    author: { "@type": "Organization", name: AUTHOR.name, url: abs("/") },
    publisher: { "@id": ORG_ID, "@type": "Organization", name: "WePushX", logo: { "@type": "ImageObject", url: logoUrl } },
    about: further.filter((l) => l.kind !== "Tarifs").map((l) => ({ "@type": "Thing", name: l.label, url: abs(l.href) })),
  };

  return (
    <>
      <JsonLd
        data={[
          article,
          breadcrumbLd([
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
          faqLd(faq),
        ]}
      />

      {/* ═══════════════════════════════════════════════════════════ hero */}
      <section className="relative overflow-hidden pb-14 pt-36 md:pt-44">
        <div className="container-x">
          <Link href="/blog" className="label inline-flex items-center gap-2 text-faint transition-colors hover:text-fg">
            <span className="rotate-180">
              <Arrow className="h-3 w-3" />
            </span>
            Blog
          </Link>
          {/* Catégorie et temps de lecture hors du <h1> : le titre garde son mot-clé en tête. */}
          <div className="mt-7">
            <SectionLabel n="→">{`${category?.name ?? "Guide"} · ${minutes} min de lecture`}</SectionLabel>
          </div>
          <Lines as="h1" intro className="display mt-8 max-w-5xl text-[clamp(2.2rem,5.2vw,4.8rem)] leading-[1.02]">
            <span key="t">{post.title}</span>
          </Lines>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-lg text-fg/65">{post.description}</p>
            <p className="label mt-8 text-faint">
              {AUTHOR.name} · Publié le <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.updated && (
                <>
                  {" "}
                  · Mis à jour le <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                </>
              )}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ article */}
      <section className="border-t border-line py-16 md:py-20">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <nav aria-label="Sommaire" className="lg:sticky lg:top-28">
              <p className="label text-violet-bright">Sommaire</p>
              <ol className="mt-5 space-y-3 border-l border-line">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="-ml-px block border-l border-transparent pl-4 text-[0.9rem] leading-snug text-fg/60 transition-colors hover:border-violet-bright hover:text-fg">
                      {t.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="min-w-0 lg:col-span-8 lg:col-start-5">
            <article className="max-w-[44rem]">
              <Body components={articleComponents(priced)} />
            </article>

            {/* encart audit */}
            <div className="mt-16 max-w-[44rem] rounded-[1.6rem] border border-line bg-ink-2 p-8 md:p-10">
              <p className="label text-violet-bright">Audit gratuit · 30 minutes</p>
              <p className="display mt-4 text-[clamp(1.6rem,3vw,2.2rem)]">
                Vous voulez savoir ce que ça donnerait <span className="serif-accent text-lilac">pour votre entreprise ?</span>
              </p>
              <p className="mt-4 text-fg/65">
                On analyse votre site, vos publicités, votre référencement et votre suivi commercial, et vous repartez avec un plan d&apos;action
                chiffré. Sans engagement.
              </p>
              <div className="mt-7">
                <Button href="/contact" trackAs={`blog_${post.slug}_audit`}>
                  Réserver mon audit gratuit
                </Button>
              </div>
            </div>

            {/* auteur */}
            <div className="mt-10 flex max-w-[44rem] items-start gap-5 border-t border-line pt-10">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink-3">
                <MarkStatic className="h-6 w-auto" />
              </span>
              <div>
                <p className="font-medium">{AUTHOR.name}</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-fg/60">{AUTHOR.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq items={faq} n="?" />

      {/* ═════════════════════════════════════════════ pour aller plus loin */}
      <section className="border-t border-line py-16">
        <div className="container-x">
          <p className="label text-faint">Pour aller plus loin</p>
          <ul className="mt-6 grid gap-px overflow-hidden rounded-[1.4rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {further.map((l) => (
              <li key={l.href} className="bg-ink">
                <Link href={l.href} className="group flex h-full items-start justify-between gap-4 p-6 transition-colors duration-500 hover:bg-ink-2">
                  <span>
                    <span className="label block text-violet-bright">{l.kind}</span>
                    <span className="mt-2 block text-fg/85">{l.label}</span>
                  </span>
                  <Arrow className="mt-1 h-4 w-4 shrink-0 text-faint transition-all duration-500 group-hover:translate-x-1 group-hover:text-violet-bright" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ articles liés */}
      <section className="border-t border-line bg-ink-2 py-20 md:py-24">
        <div className="container-x">
          <p className="label text-faint">À lire aussi</p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-[1.8rem] border border-line bg-line md:grid-cols-3">
            {relatedPosts(post).map((p) => (
              <PostCard key={p.slug} post={p} headingLevel="h3" />
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
