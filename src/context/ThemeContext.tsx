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
  background: "#f5f3ff",
  foreground: "#1e1b2e",
  primary: "#7c3aed",
  secondary: "#e4e4ff", 
  muted: "#888888",
  border: "#e0e0e0",
}

const darkTheme = {
  background: "#030712",
  foreground: "#f8f9fa",
  primary: "#9810fa",
  secondary: "#1a1a1a",
  muted: "#888888",
  border: "#333333",
}

const GlobalStyle = createGlobalStyle<{ theme: typeof lightTheme }>`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.foreground};
    transition: all 0.3s ease;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
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
