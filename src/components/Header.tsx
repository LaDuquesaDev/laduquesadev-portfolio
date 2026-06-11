"use client"

import Link from "next/link"
import { useHeader } from "./../hooks/useHeader"
import { ThemeToggle } from "@/components/ui/theme-toggle/theme-toggle"
import { LanguageSwitch } from "@/components/ui/language-switch/language-switch"
import {
  ActionButtons,
  DesktopNav,
  HeaderContainer,
  HeaderContent,
  Logo,
  MobileActions,
  MobileMenu,
  MobileMenuButton,
  MobileNavLink,
  MobileNavLinks,
  NavLink,
  NavLinks,
} from "@/styles/header-styles"

export const Header = () => {
  const { t, isScrolled, isMobileMenuOpen, toggleMobileMenu } = useHeader()

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <HeaderContent>
        <Link href="/" passHref>
          <Logo>La<span>Duquesa</span>Dev</Logo>
        </Link>

        <DesktopNav>
          <NavLinks>
            {/* <NavLink href="/#products">{t("nav.products")}</NavLink> */}
            <NavLink href="/#gallery">{t("nav.gallery")}</NavLink>
            <NavLink href="/#about">{t("nav.about")}</NavLink>
          </NavLinks>

          <ActionButtons>
            <ThemeToggle />
            <LanguageSwitch />
            {/* <PortfolioTabLink href="/portfolio">{t("nav.portfolio")}</PortfolioTabLink> */}
          </ActionButtons>
        </DesktopNav>

        <MobileMenuButton onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </MobileMenuButton>
      </HeaderContent>

      {isMobileMenuOpen && (
        <MobileMenu>
          <MobileNavLinks>
            {/* <MobileNavLink href="/#products" onClick={toggleMobileMenu}>{t("nav.products")}</MobileNavLink> */}
            <MobileNavLink href="/#gallery" onClick={toggleMobileMenu}>{t("nav.gallery")}</MobileNavLink>
            <MobileNavLink href="/#about" onClick={toggleMobileMenu}>{t("nav.about")}</MobileNavLink>
            {/* <MobileNavLink href="/portfolio" onClick={toggleMobileMenu}>{t("nav.portfolio")}</MobileNavLink> */}
            <MobileActions>
              <ThemeToggle />
              <LanguageSwitch />
            </MobileActions>
          </MobileNavLinks>
        </MobileMenu>
      )}
    </HeaderContainer>
  )
}
