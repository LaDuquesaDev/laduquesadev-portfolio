import styled from "styled-components"

export const FooterContainer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.border};
  padding: 4rem 0 2rem;
  background-color: ${({ theme }) => theme.background};
`

export const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
`

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1.5fr 1fr 1fr;
  }
`

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterLogo = styled.div`
  font-family: var(--font-display, 'DM Serif Display', Georgia, serif);
  font-size: 1.25rem;
  font-weight: 400;
  font-style: italic;
  letter-spacing: 0.01em;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.foreground};

  span {
    color: ${({ theme }) => theme.primary};
    font-style: normal;
  }
`

export const FooterDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.muted};
  line-height: 1.7;
  max-width: 260px;
`

export const FooterHeading = styled.h3`
  font-family: var(--font-mono, 'Geist Mono', monospace);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.muted};
  margin-bottom: 1.25rem;
`

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const FooterLink = styled.a`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.foreground};
  transition: color 0.3s ease;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
`

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.muted};
  display: flex;
  align-items: center;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }
`

export const Copyright = styled.div`
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-family: var(--font-mono, 'Geist Mono', monospace);
  font-size: 0.75rem;
  color: ${({ theme }) => theme.muted};
`

export const FooterEmail = styled.a`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.muted};
  transition: color 0.3s ease;
  margin-top: 0.5rem;
  text-decoration: none;

  &:hover { color: ${({ theme }) => theme.primary}; }
`
