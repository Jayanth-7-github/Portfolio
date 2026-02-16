import PageWrapper from "./PageWrapper";
import { motion } from "framer-motion";
import { GridBackground } from "./ui/GridBackground";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const contactIcons = {
  email: "/icons/email.png",
  phone: "/icons/phone.png",
  linkedin: "/icons/linkedin.svg",
  github: "/icons/github.svg",
};

export default function Contact() {
  const introText = "Whether you have a question, a project idea, or just want to say hi, I'd love to hear from you.";

  return (
    <PageWrapper className="flex items-center justify-center relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <GridBackground />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 py-12 flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg bg-slate-900/50 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group"
        >
          {/* Ambient Background Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition duration-700" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl group-hover:bg-violet-500/30 transition duration-700" />

          <div className="relative z-10 text-center">
            <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Get in Touch
            </h1>
            <div className="mb-10 text-center flex justify-center">
              <TextGenerateEffect words={introText} className="text-slate-400 text-lg leading-relaxed font-normal" />
            </div>

            <div className="space-y-6 text-left">
              <a
                href="mailto:kolleparajayanth@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition group/item"
              >
                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover/item:text-indigo-300 transition">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-slate-200 font-medium break-all">kolleparajayanth@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/jayanth-kollepara-54876b319/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition group/item"
              >
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover/item:text-blue-300 transition">
                  <img src={contactIcons.linkedin} alt="LinkedIn" className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">LinkedIn</p>
                  <p className="text-slate-200 font-medium">Jayanth Kollepara</p>
                </div>
              </a>

              <a
                href="https://github.com/Jayanth-7-github"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition group/item"
              >
                <div className="p-3 bg-slate-500/10 rounded-xl text-slate-400 group-hover/item:text-slate-300 transition">
                  <img src={contactIcons.github} alt="GitHub" className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">GitHub</p>
                  <p className="text-slate-200 font-medium">Jayanth-7-github</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                  <img src={contactIcons.phone} alt="Phone" className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="text-slate-200 font-medium">+91 8869965959</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="mailto:kolleparajayanth@gmail.com"
                className="inline-flex items-center justify-center w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/25 transition transform hover:-translate-y-0.5"
              >
                Send a Message
              </a>
            </div>
          </div>
        </motion.div>


      </div>
    </PageWrapper>
  );
}
