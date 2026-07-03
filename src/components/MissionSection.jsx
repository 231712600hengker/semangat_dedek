import { motion } from "framer-motion";
import { missionSteps } from "../data/content";

export function MissionSection() {
  return (
    <div className="mission-shell">
      <div className="section-heading">
        <span>Rencana kecil</span>
        <h2>Level hari ini: cukup satu langkah ringan</h2>
      </div>
      <div className="mission-grid">
        {missionSteps.map((step) => (
          <motion.article
            className="mission-card"
            key={step.level}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <span>{step.level}</span>
            <h3>{step.action}</h3>
            <p>{step.note}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
