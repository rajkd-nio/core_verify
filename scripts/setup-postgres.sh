#!/bin/bash

# Script to set up CoreVerify for PostgreSQL with Supabase
# Run with: chmod +x scripts/setup-postgres.sh && ./scripts/setup-postgres.sh

set -e

# Create .env.postgres file with Supabase connection
echo "Creating .env.postgres file..."
cat > .env.postgres << EOL
# Environment variables for Core Verify with PostgreSQL
DATABASE_URL="postgresql://postgres.pqvefwcpyobruybewlfg:strongpassword@aws-0-us-west-1.pooler.supabase.com:5432/postgres"

# Supabase credentials
NEXT_PUBLIC_SUPABASE_URL=https://pqvefwcpyobruybewlfg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxdmVmd2NweW9icnV5YmV3bGZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5NTAwNzEsImV4cCI6MjA2MTUyNjA3MX0.9NnEz71eX2X9G3C3RKUdJG2XGOUBua6SgSyW8gPgoDA
EOL

# Copy PostgreSQL schema
echo "Updating Prisma schema for PostgreSQL..."
# Make a backup of original schema
cp prisma/schema.prisma prisma/schema.prisma.sqlite

# Update schema to use PostgreSQL
sed -i '' 's/provider = "sqlite"/provider = "postgresql"/' prisma/schema.prisma
sed -i '' 's/String?.*\/\/ JSON string/Json?/' prisma/schema.prisma

echo "Schema updated for PostgreSQL"

# Generate Prisma client
echo "Generating Prisma client..."
cp .env.postgres .env
npx prisma generate

# Apply migrations to PostgreSQL
echo "Creating PostgreSQL database tables..."
npx prisma migrate dev --name init_postgres

# Run the migration script
echo "Running data migration script..."
node scripts/migrate-to-postgresql.js

echo "Database migration completed!"
echo "CoreVerify is now set up to use PostgreSQL with Supabase."
echo "To start the application, run:"
echo "npm run dev" 