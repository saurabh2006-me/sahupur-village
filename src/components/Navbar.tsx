"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, MapPin, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#highlights", label: "Village" },
  { href: "#education", label: "Education" },
  { href: "#facilities", label: "Facilities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme")
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark
      setIsDark(shouldBeDark)
      document.documentElement.classList.toggle("dark", shouldBeDark)
    }
  }, [])

  const toggleTheme = () => {
    const newDark = !isDark
    setIsDark(newDark)
    localStorage.setItem("theme", newDark ? "dark" : "light")
    document.documentElement.classList.toggle("dark", newDark)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-sahupur-900/90 backdrop-blur-md shadow-md border-b border-sahupur-200/50 dark:border-sahupur-800/50"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="#home"
            className="flex items-center gap-2 text-xl font-serif font-bold text-sahupur-800 dark:text-sahupur-100 hover:opacity-80 transition-opacity"
            aria-label="Sahupur Home"
          >
            <MapPin className="w-6 h-6 text-sahupur-600 dark:text-sahupur-400" aria-hidden="true" />
            <span className="hidden sm:block">Sahupur</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-sahupur-700 dark:text-sahupur-300 hover:text-sahupur-600 dark:hover:text-sahupur-200 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-sahupur-500 hover:after:w-full after:transition-all"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-sahupur-700 dark:text-sahupur-300 hover:bg-sahupur-100 dark:hover:bg-sahupur-800 transition-colors"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-sahupur-700 dark:text-sahupur-300 hover:bg-sahupur-100 dark:hover:bg-sahupur-800 transition-colors"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-sahupur-700 dark:text-sahupur-300 hover:bg-sahupur-100 dark:hover:bg-sahupur-800 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white dark:bg-sahupur-900 border-t border-sahupur-200 dark:border-sahupur-800"
            >
              <div className="py-4 space-y-2 px-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-3 px-4 text-base font-medium text-sahupur-700 dark:text-sahupur-300 hover:text-sahupur-600 dark:hover:text-sahupur-200 hover:bg-sahupur-100 dark:hover:bg-sahupur-800 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}