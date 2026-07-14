import type { Metadata } from "next";
import { DM_Serif_Display, Outfit, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import StyledComponentsRegistry from "./registry";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.laduquesadev.com";
const description = "React Native Developer · Construyo apps móviles de cero a producción y comparto lo que aprendo.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LaDuquesaDev — Yulimar Duque",
    template: "%s · LaDuquesaDev",
  },
  description,
  openGraph: {
    title: "LaDuquesaDev — Yulimar Duque",
    description,
    url: siteUrl,
    siteName: "LaDuquesaDev",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaDuquesaDev — Yulimar Duque",
    description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yulimar Duque",
  url: siteUrl,
  jobTitle: "React Native Developer",
  sameAs: [
    "https://github.com/LaDuquesaDev",
    "https://www.linkedin.com/in/laduquesadev/",
    "https://www.instagram.com/laduquesadev/",
    "https://www.youtube.com/@laduquesadev",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${dmSerifDisplay.variable} ${outfit.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          />
          <StyledComponentsRegistry>
            <ThemeProvider>
              <LanguageProvider>
                {children}
              </LanguageProvider>
            </ThemeProvider>
          </StyledComponentsRegistry>
          <Analytics />
      </body>
    </html>
  );
}
