import PageWrapper from "./PageWrapper";
import { motion } from "framer-motion";
import { GridBackground } from "./ui/GridBackground";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

// Map skill names to image URLs (put your logo images in /public/skills/)
const skillIcons = {
  "React.js": "/skills/react.svg",
  "Tailwind CSS": "/skills/tailwind.svg",
  "Framer Motion": "/skills/framer.svg",
  GSAP: "/skills/gsap.svg",
  HTML: "/skills/html.svg",
  CSS: "/skills/css.svg",
  "Node.js": "/skills/node.svg",
  "Express.js": "/skills/express.svg",
  "JWT & Authentication": "/skills/jwt.png",
  MongoDB: "/skills/mongodb.svg",
  Prisma: "/skills/prisma.svg",
  SQL: "/skills/sql.svg",
  C: "/skills/c.svg",
  "C++": "/skills/cpp.png",
  Python: "/skills/python.svg",
  Java: "/skills/java.svg",
  JavaScript: "/skills/javascript.svg",
  AWS: "/skills/aws.svg",
  Git: "/skills/git.svg",
  GitHub: "/skills/github.svg",
  Figma: "/skills/figma.svg",
};

// Map skill names to official page links
const skillLinks = {
  "React.js": "https://react.dev/",
  "Tailwind CSS": "https://tailwindcss.com/",
  "Framer Motion": "https://www.framer.com/motion/",
  GSAP: "https://gsap.com/",
  HTML: "https://developer.mozilla.org/docs/Web/HTML",
  CSS: "https://developer.mozilla.org/docs/Web/CSS",
  "Node.js": "https://nodejs.org/",
  "Express.js": "https://expressjs.com/",
  "JWT & Authentication": "https://jwt.io/",
  MongoDB: "https://www.mongodb.com/",
  Prisma: "https://www.prisma.io/",
  SQL: "https://en.wikipedia.org/wiki/SQL",
  C: "https://en.wikipedia.org/wiki/C_(programming_language)",
  "C++": "https://isocpp.org/",
  Python: "https://python.org/",
  Java: "https://www.java.com/",
  JavaScript: "https://developer.mozilla.org/docs/Web/JavaScript",
  AWS: "https://aws.amazon.com/",
  Git: "https://git-scm.com/",
  GitHub: "https://github.com/",
  Figma: "https://figma.com/",
};

const frontendSkills = [
  "React.js",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "HTML",
  "CSS",
];
const backendSkills = ["Node.js", "Express.js", "JWT & Authentication"];
const databaseSkills = ["MongoDB", "Prisma", "SQL"];
const programming = ["C", "C++", "Python", "Java", "JavaScript"];
const others = ["AWS", "Git", "GitHub", "Figma"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  const skillLists = [
    ["Frontend", frontendSkills],
    ["Backend", backendSkills],
    ["Programming Languages", programming],
    ["Databases", databaseSkills],
    ["Others", others],
  ];

  const introText = "A comprehensive toolkit of modern web technologies and programming languages.";

  return (
    <PageWrapper className="flex flex-col items-center relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <GridBackground />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 sm:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight"
          >
            My Skills
          </motion.h1>
          <div className="flex justify-center">
            <TextGenerateEffect words={introText} className="text-slate-400 text-lg leading-relaxed font-normal" />
          </div>
        </header>

        {/* Skill Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillLists.map(([title, skills], idx) => (
            <motion.div
              key={title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm"
            >
              <h2 className="text-xl font-semibold text-indigo-200 mb-6 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                {title}
              </h2>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/5 border border-white/5 text-sm px-4 py-3 rounded-2xl shadow-lg shadow-black/20 transition-colors flex items-center gap-3 cursor-pointer group"
                  >
                    <a
                      href={skillLinks[skill]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={skill}
                      className="flex items-center gap-3 no-underline text-inherit w-full"
                    >
                      {skillIcons[skill] ? (
                        <img
                          src={skillIcons[skill]}
                          alt={skill}
                          className="w-6 h-6 object-contain group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition text-white"
                        />
                      ) : (
                        <span className="w-6 h-6 bg-slate-700 rounded-full" />
                      )}
                      <span className="font-medium text-slate-200 group-hover:text-white transition-colors">{skill}</span>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </PageWrapper>
  );
}
