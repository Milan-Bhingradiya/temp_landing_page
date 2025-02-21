"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsappIcon() {
  return (
    <motion.a
      href="https://wa.me/+919016064322"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-40" />
        <button className="relative bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition-colors">
          <MessageCircle size={24} />
        </button>
      </div>
    </motion.a>
  )
}

