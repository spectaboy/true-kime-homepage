-- Create the newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);

-- Enable Row Level Security (RLS)
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (subscribe)
CREATE POLICY "Allow public subscription" ON newsletter_subscribers
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows authenticated users to view all subscribers (optional, for admin purposes)
CREATE POLICY "Allow authenticated users to view subscribers" ON newsletter_subscribers
  FOR SELECT USING (auth.role() = 'authenticated');

-- Optional: Create a function to get subscriber count
CREATE OR REPLACE FUNCTION get_subscriber_count()
RETURNS INTEGER
LANGUAGE SQL
SECURITY DEFINER
AS $$
  SELECT COUNT(*) FROM newsletter_subscribers;
$$; 