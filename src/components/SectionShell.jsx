import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function SectionShell({ children, className, delay = 0 }) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay }}
      variants={fadeIn}
    >
      {children}
    </motion.section>
  );
}
