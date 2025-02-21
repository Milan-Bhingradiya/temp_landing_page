"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/button"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add your form submission logic here
    setTimeout(() => {
      setIsSubmitting(false)
      // Add success message handling
    }, 1000)
  }

  return (
    <section className="mb-20" id="contact">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-400">
          Have questions? We&apos;re here to help with your investment journey
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-500/10 rounded-lg">
              <Phone className="text-purple-500" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-gray-400">+55 (11) 99999-9999</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-pink-500/10 rounded-lg">
              <Mail className="text-pink-500" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-gray-400">contact@investpro.com.br</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <MapPin className="text-blue-500" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Office</h3>
              <p className="text-gray-400">
                Av. Paulista, 1000
                <br />
                São Paulo, SP
              </p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Input
                placeholder="Your Name"
                className="bg-gray-900/50 border-gray-800"
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-gray-900/50 border-gray-800"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Input
              placeholder="Subject"
              className="bg-gray-900/50 border-gray-800"
              required
            />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Your Message"
              className="bg-gray-900/50 border-gray-800 min-h-[150px]"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}

