"use client"

import Link from "next/link"
import { useHeader } from "./../hooks/useHeader"
import { ThemeToggle } from "@/components/ui/theme-toggle/theme-toggle"
import { LanguageSwitch } from "@/components/ui/language-switch/language-switch"
import { ActionButtons, DesktopNav, HeaderContainer, HeaderContent, Logo, MobileActions, MobileMenu, MobileMenuButton, MobileNavLink, MobileNavLinks, NavLink, NavLinks, ResumeButton } from "@/styles/header-styles"

export const Header = () => {
  const { t, isScrolled, isMobileMenuOpen, toggleMobileMenu } = useHeader()

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <HeaderContent>
        <Link href="/" passHref>
          <Logo>Portfolio</Logo>
        </Link>

        <DesktopNav>
          <NavLinks>
            <NavLink href="#about">{t("nav.about")}</NavLink>
            <NavLink href="#projects">{t("nav.projects")}</NavLink>
            <NavLink href="#gallery">{t("nav.gallery")}</NavLink>
            {/* <NavLink href="#contact">{t("nav.contact")}</NavLink> */}
          </NavLinks>

          <ActionButtons>
            <ThemeToggle />
            <LanguageSwitch />
            <ResumeButton as="a" href="/files/CV_YULIMAR_DUQUE_FRONTEND.pdf" download>
              {t("nav.resume")}
            </ResumeButton>
          </ActionButtons>
        </DesktopNav>

        <MobileMenuButton onClick={toggleMobileMenu} aria-label="Toggle menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </MobileMenuButton>
      </HeaderContent>

      {isMobileMenuOpen && (
        <MobileMenu>
          <MobileNavLinks>
            <MobileNavLink href="#about" onClick={toggleMobileMenu}>
              {t("nav.about")}
            </MobileNavLink>
            <MobileNavLink href="#projects" onClick={toggleMobileMenu}>
              {t("nav.projects")}
            </MobileNavLink>
            <MobileNavLink href="#gallery" onClick={toggleMobileMenu}>
              {t("nav.gallery")}
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMobileMenu}>
              {t("nav.contact")}
            </MobileNavLink>
            <MobileActions>
              <ThemeToggle />
              <LanguageSwitch />
              {/* <ResumeButton as="a" href="/files/CV_YULIMAR_DUQUE_FRONTEND.pdf" download>
                {t("nav.resume")}
              </ResumeButton> */}
            </MobileActions>
          </MobileNavLinks>
        </MobileMenu>
      )}
    </HeaderContainer>
  )
}
