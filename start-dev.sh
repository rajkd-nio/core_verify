#!/bin/bash

echo "🔍 Checking for potential import path issues..."

# Check for @/ imports that might need to be fixed
IMPORTS=$(grep -r "from '@/" --include="*.js" --include="*.jsx" ./app)

if [ ! -z "$IMPORTS" ]; then
  echo "⚠️  Warning: Found potentially problematic @/ imports:"
  echo "$IMPORTS"
  echo ""
  echo "These imports might cause 'Module not found' errors."
  echo "Consider using relative imports (../../) instead of @/ paths."
  echo ""
  read -p "Continue anyway? (y/n) " -n 1 -r
  echo ""
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Exiting."
    exit 1
  fi
fi

echo "🚀 Starting Next.js development server..."
npm run dev 