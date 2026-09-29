"use client"

import { motion } from "framer-motion"
import { MapPin, Train, Navigation, Building2, Home } from "lucide-react"
import { cn } from "@/lib/utils"

const nearbyVillages = [
  { name: "Ratohi", distance: "~2 KM" },
  { name: "Gahni", distance: "~3 KM" },
  { name: "Baharwar", distance: "~4 KM" },
  { name: "Zamin Shahrullah", distance: "~5 KM" },
  { name: "Rajdiha", distance: "~6 KM" },
]

const nearbyCities = [
  { name: "Adari", distance: "~12 KM" },
  { name: "Rasra", distance: "~25 KM" },
  { name: "Lar", distance: "~30 KM" },
  { name: "Ghazipur", distance: "~45 KM" },
]

const transportInfo = [
  { name: "Haldharpur Railway Station", distance: "~8 KM", type: "railway" },
  { name: "Chakra Road Railway Station", distance: "~10 KM", type: "railway" },
  { name: "Mau Junction", distance: "~16 KM", type: "railway" },
  { name: "Ratanpura Bus Stand", distance: "~4 KM", type: "bus" },
]

export function Location() {
  return (
    <section
      id="location"
      className="py-20 sm:py-28 lg:py-32 bg-white dark:bg-sahupur-950"
      aria-labelledby="location-title"
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
            Location & Connectivity
          </span>
          <h2 id="location-title" className="text-4xl sm:text-5xl font-serif font-bold text-sahupur-900 dark:text-white mb-6">
            Location & Connectivity
          </h2>
          <p className="text-lg text-sahupur-600 dark:text-sahupur-300 leading-relaxed">
            Sahupur is well-connected to nearby villages, cities, and transport hubs in the Mau district region.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden bg-sahupur-100 dark:bg-sahupur-900 border border-sahupur-200 dark:border-sahupur-800"
          >
            <div className="aspect-video relative">
              <img
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&q=80"
                alt="Rural road in Uttar Pradesh surrounded by green fields and trees - representative image"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sahupur-900/70 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 text-white mb-2">
                <MapPin className="w-5 h-5 text-sahupur-300" aria-hidden="true" />
                <span className="font-semibold">Sahupur Village</span>
              </div>
              <p className="text-sahupur-200 text-sm">Ratanpura Block, Mau District, Uttar Pradesh</p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-2xl bg-sahupur-50 dark:bg-sahupur-900/50 border border-sahupur-200 dark:border-sahupur-800"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-sahupur-100 dark:bg-sahupur-800 text-sahupur-600 dark:text-sahupur-400">
                    <Home className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-sahupur-900 dark:text-white">Nearby Villages</h3>
                </div>
                <ul className="space-y-3" role="list">
                  {nearbyVillages.map((village) => (
                    <li key={village.name} className="flex items-center justify-between py-2 px-3 rounded-lg bg-white dark:bg-sahupur-800/50 border border-sahupur-100 dark:border-sahupur-700">
                      <span className="text-sahupur-700 dark:text-sahupur-300">{village.name}</span>
                      <span className="text-sm text-sahupur-500 dark:text-sahupur-400 font-medium">{village.distance}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 rounded-2xl bg-sahupur-50 dark:bg-sahupur-900/50 border border-sahupur-200 dark:border-sahupur-800"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-sahupur-100 dark:bg-sahupur-800 text-sahupur-600 dark:text-sahupur-400">
                    <Building2 className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-sahupur-900 dark:text-white">Nearby Cities</h3>
                </div>
                <ul className="space-y-3" role="list">
                  {nearbyCities.map((city) => (
                    <li key={city.name} className="flex items-center justify-between py-2 px-3 rounded-lg bg-white dark:bg-sahupur-800/50 border border-sahupur-100 dark:border-sahupur-700">
                      <span className="text-sahupur-700 dark:text-sahupur-300">{city.name}</span>
                      <span className="text-sm text-sahupur-500 dark:text-sahupur-400 font-medium">{city.distance}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-sahupur-50 dark:bg-sahupur-900/50 border border-sahupur-200 dark:border-sahupur-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-sahupur-100 dark:bg-sahupur-800 text-sahupur-600 dark:text-sahupur-400">
                  <Train className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-serif font-bold text-sahupur-900 dark:text-white">Transport Connectivity</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {transportInfo.map((transport) => (
                  <div
                    key={transport.name}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-sahupur-800/50 border border-sahupur-100 dark:border-sahupur-700"
                  >
                    <div className={cn(
                      "p-3 rounded-lg",
                      transport.type === "railway"
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        : "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                    )}>
                      {transport.type === "railway" ? <Train className="w-5 h-5" /> : <Navigation className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="font-medium text-sahupur-900 dark:text-white">{transport.name}</p>
                      <p className="text-sm text-sahupur-500 dark:text-sahupur-400">{transport.distance} from Sahupur</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.article>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl bg-gradient-to-r from-sahupur-600 to-sahupur-700 p-8 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">Distance from Key Locations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <p className="text-3xl font-bold">4 KM</p>
                <p className="text-sahupur-100 text-sm">Ratanpura Block</p>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <p className="text-3xl font-bold">16 KM</p>
                <p className="text-sahupur-100 text-sm">Mau District HQ</p>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <p className="text-3xl font-bold">8 KM</p>
                <p className="text-sahupur-100 text-sm">Haldharpur Railway</p>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <p className="text-3xl font-bold">~50 KM</p>
                <p className="text-sahupur-100 text-sm">Varanasi Airport</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}