import React from "react";

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

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F1F5F9] to-white text-[#1E293B] px-6 py-10 font-sans">
      {/* Header */}
      <header className="text-center max-w-4xl mx-auto mb-16">
        <div className="flex justify-center">
          <img
            src="/photo.jpg"
            alt="Jayanth"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-[#6366F1] object-cover shadow-xl transition-transform hover:scale-105"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-2">
          Hi, I'm Jayanth 👋
        </h1>
        <p className="text-lg md:text-xl text-[#6366F1] font-medium">
          Full-Stack Developer | Problem Solver
        </p>
        <p className="text-md md:text-lg text-[#475569] mt-4 leading-relaxed">
          I'm currently pursuing my B.Tech in Computer Science & Engineering at
          Kalasalingam Academy under the Kalvium Program. I specialize in
          full-stack development and have hands-on experience with real-world
          web applications from early on in my journey.
        </p>
        <p className="text-md text-[#475569] mt-2">
          Web Developer @ Coding Blocks KARE | Technical Member @ Vishaka KARE
        </p>
        <p className="text-md text-[#475569] mt-2">
          I'm driven by curiosity, love learning new technologies, and enjoy
          crafting scalable digital experiences that solve real problems.
        </p>
      </header>

      {/* Projects */}
      <section className="w-full max-w-5xl mx-auto bg-white px-10 py-8 rounded-2xl shadow-lg mb-12">
        <h2 className="text-3xl font-semibold text-[#7C3AED] mb-6 border-b border-gray-300 pb-2">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project Card */}
          {[
            {
              name: "E-commerce",
              desc: "A full-stack platform for managing products, categories, and inventory using MERN stack.",
              link: "https://github.com/Jayanth-7-github/Follow-Along-Eshop",
            },
            {
              name: "EcoSphere",
              desc: "An eco-conscious platform built to support communities during natural disasters like floods and droughts.",
              link: "https://github.com/kalviumcommunity/s81_Jayanth_Ecosphere",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-[#334155] mb-3">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3B82F6] font-medium underline text-sm hover:text-[#2563EB]"
              >
                🚀 GitHub
              </a>{" "}
              |{" "}
              <span className="text-gray-400 text-sm">
                🚀 Live (Coming Soon)
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Online Presence */}
      <section className="w-full max-w-3xl mx-auto bg-white px-10 py-8 rounded-2xl shadow-lg mb-12">
        <h2 className="text-2xl font-semibold text-[#7C3AED] mb-4">
          Online Presence
        </h2>
        <ul className="space-y-4 text-[#475569] text-md">
          <li>
            💻 <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/Jayanth-7-github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B82F6] hover:underline"
            >
              github.com/Jayanth-7-github
            </a>
            <br />
            <span className="text-sm text-[#64748B]">
              Explore my open-source work, mini projects, and collaborative
              repositories.
            </span>
          </li>
          <li>
            🧠 <strong>LeetCode:</strong>{" "}
            <a
              href="https://leetcode.com/u/Jayanth-7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B82F6] hover:underline"
            >
              leetcode.com/u/Jayanth-7
            </a>
            <br />
            <span className="text-sm text-[#64748B]">
              Track my algorithmic thinking, DSA practice, and competitive
              problem-solving skills.
            </span>
          </li>
        </ul>
      </section>

      {/* Skills */}
      <section className="w-full max-w-5xl mx-auto bg-white px-10 py-8 rounded-2xl shadow-lg mb-12">
        <h2 className="text-3xl font-semibold text-[#7C3AED] mb-6 border-b border-gray-300 pb-2">
          Skills
        </h2>

        {[
          ["Frontend", frontendSkills],
          ["Backend", backendSkills],
          ["Programming Languages", programming],
          ["Databases", databaseSkills],
          ["Others", others],
        ].map(([title, skills]) => (
          <div className="mb-6" key={title}>
            <h3 className="text-xl font-medium text-[#3B82F6] mb-3">{title}</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-[#E2E8F0] text-center text-sm p-3 rounded-lg shadow-sm hover:bg-[#CBD5E1] transition"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section className="w-full max-w-3xl mx-auto bg-white px-10 py-8 rounded-2xl shadow-lg mb-12">
        <h2 className="text-2xl font-semibold text-[#7C3AED] mb-4">
          Contact Me
        </h2>
        <p className="text-[#475569] mb-2">
          📧 Email:{" "}
          <a
            href="mailto:kolleparajayanth@gmail.com"
            className="text-[#3B82F6] hover:underline"
          >
            kolleparajayanth@gmail.com
          </a>
        </p>
        <p className="text-[#475569] mb-2">
          📱 Phone: <span className="text-[#1E293B]">+91 8869965959</span>
        </p>
        <p className="text-[#475569]">
          🌐 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/jayanth-kollepara-54876b319/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3B82F6] hover:underline"
          >
            linkedin.com/in/jayanth
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-[#94A3B8] mt-16">
        Crafted with 💻 using React & Tailwind • © 2025 Jayanth Kollepara
      </footer>
    </main>
  );
}
