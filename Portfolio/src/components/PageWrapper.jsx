import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export default function PageWrapper({ children, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn("min-h-screen w-full", className)}
    >
      {children}
    </motion.div>
  );
}
