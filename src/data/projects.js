export const projects = [
  {
    id: 1,
    title: "DoctoNest — Medical Recruitment Platform",
    summary:
      "A healthcare recruitment platform connecting replacement doctors with healthcare establishments for missions, applications, and profile management.",
    description:
      "DoctoNest is a healthcare recruitment platform connecting replacement doctors with healthcare establishments. It supports mission discovery, applications, user profiles, and administrative validation through dedicated workflows for doctors and employers. The application is built with Next.js, React, TypeScript, and Tailwind CSS, and stores its data in PostgreSQL on Neon.",
    image: "/doctonest.png",
    imageAlt: "DoctoNest homepage for healthcare replacement missions",
    liveUrl: "https://www.doctonest.com/",
    liveLabel: "Live Demo",
    links: [
      { label: "Source Code", href: "https://github.com/Ouss77/Doctonest" }
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    featured: true
  },
  {
    id: 5,
    title: "HK SYNDIC — Property Management Website",
    summary:
      "A corporate website for a Casablanca property-management company, presenting its services and giving clients a clear way to make contact.",
    description:
      "Designed and developed a corporate website for a Casablanca property-management company, presenting its services and simplifying client inquiries. Built with Next.js, React, TypeScript, and Tailwind CSS, with a focus on responsive layouts, discoverability, and clear service communication.",
    image: "/hksyndic.png",
    imageAlt: "HK SYNDIC homepage for a Casablanca property-management company",
    liveUrl: "https://www.hksyndic.com/",
    liveLabel: "Live Demo",
    links: [
      { label: "Source Code", href: "https://github.com/Ouss77/HK-Syndic" }
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    featured: true
  },
  {
    id: 7,
    title: "OrdoCabinet — Medical Practice Management Platform",
    summary:
      "A medical practice application for patient records, appointments, consultations, and prescriptions.",
    description:
      "OrdoCabinet is a medical practice management application designed to centralize patient records, appointment scheduling, consultations, and prescription workflows. The interface is a React application. Accounts and data are handled by a separate Express and MongoDB API with password authentication. The frontend repository does not contain that API.",
    image: "/ordocabinet.png",
    imageAlt: "OrdoCabinet homepage for medical practice management",
    liveUrl: "https://www.ordocabinet.com/",
    liveLabel: "Live Demo",
    links: [
      { label: "Frontend", href: "https://github.com/Ouss77/OrdoCabinet-Front" },
      { label: "API", href: "https://github.com/Ouss77/OrdoCabinet-Back" }
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Express", "MongoDB"],
    featured: true
  },
  {
    id: 2,
    title: "EduPlatform — E-Learning & Training Management",
    summary:
      "A training platform for courses, enrollments, quizzes, and learner progress, with separate areas for administrators, trainers, and students.",
    description:
      "EduPlatform is an e-learning and training management application. The public codebase is a Next.js app with role-based areas for administrators, trainers, and students. It covers courses, chapters, quizzes, enrollments, and progress tracking, with PostgreSQL as the database.",
    image: "/edu.png",
    imageAlt: "EduPlatform course catalog for web development, design, and digital marketing",
    liveUrl: "https://eduplatform-er.vercel.app/",
    liveLabel: "Live Demo",
    links: [
      { label: "Source Code", href: "https://github.com/Ouss77/ercha-elearning" }
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    featured: true
  },
  {
    id: 3,
    title: "Nabou — Salon Management Platform",
    summary:
      "A salon management application for appointment scheduling, services, and client bookings.",
    description:
      "A salon management application designed to simplify appointment scheduling, client and service management, and booking. It focuses on streamlining daily salon operations through a centralized interface. The public source is a Next.js application that uses Supabase for its data.",
    image: "/home.png",
    imageAlt: "Nabou homepage for salon profiles and appointment booking",
    liveUrl: "https://www.nabou.co/",
    liveLabel: "Live Demo",
    links: [
      { label: "Source Code", href: "https://github.com/Ouss77/nabou_booking" }
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    featured: false
  },
  {
    id: 9,
    title: "Tweet Sentiment Analysis — Machine Learning Pipeline",
    summary:
      "A notebook that cleans tweet text and classifies sentiment as positive, negative, or neutral.",
    description:
      "A machine learning notebook for tweet sentiment analysis. It covers text cleaning and exploratory charts, then trains classical classifiers to label tweets as positive, negative, or neutral. This link opens the Colab notebook. It is not a separate application repository.",
    image: "/sent.png",
    imageAlt: "Notebook chart of tweet sentiment counts beside a word cloud",
    liveUrl: "https://colab.research.google.com/drive/1NM8fpAZNuAmBmgj9gzXGIXpc8LIHHPzB",
    liveLabel: "Notebook",
    links: [],
    tech: ["Python", "Pandas", "Matplotlib", "scikit-learn"],
    featured: false
  }
]
