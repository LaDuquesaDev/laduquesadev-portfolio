"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "./useLanguage"

export const useProjects = () => {
  const { t } = useLanguage()
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const [isProjectsVisible, setIsProjectsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects")
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight * 0.75

        if (isVisible) {
          setIsHeaderVisible(true)
          setTimeout(() => {
            setIsProjectsVisible(true)
          }, 300)
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return {
    t,
    isHeaderVisible,
    isProjectsVisible,
  }
}
