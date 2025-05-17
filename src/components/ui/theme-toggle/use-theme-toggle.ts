"use client"

import { useTheme } from "../../../context/ThemeContext"

export const useThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return {
    theme,
    setTheme,
  }
}
