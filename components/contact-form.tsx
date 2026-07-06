"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setStatus("Message sent successfully!")
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      } else {
        setStatus(data.error || "Something went wrong.")
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-8 space-y-5 rounded-[22px] border border-[#DDE7F0] bg-white p-8 shadow-[0_12px_35px_rgba(7,26,51,0.08)]"
    >
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#071A33]">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          className="w-full rounded-xl border border-[#DDE7F0] px-4 py-3 text-[#071A33] outline-none transition focus:border-[#00BFE8] focus:ring-2 focus:ring-cyan-100"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#071A33]">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="w-full rounded-xl border border-[#DDE7F0] px-4 py-3 text-[#071A33] outline-none transition focus:border-[#00BFE8] focus:ring-2 focus:ring-cyan-100"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#071A33]">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message"
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-[#DDE7F0] px-4 py-3 text-[#071A33] outline-none transition focus:border-[#00BFE8] focus:ring-2 focus:ring-cyan-100"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-[#00BFE8] px-6 py-3 font-semibold text-white transition hover:bg-[#009FC4] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <p className="text-center text-sm font-medium text-[#009FC4]">
          {status}
        </p>
      )}
    </motion.form>
  )
}