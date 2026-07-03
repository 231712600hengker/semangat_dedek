import { Moon, SunMedium, Sparkles, ArrowUpRight } from "lucide-react";

export function ControlsPanel({ darkMode, onToggleDark, message, onRandomMessage, onScrollTop }) {
  return (
    <div className="controls-panel">
      <div className="controls-copy">
        <Sparkles size={18} />
        <div>
          <p>Pesan hari ini</p>
          <strong>{message}</strong>
        </div>
      </div>
      <div className="controls-actions">
        <button type="button" className="control-button" onClick={onToggleDark} aria-label="Toggle theme">
          {darkMode ? <SunMedium size={18} /> : <Moon size={18} />}
        </button>
        <button type="button" className="control-button" onClick={onRandomMessage}>
          <ArrowUpRight size={18} />
          Ubah pesan
        </button>
        <button type="button" className="control-button" onClick={onScrollTop}>
          ↑ Top
        </button>
      </div>
    </div>
  );
}
