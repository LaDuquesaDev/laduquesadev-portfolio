import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image"

export const size = ogImageSize
export const contentType = ogImageContentType

export default function GuiaTwitterImage() {
  return renderOgImage({
    eyebrow: "LaDuquesaDev · Guía digital",
    title: "Tu app en las tiendas",
    description: "Publica en App Store y Google Play, paso a paso — con checklist de revisión.",
  })
}
