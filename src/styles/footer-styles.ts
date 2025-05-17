import styled from "styled-components"

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.background};
  border-top: 1px solid ${({ theme }) => theme.border};
  padding: 3rem 0;
`

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterLogo = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;

  span {
    color: ${({ theme }) => theme.primary};
  }
`

export const FooterDescription = styled.p`
  color: ${({ theme }) => theme.muted};
  max-width: 20rem;
`

export const FooterHeading = styled.h3`
  font-weight: 600;
  margin-bottom: 1rem;
`

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.muted};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.foreground};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

export const Copyright = styled.div`
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  text-align: center;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.muted};
`

export const FooterEmail = styled.a`
  color: ${({ theme }) => theme.muted};
  transition: color 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`
