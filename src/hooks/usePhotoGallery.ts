"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "./useLanguage"
import { photos } from "@/mocks"

export const usePhotoGallery = () => {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const [isCarouselVisible, setIsCarouselVisible] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const prevSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return

    setIsAnimating(true)
    setCurrentIndex(index)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  useEffect(() => {
    const handleScroll = () => {
      const gallerySection = document.getElementById("gallery")
      if (gallerySection) {
        const rect = gallerySection.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight * 0.75

        if (isVisible) {
          setIsHeaderVisible(true)
          setTimeout(() => {
            setIsCarouselVisible(true)
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
    photos,
    currentIndex,
    isHeaderVisible,
    isCarouselVisible,
    isAnimating,
    nextSlide,
    prevSlide,
    goToSlide,
  }
}
