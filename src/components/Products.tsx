"use client"

import { useState } from "react"
import {
  ProductsSection,
  ProductsContainer,
  ProductsHeader,
  ProductsLabel,
  ProductsTitle,
  ProductsSubtitle,
  ProductCard,
  BookMockup,
  BookCover,
  BookEmoji,
  BookTitleText,
  ProductInfo,
  ProductBadge,
  ProductTitle,
  ProductDescription,
  ProductFeatures,
  ProductFeatureItem,
  ProductPricing,
  ProductPrice,
  ProductPriceNote,
  BuyButton,
  SecureNote,
} from "@/styles/products-styles"

export const Products = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleBuy = async () => {
    setIsLoading(true)
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert("Error al iniciar el pago. Inténtalo de nuevo.")
      }
    } catch {
      alert("Error al conectar con el servidor de pagos.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ProductsSection id="products">
      <ProductsContainer>
        <ProductsHeader>
          <ProductsLabel>Productos digitales</ProductsLabel>
          <ProductsTitle>Lo que he aprendido,<br />ahora está en tus manos</ProductsTitle>
          <ProductsSubtitle>
            Guías prácticas basadas en mi experiencia real publicando apps en producción.
          </ProductsSubtitle>
        </ProductsHeader>

        <ProductCard>
          <BookMockup>
            <BookCover>
              <BookEmoji>📱</BookEmoji>
              <BookTitleText>
                <h3>De cero a las tiendas</h3>
                <p>por Yulimar Duque</p>
              </BookTitleText>
            </BookCover>
          </BookMockup>

          <ProductInfo>
            <ProductBadge>Guía digital · PDF</ProductBadge>
            <ProductTitle>De cero a las tiendas</ProductTitle>
            <ProductDescription>
              Todo lo que necesitas saber para publicar tu app en App Store y Google Play — sin morir en el intento. Paso a paso, con capturas reales y los errores que cometí para que tú no los cometas.
            </ProductDescription>

            <ProductFeatures>
              <ProductFeatureItem>Configuración de App Store Connect y Google Play Console</ProductFeatureItem>
              <ProductFeatureItem>EAS Build: builds de producción con Expo</ProductFeatureItem>
              <ProductFeatureItem>Certificados, provisioning profiles y firmas de APK</ProductFeatureItem>
              <ProductFeatureItem>TestFlight y pruebas internas antes del lanzamiento</ProductFeatureItem>
              <ProductFeatureItem>Checklist de revisión antes de publicar</ProductFeatureItem>
              <ProductFeatureItem>Errores comunes y cómo resolverlos</ProductFeatureItem>
            </ProductFeatures>

            <ProductPricing>
              <ProductPrice>$19 USD</ProductPrice>
              <ProductPriceNote>Acceso inmediato · Descarga PDF</ProductPriceNote>
            </ProductPricing>

            <BuyButton onClick={handleBuy} disabled={isLoading}>
              {isLoading ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin 1s linear infinite" }}>
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  Procesando...
                </>
              ) : (
                <>
                  Comprar ahora — $19 USD
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </BuyButton>

            <SecureNote>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Pago seguro con Stripe · No almacenamos datos de tu tarjeta
            </SecureNote>
          </ProductInfo>
        </ProductCard>
      </ProductsContainer>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </ProductsSection>
  )
}
