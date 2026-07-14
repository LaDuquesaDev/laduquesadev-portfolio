import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tu app en las tiendas — Guía digital",
  description: "Guía interactiva para publicar tu app en App Store y Google Play, paso a paso y basada en experiencia real, con checklist de revisión.",
}

export default function GuiaLayout({ children }: { children: React.ReactNode }) {
  return children
}
