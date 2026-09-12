import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";


export const HERO_CONTENT = `Hello World 👋! I am a dedicated full-stack developer with a passion for creating efficient and user-friendly web applications. I am currently pursuing M.Sc. (Computer Science) from the Department of Computer Science, Gujarat University.\n\n I have experience working with technologies including ReactJS, Next.js, Node.js, MySQL, and MongoDB. My journey into web development began with a curiosity about how things work, which has evolved into a passion that challenges me to continuously learn, adapt, and improve. I enjoy working in collaborative settings and value the opportunity to collaborate with others to create impactful applications that meet user needs and business goals.`;


export const EXPERIENCE = [
  {
    title: "Project Developer Intern",
    company: "The Fiduciary Senior Living Services Pvt. Ltd.  - The Family Member",
    date: "Feb 2026 - June 2026",
    description:
      "Developed a full-stack healthcare support system for elderly and patient care on behalf of family members using Next.js, shadcn/ui, TypeScript, Node.js, Express.js, MySQL, and Twilio.",
    technologies: [
      "Next.js",
      "shadcn/ui",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "Twilio",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Attendance System",
    image: project1,
    link: "https://attendence-system-1910.vercel.app",
    description:
      "An ongoing project to develop an attendance management system for Department of Computer Science, Gujarat University.",
    technologies: [" Next.js", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    title: "Digital Campus Support",
    image: project2,
    link: "https://digital-campus-support.vercel.app",
    description:
      "Developed a web platform for students, faculty, mentors, and administrators to manage academic activities.",
    technologies: ["NextJS", "TypeScript", "Tailwind CSS", "Shadcn", "Firebase", "Cloudinary"],
  },

];

