# Setting up PostgreSQL with CoreVerify

This guide will help you set up a local PostgreSQL database and connect it to CoreVerify.

## 1. Install PostgreSQL

If you don't have PostgreSQL installed, you can install it using Homebrew:

```bash
brew install postgresql@15
```

## 2. Start PostgreSQL Service

```bash
brew services start postgresql@15
```

## 3. Create a PostgreSQL Database

```bash
createdb coreverify
```

## 4. Create a PostgreSQL User (Optional)

By default, PostgreSQL creates a user with your system username, but you can create a dedicated user:

```bash
psql -d coreverify
```

In the PostgreSQL shell:

```sql
CREATE USER coreverify_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE coreverify TO coreverify_user;
ALTER DATABASE coreverify OWNER TO coreverify_user;
\q
```

## 5. Switch to PostgreSQL in CoreVerify

1. Replace the current Prisma schema with the PostgreSQL version:

```bash
cp prisma/schema.prisma.postgres prisma/schema.prisma
```

2. Update the environment configuration:

```bash
cp .env.postgres .env
```

## 6. Run Prisma Migrations for PostgreSQL

```bash
cd core_verify
nvm use 20
npx prisma migrate reset --force
```

## 7. Start Prisma Studio with PostgreSQL

```bash
cd core_verify
nvm use 20
npx prisma studio
```

## Connecting to PostgreSQL with pgAdmin

1. Download and install pgAdmin from https://www.pgadmin.org/download/

2. Launch pgAdmin and register a new server:
   - Right-click on "Servers" in the left sidebar
   - Select "Register" → "Server"
   - In the "General" tab, give the server a name (e.g., "CoreVerify Local")
   - In the "Connection" tab:
     - Host: localhost
     - Port: 5432
     - Maintenance database: postgres
     - Username: postgres (or your custom username)
     - Password: your password
     - Save password: Yes

3. After connecting, you should see your "coreverify" database listed under
   Servers → CoreVerify Local → Databases

4. You can now use pgAdmin to manage your PostgreSQL database for CoreVerify.

## Troubleshooting

- If you see authentication errors, make sure the DATABASE_URL in your .env file matches your PostgreSQL configuration.
- If migrations fail, try running `npx prisma generate` before running migrations.
- To reset your database completely, you can drop and recreate it:
  ```bash
  dropdb coreverify
  createdb coreverify
  ``` 