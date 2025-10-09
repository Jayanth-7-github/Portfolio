import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <motion.div
      className="pt-20 min-h-screen" // <-- add this class
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
