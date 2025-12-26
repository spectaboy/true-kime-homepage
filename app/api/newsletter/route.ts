import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { z } from "zod"

const schema = z.object({ email: z.string().email() })

function getSupabase() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) {
    return null // Return null instead of throwing - Supabase is optional
  }
  return createClient(url, key)
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ message: "Invalid email." }, { status: 400 })
    }
    const { email } = parsed.data

    const supabase = getSupabase()

    // If Supabase isn't configured, return success anyway (newsletter disabled)
    if (!supabase) {
      console.log(`Newsletter signup attempted for ${email}, but Supabase is not configured.`)
      return NextResponse.json({ ok: true, message: "Thank you for subscribing!" })
    }

    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email, subscribed_at: new Date().toISOString() }])

    if (error) {
      // 23505 = unique_violation in Postgres
      if ((error as any).code === "23505") {
        return NextResponse.json({ message: "This email is already subscribed." }, { status: 409 })
      }
      return NextResponse.json({ message: "Subscription failed." }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ message: "Unexpected error." }, { status: 500 })
  }
}
