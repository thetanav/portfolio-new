import { Icons } from "@/components/icons";
import { Home, Rss } from "lucide-react";

export const DATA = {
  name: "Tanav Poswal",
  initials: "DV",
  url: "https://tanavindev.tech",
  location: "Chandigarh, IN",
  locationLink: "https://www.google.com/maps/place/chandigarh",
  description:
    "Software Engineer | Indie Hacker | Building fast, real-time, useful things. I turn ideas into products and code into value. Let's connect.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Rust",
    "Postgres",
    "Docker",
    "Kubernetes",
    "AWS",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: Home, label: "Home" },
    { href: "/blog", icon: Rss, label: "Blog" },
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
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
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
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
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
