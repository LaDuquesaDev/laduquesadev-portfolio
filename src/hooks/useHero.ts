"use client"

import { useLanguage } from "./useLanguage"

export const useHero = () => {
  const { t } = useLanguage()

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return {
    t,
    scrollToAbout,
  }
}
