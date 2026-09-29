"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!isVisible) return null

  return (
    <motion.button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-40 p-3 rounded-full",
        "bg-sahupur-600 text-white shadow-lg",
        "hover:bg-sahupur-700 transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-sahupur-500 focus:ring-offset-2",
        "dark:bg-sahupur-500 dark:hover:bg-sahupur-600"
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <ChevronUp className="w-6 h-6" aria-hidden="true" />
    </motion.button>
  )
}