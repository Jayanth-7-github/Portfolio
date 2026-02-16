import { Link } from "react-router-dom";
import PageWrapper from "./PageWrapper";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { GridBackground } from "./ui/GridBackground";

const platformIcons = {
  github: "/icons/github.svg",
  leetcode: "/icons/leetcode.png",
};

export default function Home() {
  const introText = `I am a Computer Science & Engineering undergraduate at Kalasalingam Academy, pursuing my degree through the Kalvium Program. I craft high-quality, scalable web applications with modern full-stack technologies. Driven to transform ideas into efficient digital solutions.`;

  return (
    <PageWrapper className="flex flex-col items-center justify-center relative overflow-hidden">

      {/* Grid Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <GridBackground />
      </div>

      <main className="min-h-[85vh] px-5 sm:px-6 py-10 font-sans flex flex-col items-center justify-center text-slate-100 relative z-10 w-full max-w-7xl mx-auto">

        {/* Header Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-4 tracking-tight">
              Kollepara Jayanth Vallabh
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl md:text-2xl text-indigo-300 font-medium mb-8"
          >
            Full-Stack Developer · Software Engineer
          </motion.p>

          {/* Animated Text Description */}
          <div className="max-w-3xl mx-auto">
            <TextGenerateEffect words={introText} className="text-lg text-slate-300 leading-relaxed font-normal" />
          </div>
        </div>


        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mb-16 mt-8"
        >
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-lg font-medium text-slate-200 bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Highlights / Social Proof */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* GitHub Card */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 px-8 py-6 rounded-3xl shadow-2xl backdrop-blur-md hover:border-white/20 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-center mb-3 gap-3">
              <img src={platformIcons.github} alt="GitHub" className="w-8 h-8 opacity-90" />
              <span className="text-cyan-200 text-xl font-bold tracking-wide">GitHub</span>
            </div>
            <a
              href="https://github.com/Jayanth-7-github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-100 hover:text-cyan-300 text-lg font-medium transition-colors block mb-2"
            >
              github.com/Jayanth-7-github
            </a>
            <p className="text-slate-400 text-sm">
              Open-source contributions, repositories, and collaborative projects.
            </p>
          </div>

          {/* LeetCode Card */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 px-8 py-6 rounded-3xl shadow-2xl backdrop-blur-md hover:border-white/20 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-center mb-3 gap-3">
              <img
                src={platformIcons.leetcode}
                alt="LeetCode"
                className="w-8 h-8 opacity-90"
              />
              <span className="text-orange-200 text-xl font-bold tracking-wide">LeetCode</span>
            </div>
            <a
              href="https://leetcode.com/u/Jayanth-7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-100 hover:text-orange-300 text-lg font-medium transition-colors block mb-2"
            >
              leetcode.com/u/Jayanth-7
            </a>
            <p className="text-slate-400 text-sm">
              DSA practice, algorithmic problem solving, and competitive coding.
            </p>
          </div>
        </motion.section>


      </main>
    </PageWrapper>
  );
}
