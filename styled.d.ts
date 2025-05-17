import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
      background: string
      foreground: string
      primary: string
      secondary: string
      muted: string
      border: string
    }
  }