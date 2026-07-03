import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BookOpenCheck,
  Camera,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Heart,
  MessageCircleHeart,
  Moon,
  PenLine,
  Sparkles,
  Star,
  TimerReset,
} from "lucide-react";
import "./styles.css";

const loveConfig = {
  recipientName: "Dedek",
  fullName: "Trixy Theodora Situngkir",
  nicknames: ["Dedek", "My 911", "Trixy"],
  senderName: "Abang",
  thesisName: "skripsimu",
  headline: "Dedek, Abang selalu dukung kamu sampai halaman terakhir.",
  intro:
    "Kalau hari ini revisinya bikin kepala ramai, dengarkan Abang dulu. Tarik napas pelan, ya. Kamu nggak harus sempurna hari ini, Dedek cuma perlu tetap maju sedikit demi sedikit.",
  closing:
    "Nanti setelah semua ini selesai, Abang mau lihat senyum lega Trixy Theodora Situngkir yang paling manis. Untuk sekarang, Abang tetap di sini, jadi pelukan kecil di sela bab, data, dan revisi.",
};

const supportLines = [
  "Abang selalu ingat kamu perlu rileks walau lagi kerja keras.",
  "Abang bangga sama setiap usaha kecil yang kamu lakukan.",
  "Abang selalu ada buat kamu ngobrol, kapan pun kamu butuh.",
];

const reasons = [
  "Abang tahu kamu tetap berusaha, bahkan di hari yang terasa berat.",
  "Abang bangga sama cara kamu bertahan, diam-diam tapi tegas.",
  "Abang ingat, satu paragraf kecil tetap bagian dari kemenangan besar.",
  "Abang di sini, jadi kamu nggak perlu melewati ini sendirian.",
  "Abang suka lihat kamu serius, tapi ingat juga: istirahat itu juga bagian dari hebat.",
  "Abang percaya versi kamu yang sedang berjuang ini tetap sangat layak dicintai.",
];

const pocketNotes = [
  "Abang titip pesan: minum dulu. Otak hebat juga butuh disayang.",
  "Abang tahu revisi bukan musuhmu. Dia cuma jalan muter menuju gelar.",
  "Abang bilang: kalau stuck, buka satu dokumen saja. Menang kecil tetap menang.",
  "Abang kirim pelukan virtual dulu sebelum kamu lanjut.",
  "Abang ingin kamu ingat, hari ini tidak harus selesai semua. Yang penting kamu nggak menyerah pada diri sendiri.",
  "Dedek lucu kalau fokus. Iya, ini observasi ilmiah langsung dari Abang.",
  "My 911, kalau dunia terasa rame, Abang tetap nomor darurat yang paling siap dengerin kamu.",
];

const milestones = [
  { icon: BookOpenCheck, label: "Buka dokumen", text: "Abang lihat langkah pertama kamu sudah paling berani." },
  { icon: PenLine, label: "Tulis sedikit", text: "Abang percaya satu kalimat tetap menggeser garis akhir.", },
  { icon: Coffee, label: "Ambil jeda", text: "Abang ingatkan: istirahat bukan gagal, itu strategi.", },
  { icon: Star, label: "Kirim revisi", text: "Abang tahu, pelan-pelan kamu sedang menang.", },
];

const memories = [
  {
    image: "/photos/Fav.jpeg",
    title: "Foto favorit Abang",
    caption: "Abang simpan ini untuk alasan senyum sendiri.",
  },
  {
    image: "/photos/Cute.jpeg",
    title: "My 911 mode nerd",
    caption: "Abang suka lihat kamu jadi tempat aman kecil yang selalu terasa mungkin.",
  },
  {
    image: "/photos/Luv.jpeg",
    title: "Trixy Theodora Situngkir",
    caption: "Nama kamu kedengaran cantik buat Abang, bahkan saat bahas revisi.",
  },
  {
    image: "",
    title: "Setelah sidang nanti",
    caption: "Abang simpan slot ini untuk foto senyum lega kamu.",
  },
];

function App() {
  const [noteIndex, setNoteIndex] = useState(0);
  const [memoryIndex, setMemoryIndex] = useState(0);
  const [openedReasons, setOpenedReasons] = useState([]);
  const [blushMode, setBlushMode] = useState(false);
  const [isMemoryTransitioning, setIsMemoryTransitioning] = useState(false);

  const currentNote = pocketNotes[noteIndex % pocketNotes.length];
  const currentMemory = memories[memoryIndex];
  const promises = [
    "Abang selalu ingat kamu berhak istirahat walau sibuk.",
    "Abang selalu sedia dengerin kalau kamu butuh cerita.",
    "Abang selalu percaya kamu lebih kuat dari yang kamu rasakan.",
  ];
  const todayLine = useMemo(() => {
    const formatter = new Intl.DateTimeFormat("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
    return formatter.format(new Date());
  }, []);

  function revealReason(index) {
    if (!openedReasons.includes(index)) {
      setOpenedReasons([...openedReasons, index]);
    }
  }

  function nextNote() {
    setNoteIndex((value) => value + 1);
    setBlushMode(true);
    window.setTimeout(() => setBlushMode(false), 900);
  }

  function goToMemory(direction) {
    setIsMemoryTransitioning(true);
    window.setTimeout(() => {
      setMemoryIndex((value) => (value + direction + memories.length) % memories.length);
      setIsMemoryTransitioning(false);
    }, 170);
  }

  return (
    <main className={blushMode ? "page blush" : "page"}>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={18} />
            Surat kecil untuk {loveConfig.fullName}
          </p>
          <h1>{loveConfig.headline}</h1>
          <p className="intro">{loveConfig.intro}</p>
          <div className="nickname-row" aria-label="Panggilan sayang">
            {loveConfig.nicknames.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="primary-action" href="#semangat">
              <Heart size={19} />
              Ambil semangat
            </a>
            <button className="soft-action" type="button" onClick={nextNote}>
              <MessageCircleHeart size={19} />
              Pesan malu-malu
            </button>
          </div>

          <div className="hero-support">
            {supportLines.map((line) => (
              <div key={line} className="support-chip">
                <Sparkles size={16} />
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Meja belajar hangat dengan catatan cinta">
          <div className="desk-scene">
            <div className="lamp">
              <span />
            </div>
            <div className="paper-stack">
              <div className="paper paper-back" />
              <div className="paper paper-front">
                <span className="paper-title">Bab berikutnya</span>
                <span />
                <span />
                <span className="short-line" />
                <strong>Kamu bisa.</strong>
              </div>
            </div>
            <div className="mug">
              <span />
            </div>
            <div className="floating-heart one">{"\u2665"}</div>
            <div className="floating-heart two">{"\u2665"}</div>
          </div>
        </div>
      </section>

      <section id="semangat" className="content-band">
        <div className="daily-card">
          <div>
            <p className="section-kicker">
              <Moon size={16} />
              Catatan {todayLine}
            </p>
            <h2>Kalau kamu lupa betapa kuatnya kamu, baca ini dulu.</h2>
          </div>
          <p>{loveConfig.closing}</p>
        </div>

        <div className="note-panel">
          <div className="note-copy">
            <p className="section-kicker">
              <TimerReset size={16} />
              Kotak semangat
            </p>
            <h2>{currentNote}</h2>
            <p>Dari {loveConfig.senderName}, yang diam-diam ikut deg-degan tiap kamu cerita soal {loveConfig.thesisName}.</p>
          </div>
          <button type="button" className="note-button" onClick={nextNote}>
            <Sparkles size={20} />
            Buka pesan lain
          </button>
        </div>
      </section>

      <section className="memory-section" aria-labelledby="memory-heading">
        <div className="section-heading">
          <p className="section-kicker">
            <Camera size={16} />
            Carousel kenangan
          </p>
          <h2 id="memory-heading">Beberapa tempat kecil buat senyum Dedek muncul lagi</h2>
        </div>

        <div className="memory-carousel">
          <button
            className="carousel-control"
            type="button"
            aria-label="Foto sebelumnya"
            onClick={() => goToMemory(-1)}
          >
            <ChevronLeft size={22} />
          </button>

          <article className={`memory-slide ${isMemoryTransitioning ? "memory-shift" : ""}`}>
            {currentMemory.image ? (
              <img src={currentMemory.image} alt={currentMemory.title} />
            ) : (
              <div className="memory-placeholder">
                <Heart size={46} />
                <span>{currentMemory.title}</span>
              </div>
            )}
            <div className="memory-caption">
              <span>{String(memoryIndex + 1).padStart(2, "0")} / {String(memories.length).padStart(2, "0")}</span>
              <h3>{currentMemory.title}</h3>
              <p>{currentMemory.caption}</p>
            </div>
          </article>

          <button
            className="carousel-control"
            type="button"
            aria-label="Foto berikutnya"
            onClick={() => goToMemory(1)}
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="carousel-dots" aria-label="Pilih foto">
          {memories.map((memory, index) => (
            <button
              className={index === memoryIndex ? "dot active" : "dot"}
              key={memory.title}
              type="button"
              aria-label={`Buka ${memory.title}`}
              onClick={() => setMemoryIndex(index)}
            />
          ))}
        </div>
      </section>

      <section className="reasons-section" aria-labelledby="reasons-heading">
        <div className="section-heading">
          <p className="section-kicker">
            <Heart size={16} />
            Enam alasan kecil
          </p>
          <h2 id="reasons-heading">Kenapa Abang yakin kamu akan sampai garis akhir</h2>
        </div>
        <div className="reason-grid">
          {reasons.map((reason, index) => {
            const opened = openedReasons.includes(index);
            return (
              <button
                className={opened ? "reason-card opened" : "reason-card"}
                type="button"
                key={reason}
                onClick={() => revealReason(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{opened ? reason : "Klik aku"}</strong>
              </button>
            );
          })}
        </div>
      </section>

      <section className="extra-section" aria-labelledby="extra-heading">
        <div className="section-heading">
          <p className="section-kicker">
            <Sparkles size={16} />
            Janji kecil Abang
          </p>
          <h2 id="extra-heading">Abang selalu ingat hal-hal kecil yang bikin kamu kuat</h2>
        </div>
        <div className="promise-list">
          {promises.map((promise) => (
            <article key={promise} className="promise-card">
              <Sparkles size={18} />
              <p>{promise}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="milestone-band">
        <div className="section-heading">
          <p className="section-kicker">
            <BookOpenCheck size={16} />
            Rute hari ini
          </p>
          <h2>Tidak perlu langsung besar. Cukup mulai dari satu langkah.</h2>
        </div>
        <div className="milestones">
          {milestones.map(({ icon: Icon, label, text }) => (
            <article className="milestone" key={label}>
              <div className="milestone-icon">
                <Icon size={22} />
              </div>
              <h3>{label}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <p>
          Untuk {loveConfig.fullName}: kamu boleh lambat, boleh lelah, boleh minta ditemani.
          Tapi jangan lupa, kamu selalu berhasil bikin aku bangga.
        </p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
