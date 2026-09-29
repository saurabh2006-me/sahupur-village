"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-sahupur-900"
      role="status"
      aria-label="Loading"
      aria-busy="true"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center gap-6"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="relative w-20 h-20"
        >
          <svg className="w-full h-full text-sahupur-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
            <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
          </svg>
          <MapPin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-sahupur-500" aria-hidden="true" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-white font-medium"
        >
          Loading Sahupur...
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-sahupur-400 text-sm"
        >
          साहूपुर — हमारी मिट्टी, हमारी पहचान
        </motion.p>
      </motion.div>
    </div>
  )
}