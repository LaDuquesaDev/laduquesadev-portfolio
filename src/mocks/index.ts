import { Photo, Project } from "@/models/interfaces";

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
      title: "Coffey E-Commerce",
      description: "Product catalog layout with filtering and sorting, designed to offer an intuitive and responsive user experience.",
      image: "/coffey-ecommerce.gif",
      technologies: ["React", "TypeScript", "MUI Material"],
      github: "https://github.com/LaDuquesaDev/coffey-ecommerce",
      demo: "https://laduquesadev.github.io/coffey-ecommerce/",
    },
    {
      id: 3,
      title: "Cipher Cesar",
      description: "This project will allow you to communicate with other people through encrypted messages, it will allow you to encrypt and decrypt texts.",
      image: "/cipher-cesar.webp",
      technologies: ["React", "Python", "TensorFlow", "FastAPI"],
      github: "https://github.com/LaDuquesaDev/Cifrado-Cesar",
      demo: "https://laduquesadev.github.io/Cifrado-Cesar/src/index.html",
    },
    {
      id: 4,
      title: "MD-LINKS",
      description: "MD-LINKS is a library and a command line tool (CLI) executable with Node.js, which allows identifying, validating and obtaining statistics of the URLs contained in format files. Markdown",
      image: "/md-links.webp",
      technologies: ["Node.js", "JavaScript Vanilla"],
      github: "https://github.com/LaDuquesaDev/md-links",
      demo: "https://www.npmjs.com/package/md-links-yuli",
    },
  ]

  export const photos: Photo[] = [
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