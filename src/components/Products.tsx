"use client"

import React, { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/hooks/useLanguage"
import { CHECKOUT_URLS } from "@/lib/checkout"
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
  ProductInfo,
  ProductBadge,
  ProductTitle,
  ProductDescription,
  ProductFeatures,
  ProductFeatureItem,
  PreviewGallery,
  PreviewGalleryLabel,
  PreviewThumbRow,
  PreviewThumb,
  Lightbox,
  LightboxImageWrap,
  LightboxClose,
  ProductPricing,
  ProductPriceTag,
  ProductPriceNote,
  DonationNote,
  BuyButton,
  SecureNote,
} from "@/styles/products-styles"

const COVER_IMAGES = {
  en: "/screenshots/your_app_in_the_stores.png",
  es: "/screenshots/tu_app_en_las_tiendas.png",
}

const PREVIEW_IMAGES = {
  en: [
    "/screenshots/captura_ingles_1.png",
    "/screenshots/captura_ingles_2.png",
    "/screenshots/captura_ingles_3.png",
  ],
  es: [
    "/screenshots/captura_español_1.png",
    "/screenshots/captura_español_2.png",
    "/screenshots/captura_español_3.png",
  ],
}

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Tu app en las tiendas",
  description: "Guía interactiva para publicar tu app en App Store y Google Play, paso a paso y basada en experiencia real, con checklist de revisión.",
  brand: { "@type": "Person", name: "Yulimar Duque" },
  offers: {
    "@type": "Offer",
    priceCurrency: "COP",
    price: "64000",
    availability: "https://schema.org/InStock",
    url: "https://checkout.wompi.co/l/WBMBMM",
  },
}

export const Products = () => {
  const { t, language } = useLanguage()
  const [openPreview, setOpenPreview] = useState<string | null>(null)
  const previewImages = PREVIEW_IMAGES[language]

  return (
    <ProductsSection id="products">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductsContainer>
        <ProductsHeader>
          <ProductsLabel>{t("products.label")}</ProductsLabel>
          <ProductsTitle>{t("products.title").split("\n").map((line, i) => i === 0 ? <React.Fragment key={i}>{line}<br /></React.Fragment> : line)}</ProductsTitle>
          <ProductsSubtitle>{t("products.subtitle")}</ProductsSubtitle>
        </ProductsHeader>

        <ProductCard>
          <BookMockup>
            <BookCover>
              <Image
                src={COVER_IMAGES[language]}
                alt={t("products.bookTitle")}
                fill
                style={{ objectFit: "cover", objectPosition: "left center" }}
              />
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

            <PreviewGallery>
              <PreviewGalleryLabel>{t("products.previewLabel")}</PreviewGalleryLabel>
              <PreviewThumbRow>
                {previewImages.map((src, i) => (
                  <PreviewThumb key={src} onClick={() => setOpenPreview(src)} aria-label={`${t("products.bookTitle")} — preview ${i + 1}`}>
                    <Image src={src} alt={`${t("products.bookTitle")} — preview ${i + 1}`} fill style={{ objectFit: "cover" }} />
                  </PreviewThumb>
                ))}
              </PreviewThumbRow>
            </PreviewGallery>

            <ProductPriceTag>{t("products.price")}</ProductPriceTag>

            <ProductPricing>
              <ProductPriceNote>{t("products.priceNote")}</ProductPriceNote>
            </ProductPricing>

            <DonationNote>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {t("products.donationNote")}
            </DonationNote>

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

      {openPreview && (
        <Lightbox onClick={() => setOpenPreview(null)}>
          <LightboxImageWrap onClick={(e) => e.stopPropagation()}>
            <Image src={openPreview} alt={t("products.bookTitle")} fill style={{ objectFit: "contain" }} />
            <LightboxClose onClick={() => setOpenPreview(null)} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </LightboxClose>
          </LightboxImageWrap>
        </Lightbox>
      )}

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </ProductsSection>
  )
}
