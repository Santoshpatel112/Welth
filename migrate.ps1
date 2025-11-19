# Set environment variables
$env:DATABASE_URL="postgresql://postgres.ltdaswxoidffufcqzkmf:Santosh8090%23123@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
$env:DIRECT_URL="postgresql://postgres.ltdaswxoidffufcqzkmf:Santosh8090%23123@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres"

# Run migration
npx prisma migrate dev --name init
