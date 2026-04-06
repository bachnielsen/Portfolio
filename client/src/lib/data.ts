export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  version: string;
  description: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  version: string;
  description: string;
  subjects: string[];
}

export interface Skill {
  name: string;
}

export interface Hobby {
  name: string;
  image: string; // place your photos in client/public/images/ and reference as /images/filename.jpg
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  about: {
    intro: string;
    background: string;
    interests: string;
  };
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "Niclas Bach Nielsen",
  title: "Product Manager & Product Owner",
  tagline: "Product Manager and Owner with 8+ years of experience building AI-powered SaaS platforms from startup through scale-up.",
  about: {
    intro: "Product Manager and Owner with 8+ years of experience building AI-powered SaaS platforms from startup through scale-up. Proven track record of shipping products that drive business outcomes — including contributing to a $34.5M Series A investment.",
    background: "Hands-on technical background (MSc Digital Media Engineering, DTU) with deep experience in agile delivery, qualitative research automation, and AI prototyping using Claude Code and MCP workflows. Equally comfortable shaping product strategy and rolling up sleeves to prototype.",
    interests: "Outside of work I enjoy hiking, fishing, biking, and weightlifting. I'm also interested in languages and building new things with technology."
  },
  contact: {
    email: "niclas.bach@gmail.com",
    linkedin: "https://www.linkedin.com/in/niclasnielsen/",
    github: "https://github.com/bachnielsen"
  }
};

export const skills: Skill[] = [
  // Product
  { name: "Product discovery" },
  { name: "Roadmapping" },
  { name: "Sprint planning" },
  { name: "Stakeholder management" },
  { name: "UX design" },
  { name: "Customer interviews" },
  // AI & Technical
  { name: "Claude Code" },
  { name: "MCP workflows" },
  { name: "AI agent workflows" },
  { name: "Prompt engineering" },
  { name: "Python" },
  { name: "Vue 3" },
  // Tools
  { name: "Jira" },
  { name: "Figma" },
  { name: "Notion" },
  { name: "Miro" },
];

export const experiences: Experience[] = [
  {
    title: "Product Owner",
    company: "Autoflows (formerly AG Analytics)",
    location: "Copenhagen, Denmark",
    period: "Mar 2025 – Present",
    version: "v4.0",
    description: "Automotive SaaS platform serving car dealerships and OEMs across the UK and Southern Europe.",
    achievements: [
      "Established agile scrum processes from scratch across two development teams in a post-startup scale-up with no prior product framework",
      "Launched a WhatsApp communication product enabling dealership clients to contact customers directly, expanding reach across UK and Southern Europe",
      "Maintained delivery momentum in a high-constraint environment where 80% of developer capacity was consumed by legacy support issues",
      "Contributed to a full frontend platform rebuild, migrating to Vue 3 for a modernised and scalable user experience",
      "Led a company-wide rebranding from AG Analytics to Autoflows, coordinating DevOps and engineering on DNS, NS, DMARC, DKIM and SPF configuration",
      "Accelerated proof-of-concept development by prototyping internal tools using Claude Code, MCPs and AI agent workflows",
    ],
  },
  {
    title: "Product Manager → Senior Product Owner → Product Owner",
    company: "GetWhy (formerly UserTribe)",
    location: "Copenhagen, Denmark",
    period: "Aug 2021 – Feb 2025",
    version: "v3.0",
    description: "AI-based qualitative research platform helping clients understand customer needs at scale.",
    achievements: [
      "Co-developed a client-facing SaaS platform that contributed directly to a $34.5M Series A investment",
      "Built proprietary AI models to automate qualitative research analysis, significantly reducing manual processing time",
      "Drove product development for internal and external tools, boosting team efficiency and accelerating project delivery",
      "Designed user experiences that improved data quality, internal efficiency and client satisfaction",
      "Managed and mentored a team of 4, fostering a culture of automation and continuous improvement",
      "Launched a video-based research tool leveraging proprietary AI, enabling richer and faster consumer insights",
      "Conducted structured customer interviews to identify friction points and improve core product features",
    ],
  },
  {
    title: "Product Owner → Product Developer → Junior Product Developer",
    company: "UserTribe",
    location: "Copenhagen, Denmark",
    period: "Sep 2017 – Aug 2021",
    version: "v2.0",
    description: "Qualitative research agency delivering consumer insight reports on digital products.",
    achievements: [
      "First hire on the product team — built the product department from the ground up",
      "Built and led a team of 8 developers in Bulgaria to deliver a client-facing research analysis platform",
      "Defined the product roadmap and prioritised features based on client needs and business goals",
      "Built the infrastructure connecting all third-party tools into a semi-automated delivery pipeline, significantly improving project turnaround time",
      "Identified and integrated third-party tools (including mobile phone interview solutions) to support evolving client needs",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Master of Science in Digital Media Engineering",
    institution: "Danmarks Tekniske Universitet (DTU)",
    location: "Lyngby, Denmark",
    period: "June 2016",
    version: "edu.1",
    description: "",
    subjects: [],
  },
];

export const hobbies: Hobby[] = [
  { name: "Fishing", image: "/images/fishing.jpg" },
  { name: "Hiking", image: "/images/hiking.jpg" },
  { name: "Traveling", image: "/images/traveling.jpg" },
];
