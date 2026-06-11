declare module "*.css" {
  const content: { [className: string]: string }
  export default content
}

import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    background: string
    backgroundAlt: string
    foreground: string
    primary: string
    primaryForeground: string
    secondary: string
    muted: string
    border: string
  }
}
