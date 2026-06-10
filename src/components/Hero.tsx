"use client"

import React from "react"
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
  HeroTags,
  HeroTag,
} from "@/styles/hero-styles"

const tags = ["React Native", "Expo", "App Store", "Google Play", "EAS Build"]

export const Hero = () => {
  const { t } = useHero()

  return (
    <HeroSection>
      <HeroContainer>
        <HeroContent>
          <HeroLabel>React Native · App Store · Google Play</HeroLabel>

          <HeroTitle>
            De cero a las tiendas.<br />
            Y sí, <em>te cuento todo.</em>
          </HeroTitle>

          <HeroSubtitle>{t("hero.description")}</HeroSubtitle>

          <ButtonGroup>
            <PrimaryButton as="a" href="#products">
              Ver guía de publicación
            </PrimaryButton>
            <SecondaryButton as="a" href="#products">
              Ver tienda
            </SecondaryButton>
          </ButtonGroup>

          <HeroTags>
            {tags.map((tag) => (
              <HeroTag key={tag}>{tag}</HeroTag>
            ))}
          </HeroTags>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  )
}
