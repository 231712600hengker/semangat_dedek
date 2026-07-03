import { motion } from "framer-motion";
import { promises } from "../data/content";

export function PromiseSection() {
  return (
    <div className="promise-shell">
      <div className="section-heading">
        <span>Janji hangat</span>
        <h2>Janji kecil Abang buat kamu</h2>
      </div>
      <div className="promise-grid">
        {promises.map((promise) => (
          <motion.article
            key={promise.title}
            className="promise-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3>{promise.title}</h3>
            <p>{promise.detail}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
