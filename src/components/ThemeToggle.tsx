/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"
import { createContext, useState, useContext, useCallback, useEffect } from "react"
import enTranslations from "@/en.json"
import esTranslations from "@/es.json"

type Language = "en" | "es"
type Translations = typeof enTranslations

interface LanguageContextType {
    language: Language
    translations: Translations
    setLanguage: (lang: Language) => void
    t: (key: string) => string
  }
  

const translations = {
  en: enTranslations,
  es: esTranslations,
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en")

  // Load language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang)
  }, [])

  const t = useCallback(
    (key: string): string => {
      const keys = key.split(".")
      let result: any = translations[language]
  
      for (const k of keys) {
        result = result?.[k]
        if (result === undefined) return key // fallback
      }
  
      return typeof result === "string" ? result : key
    },
    [language],
  )  

  const value = {
    language,
    translations: translations[language],
    setLanguage: handleSetLanguage,
    t,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
