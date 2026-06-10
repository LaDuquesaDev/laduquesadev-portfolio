"use client"

import { useState } from "react"
import { useLanguage } from "@/hooks/useLanguage"
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
  const { t } = useLanguage()
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
        alert(t("products.errorPayment"))
      }
    } catch {
      alert(t("products.errorServer"))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ProductsSection id="products">
      <ProductsContainer>
        <ProductsHeader>
          <ProductsLabel>{t("products.label")}</ProductsLabel>
          <ProductsTitle>{t("products.title").split("\n").map((line, i) => i === 0 ? <>{line}<br /></> : line)}</ProductsTitle>
          <ProductsSubtitle>{t("products.subtitle")}</ProductsSubtitle>
        </ProductsHeader>

        <ProductCard>
          <BookMockup>
            <BookCover>
              <BookEmoji>📱</BookEmoji>
              <BookTitleText>
                <h3>{t("products.bookTitle")}</h3>
                <p>{t("products.bookAuthor")}</p>
              </BookTitleText>
            </BookCover>
          </BookMockup>

          <ProductInfo>
            <ProductBadge>{t("products.badge")}</ProductBadge>
            <ProductTitle>{t("products.bookTitle")}</ProductTitle>
            <ProductDescription>{t("products.description")}</ProductDescription>

            <ProductFeatures>
              <ProductFeatureItem>{t("products.feature1")}</ProductFeatureItem>
              <ProductFeatureItem>{t("products.feature2")}</ProductFeatureItem>
              <ProductFeatureItem>{t("products.feature3")}</ProductFeatureItem>
              <ProductFeatureItem>{t("products.feature4")}</ProductFeatureItem>
              <ProductFeatureItem>{t("products.feature5")}</ProductFeatureItem>
              <ProductFeatureItem>{t("products.feature6")}</ProductFeatureItem>
            </ProductFeatures>

            <ProductPricing>
              <ProductPrice>$19 USD</ProductPrice>
              <ProductPriceNote>{t("products.priceNote")}</ProductPriceNote>
            </ProductPricing>

            <BuyButton onClick={handleBuy} disabled={isLoading}>
              {isLoading ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin 1s linear infinite" }}>
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  {t("products.processing")}
                </>
              ) : (
                <>
                  {t("products.buyButton")}
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
              {t("products.secureNote")}
            </SecureNote>
          </ProductInfo>
        </ProductCard>
      </ProductsContainer>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </ProductsSection>
  )
}
