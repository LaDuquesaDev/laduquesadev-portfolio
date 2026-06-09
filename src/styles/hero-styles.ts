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

const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7rem 2rem 5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -20%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10%;
    left: -5%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(196,136,30,0.10) 0%, transparent 70%);
    pointer-events: none;
  }
`

export const HeroContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (min-width: 860px) {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 5rem;
  }
`

export const HeroContent = styled.div`
  animation: ${fadeIn} 0.6s ease forwards;
`

export const HeroLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  font-family: var(--font-mono, 'Geist Mono', monospace);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1.5rem;
  padding: 0.35rem 1rem;
  border: 1px solid ${({ theme }) => theme.primary}55;
  border-radius: 9999px;
  background: ${({ theme }) => theme.primary}14;
`

export const HeroTitle = styled.h1`
  font-family: var(--font-display, 'DM Serif Display', Georgia, serif);
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.01em;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 5rem;
  }

  em {
    font-style: normal;
    color: ${({ theme }) => theme.primary};
  }
`

export const HeroSubtitle = styled.p`
  font-family: var(--font-sans, 'Outfit', sans-serif);
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.75;
  color: ${({ theme }) => theme.muted};
  margin-bottom: 2.5rem;
  max-width: 480px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
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
  padding: 0.875rem 2rem;
  height: auto;
  min-width: 10rem;

  &:hover {
    filter: brightness(0.88);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${({ theme }) => theme.primary}44;
  }
`

export const SecondaryButton = styled(Button).attrs({ variant: "outline", size: "lg" })`
  font-family: var(--font-sans, 'Outfit', sans-serif);
  font-weight: 500;
  transition: all 0.2s ease;
  border-radius: 0.625rem;
  padding: 0.875rem 2rem;
  height: auto;
  min-width: 10rem;
`

export const HeroSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`

export const SocialIconLink = styled.a`
  color: ${({ theme }) => theme.muted};
  display: flex;
  align-items: center;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }
`

export const HeroImageContainer = styled.div`
  position: relative;
  animation: ${scaleIn} 0.7s ease 0.1s both;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImageGlow = styled.div`
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, rgba(245,158,11,0.20) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(40px);
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  overflow: hidden;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 25px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06);

  @media (min-width: 768px) {
    width: 420px;
    height: 420px;
  }

  @media (max-width: 480px) {
    width: 240px;
    height: 240px;
  }
`

export const ScrollButton = styled.button`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.muted};
  animation: ${bounce} 2s infinite;
  opacity: 0.6;
  transition: opacity 0.2s ease;

  &:hover { opacity: 1; }
`
