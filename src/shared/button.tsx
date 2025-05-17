/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React from "react"
import styled, { css } from "styled-components"

type ButtonVariant = "default" | "outline" | "ghost" | "link"
type ButtonSize = "default" | "sm" | "lg" | "icon"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
  children: React.ReactNode
}

const StyledButton = styled.button<{
  variant: ButtonVariant
  size: ButtonSize
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  
  /* Handle disabled state */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Variant styles */
  ${({ variant, theme }) => {
    switch (variant) {
      case "default":
        return css`
          background-color: ${({ theme }) => theme.primary};
          color: white;
          border: none;
          
          &:hover:not(:disabled) {
            background-color: ${theme.primary}dd;
            transform: translateY(-2px);
          }
        `
      case "outline":
        return css`
          background-color: transparent;
          color: ${theme.foreground};
          border: 1px solid ${theme.border};
          
          &:hover:not(:disabled) {
            border-color: ${theme.primary};
            color: ${theme.primary};
            transform: translateY(-2px);
          }
        `
      case "ghost":
        return css`
          background-color: transparent;
          color: ${theme.foreground};
          border: none;
          
          &:hover:not(:disabled) {
            background-color: ${theme.secondary};
          }
        `
      case "link":
        return css`
          background-color: transparent;
          color: ${theme.primary};
          border: none;
          text-decoration: underline;
          
          &:hover:not(:disabled) {
            text-decoration: none;
          }
        `
    }
  }}

  /* Size styles */
  ${({ size }) => {
    switch (size) {
      case "default":
        return css`
          height: 2.5rem;
          padding: 0 1rem;
          font-size: 0.875rem;
          gap: 0.5rem;
        `
      case "sm":
        return css`
          height: 2rem;
          padding: 0 0.75rem;
          font-size: 0.75rem;
          gap: 0.25rem;
        `
      case "lg":
        return css`
          height: 3rem;
          padding: 0 1.5rem;
          font-size: 1rem;
          gap: 0.75rem;
        `
      case "icon":
        return css`
          height: 2.5rem;
          width: 2.5rem;
          padding: 0;
          font-size: 1rem;
        `
    }
  }}
`

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    // If asChild is true, we would typically clone the child element and pass props
    // For simplicity in this implementation, we'll just render the button
    return (
      <StyledButton variant={variant} size={size} ref={ref} {...props}>
        {children}
      </StyledButton>
    )
  },
)

Button.displayName = "Button"
