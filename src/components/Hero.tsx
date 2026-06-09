"use client"

import React from "react"
import Image from "next/image"
import { useHero } from "@/hooks/useHero"
import {
  HeroSection,
  HeroContainer,
  HeroContent,
  HeroLabel,
  HeroTitle,
  HeroSubtitle,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  HeroSocials,
  SocialIconLink,
  HeroImageContainer,
  ImageGlow,
  ImageWrapper,
  ScrollButton,
} from "@/styles/hero-styles"

export const Hero = () => {
  const { t, scrollToAbout } = useHero()

  return (
    <HeroSection>
      <HeroContainer>
        <HeroContent>
          <HeroLabel>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
              <circle cx="4" cy="4" r="4" />
            </svg>
            React Native Developer
          </HeroLabel>

          <HeroTitle>
            {t("hero.greeting")}<br />
            <em>{t("hero.name")}</em>
          </HeroTitle>

          <HeroSubtitle>{t("hero.description")}</HeroSubtitle>

          <ButtonGroup>
            <PrimaryButton as="a" href="#products">
              {t("hero.cta_products")}
            </PrimaryButton>
            <SecondaryButton as="a" href="/portfolio">
              {t("hero.cta_portfolio")}
            </SecondaryButton>
          </ButtonGroup>

          <HeroSocials>
            <SocialIconLink href="https://github.com/LaDuquesaDev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com/in/laduquesadev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </SocialIconLink>
            <SocialIconLink href="https://www.instagram.com/laduquesadev/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </SocialIconLink>
            <SocialIconLink href="https://www.youtube.com/@laduquesadev" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </SocialIconLink>
          </HeroSocials>
        </HeroContent>

        <HeroImageContainer>
          <ImageGlow />
          <ImageWrapper>
            <Image
              src="/profile_pic_copia.webp"
              alt="Yulimar Duque"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </ImageWrapper>
        </HeroImageContainer>
      </HeroContainer>

      <ScrollButton onClick={scrollToAbout} aria-label="Scroll down">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </ScrollButton>
    </HeroSection>
  )
}
