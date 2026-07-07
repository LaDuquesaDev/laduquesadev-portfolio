"use client"

import React from "react"
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

const CHECKOUT_URLS = {
  es: "https://laduquesadev.lemonsqueezy.com/checkout/buy/1783868",
  en: "https://laduquesadev.lemonsqueezy.com/checkout/buy/1783914",
}

export const Products = () => {
  const { t, language } = useLanguage()

  return (
    <ProductsSection id="products">
      <ProductsContainer>
        <ProductsHeader>
          <ProductsLabel>{t("products.label")}</ProductsLabel>
          <ProductsTitle>{t("products.title").split("\n").map((line, i) => i === 0 ? <React.Fragment key={i}>{line}<br /></React.Fragment> : line)}</ProductsTitle>
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

            <BuyButton onClick={() => { window.location.href = CHECKOUT_URLS[language] }}>
              {t("products.buyButton")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </BuyButton>

            <SecureNote>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 13a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7z" />
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
