import { PhotoGallery, Project } from "@/models/interfaces";

export const projects: Project[] = [
  {
    id: 1,
    title: "La Duquesa Blog",
    description: "A blog built with Next.js, TypeScript, Astro, and Tailwind CSS.",
    image: "/laduquesa-blog.gif",
    technologies: ["Next.js", "TypeScript", "Astro", "Tailwind CSS"],
    github: "https://github.com/LaDuquesaDev/laduquesa-blog",
    demo: "https://laduquesa-blog.vercel.app/",
  },
  {
    id: 2,
    title: "Popcorner",
    description: "Explore movies, discover details and create your own movie to-watch list, all with a focus on code quality, scalable architecture and a unique user experience.",
    image: "/pop-corner.gif",
    technologies: ["React Native", "TypeScript", "Zustand", "TanStack Query"],
    github: "https://github.com/LaDuquesaDev/popcorner",
    demo: null,
  },
  {
    id: 3,
    title: "Coffey E-Commerce",
    description: "Product catalog layout with filtering and sorting, designed to offer an intuitive and responsive user experience.",
    image: "/coffey-ecommerce.gif",
    technologies: ["React", "TypeScript", "MUI Material"],
    github: "https://github.com/LaDuquesaDev/coffey-ecommerce",
    demo: "https://laduquesadev.github.io/coffey-ecommerce/",
  },
  {
    id: 4,
    title: "Cipher Cesar",
    description: "This project will allow you to communicate with other people through encrypted messages, it will allow you to encrypt and decrypt texts.",
    image: "/cipher-cesar.webp",
    technologies: ["React", "Python", "TensorFlow", "FastAPI"],
    github: "https://github.com/LaDuquesaDev/Cifrado-Cesar",
    demo: "https://laduquesadev.github.io/Cifrado-Cesar/src/index.html",
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