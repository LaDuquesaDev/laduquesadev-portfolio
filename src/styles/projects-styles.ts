import styled from "styled-components"

export const ProjectsSection = styled.section`
  padding: 6rem 0;
  position: relative;
`

export const ProjectsContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
`

export const SectionHeader = styled.div`
  margin-bottom: 4rem;
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
  font-size: 2.25rem;
  font-weight: 400;
  line-height: 1.15;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    font-size: 2.75rem;
  }
`

export const SectionSubtitle = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.muted};
  max-width: 480px;
  line-height: 1.7;
`

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ProjectCard = styled.div<{ isVisible: boolean; delay: number }>`
  background: ${({ theme }) => theme.background};
  border-radius: 1.125rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(24px)")};
  transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  transition-delay: ${({ delay }) => `${delay * 0.12}s`};

  &:hover {
    box-shadow: 0 12px 32px rgba(0,0,0,0.10);
    border-color: ${({ theme }) => theme.primary}55;
  }
`

export const ProjectImageArea = styled.div<{ hasEmoji?: boolean }>`
  position: relative;
  height: 180px;
  margin: 0.875rem 0.875rem 0;
  border-radius: 0.75rem;
  background: ${({ theme, hasEmoji }) =>
    hasEmoji
      ? `linear-gradient(135deg, ${theme.secondary} 0%, ${theme.border} 100%)`
      : theme.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  isolation: isolate;
  transform: translateZ(0);
`

export const ProjectEmoji = styled.span`
  font-size: 5rem;
  line-height: 1;
  user-select: none;
`

export const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
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
  line-height: 1.65;
  margin-bottom: 1.25rem;
  flex: 1;
`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
`

export const Tag = styled.span`
  font-size: 0.7rem;
  font-weight: 400;
  font-family: var(--font-mono, 'Geist Mono', monospace);
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  background: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.muted};
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`

export const ProjectLink = styled.a<{ variant?: "primary" | "outline" }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  font-weight: 500;
  font-family: var(--font-sans, 'Outfit', sans-serif);
  padding: 0.45rem 0.875rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;

  ${({ variant, theme }) =>
    variant === "primary"
      ? `
    background: ${theme.primary};
    color: ${theme.primaryForeground};
    border: 1px solid ${theme.primary};
    &:hover { filter: brightness(0.9); transform: translateY(-1px); }
  `
      : `
    background: transparent;
    color: ${theme.foreground};
    border: 1px solid ${theme.border};
    &:hover { border-color: ${theme.primary}88; color: ${theme.primary}; transform: translateY(-1px); }
  `}
`

export const ProjectImage = styled.div`
  position: relative;
  height: 180px;
`
