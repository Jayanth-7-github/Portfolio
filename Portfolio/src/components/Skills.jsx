import { motion } from "framer-motion";

// Map skill names to image URLs (put your logo images in /public/skills/)
const skillIcons = {
  "React.js": "/skills/react.svg",
  "Tailwind CSS": "/skills/tailwind.svg",
  "Framer Motion": "/skills/framer.svg",
  "GSAP": "/skills/gsap.svg",
  "HTML": "/skills/html.svg",
  "CSS": "/skills/css.svg",
  "Node.js": "/skills/node.svg",
  "Express.js": "/skills/express.svg",
  "JWT & Authentication": "/skills/jwt.png",
  "MongoDB": "/skills/mongodb.svg",
  "Prisma": "/skills/prisma.svg",
  "SQL": "/skills/sql.svg",
  "C": "/skills/c.svg",
  "C++": "/skills/cpp.png",
  "Python": "/skills/python.svg",
  "Java": "/skills/java.svg",
  "JavaScript": "/skills/javascript.svg",
  "AWS": "/skills/aws.svg",
  "Git": "/skills/git.svg",
  "GitHub": "/skills/github.svg",
  "Figma": "/skills/figma.svg"
};

// Map skill names to official page links
const skillLinks = {
  "React.js": "https://react.dev/",
  "Tailwind CSS": "https://tailwindcss.com/",
  "Framer Motion": "https://www.framer.com/motion/",
  "GSAP": "https://gsap.com/",
  "HTML": "https://developer.mozilla.org/docs/Web/HTML",
  "CSS": "https://developer.mozilla.org/docs/Web/CSS",
  "Node.js": "https://nodejs.org/",
  "Express.js": "https://expressjs.com/",
  "JWT & Authentication": "https://jwt.io/",
  "MongoDB": "https://www.mongodb.com/",
  "Prisma": "https://www.prisma.io/",
  "SQL": "https://en.wikipedia.org/wiki/SQL",
  "C": "https://en.wikipedia.org/wiki/C_(programming_language)",
  "C++": "https://isocpp.org/",
  "Python": "https://python.org/",
  "Java": "https://www.java.com/",
  "JavaScript": "https://developer.mozilla.org/docs/Web/JavaScript",
  "AWS": "https://aws.amazon.com/",
  "Git": "https://git-scm.com/",
  "GitHub": "https://github.com/",
  "Figma": "https://figma.com/"
};

const frontendSkills = [
  "React.js",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "HTML",
  "CSS"
];
const backendSkills = ["Node.js", "Express.js", "JWT & Authentication"];
const databaseSkills = ["MongoDB", "Prisma", "SQL"];
const programming = ["C", "C++", "Python", "Java", "JavaScript"];
const others = ["AWS", "Git", "GitHub", "Figma"];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Skills() {
  const skillLists = [
    ["Frontend", frontendSkills],
    ["Backend", backendSkills],
    ["Programming Languages", programming],
    ["Databases", databaseSkills],
    ["Others", others]
  ];

  return (
    <motion.main
      className="min-h-screen bg-gradient-to-b from-white to-[#F1F5F9] px-6 py-10 font-sans text-[#1E293B] flex flex-col items-center"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      {/* Header */}
      <motion.header
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#7C3AED] mb-2">
          My Skills
        </h1>
        <p className="text-[#475569] text-lg md:text-xl mt-2">
          Modern web technologies, programming, and tools for building scalable digital solutions.
        </p>
      </motion.header>

      {/* Skill Sections */}
      <section className="w-full max-w-5xl px-8 py-8 rounded-2xl shadow-lg bg-white">
        {skillLists.map(([title, skills], idx) => (
          <motion.div
            className="mb-8"
            key={title}
            variants={itemVariants}
            custom={idx}
          >
            <h2 className="text-xl font-medium text-[#3B82F6] mb-3">{title}</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, i) => (
                <motion.li
                  key={skill}
                  className="bg-[#E2E8F0] text-center text-sm p-3 rounded-lg shadow-sm hover:bg-[#CBD5E1] transition flex flex-col items-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.08, boxShadow: "0 6px 16px #7C3AED20" }}
                  variants={itemVariants}
                >
                  <a
                    href={skillLinks[skill]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={skill}
                    className="flex flex-col items-center gap-2 no-underline text-inherit"
                  >
                    {skillIcons[skill] ? (
                      <img
                        src={skillIcons[skill]}
                        alt={skill}
                        className="w-8 h-8 mx-auto mb-1"
                      />
                    ) : (
                      <span className="w-8 h-8" />
                    )}
                    <span className="font-medium">{skill}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-[#94A3B8] mt-10">
        Let’s build something awesome together! • © 2025 Jayanth Kollepara
      </footer>
    </motion.main>
  );
}
