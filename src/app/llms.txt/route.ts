import { llmsTxt } from "@/lib/llms";

export const dynamic = "force-static";

export function GET() {
  return new Response(llmsTxt(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8", "X-Robots-Tag": "noindex" },
  });
}
