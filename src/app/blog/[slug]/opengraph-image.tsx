import { blogPosts, categoryById, postBySlug } from "@/lib/blog";
import { OG_SIZE, ogImage } from "@/lib/og";

export const alt = "Blog WePushX, marketing digital au Maroc";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = postBySlug((await params).slug);
  return ogImage({
    kicker: post ? `Blog · ${categoryById(post.category)?.name ?? "Guide"}` : "Blog",
    title: post?.title ?? "Blog WePushX",
    footer: "Guides marketing digital · Maroc",
  });
}
