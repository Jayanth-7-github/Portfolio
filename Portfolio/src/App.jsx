// App.jsx
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import StarsBackground from "./components/StarsBackground";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "relative inline-flex items-center px-3 py-2 text-sm font-medium transition";

  const linkInactive = "text-slate-300 hover:text-slate-50";

  const linkActive = "text-slate-50";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mt-3 rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-xl shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between px-3 sm:px-5 py-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `md:hidden ${linkBase} ${
                    isActive ? linkActive : linkInactive
                  } text-base font-semibold`
                }
                aria-label="Go to Home"
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>

              <div className="hidden md:flex items-center gap-1 mx-auto">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `${linkBase} ${isActive ? linkActive : linkInactive} ` +
                      "after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:rounded-full after:transition-transform after:duration-300 after:origin-left " +
                      (isActive
                        ? "after:scale-x-100 after:bg-indigo-400"
                        : "after:scale-x-0 after:bg-indigo-400 hover:after:scale-x-100")
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-100 hover:bg-white/10 transition"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                <span className="sr-only">Menu</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {open ? (
                    <>
                      <path d="M18 6 6 18" />
                      <path d="M6 6 18 18" />
                    </>
                  ) : (
                    <>
                      <path d="M4 6h16" />
                      <path d="M4 12h16" />
                      <path d="M4 18h16" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close menu overlay"
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setOpen(false)}
          />

          <aside
            className="fixed top-0 right-0 z-50 h-full w-[82vw] max-w-sm border-l border-white/10 bg-slate-950/85 backdrop-blur-xl shadow-2xl shadow-black/60"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="px-5 py-5">
              <div className="flex items-center justify-between">
                <span className="text-slate-100 font-semibold">Menu</span>
                <button
                  type="button"
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-100 hover:bg-white/10 transition"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>

              <div className="mt-5 flex flex-col">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      "rounded-xl px-4 py-3 text-base font-medium transition border border-transparent " +
                      (isActive
                        ? "bg-white/10 text-slate-50 border-white/10"
                        : "text-slate-300 hover:text-slate-50 hover:bg-white/5")
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </aside>
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <StarsBackground />
      <Navbar />
      <main className="relative z-10 pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
