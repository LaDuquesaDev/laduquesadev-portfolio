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
  gap: 0.5rem;
  border-radius: 0.625rem;
  font-family: var(--font-sans, 'Outfit', sans-serif);
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ variant, theme }) => {
    switch (variant) {
      case "default":
        return css`
          background-color: ${theme.primary};
          color: ${theme.primaryForeground};
          border: none;
          &:hover:not(:disabled) {
            filter: brightness(0.88);
            transform: translateY(-2px);
          }
        `
      case "outline":
        return css`
          background-color: transparent;
          color: rgba(245,240,232,0.85);
          border: 1px solid rgba(245,240,232,0.25);
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
            background-color: rgba(255,255,255,0.06);
          }
        `
      case "link":
        return css`
          background-color: transparent;
          color: ${theme.primary};
          border: none;
          text-decoration: underline;
          border-radius: 0;
          padding: 0 0.25rem;
          &:hover:not(:disabled) {
            text-decoration: none;
          }
        `
    }
  }}

  ${({ size }) => {
    switch (size) {
      case "default":
        return css`
          height: 2.5rem;
          padding: 0 1rem;
          font-size: 0.875rem;
        `
      case "sm":
        return css`
          height: 2rem;
          padding: 0 0.75rem;
          font-size: 0.75rem;
          border-radius: 0.5rem;
        `
      case "lg":
        return css`
          height: 3rem;
          padding: 0 1.5rem;
          font-size: 1rem;
        `
      case "icon":
        return css`
          height: 2.5rem;
          width: 2.5rem;
          padding: 0;
          font-size: 1rem;
          border-radius: 50%;
        `
    }
  }}
`

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    return (
      <StyledButton variant={variant} size={size} ref={ref} {...props}>
        {children}
      </StyledButton>
    )
  },
)

Button.displayName = "Button"
