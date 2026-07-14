"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Products } from "@/components/Products"

export default function GuiaPage() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <Header />
      <div style={{ paddingTop: "5rem" }}>
        <Products />
      </div>
      <Footer />
    </main>
  )
}
