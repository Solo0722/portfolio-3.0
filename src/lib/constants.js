export const MEDIA_QUERIES = {
  MOBILE: "@media only screen and (max-width: 486px)",
  TABLET: "@media only screen and (min-width: 486px) and (max-width: 1000px)",
  LAPTOP: "@media only screen and (min-width: 1000px) and (max-width: 1024px)",
  DESKTOP: "@media only screen and (min-width: 1025px) and (max-width: 1200px)",
  TV: "@media only screen and (min-width: 1201px)",
};

export const COLORS = {
  PRIMARY_COLOR: "#00aeff",
  PRIMARY_COLOR_2: "#006bcb",
  TEXT_COLOR: "#D5D9EB",
  SECONDARY_TEXT_COLOR: "#D5D9EB50",
  BACKGROUND_COLOR: "#19142A",
  SECONDARY_BACKGROUND_COLOR: "#19152a",
};


export const SOCIAL_MEDIA_LINKS = [
  {
    name: "LinkedIn",
    icon: "simple-icons:linkedin",
    link: "https://linkedin.com/in/solomon-owusu-ansah",
  },
  {
    name: "Github",
    icon: "simple-icons:github",
    link: "https://github.com/solo0722",
  },
  {
    name: "Twitter",
    icon: "simple-icons:twitter",
    link: "https://github.com/solo0722",
  },
];

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Hi, I'm Solomon Owusu-Ansah.",
    description:
      "I'm a self-taught passionate software developer as well as a  data scientist from Ghana. I have 4+ years experience in software development.I have proven ability to design, develop, and deploy applications while leveraging data insights to improve functionality and user experience. I am eager to contribute to a team environment where I can utilize both technical and analytical strengths.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "My Tech Stack",
    description:
      "Leveraging data insights to improve functionality and user experience. I am eager to contribute to a team environment where I can utilize both technical and analytical strengths.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 3,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full text-center",
    img: "",
    spareImg: "",
  },
];

export const skillset = [
  { id: 1, name: "HTML", icon: "devicon:html" },
  { id: 2, name: "CSS", icon: "devicon:css" },
  { id: 3, name: "JavaScript", icon: "devicon:javascript" },
  { id: 4, name: "React", icon: "devicon:react" },
  { id: 49, name: "React Native", icon: "devicon:react" },
  { id: 454, name: "Next.js", icon: "devicon:nextjs" },
  { id: 5, name: "Node.js", icon: "devicon:nodejs" },
  { id: 8, name: "TypeScript", icon: "devicon:typescript" },
  { id: 9, name: "Python", icon: "devicon:python" },
  { id: 9232, name: "Electron", icon: "devicon:electron" },
  { id: 9221, name: "Dart", icon: "devicon:dart" },
  { id: 9221, name: "Flutter", icon: "devicon:flutter" },
  { id: 10, name: "Sanity", icon: "devicon:sanity" },
  { id: 7, name: "MongoDB", icon: "devicon:mongodb" },
  { id: 109, name: "Firebase", icon: "devicon:firebase" },
  { id: 6, name: "Express", icon: "devicon:express" },
  { id: 11, name: "FastApi", icon: "devicon:fastapi" },
  { id: 12, name: "Git", icon: "devicon:git" },
  { id: 13, name: "Ant Design", icon: "devicon:antdesign" },
  { id: 14, name: "Bootstrap", icon: "devicon:bootstrap" },
  { id: 16, name: "SQL", icon: "devicon:sql" },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];


export const myProjects = [
  {
    title: "Podcastr - AI Podcast Platform",
    desc: "Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.",
    subdesc:
      "Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.",
    href: "https://www.youtube.com/watch?v=zfAb95tJvZQ",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        icon: "devicon:react",
      },
      {
        id: 2,
        name: "TailwindCSS",
        icon: "devicon:tailwind",
      },
      {
        id: 3,
        name: "TypeScript",
        icon: "devicon:typescript",
      },
      {
        id: 4,
        name: "Framer Motion",
        icon: "devicon:framermotion",
      },
    ],
  },
  {
    title: "LiveDoc - Real-Time Google Docs Clone",
    desc: "LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.",
    subdesc:
      "With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.",
    href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        icon: "devicon:react",
      },
      {
        id: 2,
        name: "TailwindCSS",
        icon: "devicon:tailwind",
      },
      {
        id: 3,
        name: "TypeScript",
        icon: "devicon:/",
      },
      {
        id: 4,
        name: "Framer Motion",
        icon: "devicon:/",
      },
    ],
  },
  {
    title: "CarePulse - Health Management System",
    desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
    subdesc:
      "With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
    href: "https://www.youtube.com/watch?v=lEflo_sc82g",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        icon: "devicon:/",
      },
      {
        id: 2,
        name: "TailwindCSS",
        icon: "devicon:",
      },
      {
        id: 3,
        name: "TypeScript",
        icon: "devicon:/",
      },
      {
        id: 4,
        name: "Framer Motion",
        icon: "devicon:/",
      },
    ],
  },
  {
    title: "Horizon - Online Banking Platform",
    desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
    subdesc:
      "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
    href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        icon: "devicon:/",
      },
      {
        id: 2,
        name: "TailwindCSS",
        icon: "devicon:",
      },
      {
        id: 3,
        name: "TypeScript",
        icon: "devicon:/",
      },
      {
        id: 4,
        name: "Framer Motion",
        icon: "devicon:/",
      },
    ],
  },
  {
    title: "Imaginify - AI Photo Manipulation App",
    desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
    subdesc:
      "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
    href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        icon: "devicon:/",
      },
      {
        id: 2,
        name: "TailwindCSS",
        icon: "devicon:",
      },
      {
        id: 3,
        name: "TypeScript",
        icon: "devicon:/",
      },
      {
        id: 4,
        name: "Framer Motion",
        icon: "devicon:/",
      },
    ],
  },
  {
    title: "Imaginify - AI Photo Manipulation App",
    desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
    subdesc:
      "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
    href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        icon: "devicon:/",
      },
      {
        id: 2,
        name: "TailwindCSS",
        icon: "devicon:",
      },
      {
        id: 3,
        name: "TypeScript",
        icon: "devicon:/",
      },
      {
        id: 4,
        name: "Framer Motion",
        icon: "devicon:/",
      },
    ],
  },
];