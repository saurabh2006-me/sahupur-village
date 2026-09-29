"use client"

import { motion } from "framer-motion"
import { Users, Heart, Wheat, Music, TreePine, Home, BookOpen, Smile } from "lucide-react"
import { cn } from "@/lib/utils"

const communityAspects = [
  {
    icon: Users,
    title: "Community Bonds",
    description: "With 328 households and a population of 2,350, Sahupur thrives on strong interpersonal relationships. Neighbors support each other through harvests, celebrations, and daily life.",
    image: "/images/WhatsApp%20Image%202026-09-29%20at%2015.28.13.jpeg",
  },
  {
    icon: BookOpen,
    title: "Education & Youth",
    description: "Children attend local schools like P S Sahupur and J.H.S. Sahupur, with access to higher education at nearby colleges. The village invests in its younger generation's future.",
    image: "/images/WhatsApp%20Image%202026-09-29%20at%2015.28.16.jpeg",
  },
  {
    icon: Wheat,
    title: "Agricultural Life",
    description: "Farming is the backbone of the village economy. Families work together in fields growing wheat, rice, and seasonal crops, following both traditional wisdom and modern practices.",
    image: "/images/WhatsApp%20Image%202026-09-29%20at%2015.28.17%20%281%29.jpeg",
  },
  {
    icon: Music,
    title: "Festivals & Celebrations",
    description: "The village comes alive during festivals with community gatherings, traditional music, shared meals, and cultural performances that strengthen social bonds across generations.",
    image: "/images/WhatsApp%20Image%202026-09-29%20at%2015.28.17.jpeg",
  },
  {
    icon: TreePine,
    title: "Connection to Nature",
    description: "Surrounded by mango groves, agricultural fields, and the Ghaghara and Tamasa rivers, daily life follows nature's rhythms — from monsoon planting to winter harvests.",
    image: "/images/WhatsApp%20Image%202026-09-29%20at%2015.28.18%20%282%29.jpeg",
  },
  {
    icon: Home,
    title: "Daily Village Life",
    description: "Life moves at a gentle pace — morning walks through village lanes, evening gatherings at community spaces, shared cups of chai, and the simple joys of rural living.",
    image: "/images/WhatsApp%20Image%202026-09-29%20at%2015.28.16%20%281%29.jpeg",
  },
]

const quickFacts = [
  { icon: Users, label: "Population", value: "2,350 (2011)" },
  { icon: Home, label: "Households", value: "328" },
  { icon: Heart, label: "Female %", value: "48.2%" },
  { icon: BookOpen, label: "Literacy", value: "62.6%" },
  { icon: Wheat, label: "Main Occupation", value: "Agriculture" },
  { icon: TreePine, label: "Rivers Nearby", value: "Ghaghara, Tamasa" },
]

export function Community() {
  return (
    <section
      id="community"
      className="py-20 sm:py-28 lg:py-32 bg-white dark:bg-sahupur-950"
      aria-labelledby="community-title"
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
            Life in Sahupur
          </span>
          <h2 id="community-title" className="text-4xl sm:text-5xl font-serif font-bold text-sahupur-900 dark:text-white mb-6">
            Life in Sahupur
          </h2>
          <p className="text-lg text-sahupur-600 dark:text-sahupur-300 leading-relaxed">
            Experience the warmth, simplicity, and resilience of rural community life in Sahupur.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <img
              src="/images/WhatsApp%20Image%202026-09-29%20at%2015.28.13.jpeg"
              alt="Village life in Sahupur - original photograph"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sahupur-900/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-xl font-serif font-bold mb-2">Community Life</h3>
              <p className="text-sahupur-200 text-sm">Original photograph of Sahupur village life</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-sahupur-50 dark:bg-sahupur-900/50 border border-sahupur-200 dark:border-sahupur-800">
              <h3 className="text-2xl font-serif font-bold text-sahupur-900 dark:text-white mb-4">The Heart of Sahupur</h3>
              <p className="text-sahupur-600 dark:text-sahupur-400 leading-relaxed mb-6">
                Sahupur is more than a location on a map &mdash; it&apos;s a living community where traditions are passed down, where every face is familiar, and where the rhythm of life follows the seasons. 
                With approximately 2,350 residents living in 328 households, the village maintains the close-knit social fabric characteristic of rural Uttar Pradesh.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {quickFacts.map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="p-4 rounded-xl bg-white dark:bg-sahupur-800/50 border border-sahupur-100 dark:border-sahupur-700 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-sahupur-100 dark:bg-sahupur-700 text-sahupur-600 dark:text-sahupur-400 mb-2">
                      <fact.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <p className="text-xl font-bold text-sahupur-900 dark:text-white">{fact.value}</p>
                    <p className="text-xs text-sahupur-500 dark:text-sahupur-400">{fact.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Heart, title: "Warm Hospitality", desc: "Guests are treated like family with traditional warmth and generosity." },
                { icon: Smile, title: "Simple Joys", desc: "Evening chats, shared meals, and community celebrations define daily happiness." },
                { icon: Users, title: "Collective Spirit", desc: "Villagers come together for farming, festivals, and supporting those in need." },
                { icon: Music, title: "Cultural Roots", desc: "Folk songs, traditional dances, and oral stories keep heritage alive." },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-white dark:bg-sahupur-900 border border-sahupur-200 dark:border-sahupur-800 hover:border-sahupur-300 dark:hover:border-sahupur-700 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-sahupur-100 dark:bg-sahupur-800 text-sahupur-600 dark:text-sahupur-400">
                      <item.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h4 className="font-semibold text-sahupur-900 dark:text-white">{item.title}</h4>
                  </div>
                  <p className="text-sm text-sahupur-600 dark:text-sahupur-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-serif font-bold text-sahupur-900 dark:text-white text-center mb-10">Facets of Village Life</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityAspects.map((aspect, index) => (
              <motion.article
                key={aspect.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={cn(
                  "group overflow-hidden rounded-2xl",
                  "bg-white dark:bg-sahupur-900 border border-sahupur-200 dark:border-sahupur-800",
                  "hover:shadow-xl transition-all duration-300"
                )}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={aspect.image}
                    alt={`Representative image of ${aspect.title.toLowerCase()} in rural Uttar Pradesh`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sahupur-900/60 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 rounded-lg bg-sahupur-100 dark:bg-sahupur-800 text-sahupur-600 dark:text-sahupur-400">
                      <aspect.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h4 className="font-semibold text-sahupur-900 dark:text-white">{aspect.title}</h4>
                  </div>
                  <p className="text-sahupur-600 dark:text-sahupur-400 text-sm leading-relaxed">
                    {aspect.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-sahupur-600 to-sahupur-700 p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">Visit Sahupur</h3>
          <p className="text-sahupur-100 max-w-2xl mx-auto mb-8">
            Experience the authentic charm of rural Uttar Pradesh. Walk through green fields, meet warm-hearted locals, 
            and discover a way of life that&apos;s rooted in tradition yet open to the future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="flex items-center gap-2 text-sm text-sahupur-200">
              <span className="w-2 h-2 rounded-full bg-sahupur-300" aria-hidden="true" />
              16 KM from Mau
            </span>
            <span className="flex items-center gap-2 text-sm text-sahupur-200">
              <span className="w-2 h-2 rounded-full bg-sahupur-300" aria-hidden="true" />
              4 KM from Ratanpura
            </span>
            <span className="flex items-center gap-2 text-sm text-sahupur-200">
              <span className="w-2 h-2 rounded-full bg-sahupur-300" aria-hidden="true" />
              PIN: 221706
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}