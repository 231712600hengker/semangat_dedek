import { motion } from "framer-motion";

export function GraduationSection({ onCelebrate }) {
  return (
    <div className="graduation-shell">
      <div className="section-heading">
        <span>Di ujung layar</span>
        <h2>Nantinya, ini akan jadi momen kamu tersenyum lega.</h2>
      </div>
      <motion.div
        className="graduation-card"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p>
          Abang bayangkan kamu mengenakan toga, mengangkat tangan, dan melihat semua kerja keras itu berubah jadi lega.
          Setiap halaman hari ini mendekatkan kamu pada momen itu.
        </p>
        <button type="button" onClick={onCelebrate} className="celebrate-button">
          Rayakan sedikit
        </button>
      </motion.div>
    </div>
  );
}
