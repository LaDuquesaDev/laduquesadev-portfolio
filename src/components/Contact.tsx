"use client"

import type React from "react"
import { useContact } from "@/hooks/useContact"
import { ContactContainer, ContactForm, ContactGrid, ContactInfo, ContactInfoContent, ContactInfoItem, ContactInfoLabel, ContactInfoList, ContactInfoText, ContactInfoTitle, ContactInfoValue, ContactSection, ErrorMessage, FormGroup, FormLabel, IconWrapper, SectionHeader, SectionSubtitle, SectionTitle, StyledInput, StyledTextarea } from "@/styles/contact-styles"
import { Button } from "@/shared/button"

export const Contact = () => {
  const { t, formData, formErrors, isSubmitting, isHeaderVisible, isContentVisible, handleChange, handleSubmit } =
    useContact()

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionHeader isVisible={isHeaderVisible}>
          <SectionTitle>{t("contact.title")}</SectionTitle>
          <SectionSubtitle>{t("contact.subtitle")}</SectionSubtitle>
        </SectionHeader>

        <ContactGrid>
          <ContactInfo isVisible={isContentVisible}>
            <ContactInfoTitle>{t("contact.getInTouch")}</ContactInfoTitle>
            <ContactInfoList>
              <ContactInfoItem>
                <IconWrapper>
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
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </IconWrapper>
                <ContactInfoContent>
                  <ContactInfoLabel>{t("contact.email")}</ContactInfoLabel>
                  <ContactInfoValue href="mailto:hello@example.com">hello@example.com</ContactInfoValue>
                </ContactInfoContent>
              </ContactInfoItem>

              <ContactInfoItem>
                <IconWrapper>
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </IconWrapper>
                <ContactInfoContent>
                  <ContactInfoLabel>{t("contact.phone")}</ContactInfoLabel>
                  <ContactInfoValue href="tel:+1234567890">+1 (234) 567-890</ContactInfoValue>
                </ContactInfoContent>
              </ContactInfoItem>

              <ContactInfoItem>
                <IconWrapper>
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
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </IconWrapper>
                <ContactInfoContent>
                  <ContactInfoLabel>{t("contact.location")}</ContactInfoLabel>
                  <ContactInfoText>San Francisco, CA</ContactInfoText>
                </ContactInfoContent>
              </ContactInfoItem>
            </ContactInfoList>
          </ContactInfo>

          <ContactForm isVisible={isContentVisible} onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="name">{t("contact.form.name")}</FormLabel>
              <StyledInput
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.form.namePlaceholder")}
                hasError={!!formErrors.name}
              />
              {formErrors.name && <ErrorMessage>{formErrors.name}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="email">{t("contact.form.email")}</FormLabel>
              <StyledInput
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.form.emailPlaceholder")}
                hasError={!!formErrors.email}
              />
              {formErrors.email && <ErrorMessage>{formErrors.email}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="subject">{t("contact.form.subject")}</FormLabel>
              <StyledInput
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t("contact.form.subjectPlaceholder")}
                hasError={!!formErrors.subject}
              />
              {formErrors.subject && <ErrorMessage>{formErrors.subject}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="message">{t("contact.form.message")}</FormLabel>
              <StyledTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.form.messagePlaceholder")}
                hasError={!!formErrors.message}
              />
              {formErrors.message && <ErrorMessage>{formErrors.message}</ErrorMessage>}
            </FormGroup>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
            </Button>
          </ContactForm>
        </ContactGrid>
      </ContactContainer>
    </ContactSection>
  )
}
