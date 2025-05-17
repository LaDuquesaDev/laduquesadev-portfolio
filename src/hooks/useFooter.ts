"use client"

import { useLanguage } from "./useLanguage"

export const useFooter = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return {
    t,
    currentYear,
  }
}
