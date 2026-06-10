"use client"

import { useEffect } from "react"
import { About } from "@/components/About"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { PhotoGallery } from "@/components/PhotoGallery"
import { PixelFox } from "@/components/PixelFox"
import { Products } from "@/components/Products"

export default function Home() {
  useEffect(() => {
    if (!window.location.hash) return
    const id = window.location.hash.slice(1)
    const el = document.getElementById(id)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100)
  }, [])

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Products />
      <PhotoGallery />
      <Footer />
      <PixelFox />
    </main>
  )
}
