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

export default function Skills() {
  const skillLists = [
    ["Frontend", frontendSkills],
    ["Backend", backendSkills],
    ["Programming Languages", programming],
    ["Databases", databaseSkills],
    ["Others", others],
  ];

  return (
    <main className="min-h-screen px-5 sm:px-6 py-10 font-sans text-slate-100 flex flex-col items-center">
      {/* Header */}
      <header className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-50 mb-2 tracking-tight">
          My Skills
        </h1>
        <p className="text-slate-300 text-lg md:text-xl mt-2 leading-relaxed">
          Modern web technologies, programming, and tools for building scalable
          digital solutions.
        </p>
      </header>

      {/* Skill Sections */}
      <section className="w-full max-w-5xl px-6 sm:px-8 py-8 rounded-2xl shadow-xl shadow-black/30 bg-white/5 border border-white/10 backdrop-blur">
        {skillLists.map(([title, skills], idx) => (
          <div className="mb-8" key={title}>
            <h2 className="text-xl font-semibold text-indigo-200 mb-3">
              {title}
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, i) => (
                <li
                  key={skill}
                  className="bg-white/5 border border-white/10 text-center text-sm p-3 rounded-xl shadow-lg shadow-black/20 hover:bg-white/10 hover:border-violet-400/40 transition flex flex-col items-center gap-2 cursor-pointer"
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
                    <span className="font-medium text-slate-100">{skill}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-slate-500 mt-10">
        Let’s build something awesome together! • © 2025 Jayanth Kollepara
      </footer>
    </main>
  );
}
