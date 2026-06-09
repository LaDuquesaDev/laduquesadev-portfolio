import styled, { keyframes } from "styled-components"

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(-2deg); }
  50% { transform: translateY(-12px) rotate(-2deg); }
`

export const ProductsSection = styled.section`
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => `${theme.secondary}80`};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at 20% 50%, rgba(245,158,11,0.12) 0%, transparent 60%),
                radial-gradient(ellipse at 80% 50%, rgba(196,136,30,0.06) 0%, transparent 60%);
    pointer-events: none;
  }
`

export const ProductsContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
`

export const ProductsHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

export const ProductsLabel = styled.span`
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 500;
  font-family: var(--font-mono, 'Geist Mono', monospace);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
  padding: 0.3rem 0.875rem;
  border: 1px solid ${({ theme }) => theme.primary}44;
  border-radius: 9999px;
  background: ${({ theme }) => theme.primary}12;
`

export const ProductsTitle = styled.h2`
  font-family: var(--font-display, 'DM Serif Display', Georgia, serif);
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.15;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

export const ProductsSubtitle = styled.p`
  font-size: 1.125rem;
  font-weight: 300;
  color: ${({ theme }) => theme.muted};
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.7;
`

export const ProductCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1.125rem;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.10);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 4rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 10%;
    right: 10%;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.primary}, #FBBF24, transparent);
  }
`

export const BookMockup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BookCover = styled.div`
  width: 200px;
  height: 280px;
  background: linear-gradient(135deg, #C4881E 0%, #F59E0B 100%);
  border-radius: 8px 16px 16px 8px;
  box-shadow: -8px 0 0 #00000030, -12px 4px 20px #00000040, 20px 20px 40px rgba(196,136,30,0.30);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  animation: ${float} 4s ease-in-out infinite;
  position: relative;
  cursor: default;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 12px;
    background: rgba(0,0,0,0.25);
    border-radius: 8px 0 0 8px;
  }

  @media (min-width: 768px) {
    width: 240px;
    height: 320px;
  }
`

export const BookEmoji = styled.div`
  font-size: 3rem;
  text-align: center;
`

export const BookTitleText = styled.div`
  color: #ffffff;
  text-align: center;

  h3 {
    font-family: var(--font-display, 'DM Serif Display', Georgia, serif);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.7rem;
    opacity: 0.85;
    font-family: var(--font-sans, 'Outfit', sans-serif);
  }
`

export const ProductInfo = styled.div``

export const ProductBadge = styled.span`
  display: inline-block;
  font-family: var(--font-mono, 'Geist Mono', monospace);
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: ${({ theme }) => theme.primary}20;
  color: ${({ theme }) => theme.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 9999px;
  margin-bottom: 1rem;
`

export const ProductTitle = styled.h3`
  font-family: var(--font-display, 'DM Serif Display', Georgia, serif);
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`

export const ProductDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  color: ${({ theme }) => theme.muted};
  margin-bottom: 1.5rem;
`

export const ProductFeatures = styled.ul`
  list-style: none;
  margin: 0 0 2rem 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`

export const ProductFeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.foreground};

  &::before {
    content: '✦';
    color: ${({ theme }) => theme.primary};
    font-size: 0.65rem;
    flex-shrink: 0;
  }
`

export const ProductPricing = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`

export const ProductPrice = styled.span`
  font-family: var(--font-display, 'DM Serif Display', Georgia, serif);
  font-size: 2.5rem;
  font-weight: 400;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, #FBBF24);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export const ProductPriceNote = styled.span`
  font-family: var(--font-mono, 'Geist Mono', monospace);
  font-size: 0.75rem;
  color: ${({ theme }) => theme.muted};
`

export const BuyButton = styled.button`
  width: 100%;
  padding: 0.875rem 2rem;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primaryForeground};
  border: none;
  border-radius: 0.625rem;
  font-family: var(--font-sans, 'Outfit', sans-serif);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover:not(:disabled) {
    filter: brightness(0.88);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${({ theme }) => theme.primary}44;
  }

  &:active { transform: translateY(0); }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    width: auto;
    min-width: 220px;
  }
`

export const SecureNote = styled.p`
  font-family: var(--font-mono, 'Geist Mono', monospace);
  font-size: 0.7rem;
  color: ${({ theme }) => theme.muted};
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`
