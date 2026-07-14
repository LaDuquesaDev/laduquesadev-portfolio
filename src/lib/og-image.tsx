import { ImageResponse } from "next/og"

export const ogImageSize = { width: 1200, height: 630 }
export const ogImageContentType = "image/png"

interface OgImageContent {
  eyebrow: string
  title: string
  description: string
}

const defaultContent: OgImageContent = {
  eyebrow: "LaDuquesaDev",
  title: "Yulimar Duque",
  description: "React Native Developer · Construyo apps móviles de cero a producción",
}

export function renderOgImage(content: OgImageContent = defaultContent) {
  const { eyebrow, title, description } = content

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "hsl(27, 100%, 3%)",
          backgroundImage:
            "radial-gradient(circle at 85% 30%, hsla(38, 93%, 50%, 0.25), transparent 55%)",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "hsl(38, 93%, 50%)",
            marginBottom: 24,
            display: "flex",
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "hsl(38, 31%, 94%)",
            lineHeight: 1.1,
            marginBottom: 28,
            display: "flex",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 32,
            color: "hsl(28, 30%, 70%)",
            maxWidth: 820,
            lineHeight: 1.4,
            display: "flex",
          }}
        >
          {description}
        </div>
        <div
          style={{
            marginTop: 48,
            width: 120,
            height: 6,
            borderRadius: 3,
            backgroundColor: "hsl(38, 93%, 50%)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...ogImageSize }
  )
}
