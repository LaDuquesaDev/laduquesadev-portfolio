import type { Metadata } from "next";
import { DM_Serif_Display, Outfit, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "LaDuquesaDev",
  description: "React Native Developer · Construyo apps móviles de cero a producción y comparto lo que aprendo.",
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
          <StyledComponentsRegistry>
            <ThemeProvider>
              <LanguageProvider>
                {children}
              </LanguageProvider>
            </ThemeProvider>
          </StyledComponentsRegistry>
      </body>
    </html>
  );
}
