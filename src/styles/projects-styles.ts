import styled from "styled-components"

export const ProjectsSection = styled.section`
  padding: 5rem 0;
`

export const ProjectsContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
`

export const SectionHeader = styled.div<{ isVisible: boolean }>`
  text-align: center;
  margin-bottom: 4rem;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(20px)")};
  transition: all 0.5s ease;
`

export const SectionTitle = styled.h2`
  font-family: var(--font-display, 'DM Serif Display', Georgia, serif);
  font-size: 2.25rem;
  font-weight: 400;
  margin-bottom: 1rem;
`

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  font-weight: 300;
  color: ${({ theme }) => theme.muted};
  max-width: 36rem;
  margin: 0 auto;
`

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ProjectCard = styled.div<{ isVisible: boolean; delay: number }>`
  background-color: ${({ theme }) => theme.background};
  border-radius: 1.125rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(20px)")};
  transition: all 0.5s ease, box-shadow 0.3s ease;
  transition-delay: ${({ delay }) => `${delay * 0.1}s`};

  &:hover {
    box-shadow: 0 8px 25px rgba(0,0,0,0.10);
    border-color: ${({ theme }) => theme.primary}44;
  }
`

export const ProjectImage = styled.div`
  position: relative;
  height: 16rem;
`

export const ProjectContent = styled.div`
  padding: 1.5rem;
`

export const ProjectTitle = styled.h3`
  font-family: var(--font-display, 'DM Serif Display', Georgia, serif);
  font-size: 1.375rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`

export const ProjectDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.muted};
  margin-bottom: 1rem;
  line-height: 1.65;
`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

export const Tag = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  font-family: var(--font-sans, 'Outfit', sans-serif);
  padding: 0.25rem 0.625rem;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.foreground};
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`
