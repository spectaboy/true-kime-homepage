import { NextResponse } from "next/server"
export const runtime = "nodejs"
import { Resend } from "resend"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ message: "Invalid input." }, { status: 400 })
    }
    const { name, email, message } = parsed.data

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ message: "Email service not configured." }, { status: 500 })
    }

    const resend = new Resend(apiKey)

    // Build simple plaintext + basic HTML
    const subject = `New Contact from ${name}`
    const html = `
      <div style="font-family: Arial, sans-serif; color: #111">
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `

    const from = process.env.RESEND_FROM || "True Kime <onboarding@resend.dev>"
    const to = process.env.CONTACT_TO || "truekimeshop@gmail.com"
    const replyToAddress = process.env.CONTACT_REPLY_TO || "omaralmishri56@gmail.com"

    const { error, data } = await resend.emails.send({
      from,
      to: [to],
      replyTo: replyToAddress,
      subject,
      html,
    })

    if (error) {
      const err: any = error
      return NextResponse.json(
        {
          message: "Failed to send message.",
          resendError: {
            name: err?.name ?? null,
            message: err?.message ?? null,
            statusCode: err?.statusCode ?? null,
          },
        },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true, id: (data as any)?.id })
  } catch (e) {
    const err: any = e
    return NextResponse.json(
      { message: "Unexpected error.", error: err?.message ?? String(err) },
      { status: 500 }
    )
  }
}