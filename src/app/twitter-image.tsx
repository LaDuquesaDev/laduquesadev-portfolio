import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image"

export const size = ogImageSize
export const contentType = ogImageContentType

export default function TwitterImage() {
  return renderOgImage()
}
