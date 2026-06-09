export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo: string | null
}

export interface PhotoGallery {
  id: number
  url: string
  caption: string
  date: string
}

export interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}