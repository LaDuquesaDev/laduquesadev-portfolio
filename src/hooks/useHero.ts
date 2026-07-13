"use client"

import { useLanguage } from "./useLanguage"
import { CHECKOUT_URLS } from "@/lib/checkout"

export const useHero = () => {
  const { t, language } = useLanguage()

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return {
    t,
    scrollToAbout,
    checkoutUrl: CHECKOUT_URLS[language],
  }
}
