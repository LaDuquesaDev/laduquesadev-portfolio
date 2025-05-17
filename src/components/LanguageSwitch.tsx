"use client"

import type React from "react"
import styled from "styled-components"
import { useLanguageSwitch } from "../hooks/useLanguageSwitch"

const LanguageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`

export const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguageSwitch()

  return (
    <LanguageButton onClick={toggleLanguage} className="font-medium">
      {language === "en" ? "ES" : "EN"}
    </LanguageButton>
  )
}
