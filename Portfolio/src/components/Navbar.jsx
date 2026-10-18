import { NavLink } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "relative inline-flex items-center px-3 py-2 text-sm font-medium transition";

  const linkInactive = "text-slate-300 hover:text-slate-50";

  const linkActive = "text-slate-50";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 py-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mt-4 rounded-full border border-white/10 bg-black/50 backdrop-blur-md shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between px-3 sm:px-5 py-3 relative z-10">
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

              <div className="hidden md:flex items-center justify-center gap-6 mx-auto w-full">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `${linkBase} ${isActive ? linkActive : linkInactive} ` +
                      "after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-[2px] after:rounded-full after:transition-transform after:duration-300 after:origin-center " +
                      (isActive
                        ? "after:scale-x-100 after:bg-indigo-500"
                        : "after:scale-x-0 after:bg-indigo-500 hover:after:scale-x-50")
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/25 hover:text-white transition shadow-sm"
                  aria-label="View Resume PDF"
                >
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </a>
              </div>

              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-slate-100 hover:bg-slate-800 transition"
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
                  className="rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-slate-100 hover:bg-slate-800 transition"
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
                        ? "bg-slate-800 text-slate-50 border-white/10"
                        : "text-slate-300 hover:text-slate-50 hover:bg-slate-900")
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-3 flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-indigo-300 bg-indigo-500/15 border border-indigo-500/30 hover:bg-indigo-500/25 transition"
                >
                  <span className="flex items-center gap-2">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Resume
                  </span>
                  <span className="text-xs text-indigo-400 font-normal">PDF ↗</span>
                </a>
              </div>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
