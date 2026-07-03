import { motion } from "framer-motion";
import { reasons } from "../data/content";

export function ReasonsSection() {
  return (
    <div className="reasons-shell">
      <div className="section-heading">
        <span>Alasan kecil</span>
        <h2>Kenapa Abang yakin kamu tetap oke</h2>
      </div>
      <div className="reason-grid">
        {reasons.map((reason, index) => (
          <motion.article
            className="reason-card"
            key={reason}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
          >
            <strong>{String(index + 1).padStart(2, "0")}</strong>
            <p>{reason}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
