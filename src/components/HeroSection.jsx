import { motion } from "framer-motion";

export function HeroSection({ heroContent }) {
  return (
    <section className="hero-shell">
      <div className="hero-copy-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="hero-copy"
        >
          <h1>{heroContent.headline}</h1>
          <p>{heroContent.description}</p>
          <div className="hero-actions">
            <button className="hero-button" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}>
              Mulai baca
            </button>
          </div>
        </motion.div>
      </div>
      <div className="hero-scroll-hint">
        <span>{heroContent.scrollHint}</span>
        <div className="scroll-indicator" />
      </div>
    </section>
  );
}
