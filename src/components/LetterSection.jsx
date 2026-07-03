import { motion } from "framer-motion";
import { letterContent } from "../data/content";

export function LetterSection() {
  return (
    <div className="letter-card">
      <div className="letter-top">
        <span>Surat kecil untuk Dedek</span>
      </div>
      <motion.div
        className="letter-body"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        {letterContent.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </motion.div>
    </div>
  );
}
