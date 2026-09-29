"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Highlights } from "@/components/Highlights"
import { Statistics } from "@/components/Statistics"
import { Location } from "@/components/Location"
import { Education } from "@/components/Education"
import { HealthFacilities } from "@/components/HealthFacilities"
import { Nature } from "@/components/Nature"
import { Gallery } from "@/components/Gallery"
import { Weather } from "@/components/Weather"
import { Community } from "@/components/Community"
import { Footer } from "@/components/Footer"
import { BackToTop } from "@/components/BackToTop"
import { Loading } from "@/components/Loading"
import { useState, useEffect } from "react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <Loading />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="min-h-screen"
      >
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Highlights />
          <Statistics />
          <Location />
          <Education />
          <HealthFacilities />
          <Nature />
          <Gallery />
          <Weather />
          <Community />
        </main>
        <Footer />
        <BackToTop />
      </motion.div>
    </>
  )
}