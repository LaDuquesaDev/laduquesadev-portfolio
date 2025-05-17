import { Button } from "@/shared/button"
import styled from "styled-components"

export const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;

  background-color: ${({ isScrolled, theme }) =>
    isScrolled ? theme.background : "transparent"};
  color: ${({ theme }) => theme.foreground};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none"};
`

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`

export const DesktopNav = styled.div`
  display: none;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    display: flex;
  }
`

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const NavLink = styled.a`
  color: ${({ theme }) => theme.foreground};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const ResumeButton = styled(Button).attrs({ variant: "outline", size: "lg" })``

export const MobileMenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  color: ${({ theme }) => theme.foreground};
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`

export const MobileMenu = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.border};

  @media (min-width: 768px) {
    display: none;
  }
`

export const MobileNavLinks = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MobileNavLink = styled.a`
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.foreground};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

export const MobileActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
`