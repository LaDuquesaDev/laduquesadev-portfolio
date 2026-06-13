"use client"

import Image from "next/image"
import { useProjects } from "@/hooks/useProjects"
import { useLanguage } from "@/hooks/useLanguage"
import {
  ButtonGroup,
  ProjectCard,
  ProjectContent,
  ProjectDescription,
  ProjectEmoji,
  ProjectImageArea,
  ProjectLink,
  ProjectsContainer,
  ProjectsGrid,
  ProjectsSection,
  ProjectTitle,
  SectionHeader,
  SectionLabel,
  SectionSubtitle,
  SectionTitle,
  Tag,
  TagsContainer,
} from "@/styles/projects-styles"
import { projects } from "@/mocks"

export const Projects = () => {
  const { t, language } = useLanguage()
  const { isProjectsVisible } = useProjects()

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionHeader>
          <SectionLabel>{t("projects.label")}</SectionLabel>
          <SectionTitle>{t("projects.title")}</SectionTitle>
          <SectionSubtitle>{t("projects.subtitle")}</SectionSubtitle>
        </SectionHeader>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} isVisible={isProjectsVisible} delay={index}>
              <ProjectImageArea $hasEmoji={!!project.emoji}>
                {project.emoji ? (
                  <ProjectEmoji>{project.emoji}</ProjectEmoji>
                ) : project.image ? (
                  <div style={{ position: "relative", width: "calc(100% - 3rem)", height: "calc(100% - 3rem)", borderRadius: "0.5rem", overflow: "hidden" }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ) : null}
              </ProjectImageArea>

              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>
                  {language === "es" ? project.description_es : project.description}
                </ProjectDescription>
                <TagsContainer>
                  {project.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </TagsContainer>
                <ButtonGroup>
                  {project.ios && (
                    <ProjectLink href={project.ios} target="_blank" rel="noopener noreferrer" variant="primary">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      {t("projects.appStore")}
                    </ProjectLink>
                  )}
                  {project.android && (
                    <ProjectLink href={project.android} target="_blank" rel="noopener noreferrer" variant={project.ios ? "outline" : "primary"}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.523 15.341a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-9.046 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM2.893 7.3l1.94 3.47A5.3 5.3 0 0 0 4 12.8v5.9a1.3 1.3 0 0 0 1.3 1.3h.7v2.7a1.3 1.3 0 1 0 2.6 0V20h2.8v2.7a1.3 1.3 0 1 0 2.6 0V20h.7a1.3 1.3 0 0 0 1.3-1.3v-5.9c0-.54-.1-1.06-.27-1.55l1.95-3.46A1 1 0 0 0 16 7H8a1 1 0 0 0-.87.5l-.23.8zm5.6-5.26L7.24 0H4.76l1.27 2.27A8.1 8.1 0 0 0 3.7 4.9h16.6a8.1 8.1 0 0 0-2.33-2.63L19.24 0h-2.48l-1.27 2.04A8.2 8.2 0 0 0 12 1.5c-1.28 0-2.49.29-3.51.54z"/>
                      </svg>
                      {t("projects.googlePlay")}
                    </ProjectLink>
                  )}
                  {project.github && (
                    <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer" variant="primary">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      {t("projects.github")}
                    </ProjectLink>
                  )}
                  {project.demo && (
                    <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer" variant="outline">
                      {t("projects.liveDemo")}
                    </ProjectLink>
                  )}
                </ButtonGroup>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  )
}
