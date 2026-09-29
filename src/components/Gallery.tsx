"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react"
import { cn } from "@/lib/utils"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80",
    alt: "Village landscape with traditional houses and green fields in rural Uttar Pradesh - representative image",
    category: "Village Life",
  },
  {
    src: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&q=80",
    alt: "Green agricultural fields with crops in Uttar Pradesh - representative image",
    category: "Agriculture",
  },
  {
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1200&q=80",
    alt: "Rural road surrounded by trees and fields in Uttar Pradesh - representative image",
    category: "Roads & Surroundings",
  },
  {
    src: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&q=80",
    alt: "Traditional temple architecture in rural India - representative image",
    category: "Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
    alt: "Children studying in a rural classroom in Uttar Pradesh - representative image",
    category: "Education",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
    alt: "Lush green nature and trees in Uttar Pradesh countryside - representative image",
    category: "Nature",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80",
    alt: "Community gathering in rural Uttar Pradesh - representative image",
    category: "Village Life",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    alt: "Rural healthcare center in Uttar Pradesh - representative image",
    category: "Facilities",
  },
  {
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&q=80",
    alt: "River landscape with green banks in Uttar Pradesh - representative image",
    category: "Nature",
  },
  {
    src: "https://images.unsplash.com/photo-1603006905018-214966494289?w=1200&q=80",
    alt: "Mango orchard in Uttar Pradesh - representative image",
    category: "Agriculture",
  },
  {
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&q=80",
    alt: "Monsoon scenery in rural Uttar Pradesh - representative image",
    category: "Nature",
  },
  {
    src: "https://images.unsplash.com/photo-1501758311237-025b239981ca?w=1200&q=80",
    alt: "River bank scenery in Uttar Pradesh - representative image",
    category: "Nature",
  },
]

const categoryColors: Record<string, string> = {
  "Village Life": "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400",
  Agriculture: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  Nature: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
  Education: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  Culture: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  "Roads & Surroundings": "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
  Facilities: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400",
}

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedIndex(null)
    document.body.style.overflow = "unset"
  }

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <>
      <section
        id="gallery"
        className="py-20 sm:py-28 lg:py-32 bg-white dark:bg-sahupur-950"
        aria-labelledby="gallery-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sahupur-100 dark:bg-sahupur-900/50 text-sahupur-700 dark:text-sahupur-300 text-sm font-medium mb-4">
              Photo Gallery
            </span>
            <h2 id="gallery-title" className="text-4xl sm:text-5xl font-serif font-bold text-sahupur-900 dark:text-white mb-6">
              Village Life Gallery
            </h2>
            <p className="text-lg text-sahupur-600 dark:text-sahupur-300 leading-relaxed">
              A visual journey through Sahupur&apos;s landscapes, people, culture, and daily life.
              <br />
              <span className="text-sm text-sahupur-500 dark:text-sahupur-400">Images are representative of rural Uttar Pradesh.</span>
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            role="list"
            aria-label="Village photo gallery"
          >
            {galleryImages.map((image, index) => (
              <motion.article
                key={image.src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-zoom-in"
                role="listitem"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onClick={() => openLightbox(index)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sahupur-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium",
                      categoryColors[image.category] || "bg-sahupur-100 dark:bg-sahupur-800 text-sahupur-700 dark:text-sahupur-300"
                    )}>
                      {image.category}
                    </span>
                    <button
                      onClick={() => openLightbox(index)}
                      className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                      aria-label={`View ${image.category} image in fullscreen`}
                    >
                      <Expand className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-14 right-0 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors hidden sm:flex"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>

              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors hidden sm:flex"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                <span>{selectedIndex + 1} / {galleryImages.length}</span>
                <span className={cn(
                  "px-2 py-0.5 rounded-full text-xs font-medium",
                  categoryColors[galleryImages[selectedIndex].category]
                )}>
                  {galleryImages[selectedIndex].category}
                </span>
              </div>
            </motion.div>

            <div className="sr-only" aria-live="polite">
              Image {selectedIndex + 1} of {galleryImages.length}: {galleryImages[selectedIndex].alt}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}