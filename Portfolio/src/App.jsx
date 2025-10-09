// App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="fixed w-full bg-white shadow flex justify-center py-4">
        {["Home", "Projects", "Skills", "Contact"].map((page) => (
          <Link
            key={page}
            to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
            className="mx-4 text-[#3B82F6] font-medium hover:underline"
          >
            {page}
          </Link>
        ))}
      </nav>
      <main className="pt-20">
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
