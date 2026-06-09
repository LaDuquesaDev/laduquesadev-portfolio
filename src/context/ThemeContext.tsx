"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from "styled-components"

type ThemeMode = "light" | "dark"

interface ThemeContextType {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
  toggleTheme: () => void
}

const lightTheme = {
  background: "#FFFBF2",
  foreground: "#1C1410",
  primary: "#C4881E",
  primaryForeground: "#ffffff",
  secondary: "#FEF3C7",
  muted: "#78716C",
  border: "#E8D9B8",
}

const darkTheme = {
  background: "#0C0802",
  foreground: "#F5F0E8",
  primary: "#FBBF24",
  primaryForeground: "#1C1410",
  secondary: "#1A1208",
  muted: "#A87D4A",
  border: "#2D1F0A",
}

const GlobalStyle = createGlobalStyle<{ theme: typeof lightTheme }>`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.foreground};
    font-family: var(--font-sans, 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif);
    transition: background-color 0.3s ease, color 0.3s ease;
    margin: 0;
    padding: 0;
    line-height: 1.6;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
  }

  h1, h2, h3 {
    font-family: var(--font-display, 'DM Serif Display', Georgia, serif);
    font-weight: 400;
  }
`

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeMode>("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeMode
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  const currentTheme = theme === "light" ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>
        <GlobalStyle theme={currentTheme} />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
