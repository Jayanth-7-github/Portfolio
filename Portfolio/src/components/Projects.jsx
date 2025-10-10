import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";

const projects = [
  {
    name: "E-commerce",
    desc: "A full-stack platform for managing products, categories, and inventory using the MERN stack (MongoDB, Express, React, Node). Includes admin dashboard and secure authentication.",
    img: "", // e.g. "/images/ecommerce.png" or leave blank for placeholder
    repo: "https://github.com/Jayanth-7-github/Follow-Along-Eshop",
    demo: "",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    name: "EcoSphere",
    desc: "An eco-conscious community platform for resilient support during natural disasters. Features resource sharing, alert system, and more.",
    img: "",
    repo: "https://github.com/kalviumcommunity/s81_Jayanth_Ecosphere",
    demo: "",
    tags: ["React", "Node.js", "Community"],
  },
  {
    name: "Patient Management",
    desc: "A full-stack web app to register patients, manage lab tests, booking, and downloading reports. JWT-secured authentication and admin dashboard.",
    img: "",
    repo: "https://github.com/Jayanth-7-github/PatientManagment",
    demo: "https://labtes.netlify.app/",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
  },
  {
    name: "Snake & Ladders",
    desc: "Digital version of the classic Snake and Ladders board game. Built with JavaScript/Python for fun learning and logic.",
    img: "",
    repo: "https://github.com/Jayanth-7-github/SnakeAndLadders",
    demo: "",
    tags: ["JavaScript", "Python", "Game"],
  },
  {
    name: "Rock Paper Scissors",
    desc: "Fun interactive rock-paper-scissors game. Play online, test your luck and see simple state/game logic.",
    img: "",
    repo: "https://github.com/Jayanth-7-github/Rock_Paper_Siccors",
    demo: "https://frolicking-praline-14031b.netlify.app/",
    tags: ["React", "Game", "JavaScript"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, type: "spring", stiffness: 70 },
  }),
};

export default function Projects() {
  return (
    <PageWrapper>
      <section className="w-full max-w-5xl mx-auto bg-white px-4 sm:px-8 py-8 rounded-2xl shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-[#7C3AED] mb-8 border-b border-gray-200 pb-2">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              className="bg-[#F8FAFC] p-6 rounded-xl shadow-lg border border-transparent hover:border-[#7C3AED] hover:shadow-purple-200 hover:-translate-y-1.5 group transition-all relative flex flex-col"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              {/* Image Preview or Placeholder */}
              <div className="w-full h-36 bg-[#e5e7eb] flex items-center justify-center rounded-lg mb-3 overflow-hidden">
                {project.img ? (
                  <img src={project.img} alt={`${project.name} screenshot`} className="object-cover w-full h-full" />
                ) : (
                  <span className="text-[#94A3B8] text-sm">No Preview Available</span>
                )}
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#7C3AED] transition">{project.name}</h3>
              {/* Description */}
              <p className="text-[#334155] mb-3 text-sm min-h-[60px]">{project.desc}</p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags?.map((tag) => (
                  <span key={tag} className="bg-[#E0E7EF] text-[#6366F1] px-2 py-0.5 rounded-md text-xs font-semibold shadow-sm">{tag}</span>
                ))}
              </div>
              {/* Links */}
              <div className="flex items-center gap-5 mt-auto">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub repository for ${project.name}`}
                  className="flex items-center gap-1 text-[#3B82F6] font-medium underline text-sm hover:text-[#2563EB] transition"
                >
                  <svg width="18" height="18" fill="currentColor" className="inline-block mr-1" aria-hidden="true"><path d="M9 0a9 9 0 00-2.85 17.54c.45.08.62-.2.62-.45 0-.22-.01-.81-.01-1.59-2.26.49-2.74-1.09-2.74-1.09-.4-1.04-.98-1.32-.98-1.32-.8-.54.06-.53.06-.53.89.06 1.36.92 1.36.92.78 1.35 2.05.96 2.55.74.08-.56.3-.96.54-1.18-1.8-.2-3.7-.9-3.7-4a3.14 3.14 0 01.84-2.21c-.08-.2-.37-1.01.08-2.12 0 0 .7-.23 2.3.85a8.1 8.1 0 012.1-.28c.71 0 1.43.09 2.1.28 1.6-1.08 2.3-.85 2.3-.85.45 1.11.17 1.92.08 2.12.52.57.84 1.28.84 2.21 0 3.1-1.9 3.8-3.71 4 .31.28.58.82.58 1.65 0 1.18-.01 2.14-.01 2.43 0 .25.17.54.63.45A9.001 9.001 0 009 0" /></svg>
                  GitHub
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo for ${project.name}`}
                    className="flex items-center gap-1 font-medium text-[#16A34A] underline text-sm hover:text-[#15803D] transition"
                  >
                    <svg width="18" height="18" fill="currentColor" className="inline-block mr-1" aria-hidden="true"><circle cx="9" cy="9" r="8" /><path d="M13 9L7 6v6l6-3z" fill="#16A34A" /></svg>
                    Live Demo
                  </a>
                ) : (
                  <span className="flex items-center gap-1 text-gray-400 text-xs">
                    <svg width="16" height="16" fill="currentColor" className="inline-block"><circle cx="8" cy="8" r="8" fill="#E5E7EB"/><text x="8" y="11" fontSize="9" fontFamily="Arial" fill="#9CA3AF" textAnchor="middle">⏳</text></svg>
                    Demo Not Available
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="text-center text-xs text-[#94A3B8] mt-8">
        Want details on a project? Let&apos;s talk!
      </footer>
    </PageWrapper>
  );
}
