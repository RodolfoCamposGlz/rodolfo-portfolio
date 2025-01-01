import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Rodolfo Campos",
  logo: "/logo.jpeg",
  email: "rodolfocampos459@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/RodolfoCamposGlz",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:rodolfocampos459@gmail.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Rodolfo Campos",
    description:
      "Software Developer passionate about building high-quality, innovative solutions.",
    image: identity.logo,
  },
  role: "Software Developer",
  description:
    "I'm Rodolfo Campos, a Full Stack Developer with 5 years of experience and a passion for crafting high-quality, innovative solutions.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Rodolfo Campos",
    description:
      "Software Developer passionate about building high-quality, innovative solutions.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `
I'm Rodolfo Campos, a Full Stack Developer with 5 years of experience and a passion for crafting high-quality, innovative solutions.
<br/><br/>
My journey in the tech industry began with a strong foundation in computer science and a keen interest in software development. Over the years, I've honed my skills in various programming languages and frameworks, allowing me to tackle complex projects with confidence and creativity.
I have experience in langagues like: 
**Javascript**, **Typescript**, **Python**, **Go**.
<br/><br/>
I have experience in frameworks like: **React**, **Next.js**, **Node.js**, **Express**, **Nest.js**, **MongoDB**, **PostgreSQL**, **Docker**, **AWS**, **Google Cloud Platform**.
`, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
    items: [
      {
        title: "Software engineer",
        company: {
          name: "Novel bank (Y Combinator)",
          image: "/logo-novel-app.svg",
          url: "https://vercel.com/rodolfocamposjs-projects/starlight-demo",
        },
        date: "2020 - 2024",
      },
      {
        title: "Fullstack developer",
        company: {
          name: "Digita Studio",
          image: "/logo-digita.png",
          url: "https://www.linkedin.com/company/digita-studio/posts/?feedView=all",
        },
        date: "2020 - 2020",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Rodolfo Campos",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Novel bank",
      description:
        "Novel Bank is a fintech startup helping international founders easily open U.S. bank accounts, offering ACH transfers, wires, check processing, and virtual or physical cards.",
      image: "/novel.png",
      year: "2024",
      url: "https://starlight-demo.vercel.app/dashboard",
    },
    {
      title: "Truehealth",
      description:
        "Truehealth is a ios app powered by Llama 3.1 LLM it helps users to treat skin issues",
      image: "/truehealth.png",
      year: "2024",
      url: "https://github.com/truehealthai",
    },
    {
      title: "Blockstem",
      description:
        "Blockstem is a web app to generate elections and votes for companies or goverment.",
      image: "/blockstem.png",
      year: "2024",
      url: "https://www.linkedin.com/company/blockstem/",
    },
    {
      title: "Fareli app",
      description:
        "Fareli app is an app for ios, android and web that manage the orders for sellers, multimarks and clients for a shoe company",
      image: "/fareli.png",
      year: "2020",
      url: "https://apps.apple.com/mx/app/fareli/id1524232700",
    },
    {
      title: "Armadillorent.com",
      description:
        "Armadillorent.com is a platform for rent your construction machine.This project was canceled because of the COVID-19 Situation the last version was this:",
      image: "/armadillorent.png",
      year: "2020",
      url: "https://unruffled-bhabha-dea282.netlify.app/",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Rodolfo Campos",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
