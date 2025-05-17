"use client"

import { useState, useEffect, useRef } from "react"
import { useLanguage } from "./useLanguage"

export const useAbout = () => {
  const { t } = useLanguage()
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const [isCardsVisible, setIsCardsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about")
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight * 0.75

        if (isVisible) {
          setIsHeaderVisible(true)

          // Delay the cards animation
          setTimeout(() => {
            setIsCardsVisible(true)
          }, 300)
        }
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const sectionRef = useRef<HTMLDivElement>(null)

  return {
    t,
    isHeaderVisible,
    isCardsVisible,
    sectionRef,
  }
}
