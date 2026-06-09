import styled from "styled-components"

export const HeaderContainer = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;
  background-color: ${({ $isScrolled, theme }) =>
    $isScrolled ? `${theme.background}f2` : "transparent"};
  backdrop-filter: ${({ $isScrolled }) => ($isScrolled ? "blur(16px)" : "none")};
  border-bottom: ${({ $isScrolled, theme }) =>
    $isScrolled ? `1px solid ${theme.border}` : "1px solid transparent"};
  box-shadow: ${({ $isScrolled }) => ($isScrolled ? "0 2px 4px rgba(0,0,0,0.10)" : "none")};
`

export const HeaderContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.span`
  font-family: var(--font-display, 'DM Serif Display', Georgia, serif);
  font-size: 1.25rem;
  font-weight: 400;
  font-style: italic;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.foreground};

  span {
    color: ${({ theme }) => theme.primary};
    font-style: normal;
  }
`

export const DesktopNav = styled.div`
  display: none;
  align-items: center;
  gap: 2.5rem;

  @media (min-width: 768px) {
    display: flex;
  }
`

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const NavLink = styled.a`
  font-family: var(--font-sans, 'Outfit', sans-serif);
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.muted};
  transition: color 0.3s ease;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.foreground};
  }
`

export const PortfolioTabLink = styled.a`
  font-family: var(--font-sans, 'Outfit', sans-serif);
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  padding: 0.375rem 1rem;
  border: 1px solid ${({ theme }) => theme.primary}55;
  border-radius: 9999px;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.primary}18;
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const ResumeButton = styled.a`
  font-family: var(--font-sans, 'Outfit', sans-serif);
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.5rem 1.25rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.primary};
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(0.88);
    transform: translateY(-1px);
    color: #ffffff;
  }
`

export const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.foreground};
  cursor: pointer;
  padding: 0.25rem;

  @media (min-width: 768px) {
    display: none;
  }
`

export const MobileMenu = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  backdrop-filter: blur(16px);

  @media (min-width: 768px) {
    display: none;
  }
`

export const MobileNavLinks = styled.nav`
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const MobileNavLink = styled.a`
  padding: 0.75rem 0;
  font-family: var(--font-sans, 'Outfit', sans-serif);
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.foreground};
  transition: color 0.2s ease;
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  &:last-of-type { border-bottom: none; }
  &:hover { color: ${({ theme }) => theme.primary}; }
`

export const MobileActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0 0.25rem;
`
