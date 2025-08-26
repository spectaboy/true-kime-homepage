"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

type NewsletterFormData = z.infer<typeof newsletterSchema>

export default function NewsletterSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  })

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      })

      if (!res.ok) {
        const payload = await res.json().catch(() => ({ message: "Failed to subscribe." }))
        setErrorMessage(payload.message || "Failed to subscribe. Please try again.")
        setSubmitStatus("error")
        return
      }

      setSubmitStatus("success")
      reset()
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.")
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="relative">
          <Input
            {...register("email")}
            type="email"
            placeholder="Your email"
            className={`pr-10 ${
              errors.email ? "border-red-500 focus:ring-red-500" : ""
            }`}
            disabled={isSubmitting}
          />
          {submitStatus === "success" && (
            <CheckCircle className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-green-500" />
          )}
          {submitStatus === "error" && (
            <XCircle className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-red-500" />
          )}
        </div>
        
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
        
        {submitStatus === "error" && errorMessage && (
          <p className="text-sm text-red-500">{errorMessage}</p>
        )}
        
        {submitStatus === "success" && (
          <p className="text-sm text-green-500">Successfully subscribed!</p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-red-600 text-white font-bold hover:bg-red-700 transition disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            "Subscribe"
          )}
        </Button>
      </form>
    </div>
  )
} 