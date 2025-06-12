"use client"

import type React from "react"
import Image from "next/image"
import { useProjects } from "@/hooks/useProjects"
import { ButtonGroup, ProjectCard, ProjectContent, ProjectDescription, ProjectImage, ProjectsContainer, ProjectsGrid, ProjectsSection, ProjectTitle, SectionHeader, SectionSubtitle, SectionTitle, Tag, TagsContainer } from "@/styles/projects-styles"
import { projects } from "@/mocks"

export const Projects = () => {
  const { t, isHeaderVisible, isProjectsVisible } = useProjects()

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionHeader isVisible={isHeaderVisible}>
          <SectionTitle>{t("projects.title")}</SectionTitle>
          <SectionSubtitle>{t("projects.subtitle")}</SectionSubtitle>
        </SectionHeader>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} isVisible={isProjectsVisible} delay={index}>
              <ProjectImage>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TagsContainer>
                  {project.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </TagsContainer>
                <ButtonGroup>
                    <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline btn-sm"
                  >
                    GitHub
                  </a>
                  {project.demo && (
                  <a href={project.demo || ""} target="_blank" rel="noopener noreferrer" className="btn-outline btn-sm">
                    Live Demo
                  </a>
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