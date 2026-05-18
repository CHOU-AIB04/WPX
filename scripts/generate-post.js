#!/usr/bin/env node
/**
 * WePushX — Blog Post Auto-Generator
 * ────────────────────────────────────────────────────────────────────────────
 * Generates a full SEO-optimized blog post using Claude AI + inserts to Supabase.
 * Optionally generates a cover image prompt for tools like Midjourney / DALL-E.
 *
 * SETUP:
 *   npm install @anthropic-ai/sdk @supabase/supabase-js dotenv
 *   node scripts/generate-post.js
 *
 * ENV VARS NEEDED (.env.local):
 *   NEXT_PUBLIC_SUPABASE_URL
 *   NEXT_PUBLIC_SUPABASE_ANON_KEY   (or SUPABASE_SERVICE_KEY for write access)
 *   ANTHROPIC_API_KEY
 *
 * SCHEDULE (Vercel Cron / GitHub Actions / node-cron):
 *   Run daily at 08:00 Casablanca time (UTC+1):  0 7 * * *
 */

import Anthropic from '@anthropic-ai/sdk'
import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'

// ── Config ────────────────────────────────────────────────────────────────
// Load .env.local manually (no dotenv required in Node 20+)
try {
  const env = readFileSync('.env.local', 'utf8')
  env.split('\n').forEach(line => {
    const [k, ...v] = line.split('=')
    if (k && !k.startsWith('#')) process.env[k.trim()] = v.join('=').trim()
  })
} catch {}

const SUPABASE_URL  = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY  = process.env.SUPABASE_SERVICE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY

if (!SUPABASE_URL || !SUPABASE_KEY || !ANTHROPIC_KEY) {
  console.error('Missing env vars: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_KEY, ANTHROPIC_API_KEY')
  process.exit(1)
}

const supabase  = createClient(SUPABASE_URL, SUPABASE_KEY)
const anthropic = new Anthropic({ apiKey: ANTHROPIC_KEY })

// ── Topic pool — rotate through these weekly ──────────────────────────────
const TOPICS = [
  { keyword: 'Google Ads Maroc', category: 'Publicité Digitale' },
  { keyword: 'email marketing PME Maroc', category: 'Automation CRM' },
  { keyword: 'landing page conversion Maroc', category: 'Publicité Digitale' },
  { keyword: 'TikTok Ads Maroc 2025', category: 'Publicité Digitale' },
  { keyword: 'SEO technique Next.js Maroc', category: 'SEO' },
  { keyword: 'chatbot WhatsApp PME Maroc', category: 'Automation CRM' },
  { keyword: 'UGC créateurs contenu Maroc', category: 'Contenu IA' },
  { keyword: 'analytics Google 4 Maroc', category: 'SEO' },
  { keyword: 'publicité Instagram Maroc', category: 'Publicité Digitale' },
  { keyword: 'automation email GoHighLevel', category: 'Automation CRM' },
]

// Pick topic based on day of week (deterministic rotation)
function pickTopic() {
  const day = new Date().getDay()
  return TOPICS[day % TOPICS.length]
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim().replace(/\s+/g, '-')
}

// ── Generate post with Claude ─────────────────────────────────────────────
async function generatePost(topic) {
  console.log(`\n🤖 Generating post for keyword: "${topic.keyword}"...`)

  const prompt = `Tu es un expert en marketing digital spécialisé dans le marché marocain (PME, Casablanca, Rabat, Marrakech).

Génère un article de blog SEO-optimisé en français pour le mot-clé : "${topic.keyword}"

RÉPONDS UNIQUEMENT avec un objet JSON valide (pas de markdown, pas de \`\`\`json) :

{
  "title": "Titre SEO accrocheur (55-60 caractères max) avec le mot-clé",
  "meta_title": "Titre meta SEO (55 caractères max)",
  "meta_description": "Description meta (150-160 caractères), inclut le mot-clé et un CTA",
  "excerpt": "Résumé de 2-3 phrases pour la carte blog (160 caractères)",
  "focus_keyword": "${topic.keyword}",
  "slug": "slug-url-en-francais-avec-mot-cle",
  "reading_time": 7,
  "cover_alt": "Description de l'image de couverture idéale pour ce sujet",
  "cover_image_prompt": "Prompt en anglais pour générer une image avec DALL-E ou Midjourney : professional photography style, [describe scene], dark background, cyan accent lights, marketing agency aesthetic",
  "content": "Contenu HTML complet de l'article (minimum 1200 mots). Utilise : <h2>, <h3>, <p>, <ul><li>, <strong>. Structure : intro percutante → 4-5 sections H2 avec H3 → conclusion avec CTA vers audit gratuit WePushX. Inclus des données chiffrées sur le Maroc. CTA naturel : 'Réservez votre audit gratuit WePushX'.",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"]
}`

  const message = await anthropic.messages.create({
    model:      'claude-opus-4-5',
    max_tokens: 6000,
    messages:   [{ role: 'user', content: prompt }],
  })

  const raw = message.content[0].text.trim()
  const post = JSON.parse(raw)

  // Override slug to ensure it's clean
  post.slug = slugify(post.slug || post.title)

  return post
}

// ── Insert into Supabase ──────────────────────────────────────────────────
async function insertPost(post, category) {
  // Check if slug already exists
  const { data: existing } = await supabase
    .from('blog_posts')
    .select('id')
    .eq('slug', post.slug)
    .maybeSingle()

  if (existing) {
    post.slug = `${post.slug}-${Date.now()}`
    console.log(`  Slug conflict — renamed to: ${post.slug}`)
  }

  const row = {
    slug:             post.slug,
    title:            post.title,
    meta_title:       post.meta_title,
    meta_description: post.meta_description,
    excerpt:          post.excerpt,
    content:          post.content,
    cover_image:      null,          // ← Set manually or via image generation pipeline
    cover_alt:        post.cover_alt,
    category,
    tags:             post.tags || [],
    author_name:      'WePushX',
    author_avatar:    'WPX',
    author_role:      'Équipe Marketing',
    reading_time:     post.reading_time || 7,
    focus_keyword:    post.focus_keyword,
    is_published:     true,
    published_at:     new Date().toISOString(),
    locale:           'fr',
  }

  const { data, error } = await supabase.from('blog_posts').insert(row).select('id,slug').single()

  if (error) throw new Error(`Supabase insert failed: ${error.message}`)

  return data
}

// ── Main ──────────────────────────────────────────────────────────────────
async function main() {
  const topic = pickTopic()
  console.log(`\n📰 WePushX Blog Auto-Generator`)
  console.log(`   Topic    : ${topic.keyword}`)
  console.log(`   Category : ${topic.category}`)
  console.log(`   Date     : ${new Date().toLocaleDateString('fr-FR')}`)

  try {
    const post    = await generatePost(topic)
    const created = await insertPost(post, topic.category)

    console.log(`\n✅ Post published successfully!`)
    console.log(`   ID   : ${created.id}`)
    console.log(`   Slug : ${created.slug}`)
    console.log(`   URL  : https://wepushx.com/blog/${created.slug}`)
    console.log(`\n🎨 Cover image prompt:`)
    console.log(`   ${post.cover_image_prompt}`)
    console.log(`\n   → Generate image with DALL-E / Midjourney, upload to Supabase Storage,`)
    console.log(`     then update: cover_image = '<your-image-url>' WHERE slug = '${created.slug}'`)

  } catch (err) {
    console.error(`\n❌ Error:`, err.message)
    process.exit(1)
  }
}

main()
