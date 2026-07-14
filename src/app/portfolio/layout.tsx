import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Apps móviles construidas y publicadas por Yulimar Duque — React Native, App Store y Google Play.",
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
