import { getAllPosts } from '@/lib/blog'

const BASE_URL = 'https://wepushx.com'

export async function GET() {
  const posts = await getAllPosts()

  const items = posts.map((post) => {
    const url    = `${BASE_URL}/blog/${post.slug}`
    const date   = new Date(post.published_at).toUTCString()
    const desc   = post.excerpt?.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') || ''
    const title  = post.title?.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') || ''

    return `
    <item>
      <title>${title}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${desc}</description>
      <pubDate>${date}</pubDate>
      <category>${post.category || ''}</category>
      <author>contact@wepushx.com (WePushX)</author>
      ${post.cover_image ? `<enclosure url="${post.cover_image}" type="image/jpeg" length="0"/>` : ''}
    </item>`
  }).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Blog WePushX — Marketing Digital Maroc</title>
    <link>${BASE_URL}/blog</link>
    <description>Guides, études de cas et stratégies marketing digital pour les PME marocaines. Meta Ads, SEO, CRM, UGC IA.</description>
    <language>fr-MA</language>
    <managingEditor>contact@wepushx.com (WePushX)</managingEditor>
    <webMaster>contact@wepushx.com (WePushX)</webMaster>
    <copyright>© ${new Date().getFullYear()} WePushX. Tous droits réservés.</copyright>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <ttl>60</ttl>
    <image>
      <url>${BASE_URL}/logo.png</url>
      <title>WePushX</title>
      <link>${BASE_URL}</link>
    </image>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
