import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { SectionShell } from "./components/SectionShell";
import { HeroSection } from "./components/HeroSection";
import { LetterSection } from "./components/LetterSection";
import { JourneySection } from "./components/JourneySection";
import { StickyNotesSection } from "./components/StickyNotesSection";
import { MemoryGallerySection } from "./components/MemoryGallerySection";
import { ReasonsSection } from "./components/ReasonsSection";
import { MissionSection } from "./components/MissionSection";
import { PromiseSection } from "./components/PromiseSection";
import { GraduationSection } from "./components/GraduationSection";
import { EndingSection } from "./components/EndingSection";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { ControlsPanel } from "./components/ControlsPanel";
import { heroContent, footerText, dailyMessages, verseQuote } from "./data/content";
import "./styles.css";

export default function App() {
  const progress = useScrollProgress();
  const [darkMode, setDarkMode] = useState(false);
  const [randomMessage, setRandomMessage] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const dailyText = useMemo(() => dailyMessages[randomMessage], [randomMessage]);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 900);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 520);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleConfetti = () => {
    confetti({
      particleCount: 90,
      angle: 90,
      spread: 90,
      origin: { y: 0.35 },
      colors: ["#d6b7a1", "#f7e1cf", "#b8d4bc", "#f4e6db"],
    });
  };

  const handleTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className={`app-shell ${darkMode ? "dark" : ""}`}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="page-loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <div className="loader-ring" />
            <p>Abang lagi nyiapin suratnya...</p>
          </motion.div>
        )}
      </AnimatePresence>

      <BackgroundEffects />
      <div className="scroll-progress" style={{ scaleX: progress }} />
      <ControlsPanel
        darkMode={darkMode}
        onToggleDark={() => setDarkMode((value) => !value)}
        message={dailyText}
        onRandomMessage={() => setRandomMessage((value) => (value + 1) % dailyMessages.length)}
        onScrollTop={handleTop}
      />

      <HeroSection heroContent={heroContent} />
      <SectionShell className="section verse-section" delay={0.15}>
        <div className="verse-card">
          <p>{verseQuote.text}</p>
          <span>{verseQuote.reference}</span>
        </div>
      </SectionShell>
      <SectionShell className="section letter-section" delay={0.1}>
        <LetterSection />
      </SectionShell>
      <SectionShell className="section journey-section" delay={0.1}>
        <JourneySection />
      </SectionShell>
      <SectionShell className="section sticky-section" delay={0.1}>
        <StickyNotesSection />
      </SectionShell>
      <SectionShell className="section memory-section" delay={0.1}>
        <MemoryGallerySection />
      </SectionShell>
      <SectionShell className="section reasons-section" delay={0.1}>
        <ReasonsSection />
      </SectionShell>
      <SectionShell className="section mission-section" delay={0.1}>
        <MissionSection />
      </SectionShell>
      <SectionShell className="section promise-section" delay={0.1}>
        <PromiseSection />
      </SectionShell>
      <SectionShell className="section graduation-section" delay={0.1}>
        <GraduationSection onCelebrate={handleConfetti} />
      </SectionShell>
      <SectionShell className="section ending-section" delay={0.1}>
        <EndingSection />
      </SectionShell>

      <footer className="page-footer">
        <p>{footerText.ending}</p>
        <div className="footer-signature">
          {footerText.signature.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button
            className="top-button"
            onClick={handleTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            aria-label="Scroll to top"
          >
            ↑ Top
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
