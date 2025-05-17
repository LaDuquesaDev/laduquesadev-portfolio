"use client"

import Image from "next/image"
import { usePhotoGallery } from "@/hooks/usePhotoGallery"
import { CarouselContainer, CarouselSlide, GalleryContainer, GallerySection, Indicator, Indicators, NextButton, PrevButton, SectionHeader, SectionSubtitle, SectionTitle, SlideCaption, SlideDate, SlideTitle } from "@/styles/photo-gallery-styles"

export const PhotoGallery = () => {
    const { t, photos, currentIndex, isHeaderVisible, isCarouselVisible, isAnimating, goToSlide, prevSlide, nextSlide } =
      usePhotoGallery()
  
    return (
      <GallerySection id="gallery">
        <GalleryContainer>
          <SectionHeader isVisible={isHeaderVisible}>
            <SectionTitle>{t("gallery.title")}</SectionTitle>
            <SectionSubtitle>{t("gallery.subtitle")}</SectionSubtitle>
          </SectionHeader>
  
          <CarouselContainer isVisible={isCarouselVisible}>
            <CarouselSlide>
            {photos[currentIndex]?.url && (
              <Image
                src={photos[currentIndex].url}
                alt={photos[currentIndex].caption}
                fill
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            )}
              <SlideCaption>
                <SlideTitle>{photos[currentIndex].caption}</SlideTitle>
                <SlideDate>{photos[currentIndex].date}</SlideDate>
              </SlideCaption>
            </CarouselSlide>
  
            <PrevButton variant="ghost" onClick={prevSlide} disabled={isAnimating} aria-label="Previous photo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </PrevButton>
  
            <NextButton variant="ghost" onClick={nextSlide} disabled={isAnimating} aria-label="Next photo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </NextButton>
  
            <Indicators>
              {photos.map((_, index) => (
                <Indicator
                  key={index}
                  isActive={currentIndex === index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to photo ${index + 1}`}
                />
              ))}
            </Indicators>
          </CarouselContainer>
        </GalleryContainer>
      </GallerySection>
    )
  }