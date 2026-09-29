"use client"

import { motion } from "framer-motion"
import { MapPin, Building2, Globe, Hash, Languages, Mountain, Users, Wheat } from "lucide-react"
import { cn } from "@/lib/utils"

const infoCards = [
  { icon: Building2, label: "District", value: "Mau" },
  { icon: MapPin, label: "Block", value: "Ratanpura" },
  { icon: Globe, label: "State", value: "Uttar Pradesh" },
  { icon: Globe, label: "Division", value: "Azamgarh" },
  { icon: Hash, label: "PIN Code", value: "221706" },
  { icon: Languages, label: "Languages", value: "Hindi & Urdu" },
  { icon: Mountain, label: "Elevation", value: "71 meters" },
]

export function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 lg:py-32 bg-white dark:bg-sahupur-950"
      aria-labelledby="about-title"
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
            About Sahupur
          </span>
          <h2 id="about-title" className="text-4xl sm:text-5xl font-serif font-bold text-sahupur-900 dark:text-white mb-6">
            About Sahupur
          </h2>
          <p className="text-lg text-sahupur-600 dark:text-sahupur-300 leading-relaxed">
            Sahupur is a village located in Ratanpura Block of Mau District, Uttar Pradesh. It belongs to the Azamgarh Division and is approximately 16 KM east of Mau district headquarters and around 4 KM from Ratanpura.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {infoCards.map((card, index) => (
            <motion.article
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={cn(
                "relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl",
                "bg-white dark:bg-sahupur-900 border-sahupur-200 dark:border-sahupur-800 hover:border-sahupur-300 dark:hover:border-sahupur-700"
              )}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-sahupur-100/50 dark:bg-sahupur-800/30 rounded-bl-2xl rounded-tr-2xl" aria-hidden="true" />
              <div className="relative flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-sahupur-100 dark:bg-sahupur-800/50 text-sahupur-600 dark:text-sahupur-400">
                  <card.icon className="w-6 h-6" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-sm font-medium text-sahupur-500 dark:text-sahupur-400 uppercase tracking-wider mb-1">
                {card.label}
              </h3>
              <p className="text-xl font-semibold text-sahupur-900 dark:text-white">
                {card.value}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden bg-sahupur-100 dark:bg-sahupur-900"
          >
            <img
              src="/images/WhatsApp%20Image%202026-09-29%20at%2015.28.16%20%282%29.jpeg"
              alt="Sahupur village landscape view - original photograph"
              className="w-full h-64 sm:h-80 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sahupur-900/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-xl font-serif font-bold mb-2">Sahupur Village View</h3>
              <p className="text-sahupur-200 text-sm">Original photograph of Sahupur</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-sahupur-50 dark:bg-sahupur-900/50 rounded-2xl border border-sahupur-200 dark:border-sahupur-800"
          >
            <h3 className="text-2xl font-serif font-bold text-sahupur-900 dark:text-white mb-6">Key Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-sahupur-800/50 rounded-xl border border-sahupur-100 dark:border-sahupur-700">
                <div className="p-3 rounded-lg bg-sahupur-100 dark:bg-sahupur-700 text-sahupur-600 dark:text-sahupur-400">
                  <Wheat className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-sahupur-900 dark:text-white mb-1">Agriculture Based Economy</h4>
                  <p className="text-sahupur-600 dark:text-sahupur-300 text-sm">The village economy is primarily based on agriculture with fertile lands supporting various crops.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-sahupur-800/50 rounded-xl border border-sahupur-100 dark:border-sahupur-700">
                <div className="p-3 rounded-lg bg-sahupur-100 dark:bg-sahupur-700 text-sahupur-600 dark:text-sahupur-400">
                  <Users className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-sahupur-900 dark:text-white mb-1">Close-Knit Community</h4>
                  <p className="text-sahupur-600 dark:text-sahupur-300 text-sm">With 328 households and a population of 2,350 (2011 Census), Sahupur maintains strong community bonds.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-sahupur-800/50 rounded-xl border border-sahupur-100 dark:border-sahupur-700">
                <div className="p-3 rounded-lg bg-sahupur-100 dark:bg-sahupur-700 text-sahupur-600 dark:text-sahupur-400">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-sahupur-900 dark:text-white mb-1">Strategic Location</h4>
                  <p className="text-sahupur-600 dark:text-sahupur-300 text-sm">Located just 4 KM from Ratanpura block and 16 KM from Mau district headquarters, providing good connectivity.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}