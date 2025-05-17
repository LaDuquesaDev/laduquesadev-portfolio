import { Button } from "@/shared/button"
import styled, { keyframes } from "styled-components"


export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 4rem;
`

export const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const HeroContent = styled.div`
  animation: ${fadeIn} 0.5s ease forwards;
`

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  span {
    color: ${({ theme }) => theme.primary};
  }
`

export const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.muted};

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

export const HeroDescription = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  max-width: 32rem;
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

export const PrimaryButton = styled(Button).attrs({ variant: "default", size: "lg" })``

export const SecondaryButton = styled(Button).attrs({ variant: "outline", size: "lg" })``

export const HeroImageContainer = styled.div`
  position: relative;
  animation: ${scaleIn} 0.5s ease 0.2s forwards;
  opacity: 0;
  aspect-ratio: 1;
  max-width: 500px;
  margin: 0 auto;
`

export const ImageGlow = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, ${({ theme }) => theme.primary}33 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(30px);
`

export const ImageWrapper = styled.div`
  position: relative;
  height: 400px;
  width: 400px;
  overflow: hidden;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
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
  color: ${({ theme }) => theme.foreground};
  animation: ${bounce} 2s infinite, ${fadeIn} 0.5s ease 0.5s forwards;
  opacity: 0;
`
