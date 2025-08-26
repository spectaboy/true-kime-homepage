# Newsletter Setup with Supabase

## Environment Variables

Create a `.env.local` file in your project root with:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## Database Setup

1. Go to your Supabase dashboard
2. Navigate to SQL Editor
3. Run the SQL script from `supabase-setup.sql`

## Features

- ✅ Email validation using Zod
- ✅ Prevents duplicate subscriptions
- ✅ Loading states and error handling
- ✅ Success/error feedback
- ✅ Responsive design
- ✅ TypeScript support

## How it works

1. User enters email in the footer newsletter form
2. Email is validated client-side using Zod
3. Valid email is sent to Supabase `newsletter_subscribers` table
4. User gets immediate feedback (success/error)
5. Duplicate emails are prevented with unique constraint

## Database Schema

```sql
newsletter_subscribers
├── id (UUID, Primary Key)
├── email (TEXT, Unique, Not Null)
├── subscribed_at (Timestamp)
└── created_at (Timestamp)
```

## Security

- Row Level Security (RLS) enabled
- Public can subscribe (INSERT)
- Only authenticated users can view subscribers (SELECT)
- No sensitive data exposed 