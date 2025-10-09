// Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.main
      className="min-h-screen bg-gradient-to-b from-[#F1F5F9] to-white text-[#1E293B] px-6 py-10 font-sans flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      {/* Profile Photo & Header */}
      <header className="text-center max-w-3xl mx-auto mb-16">
        <div className="flex justify-center mb-4">
          <motion.img
            src="/photo.jpg"
            alt="Jayanth"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-[#6366F1] object-cover shadow-xl"
            whileHover={{ scale: 1.07, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Hi, I'm Jayanth 👋
        </motion.h1>
        <p className="text-lg md:text-xl text-[#6366F1] font-medium">
          Full-Stack Developer | Problem Solver
        </p>
        <p className="text-md md:text-lg text-[#475569] mt-4">
          I'm currently pursuing my B.Tech in Computer Science & Engineering at Kalasalingam Academy under the Kalvium Program. I specialize in full-stack development and have hands-on experience with real-world web applications early in my journey.
        </p>
        <p className="text-md text-[#475569] mt-2">
          {/* Add position/role as needed */}
        </p>
        <p className="text-md text-[#475569] mt-2">
          Driven by curiosity, love of learning, and the desire to solve real problems with scalable digital experiences.
        </p>
      </header>

      {/* Quick Links (optional) */}
      <div className="flex space-x-6 mb-12">
        <Link
          to="/projects"
          className="bg-[#6366F1] text-white px-5 py-2 rounded-full font-medium shadow hover:bg-[#4F46E5] transition"
        >
          View Projects
        </Link>
        <Link
          to="/skills"
          className="bg-[#F1F5F9] text-[#3B82F6] px-5 py-2 rounded-full font-medium shadow hover:bg-[#E0E7EF] border border-[#6366F1] transition"
        >
          My Skills
        </Link>
        <Link
          to="/contact"
          className="bg-[#7C3AED] text-white px-5 py-2 rounded-full font-medium shadow hover:bg-[#5B21B6] transition"
        >
          Contact Me
        </Link>
      </div>

      {/* Highlights */}
      <section className="w-full max-w-2xl flex flex-col md:flex-row justify-center items-stretch gap-8 mb-16">
        {/* GitHub Card */}
        <motion.div
          className="flex-1 bg-white px-6 py-5 rounded-xl border shadow flex flex-col items-start"
          whileHover={{ y: -8, scale: 1.03, boxShadow: "0 6px 20px #6366f120" }}
        >
          <span className="text-[#3B82F6] text-lg font-bold mb-1">💻 GitHub</span>
          <a
            href="https://github.com/Jayanth-7-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#334155] hover:underline font-semibold"
          >
            github.com/Jayanth-7-github
          </a>
          <span className="text-[#64748B] text-sm mt-1">
            Open-source projects, mini projects, collaboration.
          </span>
        </motion.div>
        {/* LeetCode Card */}
        <motion.div
          className="flex-1 bg-white px-6 py-5 rounded-xl border shadow flex flex-col items-start"
          whileHover={{ y: -8, scale: 1.03, boxShadow: "0 6px 20px #6366f120" }}
        >
          <span className="text-[#3B82F6] text-lg font-bold mb-1">🧠 LeetCode</span>
          <a
            href="https://leetcode.com/u/Jayanth-7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#334155] hover:underline font-semibold"
          >
            leetcode.com/u/Jayanth-7
          </a>
          <span className="text-[#64748B] text-sm mt-1">
            Problem solving, DSA practice, competitive coding.
          </span>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-[#94A3B8] mt-8">
        Crafted with 💻  • © 2025 Jayanth Kollepara
      </footer>
    </motion.main>
  );
}
