import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Csharp } from "@/components/ui/svgs/csharp";
import { RubyOnRails } from "@/components/ui/svgs/rubyOnRails";
import { Aws } from "@/components/ui/svgs/aws";
import { Terraform } from "@/components/ui/svgs/terraform";
import { Graphql } from "@/components/ui/svgs/graphql";
import { GithubActions } from "@/components/ui/svgs/githubActions";

export const DATA = {
  name: "Syed Muhammad Abid",
  initials: "SA",
  url: "https://github.com/syedmuhammadabid",
  location: "Karachi, Pakistan",
  locationLink: "https://www.google.com/maps/place/karachi",
  description:
    "Senior Full-Stack Software Engineer with 7+ years of experience building enterprise SaaS products.",
  summary:
    "Senior Full-Stack Software Engineer with 7+ years delivering scalable enterprise applications across publishing, e-commerce, and fintech. I help engineering teams ship faster by building modern React/Node.js/Rails architectures, automating CI/CD pipelines, and scaling cloud infrastructure on AWS. Led [Rails migrations eliminating 14+ CVEs](/#work), reduced frontend build time by 55%, and deployed production infrastructure using Terraform and ECS Fargate. Recently completed my [MS in Data Science](/#education) and currently exploring AI-powered software and intelligent automation.",
  avatarUrl: "/me.webp",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Ruby on Rails", icon: RubyOnRails },
    { name: "Python", icon: Python },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "AWS", icon: Aws },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Terraform", icon: Terraform },
    { name: "C#", icon: Csharp },
    { name: "GraphQL", icon: Graphql },
    { name: "CI/CD", icon: GithubActions },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      email: {
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
      logoUrl: "",
      start: "November 2024",
      end: "Present",
      description:
        "Led Rails 5.2 → 7.2 and Ruby 2.6 → 3.2 migration for 2 production apps, eliminating 14+ critical CVEs and reducing CI build time by 20%. Optimised Webpack configuration reducing JS bundle size by 45% and cutting frontend build time from 4 min to under 90 seconds. Designed and deployed AWS cloud infrastructure (ECS Fargate, RDS, ALB, Route53, S3, CloudWatch) using Terraform IaC. Built GitLab CI/CD pipelines integrating SonarQube, Brakeman, and RuboCop for automated testing and security scanning.",
    },
    {
      company: "ACCEO Retail Solutions",
      href: "https://www.acceo.com",
      badges: ["Remote"],
      location: "Markham, Canada · Remote",
      title: "Software Engineer",
      logoUrl: "",
      start: "May 2021",
      end: "October 2024",
      description:
        "Designed and developed a scalable mobile Point-of-Sale (mPOS) application with API design covering virtual cart, stock search, and shopping cart lifecycle management. Built a financial card management system with secure transaction handling and banking workflow integrations. Developed a custom CubeJS query builder with PostgreSQL-backed data pipelines for dynamic data filtering and self-serve business intelligence reporting. Delivered full-stack features using React.js, Redux, and Material UI.",
    },
    {
      company: "Daraz (Alibaba Group)",
      href: "https://www.daraz.pk",
      badges: [],
      location: "Karachi, Pakistan",
      title: "Software Developer",
      logoUrl: "",
      start: "October 2019",
      end: "April 2021",
      description:
        "Built Daraz Travel, a full-stack ticket booking platform for intercity bus reservations serving thousands of daily transactions, including seat selection, checkout, payment integration, and admin dashboards. Developed Daraz University, a CMS platform for newsletters and seller stories within the Daraz Seller Center ecosystem. Optimised frontend performance and maintained REST APIs serving tens of millions of monthly active users across South Asia.",
    },
    {
      company: "Systems Limited",
      href: "https://www.systemsltd.com",
      badges: [],
      location: "Karachi, Pakistan",
      title: "Software Engineer",
      logoUrl: "",
      start: "December 2018",
      end: "September 2019",
      description:
        "Developed mobile-friendly government portal modules for FAHR (UAE Federal Authority of Human Resources), digitising workforce capability management and HR workflows. Built B2B portal features for Etisalat enterprise clients including account management, bill payment, and purchasing workflows integrated with telecom backend systems.",
    },
    {
      company: "Ciphers Lab",
      href: "#",
      badges: [],
      location: "Karachi, Pakistan",
      title: "Software Developer",
      logoUrl: "",
      start: "January 2018",
      end: "November 2018",
      description:
        "Built Queno, a mobile-responsive educational communication platform connecting schools and parents, delivering real-time collaboration and engagement features.",
    },
  ],
  education: [
    {
      school: "NED University of Engineering and Technology",
      href: "https://www.neduet.edu.pk",
      degree: "Master of Science — Data Science",
      logoUrl: "",
      start: "2024",
      end: "2026",
    },
    {
      school: "University of Karachi (UBIT)",
      href: "https://ubit.uok.edu.pk",
      degree: "Bachelor of Engineering — Software Engineering",
      logoUrl: "",
      start: "2015",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Enterprise Publishing & Subscription Platform",
      href: "#",
      dates: "Nov 2024 - Present",
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
      title: "Subscription Management API",
      href: "#",
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
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Multi-Source ETL Data Pipeline",
      href: "#",
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
      links: [],
      image: "",
      video: "",
    },
    {
      title: "PSX Fundamental Analysis Platform",
      href: "#",
      dates: "2025 - Present",
      active: true,
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
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
