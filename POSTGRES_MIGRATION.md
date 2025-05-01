# CoreVerify: SQLite to PostgreSQL Migration Guide

This guide provides instructions for migrating CoreVerify from SQLite to PostgreSQL using Supabase.

## Migration Overview

CoreVerify has been updated to support PostgreSQL as a database backend, replacing the previous SQLite implementation. The migration process involves:

1. Updating the Prisma schema to use PostgreSQL
2. Creating Supabase database connection
3. Migrating existing data from SQLite to PostgreSQL
4. Cleaning up SQLite files after successful migration

## Prerequisites

- Node.js v20+ (use `nvm use 20` if you have Node Version Manager)
- Access to Supabase project credentials
- CoreVerify codebase

## Quick Migration (Automated)

The simplest way to migrate is using our automated setup script:

```bash
# Ensure you're using Node.js v20+
nvm use 20

# Execute the setup script
npm run setup:postgres
```

This script will:
- Create `.env.postgres` with your Supabase credentials
- Update the Prisma schema for PostgreSQL
- Apply database migrations
- Migrate data from SQLite to PostgreSQL

## Step-by-Step Migration

If you prefer to migrate manually or the automated script fails, follow these steps:

### 1. Update Environment Variables

Create a `.env.postgres` file with your Supabase credentials:

```env
# Environment variables for Core Verify with PostgreSQL
DATABASE_URL="postgresql://postgres.pqvefwcpyobruybewlfg:strongpassword@aws-0-us-west-1.pooler.supabase.com:5432/postgres"

# Supabase credentials
NEXT_PUBLIC_SUPABASE_URL=https://pqvefwcpyobruybewlfg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxdmVmd2NweW9icnV5YmV3bGZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5NTAwNzEsImV4cCI6MjA2MTUyNjA3MX0.9NnEz71eX2X9G3C3RKUdJG2XGOUBua6SgSyW8gPgoDA
```

### 2. Update Prisma Schema

Modify `prisma/schema.prisma` to use PostgreSQL and Json types:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Update String? JSON fields to Json? type:
// Example:
// docDataOptions Json? @map("doc_data_options")
// options Json?
// validation Json?
// conditionalDisplay Json? @map("conditional_display")
```

### 3. Generate Prisma Client

Apply the PostgreSQL configuration and generate the Prisma client:

```bash
npm run db:use-postgres
```

### 4. Create PostgreSQL Database Tables

```bash
npx prisma migrate dev --name init_postgres
```

### 5. Migrate Data

Run the migration script to transfer data from SQLite to PostgreSQL:

```bash
npm run migrate:to-postgres
```

If the SQLite database is corrupted or missing, you can initialize the PostgreSQL database directly from JSON files:

```bash
npm run db:init-postgres
```

### 6. Clean Up SQLite Files

After confirming the migration was successful, clean up SQLite files:

```bash
npm run cleanup:sqlite
```

## Verification

To verify the migration was successful:

1. Check Prisma Studio with PostgreSQL:
   ```bash
   npx prisma studio
   ```

2. Start the application:
   ```bash
   npm run dev
   ```

3. Test document-related functionality in the application

## Troubleshooting

### Connection Issues

If you experience connection issues with Supabase:

1. Verify that the database URL is correct
2. Check if your IP address is whitelisted in Supabase
3. Ensure your Supabase project is active

### Data Migration Failures

If data migration fails:

1. Check SQLite database integrity: `sqlite3 prisma/dev.db .schema`
2. Try initializing directly with JSON: `npm run db:init-postgres`
3. Check PostgreSQL logs in Supabase dashboard

### Node.js Version Issues

CoreVerify requires Node.js v20+. If you see syntax errors with nullish operators (`??=`):

```bash
nvm install 20
nvm use 20
```

Then run the migration commands again.

## Reverting to SQLite (If Necessary)

To revert back to SQLite if needed:

1. Restore the SQLite schema:
   ```bash
   cp prisma/schema.prisma.sqlite prisma/schema.prisma
   ```

2. Delete the `.env.postgres` file and ensure your SQLite connection is in `.env`

3. Regenerate the Prisma client:
   ```bash
   npx prisma generate
   ```

4. Restore the SQLite database:
   ```bash
   npm run db:fresh-sqlite
   ```

## Additional Notes

- The migration preserves all document types, titles, and fields
- PostgreSQL offers better concurrent access and scales better for production
- The Supabase integration provides additional features like authentication that can be leveraged in future updates 