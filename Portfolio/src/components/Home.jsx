import React from "react";

const frontendSkills = ["React.js", "Tailwind CSS", "Framer Motion", "Gsap", "HTML", "CSS"];
const backendSkills = ["Node.js", "Express.js", "JWT & Authentication"];
const databaseSkills = ["MongoDB", "Prisma", "SQL"];
const programming = ["C", "C++", "Python", "Java", "JavaScript"];
const others = ["AWS", "Git", "GitHub", "Figma"];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1E293B] flex flex-col items-center justify-center px-6 py-10">
      
      {/* Header */}
      <header className="text-center mb-12">
        <img
          src="/photo.jpg"
          alt="Jayanth"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 border-4 border-[#A78BFA] object-cover shadow-lg"
        />
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-[#0F172A]">
          Hey there, I'm Jayanth 👋
        </h1>
        <p className="text-xl text-[#3B82F6] font-medium">
          Full-Stack Developer | Problem Solver
        </p>
        <h5 className="text-2xl font-bold text-[#7C3AED] mt-4">About Me</h5>
        <p className="text-md text-[#475569] mt-2">
          I’m Jayanth Kollepara, currently pursuing my B.Tech in Computer Science and Engineering at Kalasalingam Academy of Research and Education under the Kalvium Program — a unique, work-integrated, and industry-oriented curriculum focused on software product engineering.
          I’m passionate about building impactful web applications, blending strong frontend design, backend architecture, and database management skills. Through the Kalvium program, I’ve gained hands-on experience in full-stack development and real-world software projects from the first year itself.
        </p>
        <p className="text-md text-[#475569] mt-4">
          Web Developer @ Coding Blocks KARE | Technical Member @ Vishaka KARE
        </p>
        <p className="text-md text-[#475569] mt-4">
          I’m always eager to learn new technologies, solve real-world problems, and grow as a developer. My goal is to build scalable, meaningful software that improves people's lives.
        </p>
      </header>

      {/* Projects */}
      <section className="w-full max-w-5xl bg-white px-8 py-6 rounded-2xl shadow mb-8">
        <h2 className="text-3xl font-bold text-[#7C3AED] mb-6 border-b border-[#CBD5E1] pb-2">
          Projects
        </h2>
        <div className="space-y-4">
          <div className="bg-[#E2E8F0] p-4 rounded-xl shadow">
            <h3 className="text-xl font-semibold">E-commerce</h3>
            <p className="text-sm text-[#334155]">
              A full-stack system to manage products, categories, and stock levels using MongoDB, Express.js, and React.
            </p>
            <a
              href="https://github.com/Jayanth-7-github/Follow-Along-Eshop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B82F6] underline text-sm"
            >
              🚀GitHub
            </a>{" "}
            |{" "}
            <span className="text-[#94A3B8] text-sm">🚀Live (Coming soon)</span>
          </div>

          <div className="bg-[#E2E8F0] p-4 rounded-xl shadow">
            <h3 className="text-xl font-semibold">EcoSphere</h3>
            <p className="text-sm text-[#334155]">
              Developed an eco-friendly web platform to assist individuals affected by natural disasters like floods and droughts, enabling real-time support and community-driven aid.
            </p>
            <a
              href="https://github.com/kalviumcommunity/s81_Jayanth_Ecosphere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B82F6] underline text-sm"
            >
              🚀GitHub
            </a>{" "}
            |{" "}
            <span className="text-[#94A3B8] text-sm">🚀Live (Coming soon)</span>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="w-full max-w-5xl bg-white px-8 py-6 rounded-2xl shadow">
        <h2 className="text-3xl font-bold text-[#7C3AED] mb-6 border-b border-[#CBD5E1] pb-2">
          Skills
        </h2>

        {[["Frontend", frontendSkills], ["Backend", backendSkills], ["Programming", programming], ["Database", databaseSkills], ["Others", others]].map(
          ([title, skills]) => (
            <div className="mb-6" key={title}>
              <h3 className="text-xl text-[#3B82F6] font-semibold mb-2">{title}</h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="bg-[#E2E8F0] text-center p-4 rounded-xl shadow-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </section>

      {/* Contact */}
      <section className="w-full max-w-3xl bg-white mt-12 px-8 py-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold text-[#7C3AED] mb-4">Contact Me</h2>
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
      <footer className="mt-16 text-center text-sm text-[#64748B]">
        Crafted with ❤ in React & Tailwind • © 2025 Jayanth
      </footer>
    </main>
  );
}
