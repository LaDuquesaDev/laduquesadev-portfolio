'use client'

import type React from "react"
import { useAbout } from "@/hooks/useAbout"
import {
  AboutSection,
  AboutContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  CardGrid,
  Card,
  IconWrapper,
  CardTitle,
  CardDescription,
  SkillsList,
  SkillItem,
  SkillDot,
  ExperienceList,
  ExperienceItem,
  ExperienceTitle,
  ExperienceCompany,
} from "./../styles/about-styles"

export const About = () => {
    
  const { t, isHeaderVisible, isCardsVisible, sectionRef } = useAbout()

  return (
    <AboutSection id="about" ref={sectionRef}>
      <AboutContainer>
        <SectionHeader style={{ opacity: isHeaderVisible ? 1 : 0, transform: isHeaderVisible ? "translateY(0)" : "translateY(20px)" }}>
          <SectionTitle>{t("about.title")}</SectionTitle>
          <SectionSubtitle>{t("about.subtitle")}</SectionSubtitle>
        </SectionHeader>

        <CardGrid>
          {/* Skills Card */}
          <Card style={{ opacity: isCardsVisible ? 1 : 0, transform: isCardsVisible ? "translateY(0)" : "translateY(20px)", transitionDelay: "0.2s" }}>
            <IconWrapper>
              {/* ...icon... */}
            </IconWrapper>
            <CardTitle>{t("about.skills.title")}</CardTitle>
            <CardDescription>{t("about.skills.description")}</CardDescription>
            <SkillsList>
              <SkillItem>
                <SkillDot />
                <span>JavaScript, TypeScript, React</span>
              </SkillItem>
              <SkillItem>
                <SkillDot />
                <span>Next.js, Node.js, Express</span>
              </SkillItem>
              <SkillItem>
                <SkillDot />
                <span>Git, GitHub, Jira, Firebase</span>
              </SkillItem>
              <SkillItem>
                <SkillDot />
                <span>UI/UX Design, Figma, Agile/Scrum</span>
              </SkillItem>
            </SkillsList>
          </Card>

          {/* Experience Card */}
          <Card style={{ opacity: isCardsVisible ? 1 : 0, transform: isCardsVisible ? "translateY(0)" : "translateY(20px)", transitionDelay: "0.2s" }}>
            <IconWrapper>
              {/* ...icon... */}
            </IconWrapper>
            <CardTitle>{t("about.experience.title")}</CardTitle>
            <CardDescription>{t("about.experience.description")}</CardDescription>
            <ExperienceList>
              <ExperienceItem>
                <ExperienceTitle>{t("about.experience.thirdJob.title")}</ExperienceTitle>
                <ExperienceCompany>{t("about.experience.thirdJob.subtitle")}</ExperienceCompany>
              </ExperienceItem>
              <ExperienceItem>
                <ExperienceTitle>{t("about.experience.secondJob.title")}</ExperienceTitle>
                <ExperienceCompany>{t("about.experience.secondJob.subtitle")}</ExperienceCompany>
              </ExperienceItem>
              <ExperienceItem>
                <ExperienceTitle>{t("about.experience.firstJob.title")}</ExperienceTitle>
                <ExperienceCompany>{t("about.experience.firstJob.subtitle")}</ExperienceCompany>
              </ExperienceItem>
            </ExperienceList>
          </Card>

          {/* Education Card */}
          <Card style={{ opacity: isCardsVisible ? 1 : 0, transform: isCardsVisible ? "translateY(0)" : "translateY(20px)", transitionDelay: "0.2s" }}>
            <IconWrapper>
              {/* ...icon... */}
            </IconWrapper>
            <CardTitle>{t("about.education.title")}</CardTitle>
            <CardDescription>{t("about.education.description")}</CardDescription>
            <ExperienceList>
              <ExperienceItem>
                <ExperienceTitle>{t("about.education.secondDegree.title")}</ExperienceTitle>
                <ExperienceCompany>{t("about.education.secondDegree.subtitle")}</ExperienceCompany>
              </ExperienceItem>
              <ExperienceItem>
                <ExperienceTitle>{t("about.education.firstDegree.title")}</ExperienceTitle>
                <ExperienceCompany>{t("about.education.firstDegree.subtitle")}</ExperienceCompany>
              </ExperienceItem>
            </ExperienceList>
          </Card>
        </CardGrid>
      </AboutContainer>
    </AboutSection>
  )
}
