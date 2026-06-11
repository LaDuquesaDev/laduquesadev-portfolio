"use client"

import Image from "next/image"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useLanguage } from "@/hooks/useLanguage"
import styled, { keyframes } from "styled-components"

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const BioMain = styled.main`
  min-height: 100vh;
`

const ProfileSection = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 9rem 2rem 5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: start;
  animation: ${fadeUp} 0.6s ease forwards;

  @media (min-width: 768px) {
    grid-template-columns: 300px 1fr;
    gap: 5rem;
    padding: 9rem 2rem 4rem;
  }
`

const PhotoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    position: sticky;
    top: 7rem;
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  aspect-ratio: 4 / 5;
  border-radius: 1.25rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);

  @media (max-width: 768px) {
    max-width: 220px;
    margin: 0 auto;
  }
`

const SocialRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const SocialPill = styled.a`
  font-size: 0.7rem;
  font-family: var(--font-sans, 'Outfit', sans-serif);
  font-weight: 500;
  padding: 0.35rem 0.875rem;
  border-radius: 9999px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.muted};
  border: 1px solid ${({ theme }) => theme.border};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary}66;
  }
`

const ContentCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const RoleLabel = styled.span`
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 500;
  font-family: var(--font-mono, 'Geist Mono', monospace);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  padding: 0.3rem 0.875rem;
  border: 1px solid ${({ theme }) => theme.primary}44;
  border-radius: 9999px;
  background: ${({ theme }) => theme.primary}12;
  width: fit-content;
`

const Name = styled.h1`
  font-family: var(--font-display, 'DM Serif Display', Georgia, serif);
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.01em;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

const Bio = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.8;
  color: ${({ theme }) => theme.foreground};
  margin: 0;
`

const TagsLabel = styled.p`
  font-size: 0.7rem;
  font-weight: 500;
  font-family: var(--font-mono, 'Geist Mono', monospace);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.muted};
  margin: 0 0 0.625rem;
`

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const SkillTag = styled.span`
  font-size: 0.75rem;
  font-family: var(--font-sans, 'Outfit', sans-serif);
  padding: 0.25rem 0.625rem;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 9999px;
  color: ${({ theme }) => theme.foreground};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary}88;
    color: ${({ theme }) => theme.primary};
  }
`

const StatsRow = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem 5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const StatCard = styled.div`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1.125rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}, #FBBF24);
  }
`

const StatNumber = styled.div`
  font-family: var(--font-display, 'DM Serif Display', Georgia, serif);
  font-size: 2.25rem;
  font-weight: 400;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, #FBBF24);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.25rem;
  line-height: 1.1;
`

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.muted};
  line-height: 1.5;
`

const skills = [
  "React Native", "Expo", "TypeScript", "JavaScript",
  "Next.js", "Astro", "App Store Connect", "Google Play",
  "EAS Build", "Zustand", "TanStack Query", "Node.js",
]

const socials = [
  { label: "TikTok", href: "https://www.tiktok.com/@laduquesadev" },
  { label: "Instagram", href: "https://www.instagram.com/laduquesadev/" },
  { label: "YouTube", href: "https://www.youtube.com/@laduquesadev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/laduquesadev/" },
  { label: "GitHub", href: "https://github.com/LaDuquesaDev" },
]

export default function BioPage() {
  const { t } = useLanguage()

  return (
    <BioMain>
      <Header />

      <ProfileSection>
        <PhotoCol>
          <PhotoWrapper>
            <Image
              src="/profile_pic_copia.webp"
              alt="Yulimar Duque"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
              priority
            />
          </PhotoWrapper>
          <SocialRow>
            {socials.map((s) => (
              <SocialPill key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </SocialPill>
            ))}
          </SocialRow>
        </PhotoCol>

        <ContentCol>
          <RoleLabel>React Native Developer</RoleLabel>
          <Name>Yulimar Duque</Name>
          <Bio>{t("about.bio1")}</Bio>
          <Bio>{t("about.bio2")}</Bio>
          <div>
            <TagsLabel>Stack actual</TagsLabel>
            <SkillTags>
              {skills.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </SkillTags>
          </div>
        </ContentCol>
      </ProfileSection>

      <StatsRow>
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
      </StatsRow>

      <Footer />
    </BioMain>
  )
}
