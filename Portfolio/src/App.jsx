import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { GridBackground } from "./components/ui/GridBackground";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      {/* Global Backgrounds: Grid + Stars */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <GridBackground />
      </div>

      <Navbar />
      <main className="relative z-10 pt-24 min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  );
}
