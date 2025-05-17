"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "./useLanguage"

export const useHeader = () => {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  return {
    t,
    isScrolled,
    isMobileMenuOpen,
    toggleMobileMenu,
  }
}
