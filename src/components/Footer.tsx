"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Heart, Mail, Globe, MessageSquare, Camera, Video } from "lucide-react"

const footerNav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#highlights", label: "Village" },
  { href: "#education", label: "Education" },
  { href: "#facilities", label: "Facilities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
]

const quickLinks = [
  { href: "#about", label: "About Sahupur" },
  { href: "#highlights", label: "Village Highlights" },
  { href: "#statistics", label: "Census Statistics" },
  { href: "#location", label: "Location & Connectivity" },
  { href: "#education", label: "Educational Institutions" },
  { href: "#facilities", label: "Health & Services" },
  { href: "#nature", label: "Nature & Rivers" },
  { href: "#gallery", label: "Photo Gallery" },
  { href: "#weather", label: "Weather" },
  { href: "#community", label: "Community Life" },
]

function SocialIcon({ icon: Icon, label, href = "#" }: { icon: React.ComponentType<{ className?: string }>; label: string; href?: string }) {
  return (
    <a
      href={href}
      className="p-2 rounded-lg bg-sahupur-800 text-sahupur-400 hover:bg-sahupur-700 hover:text-white transition-colors"
      aria-label={label}
    >
      <Icon className="w-5 h-5" aria-hidden="true" />
    </a>
  )
}

export function Footer() {
  return (
    <footer
      className="bg-sahupur-950 text-sahupur-100"
      role="contentinfo"
      aria-labelledby="footer-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-2 text-xl font-serif font-bold text-white hover:opacity-80 transition-opacity mb-6" aria-label="Sahupur Home">
              <MapPin className="w-7 h-7 text-sahupur-400" aria-hidden="true" />
              <span>Sahupur</span>
            </Link>
            <p className="text-sahupur-400 text-sm leading-relaxed mb-6">
              A beautiful village in Ratanpura Block, Mau District, Uttar Pradesh.
              Preserving traditions, embracing the future.
            </p>
            <div className="flex items-center gap-2 text-sahupur-400 text-sm mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>Sahupur, Ratanpura, Mau, Uttar Pradesh</span>
            </div>
            <div className="flex items-center gap-2 text-sahupur-400 text-sm">
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>PIN: 221706</span>
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sahupur-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Main navigation">
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-3" role="list">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sahupur-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <p className="text-sahupur-400 text-sm leading-relaxed mb-6">
              Stay updated with village news, events, and community initiatives.
            </p>
            <div className="flex items-center gap-4">
              <SocialIcon icon={Globe} label="Website" />
              <SocialIcon icon={MessageSquare} label="Contact" />
              <SocialIcon icon={Camera} label="Gallery" />
              <SocialIcon icon={Video} label="YouTube" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-t border-sahupur-800 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sahupur-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Sahupur Village. All rights reserved.
            </p>
            <p className="text-sahupur-500 text-sm flex items-center gap-2">
              Made with
              <Heart className="w-4 h-4 text-red-500" aria-hidden="true" />
              for Sahupur
            </p>
            <p className="text-sahupur-500 text-sm text-center md:text-right">
              Data sourced from Census of India 2011 & local information
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}