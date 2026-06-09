'use client'

import styled, { keyframes } from "styled-components"

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

export const AboutSection = styled.section`
  padding: 5rem 0;
  position: relative;
  background-color: ${({ theme }) => `${theme.secondary}80`};
`

export const AboutContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
`

export const SectionHeader = styled.div`
  margin-bottom: 4rem;
  transition: all 0.5s ease;
`

export const SectionLabel = styled.span`
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 500;
  font-family: var(--font-mono, 'Geist Mono', monospace);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.75rem;
  padding: 0.3rem 0.875rem;
  border: 1px solid ${({ theme }) => theme.primary}44;
  border-radius: 9999px;
  background: ${({ theme }) => theme.primary}12;
`

export const SectionTitle = styled.h2`
  font-family: var(--font-display, 'DM Serif Display', Georgia, serif);
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.01em;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.muted};
  max-width: 46rem;
  line-height: 1.75;
`

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 0.8fr;
    gap: 5rem;
  }
`

export const AboutText = styled.div`
  animation: ${fadeUp} 0.6s ease forwards;
`

export const AboutBio = styled.p`
  font-size: 1.05rem;
  font-weight: 400;
  line-height: 1.8;
  color: ${({ theme }) => theme.foreground};
  margin-bottom: 1.5rem;
`

export const AboutTagsLabel = styled.p`
  font-size: 0.7rem;
  font-weight: 500;
  font-family: var(--font-mono, 'Geist Mono', monospace);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.muted};
  margin-bottom: 0.75rem;
`

export const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const SkillTag = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  font-family: var(--font-sans, 'Outfit', sans-serif);
  padding: 0.25rem 0.625rem;
  background: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 9999px;
  color: ${({ theme }) => theme.foreground};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary}88;
    background: ${({ theme }) => theme.primary}14;
    color: ${({ theme }) => theme.primary};
  }
`

export const AboutAside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const StatCard = styled.div`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1.125rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);

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

export const StatNumber = styled.div`
  font-family: var(--font-display, 'DM Serif Display', Georgia, serif);
  font-size: 2.25rem;
  font-weight: 400;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, #FBBF24);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.25rem;
  line-height: 1.1;
`

export const StatLabel = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.muted};
  line-height: 1.5;
`

/* Kept for compatibility with portfolio page */
export const CardGrid = styled.div``
export const Card = styled.div``
export const IconWrapper = styled.div``
export const CardTitle = styled.h3``
export const CardDescription = styled.p``
export const SkillsList = styled.ul``
export const SkillItem = styled.li``
export const SkillDot = styled.span``
export const ExperienceList = styled.div``
export const ExperienceItem = styled.div``
export const ExperienceTitle = styled.h4``
export const ExperienceCompany = styled.p``
