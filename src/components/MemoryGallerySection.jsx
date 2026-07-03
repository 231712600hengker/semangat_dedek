import { motion } from "framer-motion";
import { memories } from "../data/content";

export function MemoryGallerySection() {
  return (
    <div className="memory-gallery-shell">
      <div className="section-heading">
        <span>Kenangan</span>
        <h2>Foto-foto kecil yang selalu bikin Abang ingat kamu</h2>
      </div>
      <div className="memory-grid">
        {memories.map((memory, index) => (
          <motion.article
            className="memory-card"
            key={memory.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            {memory.image ? (
              <img src={memory.image} alt={memory.title} />
            ) : (
              <div className="memory-placeholder">
                <span>❤️</span>
                <p>{memory.title}</p>
              </div>
            )}
            <div className="memory-meta">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{memory.title}</h3>
              <p>{memory.caption}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
