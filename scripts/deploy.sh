#!/usr/bin/env bash
# Déploie sur Vercel depuis une copie SANS .git : sur le plan Hobby, un deploy CLI
# depuis un repo git peut finir BLOCKED (auteur du commit hors équipe Vercel).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
rsync -a --exclude .git --exclude node_modules --exclude .next --exclude .env.local "$ROOT/" "$TMP/"
cd "$TMP"
vercel deploy --prod --yes --scope meladraouy-4670s-projects "$@"
