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
    intro: "I've spent the last 8+ years building digital products across both startup and scale-up environments. I'm equally comfortable defining a roadmap from scratch and navigating the messiness of a growing team.",
    background: "I have a technical background (MSc from DTU) which means I can sit in a room with engineers and actually follow the conversation. I find that makes a big difference in how fast things move. More recently I've been getting into AI prototyping using Claude Code and MCP workflows, which has become a genuine superpower for moving quickly on early-stage ideas.",
    interests: "Outside of work I'm usually doing something outdoors, for example fishing, hiking or camping. I am also very passionate in the kitchen and I like to cook."
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
  { name: "MCPs" },
  { name: "AI agent workflows" },
  { name: "Google Antigravity" },
  { name: "Python" },
  { name: "C#" },
  { name: "Machine learning models" },
  // Tools
  { name: "Jira" },
  { name: "Linear" },
  { name: "Confluence" },
  { name: "Figma" },
  { name: "Miro" },
  { name: "Notion" },
];

export const experiences: Experience[] = [
  {
    title: "Product Owner",
    company: "Autoflows (formerly AG Analytics)",
    location: "Copenhagen, Denmark",
    period: "Mar 2025 – Present",
    version: "v4.0",
    description: "Autoflows is an automotive SaaS platform serving car dealerships and OEMs across the UK and Southern Europe. I joined to build product structure from scratch across two teams in a company that had outgrown its startup roots but hadn't yet built the processes to match. Since then I've shipped a WhatsApp communication product that opened up new markets, contributed to a full frontend rebuild in Vue 3, and led the company's rebrand from AG Analytics to Autoflows, which turned out to involve a lot more infrastructure coordination than anyone had anticipated. I also prototype internal tools using Claude Code and AI agent workflows to move faster on early-stage ideas.",
    achievements: [],
  },
  {
    title: "Product Manager · Senior Product Owner · Product Owner",
    company: "GetWhy (formerly UserTribe)",
    location: "Copenhagen, Denmark",
    period: "Aug 2021 – Feb 2025",
    version: "v3.0",
    description: "GetWhy is an AI-powered qualitative research platform that helps companies understand their customers at scale. Over nearly four years I grew from Product Owner to Product Manager, working across both internal tooling and the core client-facing platform. The work I'm most proud of is co-building the SaaS platform that helped the company raise a $34.5M Series A. Along the way I built proprietary AI models to automate research analysis, managed a team of four, and launched a video research tool that made consumer insights significantly faster to produce.",
    achievements: [],
  },
  {
    title: "Product Owner · Product Developer · Junior Product Developer",
    company: "UserTribe",
    location: "Copenhagen, Denmark",
    period: "Sep 2017 – Aug 2021",
    version: "v2.0",
    description: "This is where I got my start in product. I was the first product hire at a qualitative research agency and spent four years building the department from nothing. Early on that meant identifying and stitching together third-party tools into a semi-automated delivery pipeline. Later it meant leading a team of eight developers in Bulgaria to build a client-facing research platform and owning the roadmap end to end.",
    achievements: [],
  },
];

export const education: Education[] = [
  {
    degree: "Master of Science in Digital Media Engineering",
    institution: "Danmarks Tekniske Universitet (DTU)",
    location: "Lyngby, Denmark",
    period: "June 2016",
    version: "edu.2",
    description: "",
    subjects: [],
  },
  {
    degree: "Bachelor of Science in Media Technology (Medialogy)",
    institution: "Aalborg University Copenhagen (AAU)",
    location: "Copenhagen, Denmark",
    period: "June 2014",
    version: "edu.1",
    description: "",
    subjects: [],
  },
];

export const hobbies: Hobby[] = [
  { name: "Fishing", image: "/images/fishing.jpeg" },
  { name: "Hiking", image: "/images/hiking.jpeg" },
  { name: "Camping", image: "/images/camping.jpeg" },
  { name: "Cooking", image: "/images/cooking.jpeg" },
  { name: "Travel", image: "/images/travel.jpeg" },
];
