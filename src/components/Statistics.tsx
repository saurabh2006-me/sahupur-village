"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Users, Home, User, BookOpen, Briefcase, Baby } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  {
    icon: Users,
    label: "Total Population",
    value: 2350,
    suffix: "",
    description: "As per 2011 Census",
  },
  {
    icon: Home,
    label: "Total Houses",
    value: 328,
    suffix: "",
    description: "As per 2011 Census",
  },
  {
    icon: User,
    label: "Female Population",
    value: 48.2,
    suffix: "%",
    description: "As per 2011 Census",
  },
  {
    icon: BookOpen,
    label: "Literacy Rate",
    value: 62.6,
    suffix: "%",
    description: "As per 2011 Census",
  },
  {
    icon: BookOpen,
    label: "Female Literacy Rate",
    value: 24.7,
    suffix: "%",
    description: "As per 2011 Census",
  },
  {
    icon: Briefcase,
    label: "Working Population",
    value: 23.6,
    suffix: "%",
    description: "As per 2011 Census",
  },
  {
    icon: Baby,
    label: "Children (0-6 years)",
    value: 331,
    suffix: "",
    description: "As per 2011 Census",
  },
]

function AnimatedCounter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) return

    const startTime = Date.now()
    const endValue = value
    const isDecimal = !Number.isInteger(value)

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const currentValue = endValue * easedProgress

      if (isDecimal) {
        setCount(Math.round(currentValue * 10) / 10)
      } else {
        setCount(Math.floor(currentValue))
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration, suffix])

  return (
    <motion.span
      ref={ref}
      className="text-4xl sm:text-5xl font-bold text-sahupur-900 dark:text-white tabular-nums"
      aria-live="polite"
      aria-label={`${value}${suffix}`}
    >
      {count.toLocaleString()}{suffix}
    </motion.span>
  )
}

export function Statistics() {
  return (
    <section
      id="statistics"
      className="py-20 sm:py-28 lg:py-32 bg-sahupur-900 dark:bg-sahupur-950"
      aria-labelledby="statistics-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sahupur-800 text-sahupur-200 text-sm font-medium mb-4 border border-sahupur-700">
            2011 Census Statistics
          </span>
          <h2 id="statistics-title" className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
            Village Statistics
          </h2>
          <p className="text-lg text-sahupur-300 leading-relaxed">
            Key demographic and socio-economic indicators from the 2011 Census of India.
            <br />
            <span className="text-sm text-sahupur-400">Note: These figures are from the 2011 Census and may not reflect current population.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Village statistics">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={cn(
                "relative p-6 rounded-2xl text-center group",
                "bg-sahupur-800/50 dark:bg-sahupur-900/50",
                "border border-sahupur-700/50 dark:border-sahupur-800",
                "hover:border-sahupur-600/50 dark:hover:border-sahupur-700",
                "transition-all duration-300"
              )}
              role="listitem"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-sahupur-600/50 to-transparent" aria-hidden="true" />
              <div className="relative mb-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-sahupur-700/30 text-sahupur-300">
                  <stat.icon className="w-7 h-7" aria-hidden="true" />
                </div>
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <h3 className="mt-3 text-lg font-semibold text-sahupur-100">{stat.label}</h3>
              <p className="mt-1 text-sm text-sahupur-400">{stat.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-6 rounded-2xl bg-sahupur-800/30 border border-sahupur-700/50 text-center"
        >
          <p className="text-sahupur-300 text-sm max-w-2xl mx-auto">
            <strong className="text-sahupur-100">Source:</strong> Census of India 2011. Data represents the administrative records for Sahupur village in Ratanpura Block, Mau District, Uttar Pradesh. For current statistics, please refer to the latest government publications.
          </p>
        </motion.div>
      </div>
    </section>
  )
}