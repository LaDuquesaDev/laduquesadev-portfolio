import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bio",
  description: "Yulimar Duque · React Native Developer. Enlaces, redes y la guía Tu app en las tiendas.",
}

export default function BioLayout({ children }: { children: React.ReactNode }) {
  return children
}
