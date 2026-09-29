"use client"

import { motion } from "framer-motion"
import { Waves, TreePine, Sun, CloudRain, Leaf } from "lucide-react"
import { cn } from "@/lib/utils"

const natureFeatures = [
  {
    icon: Waves,
    title: "Village Path & Fields",
    description: "A tranquil village path winds through the green fields of Sahupur, connecting the community to their farmlands and the surrounding natural beauty.",
    image: "/images/WhatsApp%20Image%202026-09-29%20at%2015.28.17%20%282%29.jpeg",
  },
  {
    icon: TreePine,
    title: "Green Fields & Nature",
    description: "Expansive green fields stretch across the village landscape, showcasing the fertile agricultural land that sustains the community.",
    image: "/images/WhatsApp%20Image%202026-09-29%20at%2015.28.18%20%282%29.jpeg",
  },
  {
    icon: Sun,
    title: "Farmland Sunset",
    description: "The golden hour light bathes the farmlands of Sahupur, creating a serene and picturesque scene of rural life at dusk.",
    image: "/images/WhatsApp%20Image%202026-09-29%20at%2015.28.18%20%281%29.jpeg",
  },
  {
    icon: Leaf,
    title: "Agricultural Landscape",
    description: "The rich agricultural terrain of Sahupur with crops ready for harvest, reflecting the hard work and dedication of local farmers.",
    image: "/images/WhatsApp%20Image%202026-09-29%20at%2015.28.17%20%281%29.jpeg",
  },
]

export function Nature() {
  return (
    <section
      id="nature"
      className="py-20 sm:py-28 lg:py-32 bg-sahupur-50 dark:bg-sahupur-950"
      aria-labelledby="nature-title"
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
            Nature & Environment
          </span>
          <h2 id="nature-title" className="text-4xl sm:text-5xl font-serif font-bold text-sahupur-900 dark:text-white mb-6">
            Nature Around Sahupur
          </h2>
          <p className="text-lg text-sahupur-600 dark:text-sahupur-300 leading-relaxed">
            The village is blessed with natural beauty — rivers, green fields, groves, and seasonal landscapes that define rural Uttar Pradesh.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <img
              src="/images/WhatsApp%20Image%202026-09-29%20at%2015.28.18%20%282%29.jpeg"
              alt="Green fields of Sahupur village - original photograph"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sahupur-900/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <TreePine className="w-5 h-5 text-sahupur-300" aria-hidden="true" />
                <span className="font-medium">Green Fields</span>
              </div>
              <p className="text-sahupur-200 text-sm">Original photograph of Sahupur farmland</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-white dark:bg-sahupur-900 border border-sahupur-200 dark:border-sahupur-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-sahupur-100 dark:bg-sahupur-800 text-sahupur-600 dark:text-sahupur-400">
                  <Waves className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-serif font-bold text-sahupur-900 dark:text-white">Major Rivers</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-sahupur-50 dark:bg-sahupur-800/50 border border-sahupur-100 dark:border-sahupur-700">
                  <h4 className="font-semibold text-sahupur-900 dark:text-white mb-1">Ghaghara River</h4>
                  <p className="text-sahupur-600 dark:text-sahupur-400 text-sm">
                    One of the major tributaries of the Ganges, flowing through the region. It provides irrigation water and supports the fertile alluvial plains ideal for agriculture.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-sahupur-50 dark:bg-sahupur-800/50 border border-sahupur-100 dark:border-sahupur-700">
                  <h4 className="font-semibold text-sahupur-900 dark:text-white mb-1">Tamasa River (Tons)</h4>
                  <p className="text-sahupur-600 dark:text-sahupur-400 text-sm">
                    A significant river in the area contributing to groundwater recharge. Its waters support the agricultural activities of nearby villages including Sahupur.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-sahupur-900 border border-sahupur-200 dark:border-sahupur-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-sahupur-100 dark:bg-sahupur-800 text-sahupur-600 dark:text-sahupur-400">
                  <TreePine className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-serif font-bold text-sahupur-900 dark:text-white">Green Cover</h3>
              </div>
              <p className="text-sahupur-600 dark:text-sahupur-400 mb-4">
                The village landscape is characterized by agricultural fields, mango groves, neem trees, and seasonal vegetation that changes with the seasons.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-sahupur-50 dark:bg-sahupur-800/50 border border-sahupur-100 dark:border-sahupur-700 text-center">
                  <Leaf className="w-5 h-5 text-sahupur-600 dark:text-sahupur-400 mx-auto mb-2" aria-hidden="true" />
                  <p className="text-sm font-medium text-sahupur-900 dark:text-white">Mango Groves</p>
                  <p className="text-xs text-sahupur-500 dark:text-sahupur-400">Seasonal fruit</p>
                </div>
                <div className="p-3 rounded-lg bg-sahupur-50 dark:bg-sahupur-800/50 border border-sahupur-100 dark:border-sahupur-700 text-center">
                  <TreePine className="w-5 h-5 text-sahupur-600 dark:text-sahupur-400 mx-auto mb-2" aria-hidden="true" />
                  <p className="text-sm font-medium text-sahupur-900 dark:text-white">Neem & Shade Trees</p>
                  <p className="text-xs text-sahupur-500 dark:text-sahupur-400">Village lanes</p>
                </div>
                <div className="p-3 rounded-lg bg-sahupur-50 dark:bg-sahupur-800/50 border border-sahupur-100 dark:border-sahupur-700 text-center">
                  <Sun className="w-5 h-5 text-sahupur-600 dark:text-sahupur-400 mx-auto mb-2" aria-hidden="true" />
                  <p className="text-sm font-medium text-sahupur-900 dark:text-white">Crop Fields</p>
                  <p className="text-xs text-sahupur-500 dark:text-sahupur-400">Wheat, Rice, Pulses</p>
                </div>
                <div className="p-3 rounded-lg bg-sahupur-50 dark:bg-sahupur-800/50 border border-sahupur-100 dark:border-sahupur-700 text-center">
                  <CloudRain className="w-5 h-5 text-sahupur-600 dark:text-sahupur-400 mx-auto mb-2" aria-hidden="true" />
                  <p className="text-sm font-medium text-sahupur-900 dark:text-white">Monsoon Greens</p>
                  <p className="text-xs text-sahupur-500 dark:text-sahupur-400">June-September</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-serif font-bold text-sahupur-900 dark:text-white text-center mb-10">Natural Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {natureFeatures.map((feature, index) => (
              <motion.article
                key={feature.title}
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
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={`Representative image of ${feature.title.toLowerCase()} in rural Uttar Pradesh`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 rounded-lg bg-sahupur-100 dark:bg-sahupur-800 text-sahupur-600 dark:text-sahupur-400">
                      <feature.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h4 className="font-semibold text-sahupur-900 dark:text-white">{feature.title}</h4>
                  </div>
                  <p className="text-sahupur-600 dark:text-sahupur-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}