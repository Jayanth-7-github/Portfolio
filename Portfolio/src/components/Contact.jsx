import { motion } from "framer-motion";

const contactIcons = {
  email: "/icons/email.png",      // Add your actual icon files!
  phone: "/icons/phone.png",
  linkedin: "/icons/linkedin.svg",
  github: "/icons/github.svg"
};

export default function Contact() {
  return (
    <motion.main
      className="min-h-[80vh] bg-gradient-to-b from-white to-[#F1F5F9] px-6 py-10 font-sans flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.header
        className="text-center mb-12 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#7C3AED] mb-2">
          Contact Me
        </h1>
        <p className="text-[#475569] text-lg md:text-xl mt-2">
          Interested in working together or just want to say hi? Reach out!
        </p>
      </motion.header>

      {/* Contact Info */}
      <section className="w-full max-w-lg px-8 py-8 rounded-2xl shadow-lg bg-white">
        <ul className="space-y-6 text-[#475569] text-md">
          <li className="flex items-center gap-3">
            <img src={contactIcons.email} alt="Email" className="w-6 h-6" />
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:kolleparajayanth@gmail.com"
              className="text-[#3B82F6] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              kolleparajayanth@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-3">
            <img src={contactIcons.phone} alt="Phone" className="w-6 h-6" />
            <span className="font-semibold">Phone:</span>{" "}
            <span className="text-[#1E293B]">+91 8869965959</span>
          </li>
          <li className="flex items-center gap-3">
            <img src={contactIcons.linkedin} alt="LinkedIn" className="w-6 h-6" />
            <span className="font-semibold">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/jayanth-kollepara-54876b319/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B82F6] hover:underline"
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
              className="text-[#3B82F6] hover:underline"
            >
              github.com/Jayanth-7-github
            </a>
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <span className="block text-lg text-[#6366F1] font-semibold mb-2">
          Ready to connect?
        </span>
        <a
          href="mailto:kolleparajayanth@gmail.com"
          className="bg-[#7C3AED] text-white px-6 py-2 rounded-full shadow hover:bg-[#5B21B6] font-medium transition"
        >
          Send me an email
        </a>
      </motion.div>

      {/* Footer */}
      <footer className="text-center text-sm text-[#94A3B8] mt-12">
        I’ll reply as quickly as possible • © 2025 Jayanth Kollepara
      </footer>
    </motion.main>
  );
}
