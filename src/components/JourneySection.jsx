import { motion } from "framer-motion";
import { timelineSteps } from "../data/content";

export function JourneySection() {
  return (
    <div className="journey-shell">
      <div className="journey-header">
        <span>Perjalanan</span>
        <h2>Langkah-langkah kecil menuju wisuda</h2>
      </div>
      <div className="timeline">
        {timelineSteps.map((step, index) => (
          <motion.div
            key={step.title}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <div className="timeline-node" />
            <div className="timeline-content">
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
