'use client'

import styled from "styled-components"

export const AboutSection = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => `${theme.secondary}80`};
`

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  transition: all 0.5s ease;
`

export const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.muted};
  max-width: 46rem;
  margin: 0 auto;
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Card = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.5s ease;
`

export const IconWrapper = styled.div`
  background-color: ${({ theme }) => `${theme.primary}10`};
  color: ${({ theme }) => theme.primary};
  width: fit-content;
  padding: 0.75rem;
  border-radius: 50%;
  margin-bottom: 1rem;
`

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
`

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.muted};
  margin-bottom: 1rem;
`

export const SkillsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const SkillDot = styled.span`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
`

export const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ExperienceItem = styled.div``

export const ExperienceTitle = styled.h4`
  font-weight: 500;
`

export const ExperienceCompany = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.muted};
`
