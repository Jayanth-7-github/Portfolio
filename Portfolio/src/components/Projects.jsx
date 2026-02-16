import PageWrapper from "./PageWrapper";
import { useMemo, useState } from "react";
import { HoverEffect } from "./ui/HoverEffect";
import { GridBackground } from "./ui/GridBackground";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const projects = [
  {
    name: "EcoSphere",
    desc: "An eco-conscious community platform for resilient support during natural disasters. Features resource sharing, alert system, and more.",
    img: "",
    repo: "https://github.com/kalviumcommunity/s81_Jayanth_Ecosphere",
    demo: "https://ecospheere.netlify.app/",
    tags: ["React", "Node.js", "Community"],
  },
  {
    name: "Tara",
    desc: "An event management system for organizing events and streamlining coordination.",
    img: "",
    repo: "https://github.com/Jayanth-7-github/Tara",
    demo: "https://taara.netlify.app/",
    tags: ["Event Management", "Web App", "React", "Node.js", "MongoDB"],
  },
  {
    name: "Rock Paper Scissors",
    desc: "Fun interactive rock-paper-scissors game. Play online, test your luck and see simple state/game logic.",
    img: "",
    repo: "https://github.com/Jayanth-7-github/Rock_Paper_Siccors",
    demo: "https://frolicking-praline-14031b.netlify.app/",
    tags: ["React", "Game", "JavaScript"],
  },
  {
    name: "Yexo",
    desc: "A real-time chat web and mobile app for messaging and conversations.",
    img: "",
    repo: "https://github.com/Jayanth-7-github/Yexo",
    demo: "https://yexochat.netlify.app/",
    tags: ["Chat App", "Real-time", "Web App", "Mobile App", "React"],
  },
  {
    name: "E-commerce",
    desc: "A full-stack platform for managing products, categories, and inventory using the MERN stack (MongoDB, Express, React, Node). Includes admin dashboard.",
    img: "",
    repo: "https://github.com/Jayanth-7-github/Follow-Along-Eshop",
    demo: "",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    name: "Patient Management",
    desc: "A full-stack web app to register patients, manage lab tests, booking, and downloading reports. JWT-secured authentication and admin dashboard.",
    img: "",
    repo: "https://github.com/Jayanth-7-github/PatientManagment",
    demo: "https://labtes.netlify.app/",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
  },
  {
    name: "Snake & Ladders",
    desc: "Digital version of the classic Snake and Ladders board game. Built with JavaScript/Python for fun learning and logic.",
    img: "",
    repo: "https://github.com/Jayanth-7-github/SnakeAndLadders",
    demo: "",
    tags: ["JavaScript", "Python", "Game"],
  },
];

function getGithubOpenGraphImage(repoUrl) {
  try {
    const url = new URL(repoUrl);
    if (url.hostname !== "github.com") return "";
    const [owner, repo] = url.pathname.replace(/^\//, "").split("/");
    if (!owner || !repo) return "";
    return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
  } catch {
    return "";
  }
}

const ProjectCardContent = ({ project, preview, isBroken, onImageError }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Image Preview */}
      <div className="w-full h-40 bg-white/5 border border-white/10 rounded-xl mb-4 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-300">
        {preview && !isBroken ? (
          <img
            src={preview}
            alt={`${project.name} screenshot`}
            className="object-cover w-full h-full"
            loading="lazy"
            onError={onImageError}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 bg-slate-900/50">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mb-2 opacity-50">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs">No Preview</span>
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold text-slate-100 mb-2">{project.name}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
        {project.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags?.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded text-[10px] font-medium tracking-wide border border-zinc-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 mt-auto pt-2 border-t border-white/10">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
        >
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
          GitHub
        </a>
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            Live Demo
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default function Projects() {
  const [broken, setBroken] = useState({});

  const previews = useMemo(() => {
    const map = {};
    for (const p of projects) {
      map[p.name] = p.img || getGithubOpenGraphImage(p.repo);
    }
    return map;
  }, []);

  const projectItems = projects.map((p) => ({
    name: p.name,
    component: (
      <ProjectCardContent
        project={p}
        preview={previews[p.name]}
        isBroken={broken[p.name]}
        onImageError={() => setBroken((prev) => ({ ...prev, [p.name]: true }))}
      />
    )
  }));

  const introText = "A collection of my recent work and open source contributions.";

  return (
    <PageWrapper className="relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <GridBackground />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-slate-100 mb-2 tracking-tight text-center">
          Projects
        </h2>

        <div className="flex justify-center mb-10">
          <TextGenerateEffect words={introText} className="text-lg text-slate-400 font-normal" />
        </div>

        <HoverEffect items={projectItems} />


      </div>
    </PageWrapper>
  );
}
