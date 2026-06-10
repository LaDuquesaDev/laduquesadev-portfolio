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
    top: -15%;
    right: -8%;
    width: 650px;
    height: 650px;
    background: radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 65%);
    pointer-events: none;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -8%;
    left: -4%;
    width: 450px;
    height: 450px;
    background: radial-gradient(circle, rgba(196,136,30,0.09) 0%, transparent 65%);
    pointer-events: none;
    z-index: 0;
  }
`

export const HeroDotGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle,
    ${({ theme }) => theme.border} 1px,
    transparent 1px
  );
  background-size: 28px 28px;
  -webkit-mask-image: radial-gradient(ellipse 85% 75% at 50% 45%, black 30%, transparent 100%);
  mask-image: radial-gradient(ellipse 85% 75% at 50% 45%, black 30%, transparent 100%);
  pointer-events: none;
  z-index: 0;
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

  @media (min-width: 900px) {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 5rem;
  }
`

export const HeroContent = styled.div`
  animation: ${fadeIn} 0.6s ease forwards;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
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
  padding: 0.35rem 0.875rem;
  border: 1px solid ${({ theme }) => theme.primary}44;
  border-radius: 9999px;
  background: ${({ theme }) => theme.primary}12;
`

export const HeroTitle = styled.h1`
  font-family: var(--font-display, 'DM Serif Display', Georgia, serif);
  font-size: 2.75rem;
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.01em;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }

  @media (min-width: 1100px) {
    font-size: 4.5rem;
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
  max-width: 480px;
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
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

export const HeroSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
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
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${scaleIn} 0.7s ease 0.1s both;

  @media (max-width: 899px) {
    display: none;
  }
`

export const ImageGlow = styled.div`
  position: absolute;
  inset: -30px;
  background: radial-gradient(ellipse at center, ${({ theme }) => theme.primary}30 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 320px;
  height: 400px;
  border-radius: 2rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);

  @media (min-width: 1100px) {
    width: 380px;
    height: 480px;
  }
`

export const ScrollButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.muted};
  cursor: pointer;
  animation: ${bounce} 2s ease-in-out infinite;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary}66;
  }
`

export const HeroTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
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
