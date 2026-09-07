import cvAsset from "@/assets/cv.pdf.asset.json";

export type Lang = "fr" | "en";


export type Project = {
  emoji: string;
  title: string;
  tagline: Record<Lang, string>;
  description: Record<Lang, string>;
  stack: string[];
  link?: string;
  year: string;
};

export const projects: Project[] = [
  {
    emoji: "🇲🇦",
    title: "MoroMatch",
    year: "2026",
    tagline: {
      fr: "Plateforme de matching talents & recrutement par IA",
      en: "AI-powered talent & recruitment platform",
    },
    description: {
      fr: "Une plateforme qui connecte les talents marocains aux opportunités de carrière pertinentes, et aide les recruteurs à découvrir les bons profils grâce à un moteur de matching intelligent.",
      en: "A platform connecting Moroccan talents with relevant career opportunities while helping recruiters discover and match with the right profiles through intelligent solutions.",
    },
    stack: ["AI", "Web Development", "Matching Systems"],
    link: "https://www.moromatch.com/",
  },
  {
    emoji: "🤖",
    title: "HANOUTY.AI",
    year: "2026",
    tagline: {
      fr: "Caisse intelligente sans file d'attente",
      en: "AI-powered smart checkout system",
    },
    description: {
      fr: "Et si l'on supprimait définitivement les files d'attente en magasin ? Le client dépose ses articles sous une caméra IoT : l'image est analysée en temps réel pour identifier chaque produit et générer le panier en moins de trois secondes. Une architecture alliant IoT, IA et Cloud, avec un dashboard React pour le suivi des KPIs.",
      en: "What if checkout queues simply disappeared? Customers place their items under an IoT camera; the image is analysed in real time to identify every product and build the basket in under three seconds. An IoT + AI + Cloud architecture with a React dashboard for live KPIs.",
    },
    stack: ["React", "FastAPI", "YOLOv8", "Supabase", "IoT", "Computer Vision"],
  },
  {
    emoji: "🛡️",
    title: "Intelligent IDS/IPS",
    year: "2026",
    tagline: {
      fr: "Détection & prévention d'intrusion par ML et DRL",
      en: "AI-based intrusion detection & prevention system",
    },
    description: {
      fr: "Une architecture cybersécurité hybride en deux couches : une classification du trafic réseau par Random Forest, et une couche de décision adaptative pilotée par un agent DQN qui apprend en temps réel à observer, alerter ou bloquer. Backend FastAPI et dashboard React interactif.",
      en: "A hybrid cybersecurity system in two layers: Random Forest classification of network traffic, and an adaptive DQN agent that learns in real time whether to observe, alert or block. FastAPI backend with an interactive React dashboard.",
    },
    stack: ["React", "FastAPI", "Random Forest", "DQN", "Machine Learning"],
  },
  {
    emoji: "🖼️",
    title: "TSWIRTI",
    year: "2025",
    tagline: {
      fr: "Traitement d'images en temps réel",
      en: "Real-time image processing platform",
    },
    description: {
      fr: "Application web d'amélioration et de restauration d'images : filtrage, réduction du bruit, rehaussement de contraste, détection de contours et évaluation de la qualité d'image.",
      en: "A web application for image enhancement and restoration: filtering, noise reduction, contrast enhancement, edge detection and image quality assessment.",
    },
    stack: ["React", "FastAPI", "Supabase", "Image Processing"],
  },
  {
    emoji: "🌱",
    title: "SkillAURA",
    year: "2025",
    tagline: {
      fr: "Impact social & développement local",
      en: "Social impact & local development project",
    },
    description: {
      fr: "Projet d'innovation sociale utilisant le numérique pour valoriser les artisans locaux, soutenir les communautés vulnérables et favoriser l'emploi et l'inclusion digitale dans la région de Safi.",
      en: "A social innovation project using digital solutions to empower local artisans, support vulnerable communities and promote employment and digital inclusion in the Safi region.",
    },
    stack: [
      "Digital Transformation",
      "Web Development",
      "Social Innovation",
      "Project Management",
    ],
  },
  {
    emoji: "🦷",
    title: "MedClick",
    year: "2025",
    tagline: {
      fr: "Gestion d'un cabinet dentaire",
      en: "Dental clinic management platform",
    },
    description: {
      fr: "Plateforme full-stack qui simplifie la gestion d'un cabinet dentaire : gestion des patients et dentistes, rendez-vous médicaux et authentification sécurisée par JWT.",
      en: "A full-stack platform designed to simplify dental clinic management through secure JWT authentication and digital appointment management.",
    },
    stack: ["MERN Stack", "Next.js", "Node.js", "Express", "MongoDB", "JWT"],
  },
];

export const skills = [
  { name: "HTML5", icon: "html5/html5-original" },
  { name: "CSS3", icon: "css3/css3-original" },
  { name: "JavaScript", icon: "javascript/javascript-original" },
  { name: "TypeScript", icon: "typescript/typescript-original" },
  { name: "React", icon: "react/react-original" },
  { name: "Next.js", icon: "nextjs/nextjs-original" },
  { name: "Vue.js", icon: "vuejs/vuejs-original" },
  { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original" },
  { name: "Node.js", icon: "nodejs/nodejs-original" },
  { name: "Express", icon: "express/express-original" },
  { name: "FastAPI", icon: "fastapi/fastapi-original" },
  { name: "Python", icon: "python/python-original" },
  { name: "MongoDB", icon: "mongodb/mongodb-original" },
  { name: "MySQL", icon: "mysql/mysql-original" },
  { name: "PostgreSQL", icon: "postgresql/postgresql-original" },
  { name: "Supabase", icon: "supabase/supabase-original" },
  { name: "Firebase", icon: "firebase/firebase-original" },
  { name: "Git", icon: "git/git-original" },
  { name: "GitHub", icon: "github/github-original" },
  { name: "GitLab", icon: "gitlab/gitlab-original" },
  { name: "VS Code", icon: "vscode/vscode-original" },
  { name: "Figma", icon: "figma/figma-original" },
  { name: "Postman", icon: "postman/postman-original" },
  { name: "WordPress", icon: "wordpress/wordpress-original" },
];


export const certifications: {
  group: Record<Lang, string>;
  items: { title: string; issuer: string; url?: string }[];
}[] = [
  {
    group: { fr: "Certifications techniques", en: "Technical certifications" },
    items: [
      {
        title: "Critical Thinking Skills for the Professional",
        issuer: "UC Davis & Coursera · 2025",
        url: "https://www.linkedin.com/in/alami-ouriagli-omayma-861443251/details/certifications/",
      },
      {
        title: "Introduction to Front-End Development",
        issuer: "Meta · 2025",
        url: "https://www.linkedin.com/in/alami-ouriagli-omayma-861443251/details/certifications/",
      },
      {
        title: "SQL Intermediate",
        issuer: "SoloLearn · 2024",
        url: "https://www.linkedin.com/in/alami-ouriagli-omayma-861443251/details/certifications/",
      },
      {
        title: "Python for Data Science & AI",
        issuer: "IBM & Coursera · 2024",
        url: "https://www.linkedin.com/in/alami-ouriagli-omayma-861443251/details/certifications/",
      },
    ],
  },
  {
    group: { fr: "Soft skills & management", en: "Soft skills & management" },
    items: [
      {
        title: "Critical Thinking and Problem Solving (MDA)",
        issuer: "UM6P — Morocco Digital Academy · 2025",
        url: "https://www.linkedin.com/in/alami-ouriagli-omayma-861443251/details/certifications/",
      },
      {
        title: "Problem Solving with Creative and Critical Thinking",
        issuer: "IBM — Coursera · 2025",
        url: "https://www.linkedin.com/in/alami-ouriagli-omayma-861443251/details/certifications/",
      },
      {
        title: "Formatrice en Soft Skills & Développement Personnel",
        issuer: "Speak Up ENSA Safi · 2025",
        url: "https://www.linkedin.com/in/alami-ouriagli-omayma-861443251/details/certifications/",
      },
      {
        title: "21ᵉ Édition de l'UJL",
        issuer: "Cadi Ayyad — Université des Jeunes Leaders · CDRT",
        url: "https://ensas.uca.ma/Home/Eventgallerie/130",
      },
    ],
  },
];

export const engagement: {
  title: Record<Lang, string>;
  period: string;
  body: Record<Lang, string>;
}[] = [
  {
    title: {
      fr: "Présidente du Club Speak Up — ENSA Safi",
      en: "President of the Speak Up Club — ENSA Safi",
    },
    period: "2025 — présent",
    body: {
      fr: "Un espace dédié à l'excellence oratoire et aux soft skills : formations interactives, workshops et webinaires avec des experts pour aider les futurs ingénieurs à transformer leur communication en levier d'impact.",
      en: "A space dedicated to public speaking and soft skills: interactive trainings, workshops and expert webinars helping future engineers turn communication into real impact.",
    },
  },
  {
    title: {
      fr: "Formatrice en Soft Skills & Développement Personnel",
      en: "Soft Skills & Personal Development Trainer",
    },
    period: "2023 — présent",
    body: {
      fr: "Conception et animation d'ateliers sur la communication, l'intelligence émotionnelle et le personal branding, avec accompagnement des étudiants ingénieurs sur leur employabilité et leur leadership.",
      en: "Designing and running workshops on communication, emotional intelligence and personal branding, coaching engineering students on employability and leadership.",
    },
  },
  {
    title: {
      fr: "Cellule communication — GDG Marrakesh",
      en: "Communication team — GDG Marrakesh",
    },
    period: "2024 — 2025",
    body: {
      fr: "Un an au sein de l'équipe organisatrice pour dynamiser la scène tech locale et créer des espaces d'échange autour de l'informatique et de l'intelligence artificielle.",
      en: "A year within the organising team energising the local tech scene and creating spaces to exchange around computer science and artificial intelligence.",
    },
  },
  {
    title: {
      fr: "Université des Jeunes Leaders — 21ᵉ édition",
      en: "Young Leaders University — 21st edition",
    },
    period: "21 — 23 nov. 2025",
    body: {
      fr: "Co-conception de SkillAURA, un projet alliant transition numérique des artisans et réinsertion sociale, avec un travail de gestion de projet durable et de collaboration interdisciplinaire.",
      en: "Co-designed SkillAURA, a project combining digital transition for artisans with social reintegration, built on sustainable project management and interdisciplinary collaboration.",
    },
  },
];

export const cv: {
  section: Record<Lang, string>;
  items: {
    title: Record<Lang, string>;
    meta: string;
    body?: Record<Lang, string>;
  }[];
}[] = [
  {
    section: { fr: "Formation", en: "Education" },
    items: [
      {
        title: {
          fr: "Cycle d'ingénieur — Génie Informatique & IA",
          en: "Engineering degree — Computer Engineering & AI",
        },
        meta: "ENSA Safi · Septembre 2022 — présent",
        body: {
          fr: "Cycle préparatoire intégré puis cycle d'ingénieur en Génie Informatique et Intelligence Artificielle.",
          en: "Integrated preparatory cycle then engineering cycle in Computer Engineering and Artificial Intelligence.",
        },
      },
      {
        title: {
          fr: "Première année MIPC",
          en: "First year MIPC",
        },
        meta: "FST Marrakech · Septembre 2021 — Juin 2022",
        body: {
          fr: "Mathématiques, Informatique, Physique et Chimie.",
          en: "Mathematics, Computer Science, Physics and Chemistry.",
        },
      },
    ],
  },
  {
    section: { fr: "Expérience professionnelle", en: "Professional experience" },
    items: [
      {
        title: {
          fr: "Stagiaire en développement web — Octicode",
          en: "Web development intern — Octicode",
        },
        meta: "Juin 2025 — Août 2025",
        body: {
          fr: "Projet VULNURA (Next.js, React, TypeScript) : tableau de bord analytique pour visualiser et suivre les statistiques de vulnérabilités CVE en temps réel. Projet BIG FOURNITURES (WordPress, WooCommerce, Elementor Pro) : plateforme e-commerce pour une papeterie moderne.",
          en: "VULNURA project (Next.js, React, TypeScript): an analytics dashboard to visualise and track real-time CVE vulnerability statistics. BIG FOURNITURES project (WordPress, WooCommerce, Elementor Pro): an e-commerce platform for a modern stationery store.",
        },
      },
    ],
  },
  {
    section: { fr: "Langues", en: "Languages" },
    items: [
      { title: { fr: "Arabe — langue maternelle", en: "Arabic — native" }, meta: "" },
      { title: { fr: "Français — courant (C1)", en: "French — fluent (C1)" }, meta: "" },
      {
        title: {
          fr: "Anglais — maîtrise professionnelle",
          en: "English — professional working proficiency",
        },
        meta: "",
      },
    ],
  },

];

export const t = {
  nav: {
    about: { fr: "Profil", en: "About" },
    projects: { fr: "Projets", en: "Projects" },
    skills: { fr: "Compétences", en: "Skills" },
    cv: { fr: "CV", en: "Resume" },
    certifications: { fr: "Accréditations", en: "Credentials" },
    engagement: { fr: "Engagement", en: "Engagement" },
    contact: { fr: "Contact", en: "Contact" },
  },
  hero: {
    kicker: { fr: "Bienvenue dans mon univers", en: "Welcome to my universe" },
    role: {
      fr: "Étudiante ingénieure en Génie Informatique & Intelligence Artificielle",
      en: "Engineering student in Computer Science & Artificial Intelligence",
    },
    intro: {
      fr: "Étudiante en 3ème année cycle d'ingénieur en Génie Informatique à ENSA Safi, spécialisée en Informatique et AI. Passionnée par le développement Web et les technologies innovantes. Je combine ma polyvalence technique à mes Soft Skills pour transformer des défis complexes en solutions évolutives et performantes. Je suis actuellement à la recherche d'un stage PFE.",
      en: "Third-year computer engineering student at ENSA Safi, specialising in Computer Science and AI. Passionate about web development and innovative technologies, I combine my technical versatility with my soft skills to turn complex challenges into scalable, high-performing solutions. I am currently looking for a final-year internship.",
    },

    ctaProjects: { fr: "Voir mes projets", en: "See my projects" },
    ctaContact: { fr: "Me contacter", en: "Get in touch" },
  },
  sections: {
    projects: {
      fr: "Des projets qui résolvent de vrais problèmes",
      en: "Projects solving real problems",
    },
    skills: { fr: "Ma boîte à outils", en: "My toolbox" },
    cv: { fr: "Mon parcours", en: "My journey" },
    certifications: { fr: "Mes accréditations", en: "My credentials" },
    engagement: { fr: "Engagement & leadership", en: "Engagement & leadership" },
  },
  cta: {
    downloadCv: { fr: "Télécharger mon CV", en: "Download my resume" },
    visit: { fr: "Visiter", en: "Visit" },
    contactTitle: { fr: "Travaillons ensemble", en: "Let's work together" },
    contactBody: {
      fr: "Stage, collaboration ou simple échange autour de l'IA — ma boîte de réception est toujours ouverte.",
      en: "Internship, collaboration or just a chat about AI — my inbox is always open.",
    },
  },
} as const;

export const links = {
  github: "https://github.com/alami-ouriagli-omayma",
  linkedin: "https://www.linkedin.com/in/alami-ouriagli-omayma-861443251/",
  email: "mailto:alamiouriagliomayma@gmail.com",
  cv: cvAsset.url,
};
