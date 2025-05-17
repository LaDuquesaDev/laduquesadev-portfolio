"use client"

import { useLanguage } from "./useLanguage"


export const useLanguageSwitch = () => {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return {
    language,
    toggleLanguage,
  }
}
