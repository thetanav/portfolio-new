import { Icons } from "@/components/icons";
import { Coffee, Home, Notebook, Rss } from "lucide-react";

export const DATA = {
  name: "Tanav Poswal",
  initials: "DV",
  url: "https://tanavindev.tech",
  location: "Chandigarh, IN",
  locationLink: "https://www.google.com/maps/place/chandigarh",
  description:
    "Software Engineer | Indie Hacker | Building fast, real-time, useful things. I turn ideas into products and code into value. Let's connect.",
  summary:
    "In 2025, I went all-in on building and learning by doing. I’m currently pursuing a degree in AI & ML, have solved 300+ LeetCode problems, won a hackathon, and built tools to help the student community. I interned at Block Se Block, where I worked on Bitcoin smart contracts, trading infrastructure, and explored Rust and the ICP blockchain. I'm passionate about real-time systems, clean software, and constantly shipping. Very active on Twitter.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Solidity",
    "Python",
    "Convex",
    "Go",
    "Rust",
    "Machine Learning",
    "Flask",
    "Keras",
    "Open CV",
    "Tensorflow",
    "Langchain",
    "Postgres",
    "Docker",
    "AWS",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: Home, label: "Home" },
    { href: "/blog", icon: Rss, label: "Blog" },
    { href: "https://dub.sh/tanav-resume", icon: Notebook, label: "Resume" },
  ],
  contact: {
    email: "tanavposwal939@example.com",
    tel: "+919461701897",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/tanav-git",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/tanav-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/tanav-x",
        icon: Icons.x,

        navbar: true,
      },
      "Buy me a Coffee": {
        name: "Buy me a Coffee",
        url: "https://coff.ee/tanav",
        icon: Coffee,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:tanavposwal939@example.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "BlockseBlock",
      href: "https://blockseblock.com/",
      badges: [],
      location: "Remote",
      title: "Blockchain Developer Intern",
      logoUrl: "/bsb.jpg",
      start: "june 2025",
      end: "aug 2025",
      description:
        "At Block Se Block, I built a Bitcoin ledger app with a team and deployed on ICP chain. I also set up a Rust backend for smart contracts on canisters and worked with sdk by ICP using Rust and Motoko.",
    },
  ],
  education: [
    {
      school: "Chandigarh Group of Colleges (COE), Landran",
      href: "https://www.cgccoe.org/",
      degree: "B.Tech in AIML",
      logoUrl: "/cgc.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Flow Code",
      href: "https://flowcode-tnv.vercel.app/",
      dates: "Feb 2025",
      active: true,
      description:
        "An AI code editor that allows users to write and edit code in various programming languages from a AI agent.",
      technologies: [
        "Next.js",
        "Typescript",
        "AI SDK",
        "TailwindCSS",
        "Fine tuning",
        "Monaco",
      ],
      links: [
        {
          type: "Website",
          href: "https://flowcode-tnv.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/thetanav/flowcode",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/flowcode.png",
    },
    {
      title: "Chess",
      href: "",
      dates: "November 2024",
      active: true,
      description:
        "Multiplayer chess game with game states saving on postgresql. Chess game enginer with chess.js.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "Turborepo",
        "WebSockets",
        "Auth0",
        "Express",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/thetanav/chess",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chess.png",
    },
    {
      title: "TeamUpp",
      href: "https://teamupp.vercel.app",
      dates: "July 2025",
      active: true,
      description:
        "Developed an social media app for hackers to meet new people and collaborate on projects or hackthons.",
      technologies: [
        "Next.js",
        "Typescript",
        "AI SDK",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Neon DB",
      ],
      links: [
        {
          type: "Website",
          href: "https://teamupp.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/thetanav/teamup",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/teamupp.png",
    },
    {
      title: "Trading Exchange",
      href: "https://trading-system-theta.vercel.app/",
      dates: "Jan 2025",
      active: true,
      description:
        "Trading exchange with order matching engine on rest api and websockets. User can create account and buy and sell stocks.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Express",
        "JWT",
        "WebSockets",
        "CI-CD",
      ],
      links: [
        {
          type: "Website",
          href: "https://trading-system-theta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/thetanav/trading-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tradex.png",
    },
  ],
  hackathons: [
    {
      title: "Hack The Block",
      dates: "April 2025",
      location: "Chandigarh",
      description:
        "Won the 2nd prize. Developed a dapps which helps mental health patients to cure boredom by differnt game, ai agents. And there is a feature to join communites and share their experiences.",
      icon: "public",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLXsiBiYlBAl6EDVFDMtT-BukfBhS3zM4ag&s",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/omahuja22/mindchain",
        },
      ],
    },
    {
      title: "Hack n Win Hackathon",
      dates: "February 2025",
      location: "Chandigarh",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBW_HcV_tTymheE4ehMC6mMYW4O8j_UBNXrw&s",
    },
    {
      title: "Bhasha Bhandhu Hacathon",
      dates: "February 2025",
      location: "CU, Chandigarh",
      description:
        "Smart device for home electricity consumption. It predicts the electricity consumption of the user and alerts them when there is a device consuming more and more AI feutres.",
      image: "https://www.bhashabandhu.com/landing/bhashabhandu.svg",
    },
    {
      title: "Smart India Hackathon",
      dates: "October 2023",
      location: "CGC, Chandigarh",
      description:
        "Developed a web applications that connects the mental healths patients to nearby doctors.",
      icon: "public",
      image:
        "https://i0.wp.com/opportunitycell.com/wp-content/uploads/2022/03/SIH2.png?fit=327%2C345&ssl=1",
      links: [],
    },
  ],
} as const;
