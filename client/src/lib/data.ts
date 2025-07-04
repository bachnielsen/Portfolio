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
  name: "Your Name",
  title: "Senior Software Engineer",
  tagline: "Passionate about building scalable web applications and creating exceptional user experiences. I specialize in modern JavaScript frameworks and cloud architecture.",
  about: {
    intro: "Hey! I'm [Your Name]. I'm a passionate software engineer with over 5 years of experience building full-stack applications and leading development teams. I love solving complex problems and turning ideas into reality through code.",
    background: "I've worked with various technologies throughout my career, from traditional server-side applications to modern cloud-native solutions. My expertise lies in JavaScript/TypeScript, React, Node.js, and AWS services. I'm particularly interested in performance optimization, system architecture, and developer experience.",
    interests: "When I'm not coding, you can find me contributing to open-source projects, writing technical blogs, or exploring new technologies. I believe in continuous learning and sharing knowledge with the developer community."
  },
  contact: {
    email: "your.email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername"
  }
};

export const skills: Skill[] = [
  { name: "JavaScript" },
  { name: "React" },
  { name: "Node.js" },
  { name: "TypeScript" },
  { name: "AWS" },
  { name: "Docker" },
  { name: "Python" },
  { name: "PostgreSQL" }
];

export const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    version: "v3.0",
    description: "Leading a team of 5 engineers in developing and maintaining large-scale web applications. Architected microservices infrastructure that improved system performance by 40%.",
    achievements: [
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with product teams to define technical requirements"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "StartupCo",
    location: "Remote",
    period: "2019 - 2022",
    version: "v2.0",
    description: "Developed full-stack applications using React, Node.js, and PostgreSQL. Built and deployed scalable solutions serving 100k+ monthly active users.",
    achievements: [
      "Created responsive web applications with 99.9% uptime",
      "Integrated third-party APIs and payment systems",
      "Optimized database queries improving response times by 50%"
    ]
  },
  {
    title: "Junior Web Developer",
    company: "WebAgency",
    location: "New York, NY",
    period: "2018 - 2019",
    version: "v1.0",
    description: "Started career developing websites for small businesses and e-commerce platforms. Gained experience in HTML, CSS, JavaScript, and WordPress development.",
    achievements: [
      "Built 20+ responsive websites for various clients",
      "Implemented SEO best practices improving search rankings",
      "Collaborated with design team to create pixel-perfect implementations"
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    location: "California, USA",
    period: "2014 - 2018",
    version: "edu.2",
    description: "Focused on software engineering, data structures, algorithms, and system design. Graduated Magna Cum Laude with a GPA of 3.8/4.0.",
    subjects: ["Data Structures", "Algorithms", "Software Engineering", "Database Systems"]
  },
  {
    degree: "AWS Solutions Architect Certification",
    institution: "Amazon Web Services",
    location: "Online",
    period: "2021",
    version: "edu.1",
    description: "Comprehensive certification covering AWS cloud services, architecture patterns, and best practices for designing scalable and secure cloud solutions.",
    subjects: ["Cloud Architecture", "Security", "Scalability"]
  }
];
