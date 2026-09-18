import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { RubyOnRails } from "@/components/ui/svgs/rubyOnRails";
import { Aws } from "@/components/ui/svgs/aws";
import { Terraform } from "@/components/ui/svgs/terraform";
import { GithubActions } from "@/components/ui/svgs/githubActions";

const GlobeIcon = Icons.globe;
const GithubIcon = Icons.github;

export const DATA = {
  name: "Syed Muhammad Abid",
  // Full legal name - surfaced in Schema.org Person markup so search/AI engines
  // can associate the brand ("Syed Muhammad Abid") with the full identity.
  fullName: "Syed Muhammad Abid Hussain",
  initials: "SA",
  // Canonical production domain. This MUST be the live site (not the GitHub
  // profile) because it powers `metadataBase`, canonical URLs, Open Graph
  // `og:url`, sitemap entries and every absolute URL used for SEO.
  url: "https://syedmuhammadabid.dev",
  jobTitle: "Senior Full-Stack Engineer",
  location: "Karachi, Pakistan",
  locationLink: "https://www.google.com/maps/place/karachi",
  // Structured address used by the Schema.org PostalAddress node.
  address: {
    locality: "Karachi",
    region: "Sindh",
    country: "PK",
  },
  description:
    "Senior Full-Stack Engineer building scalable React, Next.js & Node.js applications that power enterprise SaaS.",
  summary: `## I care about the 100 milliseconds most engineers don't.

Over seven years, I've built and hardened the frontend layer of enterprise applications, from subscription platforms used by European publishers to e-commerce products serving tens of millions of monthly users at Daraz (Alibaba Group). My focus: interfaces that are fast, resilient, and genuinely pleasant to use, even at scale.

A few numbers that back that up:

✅ Cut JavaScript bundle size 45% and frontend build time from 4 minutes to under 90 seconds through Webpack code-splitting and build pipeline optimization

✅ Improved application load performance 40% through component and architectural refactoring

✅ Modernized two production applications' frontend stacks as part of a Rails 5.2→7.2 migration, closing 14+ security vulnerabilities along the way

✅ Built reusable component systems and design patterns adopted across multiple product teams

✅ Delivered full-stack features end-to-end, React, Redux, and REST APIs, while owning the frontend architecture

I also hold an MS in Data Science, which gives me an edge building data-dense interfaces, dashboards, analytics tools, and AI-powered products, without losing sight of what makes an interface fast and usable in the first place.`,
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Ruby on Rails", icon: RubyOnRails },
    { name: "AWS", icon: Aws },
    { name: "Terraform", icon: Terraform },
    { name: "Docker", icon: Docker },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "CI/CD", icon: GithubActions },
    { name: "Python", icon: Python }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog", disabled: true },
  ],
  contact: {
    email: "syedmuhammadabid110@gmail.com",
    tel: "+923212869005",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/syedmuhammadabid",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/syedmuhammadabid",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      Email: {
        name: "Send Email",
        url: "mailto:syedmuhammadabid110@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Atex Software",
      href: "https://www.atex.com",
      badges: ["Remote"],
      location: "Oulu, Finland · Remote",
      title: "Senior Software Engineer",
      logoUrl: "/atexLogo.svg",
      start: "November 2024",
      end: "Present",
      description:
        "Led the migration of two production applications from Rails 5.2 to 7.2 and Ruby 2.6 to 3.2, eliminating 14+ critical security vulnerabilities (CVEs) while reducing CI build times by 20%. Refactored a large-scale Subscription Management module, reducing SonarQube complexity by 35% and improving page load performance by 40%. Optimized the frontend build pipeline using Webpack code splitting and bundle analysis, reducing JavaScript bundle size by 45% and cutting build times from 4 minutes to under 90 seconds. Designed and deployed production-ready AWS infrastructure using Terraform, provisioning ECS Fargate, RDS, ALB, Route53, S3, and CloudWatch across multiple environments. Implemented GitLab CI/CD pipelines with automated testing, security scanning, and code quality checks using SonarQube, Brakeman, and RuboCop. Developed enterprise subscription features including upsell workflows, campaign management, configurable landing pages, Stripe payment integration, and AWS Cognito authentication. Strengthened application security by implementing XSS protection, enforcing coding standards, and resolving high-severity vulnerabilities across frontend and backend services. Mentored engineers through code reviews, architectural guidance, and engineering best practices.",
    },
    {
      company: "ACCEO Retail Solutions",
      href: "https://www.acceo.com",
      badges: ["Remote"],
      location: "Markham, Canada · Remote",
      title: "Software Engineer",
      logoUrl: "/acceoLogo.png",
      start: "May 2021",
      end: "October 2024",
      description:
        "Designed and developed a scalable Mobile Point-of-Sale (mPOS) platform supporting virtual carts, inventory search, and shopping cart lifecycle management for retail operations. Built secure financial card management services supporting transaction processing, banking integrations, and unit-tested business workflows. Architected a custom CubeJS query builder backed by PostgreSQL, enabling self-service analytics and dynamic business reporting for enterprise users. Delivered full-stack features using React.js, Redux, Node.js, and REST APIs while collaborating with distributed product, QA, and design teams in an Agile environment. Improved maintainability through reusable component design, modular architecture, and comprehensive unit testing.",
    },
    {
      company: "Daraz (Alibaba Group)",
      href: "https://www.daraz.pk",
      badges: [],
      location: "Karachi, Pakistan",
      title: "Software Developer",
      logoUrl: "/darazLogo.png",
      start: "October 2019",
      end: "April 2021",
      description:
        "Built Daraz Travel, a full-stack ticket booking platform supporting seat selection, secure payments, booking management, and administrative operations. Developed Daraz University, a content management platform enabling newsletters and seller engagement for tens of thousands of active sellers. Optimized frontend performance and maintained scalable REST APIs serving tens of millions of monthly users across South Asia. Collaborated with cross-functional engineering teams to deliver customer-facing features in a high-traffic, large-scale e-commerce platform.",
    },
    {
      company: "Systems Limited",
      href: "https://www.systemsltd.com",
      badges: [],
      location: "Karachi, Pakistan",
      title: "Software Engineer",
      logoUrl: "/systemsLimitedLogo.jpg",
      start: "December 2018",
      end: "September 2019",
      description:
        "Developed responsive government portal modules for the UAE Federal Authority of Human Resources (FAHR), digitizing workforce capability management and HR workflows. Implemented enterprise B2B portal features for Etisalat, including account management, bill payment, and purchasing workflows integrated with telecom backend systems. Delivered responsive, user-centric interfaces for enterprise and government clients while collaborating with cross-functional teams.",
    },
    {
      company: "Ciphers Lab",
      href: "#",
      badges: [],
      location: "Karachi, Pakistan",
      title: "Software Developer",
      logoUrl: "/ciphersLabLogo.png",
      start: "January 2018",
      end: "November 2018",
      description:
        "Built Queno, a web-based communication platform connecting schools and parents through real-time collaboration and messaging features. Developed frontend and backend modules focused on usability, responsiveness, and accessibility for non-technical users. Collaborated with product stakeholders to deliver new features throughout the software development lifecycle.",
    },
  ],
  education: [
    {
      school: "NED University of Engineering and Technology",
      href: "https://www.neduet.edu.pk",
      degree: "Master of Science - Data Science",
      logoUrl: "/nedLogo.png",
      start: "2024",
      end: "2026",
    },
    {
      school: "University of Karachi (UBIT)",
      href: "https://ubit.uok.edu.pk",
      degree: "Bachelor of Engineering - Software Engineering",
      logoUrl: "/ubitLogo.jpg",
      start: "2015",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "HiiBo - Personal AI Assistant",
      href: "https://chat.hiibo.app/",
      dates: "Jan 2026 - Present",
      active: true,
      description:
        "Personal AI assistant making LLM tools accessible to non-technical users and built prompt assistance, memory management, and customizable AI experiences.",
      technologies: [
        "React",
        "Typescript",
        "Redux RTK Query",
        "AI/LLM Integration",
        "AI/LLM APIs"
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Restaurant Menu Semantic Search",
      href: "https://github.com/syedmuhammadabid/restaurant-menu-search",
      dates: "June 2026",
      active: true,
      description:
        "Semantic search engine over a real restaurant menu (209 items) using Qdrant vector DB, Sentence Transformers, FastAPI, and a Next.js frontend.",
      technologies: [
        "Next.js",
        "FastAPI",
        "Qdrant Vector DB",
        "Sentence Transformers",
        "Python",
        "TailwindCSS",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/syedmuhammadabid/restaurant-menu-search",
          icon: <GithubIcon className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Enterprise Publishing & Subscription Platform",
      href: "https://mytype.kayak.atexcloud.io/",
      dates: "Nov 2024 - June 2026",
      active: true,
      description:
        "Full-stack subscription lifecycle management covering customer onboarding, invoicing, accounts receivable, and renewal workflows for European publisher clients. Distribution management system with configurable campaign banners, upsell flows, and multi-brand product landing pages.",
      technologies: [
        "React",
        "Ruby on Rails",
        "AWS",
        "Terraform",
        "Stripe",
        "Cognito",
        "PostgreSQL",
        "Docker",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "PSX Fundamental Analysis Platform",
      href: "https://github.com/syedmuhammadabid/psx-value-investor-platform",
      dates: "2025 - Present",
      active: false,
      description:
        "Developing a stock analysis platform for the Pakistan Stock Exchange with financial analysis, valuation ratios, technical indicators, dividend history, and AI-powered insights.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Python",
        "PostgreSQL",
        "AI/LLM",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/syedmuhammadabid/psx-value-investor-platform",
          icon: <GithubIcon className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Multi-Source ETL Data Pipeline",
      href: "https://github.com/syedmuhammadabid/etl-pipeline",
      dates: "2024 - 2025",
      active: true,
      description:
        "Designed and built a production-grade ETL pipeline ingesting data from Google Drive, CSV, JSON, PostgreSQL, MongoDB, Firebase, and REST APIs. Implemented data cleaning, normalisation, aggregation, feature engineering, and validation layers for ML-ready datasets.",
      technologies: [
        "Python",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "Google Drive API",
        "Pandas",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/syedmuhammadabid//etl-pipeline",
          icon: <GithubIcon className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Subscription Management API",
      href: "https://github.com/syedmuhammadabid/subscription-api",
      dates: "2025",
      active: true,
      description:
        "Built a RESTful subscription management API using ASP.NET Core Web API and C#, with a PostgreSQL data layer, applying enterprise patterns (DI, layered architecture, EF Core) to deepen hands-on experience with the .NET ecosystem.",
      technologies: [
        "ASP.NET Core",
        "C#",
        "PostgreSQL",
        "Entity Framework Core",
        "REST API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/syedmuhammadabid/subscription-api",
          icon: <GithubIcon className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    // {
    //   title: "Motivational Quotes API",
    //   href: "https://github.com/syedmuhammadabid/motivational-quotes-api",
    //   dates: "2026",
    //   active: true,
    //   description:
    //     "A simple REST API built with FastAPI that serves random motivational quotes, with an interactive UI to browse and discover them.",
    //   technologies: [
    //     "Next.js",
    //     "TypeScript",
    //     "Python",
    //     "FastAPI",
    //     "REST API",
    //     "TailwindCSS",
    //   ],
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/syedmuhammadabid/motivational-quotes-api",
    //       icon: <GithubIcon className="size-3" />,
    //     },
    //   ],
    //   image: "/motivational-quotes-demo.webp",
    //   video: "",
    // },
  ],
  hackathons: [] as {
    title: string;
    dates: string;
    location?: string;
    description?: string;
    image?: string;
    links?: { title: string; href: string; icon?: React.ReactNode }[];
  }[],
} as const;
