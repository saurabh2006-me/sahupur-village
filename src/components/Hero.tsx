"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/WhatsApp%20Image%202026-09-29%20at%2015.28.18%20%281%29.jpeg"
          alt="Sahupur village sunset over farmland - original photograph"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sahupur-900/70 via-sahupur-900/40 to-sahupur-900/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8"
        >
          <MapPin className="w-4 h-4 text-sahupur-300" aria-hidden="true" />
          <span>Sahupur, Ratanpura, Mau, Uttar Pradesh</span>
        </motion.div>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
        >
          Welcome to Sahupur
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl sm:text-3xl font-serif text-sahupur-100/90 mb-4"
        >
          साहूपुर — हमारी मिट्टी, हमारी पहचान
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg sm:text-xl text-sahupur-200/80 max-w-2xl mx-auto mb-12"
        >
          A beautiful village in Ratanpura Block, Mau District, Uttar Pradesh
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("#about")
            }}
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base",
              "bg-sahupur-600 text-white hover:bg-sahupur-700 transition-colors",
              "shadow-lg shadow-sahupur-600/30"
            )}
          >
            Explore Sahupur
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
          <Link
            href="#highlights"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("#highlights")
            }}
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base",
              "bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-colors",
              "backdrop-blur-sm"
            )}
          >
            Discover Our Village
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 flex items-center justify-center gap-12 text-white/70 text-sm"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-sahupur-300" aria-hidden="true" />
            <span>📍 Sahupur, Ratanpura, Mau, Uttar Pradesh</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-px h-6 bg-white/30" aria-hidden="true" />
            <span>PIN: 221706</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}