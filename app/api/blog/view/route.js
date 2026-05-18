/**
 * POST /api/blog/view
 * Atomically increments view_count for a blog post.
 *
 * ── SUPABASE SETUP (run once in Supabase SQL Editor) ─────────────────────────
 *
 *   -- 1. Add view_count column if it doesn't exist
 *   ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS view_count integer DEFAULT 0;
 *
 *   -- 2. Create the atomic increment function (SECURITY DEFINER bypasses RLS)
 *   CREATE OR REPLACE FUNCTION increment_view_count(post_slug text)
 *   RETURNS void
 *   LANGUAGE sql
 *   SECURITY DEFINER
 *   AS $$
 *     UPDATE blog_posts
 *     SET view_count = COALESCE(view_count, 0) + 1
 *     WHERE slug = post_slug AND is_published = true;
 *   $$;
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { createClient } from '@supabase/supabase-js'
import { NextResponse }  from 'next/server'

export async function POST(request) {
  // Create client inside handler — guarantees env vars are loaded
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    console.error('[ViewCount] Missing Supabase env vars')
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 })
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } })

  let slug
  try {
    const body = await request.json()
    slug = (body?.slug || '').trim()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (!slug) {
    return NextResponse.json({ error: 'slug is required' }, { status: 400 })
  }

  // ── Strategy 1: atomic RPC (preferred) ─────────────────────────────────────
  const { error: rpcError } = await supabase.rpc('increment_view_count', { post_slug: slug })

  if (!rpcError) {
    console.log(`[ViewCount] ✓ RPC incremented for "${slug}"`)
    return NextResponse.json({ ok: true, method: 'rpc' })
  }

  console.warn(`[ViewCount] RPC failed (${rpcError.code}: ${rpcError.message}) — falling back to direct update`)

  // ── Strategy 2: read → write fallback ──────────────────────────────────────
  // Acceptable for view counters — tiny race window that doesn't matter
  const { data: row, error: readError } = await supabase
    .from('blog_posts')
    .select('id, view_count')
    .eq('slug', slug)
    .eq('is_published', true)
    .maybeSingle()

  if (readError || !row) {
    console.error(`[ViewCount] Read failed: ${readError?.message || 'post not found for slug: ' + slug}`)
    return NextResponse.json({ error: readError?.message || 'post not found' }, { status: 404 })
  }

  const newCount = (row.view_count ?? 0) + 1

  const { error: updateError } = await supabase
    .from('blog_posts')
    .update({ view_count: newCount })
    .eq('id', row.id)

  if (updateError) {
    console.error(`[ViewCount] Update failed: ${updateError.message}`)
    // Hint if it's a permissions error
    if (updateError.code === '42501' || updateError.message?.includes('permission')) {
      console.error('[ViewCount] HINT: Add SUPABASE_SERVICE_ROLE_KEY to your .env.local')
    }
    return NextResponse.json({ error: updateError.message }, { status: 500 })
  }

  console.log(`[ViewCount] ✓ Direct update for "${slug}" → ${newCount}`)
  return NextResponse.json({ ok: true, method: 'direct', count: newCount })
}
