"use client"

// import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
// import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
// import { PhotoGallery } from "@/components/PhotoGallery"
// import { Contact } from "@/components/Contact"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { PhotoGallery } from "@/components/PhotoGallery"
import { Projects } from "@/components/Projects"
// import { Footer } from "@/components/Footer"

import { useEffect, useState } from "react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => setIsLoading(false)
    if (document.readyState === "complete") {
      setIsLoading(false)
    } else {
      window.addEventListener("load", handleLoad)
      return () => window.removeEventListener("load", handleLoad)
    }
  }, [])

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[hsl(var(--background))]">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <PhotoGallery />
      {/* <Contact /> */}
      <Footer />
    </main>
  )
}
