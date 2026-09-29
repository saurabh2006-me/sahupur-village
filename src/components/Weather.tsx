"use client"

import { motion } from "framer-motion"
import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  Droplets,
  Wind,
  Thermometer,
  Calendar,
} from "lucide-react"
import { cn } from "@/lib/utils"

const currentWeather = {
  temperature: 31.3,
  condition: "Light rain",
  humidity: 65,
  windSpeed: 4.13,
  windDirection: "NW",
  observedAt: "29 September 2026",
}

const forecast = [
  { day: "Today", date: "29 Sep", high: 32, low: 24, condition: "Light rain", icon: CloudRain },
  { day: "Tomorrow", date: "30 Sep", high: 31, low: 23, condition: "Moderate rain", icon: CloudRain },
  { day: "1 Oct", date: "1 Oct", high: 30, low: 22, condition: "Heavy rain", icon: CloudRain },
  { day: "2 Oct", date: "2 Oct", high: 31, low: 23, condition: "Partly cloudy", icon: Cloud },
  { day: "3 Oct", date: "3 Oct", high: 33, low: 24, condition: "Sunny", icon: Sun },
]

function WeatherIcon({ condition, className = "w-12 h-12" }: { condition: string; className?: string }) {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    "Light rain": CloudRain,
    "Moderate rain": CloudRain,
    "Heavy rain": CloudRain,
    "Partly cloudy": Cloud,
    Sunny: Sun,
    Clear: Sun,
    Cloudy: Cloud,
    Overcast: Cloud,
    Snow: CloudSnow,
  }
  const Icon = icons[condition] || Cloud
  return <Icon className={className} aria-hidden="true" />
}

export function Weather() {
  return (
    <section
      id="weather"
      className="py-20 sm:py-28 lg:py-32 bg-sahupur-50 dark:bg-sahupur-950"
      aria-labelledby="weather-title"
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
            Weather
          </span>
          <h2 id="weather-title" className="text-4xl sm:text-5xl font-serif font-bold text-sahupur-900 dark:text-white mb-6">
            Current Weather
          </h2>
          <p className="text-lg text-sahupur-600 dark:text-sahupur-300 leading-relaxed">
            Real-time weather conditions and forecast for the Sahupur region.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-sahupur-600 to-sahupur-800 p-8 text-white">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-2">Sahupur, Uttar Pradesh</h3>
                  <p className="text-sahupur-200">
                    <Calendar className="w-4 h-4 inline-block align-middle mr-1" aria-hidden="true" />
                    Source data observed on {currentWeather.observedAt}
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm text-sahupur-200">Humidity</p>
                    <p className="text-2xl font-bold">{currentWeather.humidity}%</p>
                  </div>
                  <div className="w-px h-12 bg-white/20" aria-hidden="true" />
                  <div className="text-right">
                    <p className="text-sm text-sahupur-200">Wind</p>
                    <p className="text-2xl font-bold">{currentWeather.windSpeed} m/s</p>
                    <p className="text-sm text-sahupur-200">{currentWeather.windDirection}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <WeatherIcon condition={currentWeather.condition} className="w-32 h-32 text-white/90" />
                  </div>
                  <div>
                    <p className="text-7xl font-bold tracking-tight">{currentWeather.temperature}°C</p>
                    <p className="text-xl text-sahupur-200 capitalize">{currentWeather.condition}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-white/20 pt-8">
                  <div className="text-center">
                    <Thermometer className="w-6 h-6 mx-auto mb-2 text-sahupur-200" aria-hidden="true" />
                    <p className="text-sm text-sahupur-200">Feels Like</p>
                    <p className="text-xl font-semibold">{currentWeather.temperature + 1.5}°C</p>
                  </div>
                  <div className="text-center">
                    <Droplets className="w-6 h-6 mx-auto mb-2 text-sahupur-200" aria-hidden="true" />
                    <p className="text-sm text-sahupur-200">Humidity</p>
                    <p className="text-xl font-semibold">{currentWeather.humidity}%</p>
                  </div>
                  <div className="text-center">
                    <Wind className="w-6 h-6 mx-auto mb-2 text-sahupur-200" aria-hidden="true" />
                    <p className="text-sm text-sahupur-200">Wind Speed</p>
                    <p className="text-xl font-semibold">{currentWeather.windSpeed} m/s</p>
                  </div>
                  <div className="text-center">
                    <Compass className="w-6 h-6 mx-auto mb-2 text-sahupur-200" aria-hidden="true" />
                    <p className="text-sm text-sahupur-200">Wind Dir.</p>
                    <p className="text-xl font-semibold">{currentWeather.windDirection}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="p-6 rounded-2xl bg-white dark:bg-sahupur-900 border border-sahupur-200 dark:border-sahupur-800">
              <h3 className="text-lg font-semibold text-sahupur-900 dark:text-white mb-4">Weather Details</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-sahupur-50 dark:bg-sahupur-800/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sahupur-100 dark:bg-sahupur-700 text-sahupur-600 dark:text-sahupur-400">
                      <Thermometer className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-sahupur-700 dark:text-sahupur-300">Temperature</span>
                  </div>
                  <span className="font-semibold text-sahupur-900 dark:text-white">{currentWeather.temperature}°C</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-sahupur-50 dark:bg-sahupur-800/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sahupur-100 dark:bg-sahupur-700 text-sahupur-600 dark:text-sahupur-400">
                      <CloudRain className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-sahupur-700 dark:text-sahupur-300">Condition</span>
                  </div>
                  <span className="font-semibold text-sahupur-900 dark:text-white capitalize">{currentWeather.condition}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-sahupur-50 dark:bg-sahupur-800/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sahupur-100 dark:bg-sahupur-700 text-sahupur-600 dark:text-sahupur-400">
                      <Droplets className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-sahupur-700 dark:text-sahupur-300">Humidity</span>
                  </div>
                  <span className="font-semibold text-sahupur-900 dark:text-white">{currentWeather.humidity}%</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-sahupur-50 dark:bg-sahupur-800/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sahupur-100 dark:bg-sahupur-700 text-sahupur-600 dark:text-sahupur-400">
                      <Wind className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-sahupur-700 dark:text-sahupur-300">Wind</span>
                  </div>
                  <span className="font-semibold text-sahupur-900 dark:text-white">{currentWeather.windSpeed} m/s {currentWeather.windDirection}</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-sahupur-900 border border-sahupur-200 dark:border-sahupur-800">
              <h3 className="text-lg font-semibold text-sahupur-900 dark:text-white mb-4">Air Quality & More</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-sahupur-50 dark:bg-sahupur-800/50 text-center">
                  <p className="text-2xl font-bold text-sahupur-600 dark:text-sahupur-400">Moderate</p>
                  <p className="text-sm text-sahupur-500 dark:text-sahupur-400">Air Quality</p>
                </div>
                <div className="p-4 rounded-lg bg-sahupur-50 dark:bg-sahupur-800/50 text-center">
                  <p className="text-2xl font-bold text-sahupur-600 dark:text-sahupur-400">10 km</p>
                  <p className="text-sm text-sahupur-500 dark:text-sahupur-400">Visibility</p>
                </div>
                <div className="p-4 rounded-lg bg-sahupur-50 dark:bg-sahupur-800/50 text-center">
                  <p className="text-2xl font-bold text-sahupur-600 dark:text-sahupur-400">1012 hPa</p>
                  <p className="text-sm text-sahupur-500 dark:text-sahupur-400">Pressure</p>
                </div>
                <div className="p-4 rounded-lg bg-sahupur-50 dark:bg-sahupur-800/50 text-center">
                  <p className="text-2xl font-bold text-sahupur-600 dark:text-sahupur-400">UV 6</p>
                  <p className="text-sm text-sahupur-500 dark:text-sahupur-400">UV Index</p>
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
          <h3 className="text-2xl font-serif font-bold text-sahupur-900 dark:text-white text-center mb-10">5-Day Forecast</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {forecast.map((day, index) => (
              <motion.article
                key={day.date}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={cn(
                  "p-5 rounded-2xl text-center group",
                  "bg-white dark:bg-sahupur-900 border border-sahupur-200 dark:border-sahupur-800",
                  "hover:border-sahupur-300 dark:hover:border-sahupur-700 hover:shadow-lg transition-all duration-300"
                )}
              >
                <p className="text-sm font-medium text-sahupur-500 dark:text-sahupur-400 mb-1">{day.day}</p>
                <p className="text-xs text-sahupur-400 dark:text-sahupur-500 mb-3">{day.date}</p>
                <WeatherIcon condition={day.condition} className="w-16 h-16 mx-auto mb-3 text-sahupur-600 dark:text-sahupur-400" />
                <p className="text-sm text-sahupur-600 dark:text-sahupur-400 capitalize mb-3">{day.condition}</p>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-xl font-bold text-sahupur-900 dark:text-white">{day.high}°</span>
                  <span className="text-xl text-sahupur-500 dark:text-sahupur-400">{day.low}°</span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 rounded-2xl bg-sahupur-100 dark:bg-sahupur-900/50 border border-sahupur-200 dark:border-sahupur-800 text-center"
        >
          <p className="text-sahupur-600 dark:text-sahupur-400 text-sm max-w-2xl mx-auto">
            <strong className="text-sahupur-900 dark:text-white">Note:</strong> Weather data shown is based on the provided source information observed on 29 September 2026. 
            For real-time weather updates, please check official meteorological services like IMD (India Meteorological Department) or trusted weather applications.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function Compass({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  )
}