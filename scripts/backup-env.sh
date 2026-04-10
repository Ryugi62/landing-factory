#!/bin/bash
# .env.local 타임스탬프 백업 — env 편집 작업 전 반드시 실행
# Usage: bash scripts/backup-env.sh
# 백업 파일은 .gitignore의 .env* 패턴으로 자동 제외됨

set -e

BACKUP=".env.local.bak.$(date +%Y%m%d-%H%M%S)"
cp .env.local "$BACKUP"
echo "✅  .env.local → $BACKUP"
