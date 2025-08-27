"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Mail, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

export default function ContactPage() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Enter a valid email"),
    message: z.string().min(10, "Message must be at least 10 characters"),
  })

  type FormData = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMsg, setStatusMsg] = useState("")

  const onSubmit = async (data: FormData) => {
    setIsSending(true)
    setStatus("idle")
    setStatusMsg("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const payload = await res.json().catch(() => ({ message: "Failed to send." }))
        setStatus("error")
        setStatusMsg(payload.message || "Failed to send message. Please try again.")
        return
      }
      setStatus("success")
      setStatusMsg("Message sent. We'll get back to you soon.")
      reset()
    } catch (e) {
      setStatus("error")
      setStatusMsg("Unexpected error. Please try again later.")
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-red-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 text-red-500 hover:text-red-400 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-brand">
              Get in <span className="text-red-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 font-body">
              We'd love to hear from you
            </p>
          </motion.div>

          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUpVariant}
              className="bg-gray-900/50 rounded-lg p-8 border border-gray-800 w-full max-w-lg"
            >
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className={`w-full px-4 py-2 bg-gray-800 border ${errors.name ? "border-red-600" : "border-gray-700"} rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500`}
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className={`w-full px-4 py-2 bg-gray-800 border ${errors.email ? "border-red-600" : "border-gray-700"} rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500`}
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    className={`w-full px-4 py-2 bg-gray-800 border ${errors.message ? "border-red-600" : "border-gray-700"} rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500`}
                  ></textarea>
                  {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>}
                </div>
                {status !== "idle" && (
                  <p className={`text-sm ${status === "success" ? "text-green-500" : "text-red-500"}`}>{statusMsg}</p>
                )}
                <Button type="submit" disabled={isSending} className="w-full bg-red-600 hover:bg-red-700 text-white disabled:opacity-50">
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
              </form>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-6 font-brand text-center">Contact Information</h3>
                <div className="space-y-4 text-center">
                  <a
                    href="mailto:truekimeshop@gmail.com"
                    className="inline-flex items-center space-x-3 text-gray-300 hover:text-red-500 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>truekimeshop@gmail.com</span>
                  </a>
                  <br />
                  <a
                    href="https://www.instagram.com/truekimeshop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 text-gray-300 hover:text-red-500 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>@truekimeshop</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 