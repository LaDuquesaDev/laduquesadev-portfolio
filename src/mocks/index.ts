import { PhotoGallery, Project } from "@/models/interfaces";

export const projects: Project[] = [
  {
    id: 1,
    title: "Papora",
    description: "English learning app that makes practice intuitive and engaging — interactive lessons, vocabulary building, and real-time progress tracking designed for Spanish-speaking learners.",
    description_es: "App para aprender inglés que hace la práctica intuitiva y divertida — lecciones interactivas, construcción de vocabulario y seguimiento del progreso en tiempo real para hispanohablantes.",
    image: "/papora.webp",
    technologies: ["React Native", "TypeScript", "Expo"],
    ios: "https://apps.apple.com/us/app/papora-learn-english/id6760311437",
    ios_es: "https://apps.apple.com/co/app/papora-aprende-ingl%C3%A9s/id6760311437",
    android: "https://play.google.com/store/apps/details?id=com.papora.mobile&hl",
  },
  {
    id: 2,
    title: "Ruedata",
    description: "Integrated tire data management platform that delivers key performance indicators and action plans to maximize fleet efficiency and productivity.",
    description_es: "Plataforma integral de gestión de datos de neumáticos que entrega indicadores clave y planes de acción para maximizar la eficiencia y productividad de la flota.",
    image: "/ruedata.svg",
    technologies: ["React Native", "TypeScript"],
    android: "https://play.google.com/store/apps/details?id=com.ruemobile&hl=es_419",
  },
  {
    id: 3,
    title: "Popcorner",
    description: "Explore movies, discover details, and create your own watchlist — with a focus on code quality, scalable architecture, and a unique user experience.",
    description_es: "Explora películas, descubre detalles y crea tu lista de seguimiento — con foco en calidad de código, arquitectura escalable y experiencia de usuario única.",
    image: null,
    emoji: "🎬",
    technologies: ["React Native", "TypeScript", "Zustand", "TanStack Query"],
    github: "https://github.com/LaDuquesaDev/popcorner",
  },
]

  export const photos: PhotoGallery[] = [
    {
      id: 1,
      url: "/photo4.webp",
      caption: "Universidad EAFIT - Colombia",
      date: "Jan 2024",
    },
    {
      id: 2,
      url: "/photo2.webp",
      caption: "Universidad Pontificia Bolivariana de Medellin",
      date: "Oct 2024",
    },
    {
      id: 3,
      url: "/photo1.webp",
      caption: "Meetup ReactJS Colombia & MedellinJS Medellin",
      date: "June 2024",
    },
  ]