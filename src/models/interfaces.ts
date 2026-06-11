export interface Project {
  id: number
  title: string
  description: string
  description_es: string
  image: string | null
  emoji?: string
  technologies: string[]
  github?: string | null
  demo?: string | null
  ios?: string | null
  android?: string | null
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