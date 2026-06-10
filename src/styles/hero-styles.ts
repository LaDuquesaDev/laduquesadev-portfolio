import { Button } from "@/shared/button"
import styled, { keyframes } from "styled-components"

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`

export const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.92); }
  to { opacity: 1; transform: scale(1); }
`

export const bounce = keyframes`
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-8px); }
`

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem 5rem;
  position: relative;
  overflow: hidden;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  &::before {
    content: '';
    position: absolute;
    top: -20%;
    right: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10%;
    left: -5%;
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(196,136,30,0.08) 0%, transparent 70%);
    pointer-events: none;
  }
`

export const HeroContainer = styled.div`
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`

export const HeroContent = styled.div`
  animation: ${fadeIn} 0.6s ease forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  font-weight: 500;
  font-family: var(--font-mono, 'Geist Mono', monospace);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1.25rem;
`

export const HeroTitle = styled.h1`
  font-family: var(--font-display, 'DM Serif Display', Georgia, serif);
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.01em;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    font-size: 3.25rem;
  }

  em {
    font-style: normal;
    color: ${({ theme }) => theme.primary};
  }
`

export const HeroSubtitle = styled.p`
  font-family: var(--font-sans, 'Outfit', sans-serif);
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.75;
  color: ${({ theme }) => theme.muted};
  margin-bottom: 2rem;
  max-width: 520px;
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
`

export const PrimaryButton = styled(Button).attrs({ variant: "default", size: "lg" })`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primaryForeground};
  border: none;
  font-family: var(--font-sans, 'Outfit', sans-serif);
  font-weight: 500;
  letter-spacing: 0.01em;
  transition: all 0.3s ease;
  border-radius: 0.625rem;
  padding: 0.75rem 1.75rem;
  height: auto;

  &:hover {
    filter: brightness(0.88);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${({ theme }) => theme.primary}44;
  }
`

export const SecondaryButton = styled(Button).attrs({ variant: "outline", size: "lg" })`
  font-family: var(--font-sans, 'Outfit', sans-serif);
  font-weight: 400;
  transition: all 0.2s ease;
  border-radius: 0.625rem;
  padding: 0.75rem 1.75rem;
  height: auto;
  color: ${({ theme }) => theme.muted};
`

export const HeroTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1.75rem;
`

export const HeroTag = styled.span`
  font-size: 0.7rem;
  font-family: var(--font-sans, 'Outfit', sans-serif);
  padding: 0.3rem 0.75rem;
  border-radius: 9999px;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.muted};
  border: 1px solid ${({ theme }) => theme.border};
`

/* kept for compatibility */
export const HeroSocials = styled.div``
export const SocialIconLink = styled.a``
export const HeroImageContainer = styled.div``
export const ImageGlow = styled.div``
export const ImageWrapper = styled.div``
export const ScrollButton = styled.button``
