"use client"

import { useLanguageSwitch } from "./use-language-switch"
import { Button } from "@/shared/button"

export function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguageSwitch()

  return (
    <Button variant="ghost" size="sm" onClick={toggleLanguage} className="font-medium">
      {language === "en" ? "ES" : "EN"}
    </Button>
  )
}
