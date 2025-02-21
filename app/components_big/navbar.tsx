"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "../components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    return scrollY.onChange(() => setIsScrolled(scrollY.get() > 0))
  }, [scrollY])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          >
            InvestPro
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">Get Started</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-lg"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <NavLink href="#features" mobile>
              Features
            </NavLink>
            <NavLink href="#about" mobile>
              About
            </NavLink>
            <NavLink href="#contact" mobile>
              Contact
            </NavLink>
            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

function NavLink({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) {
  return (
    <Link
      href={href}
      className={`text-gray-300 hover:text-white transition-colors relative group ${mobile ? "block" : ""}`}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all group-hover:w-full" />
    </Link>
  )
}

