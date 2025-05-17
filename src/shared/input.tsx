"use client"

import React from "react"
import styled from "styled-components"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
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

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <StyledInput ref={ref} {...props} />
})

Input.displayName = "Input"
