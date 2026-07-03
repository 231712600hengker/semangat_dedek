import { motion } from "framer-motion";
import { stickyNotes } from "../data/content";

const noteVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 26 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export function StickyNotesSection() {
  return (
    <div className="sticky-shell">
      <div className="sticky-header">
        <span>Catatan kecil</span>
        <h2>Semangat untuk hari ini</h2>
      </div>
      <div className="sticky-grid">
        {stickyNotes.map((note, index) => (
          <motion.div
            key={note}
            className="sticky-note"
            variants={noteVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            style={{ transform: `rotate(${index % 2 === 0 ? "-3deg" : "2deg"})` }}
          >
            <p>{note}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
