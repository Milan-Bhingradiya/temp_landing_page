"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

import { ParticlesBackground } from "./components_big/particles-background";
import { Navbar } from "./components_big/navbar";
import { Badge } from "./components/ui/badge";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Testimonials } from "./components_big/testimonials";
import { ContactForm } from "./components_big/contact-form";
import { WhatsappIcon } from "./components_big/whatsapp-icon";

export default function Page() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      name: "1 Month Plan",
      price: "R$199",
      features: [
        "Basic Portfolio Analysis",
        "Market Insights",
        "Email Support",
        "Weekly Reports",
      ],
      color: "from-purple-500 to-blue-500",
    },
    {
      name: "3 Month Plan",
      price: "R$499",
      features: [
        "Advanced Portfolio Analysis",
        "Premium Market Insights",
        "Priority Email Support",
        "Daily Reports",
        "1-on-1 Consultation",
        "Risk Assessment Tools",
      ],
      popular: true,
      color: "from-pink-500 to-purple-500",
    },
    {
      name: "6 Month Plan",
      price: "R$899",
      features: [
        "Professional Portfolio Analysis",
        "Expert Market Insights",
        "24/7 Priority Support",
        "Real-time Reports",
        "Weekly 1-on-1 Consultation",
        "Advanced Risk Assessment",
        "Custom Investment Strategy",
        "Tax Optimization",
      ],
      color: "from-orange-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <ParticlesBackground />
      <Navbar />

      <main className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Investment Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your investment strategy and watch your
            wealth grow
          </p>
        </motion.div>

        {/* Expert Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 flex justify-center"
        >
          <div className="relative bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-10 shadow-lg max-w-3xl mx-auto text-center md:text-left">
            {/* Floating Decorative Glow */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"></div>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Image with Proper Aspect Ratio & Full View */}
              <div className="relative w-40 h-40 rounded-full border-4 border-purple-400 shadow-lg overflow-hidden flex items-center justify-center">
                <Image
                  src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQnsz9uz8_o8gf_UG-HcEQ9mt7scSqV9mBcRV7eJRwTDOwuE3tS2meF-OxgxkCw5rlsszvkT5aE_Hxlgbo"
                  alt="João Silva"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                  João Silva
                </h2>
                <p className="text-gray-300 text-lg">
                  Investment Strategy Expert | Former Goldman Sachs
                </p>
                <p className="text-gray-400">
                  With over 15 years of experience in investment banking, I have
                  helped hundreds of clients achieve their financial goals
                  through strategic investment planning and market analysis.
                </p>
                {/* Badges */}
                <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1">
                    CFA
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1">
                    MBA Finance
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1">
                    Risk Management Expert
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20" id="features">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="relative overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-xl hover:scale-105 transition-transform duration-300">
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 m-4">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5`}
                />
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-4 mb-6">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + index * 0.2 }}
                        className="flex items-center gap-2 text-gray-100"
                      >
                        <Check className="text-green-500" size={20} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 transition-opacity`}
                  >
                    Select Plan
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Testimonials />
        <ContactForm />

        {selectedPlan && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <Card className="w-full max-w-md bg-black/90 border border-gray-800">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Payment Options</h2>
                <div className="space-y-4">
                  <Button
                    className="w-full bg-[#0070BA] hover:bg-[#005EA6] flex items-center justify-center gap-2"
                    onClick={() =>
                      (window.location.href = "https://paypal.com")
                    }
                  >
                    Pay with PayPal
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90"
                    onClick={() => (window.location.href = "https://pix.com")}
                  >
                    Pay with PIX
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setSelectedPlan(null)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </main>

      <WhatsappIcon />
    </div>
  );
}
