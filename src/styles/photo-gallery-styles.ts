'use client'

import styled from "styled-components"
import { Button } from "@/shared/button"

export const GallerySection = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => `${theme.secondary}50`};
`

export const GalleryContainer = styled.div`
  max-width: 1200px;
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
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.muted};
  max-width: 36rem;
  margin: 0 auto;
`

export const CarouselContainer = styled.div<{ isVisible: boolean }>`
  position: relative;
  max-width: 64rem;
  margin: 0 auto;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(20px)")};
  transition: all 0.5s ease;
  transition-delay: 0.2s;
`

export const CarouselSlide = styled.div`
  position: relative;
  height: 30rem;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const SlideCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
`

export const SlideTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
`

export const SlideDate = styled.p`
  font-size: 0.875rem;
  opacity: 0.8;
`

export const PrevButton = styled(Button)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => `${theme.background}cc`};
  backdrop-filter: blur(4px);
`

export const NextButton = styled(Button)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => `${theme.background}cc`};
  backdrop-filter: blur(4px);
`

export const Indicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`

export const Indicator = styled.button<{ isActive: boolean }>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${({ isActive, theme }) => (isActive ? theme.primary : `${theme.muted}50`)};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ isActive, theme }) => (isActive ? theme.primary : theme.muted)};
  }
`