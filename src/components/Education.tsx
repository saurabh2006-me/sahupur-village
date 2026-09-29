"use client"

import { motion } from "framer-motion"
import { GraduationCap, School, BookOpen, Building2, Award, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const schools = [
  {
    name: "P S Sahupur",
    type: "Primary School",
    icon: School,
    description: "Primary school serving the village children with foundational education.",
    level: "Primary (Class 1-5)",
  },
  {
    name: "J.H.S. Sahupur",
    type: "Junior High School",
    icon: School,
    description: "Junior high school providing middle school education to village students.",
    level: "Upper Primary (Class 6-8)",
  },
  {
    name: "Deep Dev Inter College",
    type: "Intermediate College",
    icon: Building2,
    description: "Higher secondary institution offering classes up to 12th standard.",
    level: "Secondary & Senior Secondary (Class 9-12)",
  },
  {
    name: "Maryada Purushottam P.G. College",
    type: "Post Graduate College",
    icon: GraduationCap,
    description: "Degree college offering undergraduate and postgraduate programs.",
    level: "Undergraduate & Postgraduate",
  },
  {
    name: "Haji Ilyas Inter College",
    type: "Intermediate College",
    icon: Building2,
    description: "Another intermediate college serving the educational needs of the region.",
    level: "Secondary & Senior Secondary (Class 9-12)",
  },
]

const educationStats = [
  { label: "Primary Schools in Village", value: "2", icon: School },
  { label: "Higher Education Nearby", value: "3+", icon: GraduationCap },
  { label: "Literacy Rate (2011)", value: "62.6%", icon: BookOpen },
  { label: "Female Literacy (2011)", value: "24.7%", icon: Award },
]

export function Education() {
  return (
    <section
      id="education"
      className="py-20 sm:py-28 lg:py-32 bg-sahupur-50 dark:bg-sahupur-950"
      aria-labelledby="education-title"
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
            Education
          </span>
          <h2 id="education-title" className="text-4xl sm:text-5xl font-serif font-bold text-sahupur-900 dark:text-white mb-6">
            Educational Institutions
          </h2>
          <p className="text-lg text-sahupur-600 dark:text-sahupur-300 leading-relaxed">
            Sahupur and its surrounding areas offer educational facilities from primary to postgraduate levels.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {educationStats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={cn(
                "p-6 rounded-2xl text-center group",
                "bg-white dark:bg-sahupur-900 border border-sahupur-200 dark:border-sahupur-800",
                "hover:border-sahupur-300 dark:hover:border-sahupur-700 transition-colors"
              )}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-sahupur-100 dark:bg-sahupur-800 text-sahupur-600 dark:text-sahupur-400 mb-4 group-hover:bg-sahupur-600 group-hover:text-white transition-colors">
                <stat.icon className="w-7 h-7" aria-hidden="true" />
              </div>
              <p className="text-3xl font-bold text-sahupur-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-sm text-sahupur-600 dark:text-sahupur-400">{stat.label}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
              alt="Children studying in a rural classroom in Uttar Pradesh - representative image"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sahupur-900/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-xl font-serif font-bold mb-2">Learning in Rural India</h3>
              <p className="text-sahupur-200 text-sm">Representative image of rural education setting</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white dark:bg-sahupur-900 rounded-2xl border border-sahupur-200 dark:border-sahupur-800"
          >
            <h3 className="text-2xl font-serif font-bold text-sahupur-900 dark:text-white mb-6">Education Overview</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-sahupur-50 dark:bg-sahupur-800/50 border border-sahupur-100 dark:border-sahupur-700">
                <div className="p-3 rounded-lg bg-sahupur-100 dark:bg-sahupur-700 text-sahupur-600 dark:text-sahupur-400 flex-shrink-0">
                  <BookOpen className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-sahupur-900 dark:text-white mb-2">Primary Education</h4>
                  <p className="text-sahupur-600 dark:text-sahupur-300 text-sm">
                    The village has two primary education institutions — P S Sahupur and J.H.S. Sahupur — providing foundational and middle school education to local children within walking distance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-sahupur-50 dark:bg-sahupur-800/50 border border-sahupur-100 dark:border-sahupur-700">
                <div className="p-3 rounded-lg bg-sahupur-100 dark:bg-sahupur-700 text-sahupur-600 dark:text-sahupur-400 flex-shrink-0">
                  <GraduationCap className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-sahupur-900 dark:text-white mb-2">Higher Education Access</h4>
                  <p className="text-sahupur-600 dark:text-sahupur-300 text-sm">
                    Three intermediate and degree colleges are accessible in the surrounding area: Deep Dev Inter College, Maryada Purushottam P.G. College, and Haji Ilyas Inter College, offering education up to postgraduate level.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-sahupur-50 dark:bg-sahupur-800/50 border border-sahupur-100 dark:border-sahupur-700">
                <div className="p-3 rounded-lg bg-sahupur-100 dark:bg-sahupur-700 text-sahupur-600 dark:text-sahupur-400 flex-shrink-0">
                  <Users className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-sahupur-900 dark:text-white mb-2">Literacy Context</h4>
                  <p className="text-sahupur-600 dark:text-sahupur-300 text-sm">
                    As per the 2011 Census, the village literacy rate stands at 62.6%, with female literacy at 24.7%. Ongoing educational initiatives aim to improve these figures for future generations.
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
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-serif font-bold text-sahupur-900 dark:text-white text-center mb-10">Educational Institutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schools.map((school, index) => (
              <motion.article
                key={school.name}
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
                    <school.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sahupur-900 dark:text-white group-hover:text-sahupur-600 dark:group-hover:text-sahupur-300 transition-colors">
                      {school.name}
                    </h4>
                    <p className="text-sm text-sahupur-500 dark:text-sahupur-400">{school.type}</p>
                  </div>
                </div>
                <p className="text-sahupur-600 dark:text-sahupur-400 text-sm mb-3">{school.description}</p>
                <div className="flex items-center gap-2 text-xs text-sahupur-500 dark:text-sahupur-400">
                  <Award className="w-4 h-4" aria-hidden="true" />
                  <span>{school.level}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}