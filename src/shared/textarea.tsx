"use client"

import React from "react"
import styled from "styled-components"

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  min-height: 10rem;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.muted};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  return <StyledTextarea ref={ref} {...props} />
})

Textarea.displayName = "Textarea"
