"use client"

import { motion } from "framer-motion"
import {
  Wheat,
  Home,
  BookOpen,
  Landmark,
  Trees,
  Users,
} from "lucide-react"
import { cn } from "@/lib/utils"

const highlights = [
  {
    icon: Wheat,
    title: "Agriculture & Fields",
    description: "Vast green agricultural fields dominate the landscape. Farmers cultivate wheat, rice, and seasonal crops using both traditional and modern methods.",
    image: "/images/WhatsApp%20Image%202026-09-29%20at%2015.28.17%20%281%29.jpeg",
  },
  {
    icon: Home,
    title: "Village Life",
    description: "Traditional houses with courtyards, narrow lanes connecting neighbors, and the simple rhythm of rural life create a close-knit community atmosphere.",
    image: "/images/WhatsApp%20Image%202026-09-29%20at%2015.28.13.jpeg",
  },
  {
    icon: BookOpen,
    title: "Education",
    description: "Primary and junior high schools serve the village children, with several higher education institutions accessible in nearby areas.",
    image: "/images/WhatsApp%20Image%202026-09-29%20at%2015.28.16.jpeg",
  },
  {
    icon: Landmark,
    title: "Culture & Community",
    description: "Local temples and community spaces serve as gathering points for festivals, celebrations, and daily spiritual life of the villagers.",
    image: "/images/WhatsApp%20Image%202026-09-29%20at%2015.28.17.jpeg",
  },
  {
    icon: Trees,
    title: "Nature",
    description: "Surrounded by lush greenery, mango groves, and the nearby Ghaghara and Tamasa rivers, the village enjoys natural beauty year-round.",
    image: "/images/WhatsApp%20Image%202026-09-29%20at%2015.28.18%20%282%29.jpeg",
  },
  {
    icon: Users,
    title: "Community",
    description: "A population of 2,350 people living in harmony, sharing traditions, supporting each other through harvests and celebrations.",
    image: "/images/WhatsApp%20Image%202026-09-29%20at%2015.28.16%20%281%29.jpeg",
  },
]

export function Highlights() {
  return (
    <section
      id="highlights"
      className="py-20 sm:py-28 lg:py-32 bg-sahupur-50 dark:bg-sahupur-950"
      aria-labelledby="highlights-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sahupur-100 dark:bg-sahupur-900/50 text-sahupur-700 dark:text-sahupur-300 text-sm font-medium mb-4">
            Village Highlights
          </span>
          <h2 id="highlights-title" className="text-4xl sm:text-5xl font-serif font-bold text-sahupur-900 dark:text-white mb-6">
            Village Highlights
          </h2>
          <p className="text-lg text-sahupur-600 dark:text-sahupur-300 leading-relaxed">
            Discover the essence of Sahupur through its land, people, culture, and natural beauty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <motion.article
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl",
                "bg-white dark:bg-sahupur-900 border border-sahupur-200 dark:border-sahupur-800",
                "shadow-lg hover:shadow-2xl transition-all duration-500"
              )}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={highlight.image}
                  alt={`Representative image of ${highlight.title.toLowerCase()} in rural Uttar Pradesh`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sahupur-900/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                    <highlight.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-sahupur-900 dark:text-white mb-3 group-hover:text-sahupur-600 dark:group-hover:text-sahupur-300 transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-sahupur-600 dark:text-sahupur-400 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}