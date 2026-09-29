"use client"

import { motion } from "framer-motion"
import {
  HeartPulse,
  Stethoscope,
  Pill,
  Leaf,
  Fuel,
  CreditCard,
  Bus,
  MapPin,
  Building,
} from "lucide-react"
import { cn } from "@/lib/utils"

const healthServices = [
  {
    name: "Haldharpur Hospital",
    type: "Government Hospital",
    distance: "~8 KM",
    icon: Building,
    description: "Primary government healthcare facility serving the region with inpatient and outpatient services.",
  },
  {
    name: "Dr Harihar Pal",
    type: "Private Clinic",
    distance: "~5 KM",
    icon: Stethoscope,
    description: "Private medical practitioner offering general consultation and basic healthcare services.",
  },
  {
    name: "Shilpu Dispensary",
    type: "Dispensary",
    distance: "~3 KM",
    icon: Pill,
    description: "Local dispensary providing essential medicines and basic medical care to villagers.",
  },
  {
    name: "Ayurvedik Chikitsalay Chakara Bazar",
    type: "Ayurvedic Center",
    distance: "~6 KM",
    icon: Leaf,
    description: "Traditional Ayurvedic treatment center offering herbal and natural medicine therapies.",
  },
]

const essentialServices = [
  {
    name: "Petrol Pumps",
    locations: ["Ratanpura (~4 KM)", "Mau (~16 KM)"],
    icon: Fuel,
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  },
  {
    name: "ATMs",
    locations: ["Ratanpura (~4 KM)", "Mau (~16 KM)", "Haldharpur (~8 KM)"],
    icon: CreditCard,
    color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  },
  {
    name: "Bus Stops",
    locations: ["Sahupur Village", "Ratanpura (~4 KM)", "Mau (~16 KM)"],
    icon: Bus,
    color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  },
]

export function HealthFacilities() {
  return (
    <section
      id="facilities"
      className="py-20 sm:py-28 lg:py-32 bg-white dark:bg-sahupur-950"
      aria-labelledby="facilities-title"
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
            Health & Essential Services
          </span>
          <h2 id="facilities-title" className="text-4xl sm:text-5xl font-serif font-bold text-sahupur-900 dark:text-white mb-6">
            Health & Essential Services
          </h2>
          <p className="text-lg text-sahupur-600 dark:text-sahupur-300 leading-relaxed">
            Healthcare facilities and essential services accessible to Sahupur residents in nearby areas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
              alt="Rural healthcare center in Uttar Pradesh - representative image"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sahupur-900/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-xl font-serif font-bold mb-2">Healthcare Access</h3>
              <p className="text-sahupur-200 text-sm">Representative image of rural medical facility</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-sahupur-50 dark:bg-sahupur-900/50 rounded-2xl border border-sahupur-200 dark:border-sahupur-800"
          >
            <h3 className="text-2xl font-serif font-bold text-sahupur-900 dark:text-white mb-6">Healthcare Overview</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-sahupur-800/50 border border-sahupur-100 dark:border-sahupur-700">
                <div className="p-3 rounded-lg bg-sahupur-100 dark:bg-sahupur-700 text-sahupur-600 dark:text-sahupur-400">
                  <HeartPulse className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-sahupur-900 dark:text-white mb-1">Multi-tier Healthcare</h4>
                  <p className="text-sahupur-600 dark:text-sahupur-300 text-sm">
                    Residents have access to government hospitals, private clinics, dispensaries, and traditional Ayurvedic centers within 3-8 KM radius.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-sahupur-800/50 border border-sahupur-100 dark:border-sahupur-700">
                <div className="p-3 rounded-lg bg-sahupur-100 dark:bg-sahupur-700 text-sahupur-600 dark:text-sahupur-400">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-sahupur-900 dark:text-white mb-1">Emergency Access</h4>
                  <p className="text-sahupur-600 dark:text-sahupur-300 text-sm">
                    Haldharpur Hospital (~8 KM) serves as the nearest major government hospital for emergency and inpatient care.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-sahupur-800/50 border border-sahupur-100 dark:border-sahupur-700">
                <div className="p-3 rounded-lg bg-sahupur-100 dark:bg-sahupur-700 text-sahupur-600 dark:text-sahupur-400">
                  <Leaf className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-sahupur-900 dark:text-white mb-1">Traditional Medicine</h4>
                  <p className="text-sahupur-600 dark:text-sahupur-300 text-sm">
                    Ayurvedik Chikitsalay at Chakara Bazar (~6 KM) provides alternative healthcare through traditional Ayurvedic treatments.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-serif font-bold text-sahupur-900 dark:text-white text-center mb-10">Healthcare Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {healthServices.map((service, index) => (
              <motion.article
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={cn(
                  "p-6 rounded-2xl group",
                  "bg-white dark:bg-sahupur-900 border border-sahupur-200 dark:border-sahupur-800",
                  "hover:border-sahupur-300 dark:hover:border-sahupur-700 hover:shadow-xl transition-all duration-300"
                )}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-sahupur-100 dark:bg-sahupur-800 text-sahupur-600 dark:text-sahupur-400 group-hover:bg-sahupur-600 group-hover:text-white transition-colors flex-shrink-0">
                    <service.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sahupur-900 dark:text-white group-hover:text-sahupur-600 dark:group-hover:text-sahupur-300 transition-colors">
                      {service.name}
                    </h4>
                    <p className="text-sm text-sahupur-500 dark:text-sahupur-400">{service.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-sahupur-600 dark:text-sahupur-400">{service.distance}</p>
                    <p className="text-xs text-sahupur-400 dark:text-sahupur-500">from Sahupur</p>
                  </div>
                </div>
                <p className="text-sahupur-600 dark:text-sahupur-400 text-sm">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-serif font-bold text-sahupur-900 dark:text-white text-center mb-10">Essential Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {essentialServices.map((service, index) => (
              <motion.article
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={cn(
                  "p-6 rounded-2xl group",
                  "bg-white dark:bg-sahupur-900 border border-sahupur-200 dark:border-sahupur-800",
                  "hover:border-sahupur-300 dark:hover:border-sahupur-700 hover:shadow-xl transition-all duration-300"
                )}
              >
                <div className={cn(
                  "inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 group-hover:scale-110 transition-transform",
                  service.color
                )}>
                  <service.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h4 className="font-semibold text-sahupur-900 dark:text-white mb-4">{service.name}</h4>
                <ul className="space-y-2 text-sm text-sahupur-600 dark:text-sahupur-400" role="list">
                  {service.locations.map((location) => (
                    <li key={location} className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-sahupur-400" aria-hidden="true" />
                      <span>{location}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}