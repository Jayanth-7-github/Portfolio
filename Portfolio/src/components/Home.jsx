import { Link } from "react-router-dom";

const platformIcons = {
  github: "/icons/github.svg",
  leetcode: "/icons/leetcode.png",
};

export default function Home() {
  return (
    <main className="min-h-screen px-5 sm:px-6 py-10 font-sans flex flex-col items-center text-slate-100">
      {/* Profile Photo & Header */}
      <header className="text-center max-w-3xl mx-auto mb-14">
  <div className="flex justify-center mb-6">
    <img
      src="/photo.jpg"
      alt="Jayanth Kollepara"
      className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-indigo-400/80 object-cover shadow-xl shadow-black/40"
    />
  </div>

  <h1 className="text-4xl md:text-6xl font-bold text-slate-50 mb-3 tracking-tight">
    Jayanth Kollepara
  </h1>

  <p className="text-lg md:text-xl text-indigo-300 font-semibold">
    Full-Stack Developer · Software Engineer
  </p>

  <p className="text-md md:text-lg text-slate-300 mt-5 leading-relaxed">
    I am a Computer Science & Engineering undergraduate at Kalasalingam Academy,
    pursuing my degree through the Kalvium Program. I focus on building
    high-quality, scalable, and user-centric web applications using modern
    full-stack technologies.
  </p>

  <p className="text-md text-slate-300 mt-4 leading-relaxed">
    With a strong foundation in problem-solving and hands-on experience in
    real-world projects, I am driven to transform ideas into efficient and
    impactful digital solutions.
  </p>
</header>


      {/* Quick Links (optional) */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12">
        <Link
          to="/projects"
          className="inline-flex items-center justify-center rounded-full px-6 py-2.5 font-medium text-white bg-gradient-to-r from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 hover:-translate-y-0.5 transition"
        >
          View Projects
        </Link>
        <Link
          to="/skills"
          className="inline-flex items-center justify-center rounded-full px-6 py-2.5 font-medium text-slate-100 bg-white/5 border border-white/10 shadow-lg shadow-black/30 hover:bg-white/10 hover:-translate-y-0.5 transition"
        >
          My Skills
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full px-6 py-2.5 font-medium text-white bg-violet-600/90 shadow-lg shadow-violet-500/10 hover:bg-violet-600 hover:shadow-violet-500/20 hover:-translate-y-0.5 transition"
        >
          Contact Me
        </Link>
      </div>

      {/* Highlights */}
      <section className="w-full max-w-2xl flex flex-col md:flex-row justify-center items-stretch gap-6 mb-14">
        {/* GitHub Card */}
        <div className="flex-1 bg-white/5 border border-white/10 px-6 py-5 rounded-2xl shadow-xl shadow-black/30 flex flex-col items-start backdrop-blur">
          <div className="flex items-center mb-1 gap-2">
            <img src={platformIcons.github} alt="GitHub" className="w-7 h-7" />
            <span className="text-cyan-300 text-lg font-bold">GitHub</span>
          </div>
          <a
            href="https://github.com/Jayanth-7-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-100 hover:underline font-semibold"
          >
            github.com/Jayanth-7-github
          </a>
          <span className="text-slate-400 text-sm mt-1">
            Open-source projects, mini projects, collaboration.
          </span>
        </div>
        {/* LeetCode Card */}
        <div className="flex-1 bg-white/5 border border-white/10 px-6 py-5 rounded-2xl shadow-xl shadow-black/30 flex flex-col items-start backdrop-blur">
          <div className="flex items-center mb-1 gap-2">
            <img
              src={platformIcons.leetcode}
              alt="LeetCode"
              className="w-7 h-7"
            />
            <span className="text-indigo-300 text-lg font-bold">LeetCode</span>
          </div>
          <a
            href="https://leetcode.com/u/Jayanth-7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-100 hover:underline font-semibold"
          >
            leetcode.com/u/Jayanth-7
          </a>
          <span className="text-slate-400 text-sm mt-1">
            Problem solving, DSA practice, competitive coding.
          </span>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-slate-500 mt-8">
        Crafted with 💻 • © 2025 Jayanth Kollepara
      </footer>
    </main>
  );
}
