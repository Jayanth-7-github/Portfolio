const contactIcons = {
  email: "/icons/email.png", // Add your actual icon files!
  phone: "/icons/phone.png",
  linkedin: "/icons/linkedin.svg",
  github: "/icons/github.svg",
};

export default function Contact() {
  return (
    <main className="min-h-[80vh] px-5 sm:px-6 py-10 font-sans flex flex-col items-center text-slate-100">
      {/* Header */}
      <header className="text-center mb-12 max-w-xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-50 mb-2 tracking-tight">
          Contact Me
        </h1>
        <p className="text-slate-300 text-lg md:text-xl mt-2 leading-relaxed">
          Interested in working together or just want to say hi? Reach out!
        </p>
      </header>

      {/* Contact Info */}
      <section className="w-full max-w-lg px-6 sm:px-8 py-8 rounded-2xl shadow-xl shadow-black/30 bg-white/5 border border-white/10 backdrop-blur">
        <ul className="space-y-6 text-slate-300 text-md">
          <li className="flex items-center gap-3">
            <img src={contactIcons.email} alt="Email" className="w-6 h-6" />
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:kolleparajayanth@gmail.com"
              className="text-cyan-300 hover:text-cyan-200 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              kolleparajayanth@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-3">
            <img src={contactIcons.phone} alt="Phone" className="w-6 h-6" />
            <span className="font-semibold">Phone:</span>{" "}
            <span className="text-slate-100">+91 8869965959</span>
          </li>
          <li className="flex items-center gap-3">
            <img
              src={contactIcons.linkedin}
              alt="LinkedIn"
              className="w-6 h-6"
            />
            <span className="font-semibold">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/jayanth-kollepara-54876b319/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-300 hover:text-indigo-200 hover:underline"
            >
              linkedin.com/in/jayanth
            </a>
          </li>
          <li className="flex items-center gap-3">
            <img src={contactIcons.github} alt="GitHub" className="w-6 h-6" />
            <span className="font-semibold">GitHub:</span>{" "}
            <a
              href="https://github.com/Jayanth-7-github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-cyan-200 hover:underline"
            >
              github.com/Jayanth-7-github
            </a>
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <span className="block text-lg text-indigo-200 font-semibold mb-2">
          Ready to connect?
        </span>
        <a
          href="mailto:kolleparajayanth@gmail.com"
          className="inline-flex items-center justify-center bg-violet-600/90 text-white px-6 py-2.5 rounded-full shadow-lg shadow-violet-500/10 hover:bg-violet-600 hover:shadow-violet-500/20 hover:-translate-y-0.5 font-medium transition"
        >
          Send me an email
        </a>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-slate-500 mt-12">
        I’ll reply as quickly as possible • © 2025 Jayanth Kollepara
      </footer>
    </main>
  );
}
