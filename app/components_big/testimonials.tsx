"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"
import { Card } from "../components/ui/card"

const testimonials = [
  {
    name: "Maria Santos",
    role: "Small Business Owner",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The investment strategies provided helped me grow my business capital by 40% in just 6 months. Incredible results!",
    rating: 5,
  },
  {
    name: "Pedro Oliveira",
    role: "Tech Professional",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "As someone new to investing, this platform made everything clear and accessible. The personal consultation was invaluable.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Retired Teacher",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "I was worried about retirement planning, but their expert guidance helped me create a stable investment portfolio.",
    rating: 5,
  },
  {
    name: "Lucas Ferreira",
    role: "Marketing Director",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The real-time market insights and professional analysis have completely transformed my investment approach.",
    rating: 5,
  },
  {
    name: "Beatriz Lima",
    role: "Healthcare Professional",
    image: "/placeholder.svg?height=80&width=80",
    content: "The 3-month plan exceeded my expectations. The personalized strategy really works!",
    rating: 5,
  },
  {
    name: "Rafael Silva",
    role: "Entrepreneur",
    image: "/placeholder.svg?height=80&width=80",
    content: "Best investment decision I've made. The ROI speaks for itself. Highly recommended!",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2))
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-gray-400">Join thousands of satisfied investors who trust our expertise</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.slice(currentIndex, currentIndex + 4).map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="flex items-start gap-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">{testimonial.content}</p>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

