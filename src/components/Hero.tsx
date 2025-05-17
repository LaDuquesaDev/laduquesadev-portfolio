"use client"

import React from "react"
import Image from "next/image"
import { useHero } from "@/hooks/useHero"
import { HeroSection,
    HeroContainer,
    HeroContent,
    HeroTitle,
    HeroSubtitle,
    HeroDescription,
    ButtonGroup,
    // PrimaryButton,
    SecondaryButton,
    HeroImageContainer,
    ImageGlow,
    ImageWrapper, 
    ScrollButton } from "@/styles/hero-styles"

export const Hero = () => {
  const { t, scrollToAbout } = useHero()

  return (
    <HeroSection>
      <HeroContainer>
        <HeroContent>
          <HeroTitle>
            {t("hero.greeting")} <span>{t("hero.name")}</span>
          </HeroTitle>
          <HeroSubtitle>{t("hero.title")}</HeroSubtitle>
          <HeroDescription>{t("hero.description")}</HeroDescription>
          <ButtonGroup>
            {/* <PrimaryButton as="a" href="#contact">
              {t("hero.contact")}
            </PrimaryButton> */}
            <SecondaryButton as="a" href="/files/CV_YULIMAR_DUQUE_FRONTEND.pdf" download>
              {t("hero.resume")}
            </SecondaryButton>
          </ButtonGroup>
        </HeroContent>

        <HeroImageContainer>
          <ImageGlow />
          <ImageWrapper>
            <Image
              src="/profile_pic.webp"
              alt="Profile"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </ImageWrapper>
        </HeroImageContainer>
      </HeroContainer>

      <ScrollButton onClick={scrollToAbout} aria-label="Scroll down">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </ScrollButton>
    </HeroSection>
  )
}
