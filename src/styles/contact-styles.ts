import { Input } from "@/shared/input"
import { Textarea } from "@/shared/textarea"
import styled from "styled-components"

export const ContactSection = styled.section`
  padding: 5rem 0;
`

export const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

export const SectionHeader = styled.div<{ isVisible: boolean }>`
  text-align: center;
  margin-bottom: 4rem;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(20px)")};
  transition: all 0.5s ease;
`

export const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.muted};
  max-width: 36rem;
  margin: 0 auto;
`

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ContactInfo = styled.div<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? "translateX(0)" : "translateX(-20px)")};
  transition: all 0.5s ease;
  transition-delay: 0.2s;
`

export const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`

export const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`

export const IconWrapper = styled.div`
  background-color: ${({ theme }) => `${theme.primary}10`};
  color: ${({ theme }) => theme.primary};
  width: fit-content;
  padding: 0.75rem;
  border-radius: 50%;
`

export const ContactInfoContent = styled.div``

export const ContactInfoLabel = styled.h4`
  font-weight: 500;
  margin-bottom: 0.25rem;
`

export const ContactInfoValue = styled.a`
  color: ${({ theme }) => theme.muted};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

export const ContactInfoText = styled.p`
  color: ${({ theme }) => theme.muted};
`

export const ContactForm = styled.form<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? "translateX(0)" : "translateX(20px)")};
  transition: all 0.5s ease;
  transition-delay: 0.3s;
`

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

export const FormLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`

export const StyledInput = styled(Input)<{ hasError?: boolean }>`
  border-color: ${({ hasError, theme }) => (hasError ? "red" : theme.border)};
  
  &:focus {
    border-color: ${({ hasError, theme }) => (hasError ? "red" : theme.primary)};
  }
`

export const StyledTextarea = styled(Textarea)<{ hasError?: boolean }>`
  border-color: ${({ hasError, theme }) => (hasError ? "red" : theme.border)};
  
  &:focus {
    border-color: ${({ hasError, theme }) => (hasError ? "red" : theme.primary)};
  }
`