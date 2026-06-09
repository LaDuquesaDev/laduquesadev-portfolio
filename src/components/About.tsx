'use client'

import { useAbout } from "@/hooks/useAbout"
import {
  AboutSection,
  AboutContainer,
  SectionHeader,
  SectionLabel,
  SectionTitle,
  AboutGrid,
  AboutText,
  AboutBio,
  AboutTagsLabel,
  SkillTags,
  SkillTag,
  AboutAside,
  StatCard,
  StatNumber,
  StatLabel,
} from "@/styles/about-styles"

const skills = [
  "React Native", "Expo", "TypeScript", "JavaScript",
  "Next.js", "Astro", "App Store Connect", "Google Play",
  "EAS Build", "Zustand", "TanStack Query", "Node.js",
]

export const About = () => {
  const { t, isHeaderVisible, sectionRef } = useAbout()

  return (
    <AboutSection id="about" ref={sectionRef}>
      <AboutContainer>
        <SectionHeader style={{ opacity: isHeaderVisible ? 1 : 0, transform: isHeaderVisible ? "translateY(0)" : "translateY(20px)", transition: "all 0.5s ease" }}>
          <SectionLabel>Sobre mí</SectionLabel>
          <SectionTitle>{t("about.title")}</SectionTitle>
        </SectionHeader>

        <AboutGrid>
          <AboutText>
            <AboutBio>{t("about.bio1")}</AboutBio>
            <AboutBio>{t("about.bio2")}</AboutBio>

            <AboutTagsLabel>Stack actual</AboutTagsLabel>
            <SkillTags>
              {skills.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </SkillTags>
          </AboutText>

          <AboutAside>
            <StatCard>
              <StatNumber>+4</StatNumber>
              <StatLabel>años construyendo apps móviles de cero a producción</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>2</StatNumber>
              <StatLabel>apps lanzadas en App Store y Google Play con ownership completo</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>∞</StatNumber>
              <StatLabel>ganas de seguir aprendiendo y compartiendo lo aprendido</StatLabel>
            </StatCard>
          </AboutAside>
        </AboutGrid>
      </AboutContainer>
    </AboutSection>
  )
}
