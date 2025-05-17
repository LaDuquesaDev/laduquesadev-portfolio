"use client"

import type React from "react"
import Link from "next/link"
import { useFooter } from "@/hooks/useFooter"
import { Copyright, FooterContainer, FooterContent, FooterDescription, FooterEmail, FooterGrid, FooterHeading, FooterLink, FooterLogo, FooterNav, FooterSection, SocialLink, SocialLinks } from "@/styles/footer-styles"


export const Footer = () => {
  const { t, currentYear } = useFooter()

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <FooterLogo>
              <span>Portfolio</span>
            </FooterLogo>
            <FooterDescription>{t("footer.description")}</FooterDescription>
          </FooterSection>

          <FooterSection>
            <FooterHeading>{t("footer.navigation")}</FooterHeading>
            <FooterNav>
              <Link href="#about" passHref>
                <FooterLink>{t("nav.about")}</FooterLink>
              </Link>
              <Link href="#projects" passHref>
                <FooterLink>{t("nav.projects")}</FooterLink>
              </Link>
              <Link href="#gallery" passHref>
                <FooterLink>{t("nav.gallery")}</FooterLink>
              </Link>
              {/* <Link href="#contact" passHref>
                <FooterLink>{t("nav.contact")}</FooterLink>
              </Link> */}
            </FooterNav>
          </FooterSection>

          <FooterSection>
            <FooterHeading>{t("footer.connect")}</FooterHeading>
            <SocialLinks>
              <SocialLink href="https://github.com/LaDuquesaDev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/laduquesadev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </SocialLink>
              <SocialLink href="https://www.instagram.com/laduquesadev/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </SocialLink>
              <SocialLink href="https://www.youtube.com/@laduquesadev" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </SocialLink>
              {/* <SocialLink href="https://x.com/laduquesadev" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </SocialLink> */}
            </SocialLinks>
              <FooterEmail>{<SocialLink href="mailto:laduquesadev@gmail">laduquesadev@gmail.com</SocialLink>}</FooterEmail>
          </FooterSection>
        </FooterGrid>

        <Copyright>
          <p>
            © {currentYear} Portfolio. {t("footer.rights")}
          </p>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  )
}
