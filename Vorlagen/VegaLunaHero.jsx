import { useState, useEffect, useRef } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=1600&q=85",
    label: "Vaduz · Liechtenstein",
    title: ["Zentrum für gesunde", "pflanzliche Ernährung."],
    sub: "Kochkurse · Catering · Ernährungsberatung",
    accent: "#C4622D",
  },
  {
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1600&q=85",
    label: "Workshops & Kurse",
    title: ["Lernen, kochen,", "gemeinsam geniessen."],
    sub: "Kleine Gruppen · Festliches Dinner · Praxis & Theorie",
    accent: "#C9973A",
  },
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=85",
    label: "Event Catering",
    title: ["Plant-based.", "Alles aus einer Hand."],
    sub: "Gesund · Nachhaltig · Bio · Bis 100 Personen",
    accent: "#5A7A65",
  },
  {
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1600&q=85",
    label: "Mittagsmenü",
    title: ["Frisch gekocht.", "Mo · Mi · Fr."],
    sub: "11:30 – 13:00 Uhr · Täglich wechselndes Menü",
    accent: "#1B3A2D",
  },
  {
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600&q=85",
    label: "Ernährung & Wissen",
    title: ["Pflanzlich leben.", "Voller Energie."],
    sub: "B12 · Eisen · Omega-3 · Protein · Alles was du brauchst",
    accent: "#C9973A",
  },
];

const DURATION = 15000;

export default function VegaLunaHero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [phase, setPhase] = useState("idle"); // idle | out | in
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  const goTo = (idx) => {
    if (idx === current || phase !== "idle") return;
    setPrev(current);
    setCurrent(idx);
    setPhase("in");
    setProgress(0);
    startRef.current = performance.now();
  };

  const next = () => goTo((current + 1) % slides.length);

  // Progress ticker
  useEffect(() => {
    const tick = (now) => {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;
      setProgress(Math.min(elapsed / DURATION, 1));
      if (elapsed < DURATION) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        next();
      }
    };
    startRef.current = performance.now();
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [current]);

  // Reset phase after "in" animation
  useEffect(() => {
    if (phase === "in") {
      const t = setTimeout(() => setPhase("idle"), 900);
      return () => clearTimeout(t);
    }
  }, [phase, current]);

  const slide = slides[current];
  const prevSlide = prev !== null ? slides[prev] : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,300&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .vl-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 560px;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          background: #0e1e16;
        }

        /* ── Background Images ── */
        .vl-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          will-change: transform, opacity;
        }
        .vl-bg-prev {
          z-index: 1;
          animation: bgOut 0.9s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }
        .vl-bg-next {
          z-index: 2;
          animation: bgIn 0.9s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }
        .vl-bg-idle {
          z-index: 2;
          opacity: 1;
        }
        @keyframes bgIn {
          from { opacity: 0; transform: scale(1.06); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes bgOut {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(0.97); }
        }

        /* ── Overlay ── */
        .vl-overlay {
          position: absolute;
          inset: 0;
          z-index: 3;
          background: linear-gradient(
            160deg,
            rgba(14,30,22,0.55) 0%,
            rgba(14,30,22,0.25) 40%,
            rgba(14,30,22,0.72) 100%
          );
        }

        /* ── Grain texture ── */
        .vl-grain {
          position: absolute;
          inset: 0;
          z-index: 4;
          opacity: 0.045;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        /* ── Content ── */
        .vl-content {
          position: absolute;
          inset: 0;
          z-index: 5;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: clamp(2rem, 5vw, 4rem) clamp(1.5rem, 7vw, 6rem);
          padding-bottom: clamp(4rem, 8vw, 6rem);
        }

        .vl-inner {
          max-width: 820px;
        }

        /* ── Label ── */
        .vl-label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.65rem, 1.2vw, 0.75rem);
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
          margin-bottom: clamp(0.75rem, 2vw, 1.25rem);
        }
        .vl-label-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent, #C4622D);
          flex-shrink: 0;
        }
        .vl-label.anim-in  { animation: labelIn  0.5s 0.05s both; }
        .vl-label.anim-out { animation: labelOut 0.35s both; }

        /* ── Title lines ── */
        .vl-title-wrap { overflow: hidden; display: block; }
        .vl-title-line {
          display: block;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.6rem, 7.5vw, 6rem);
          font-weight: 700;
          line-height: 1.08;
          color: #fff;
          letter-spacing: -0.02em;
        }
        .vl-title-line em {
          font-style: italic;
          font-weight: 300;
          color: rgba(255,255,255,0.85);
        }
        .vl-title-wrap.anim-in  .vl-title-line { animation: lineIn  0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .vl-title-wrap.anim-out .vl-title-line { animation: lineOut 0.4s ease-in both; }
        .vl-title-wrap:nth-child(2).anim-in  .vl-title-line { animation-delay: 0.12s; }
        .vl-title-wrap:nth-child(2).anim-out .vl-title-line { animation-delay: 0.05s; }

        /* ── Sub ── */
        .vl-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.8rem, 1.5vw, 0.95rem);
          font-weight: 300;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.6);
          margin-top: clamp(0.75rem, 2vw, 1.25rem);
        }
        .vl-sub.anim-in  { animation: subIn  0.6s 0.35s both; }
        .vl-sub.anim-out { animation: subOut 0.3s both; }

        /* ── Buttons ── */
        .vl-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: clamp(1.5rem, 3vw, 2.25rem);
        }
        .vl-btns.anim-in  { animation: subIn  0.6s 0.45s both; }
        .vl-btns.anim-out { animation: subOut 0.3s 0.05s both; }

        .vl-btn-primary {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: var(--accent, #C4622D);
          color: #fff;
          padding: 0.8rem 1.75rem;
          border-radius: 999px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          border: none; cursor: pointer;
          transition: filter 0.2s, transform 0.2s;
          letter-spacing: 0.02em;
        }
        .vl-btn-primary:hover { filter: brightness(1.12); transform: translateY(-2px); }

        .vl-btn-ghost {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: transparent;
          color: rgba(255,255,255,0.85);
          padding: 0.8rem 1.75rem;
          border-radius: 999px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.35);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          letter-spacing: 0.02em;
        }
        .vl-btn-ghost:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.6); transform: translateY(-2px); }

        /* ── Progress + Nav ── */
        .vl-ui {
          position: absolute;
          right: clamp(1.5rem, 5vw, 4rem);
          bottom: clamp(2rem, 5vw, 3.5rem);
          z-index: 6;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1.25rem;
        }

        .vl-dots {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-end;
        }

        .vl-dot-btn {
          background: none; border: none; cursor: pointer;
          display: flex; align-items: center; gap: 0.5rem;
          padding: 0;
        }
        .vl-dot-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          opacity: 0;
          transform: translateX(6px);
          transition: opacity 0.3s, transform 0.3s, color 0.3s;
        }
        .vl-dot-btn:hover .vl-dot-label,
        .vl-dot-btn.active .vl-dot-label {
          opacity: 1; transform: translateX(0);
          color: rgba(255,255,255,0.7);
        }
        .vl-dot {
          width: 6px;
          height: 6px;
          border-radius: 3px;
          background: rgba(255,255,255,0.3);
          transition: background 0.3s, width 0.3s, height 0.3s;
          flex-shrink: 0;
        }
        .vl-dot-btn.active .vl-dot {
          background: rgba(255,255,255,0.9);
          width: 8px; height: 8px; border-radius: 4px;
        }

        /* ── Progress arc / bar ── */
        .vl-progress-ring {
          position: relative;
          width: 44px; height: 44px;
        }
        .vl-ring-svg {
          position: absolute;
          inset: 0;
          transform: rotate(-90deg);
        }
        .vl-ring-track { fill: none; stroke: rgba(255,255,255,0.12); stroke-width: 1.5; }
        .vl-ring-fill  {
          fill: none;
          stroke: rgba(255,255,255,0.75);
          stroke-width: 1.5;
          stroke-linecap: round;
          transition: stroke-dashoffset 0.1s linear;
        }
        .vl-ring-num {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.625rem; font-weight: 500;
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.05em;
        }

        /* ── Scroll indicator ── */
        .vl-scroll {
          position: absolute;
          bottom: clamp(1.5rem, 3vw, 2.5rem);
          left: 50%;
          transform: translateX(-50%);
          z-index: 6;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          opacity: 0.5;
          animation: scrollBounce 2s ease-in-out infinite;
        }
        .vl-scroll-line {
          width: 1px; height: 36px;
          background: linear-gradient(to bottom, transparent, white);
        }
        .vl-scroll-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: white;
        }
        @keyframes scrollBounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50%      { transform: translateX(-50%) translateY(6px); }
        }

        /* ── Keyframes ── */
        @keyframes lineIn {
          from { opacity: 0; transform: translateY(52px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineOut {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(-28px); }
        }
        @keyframes labelIn {
          from { opacity: 0; transform: translateX(-14px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes labelOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes subIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes subOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }

        /* ── Responsive ── */
        @media (max-width: 600px) {
          .vl-ui { right: 1rem; bottom: 1.5rem; }
          .vl-dot-label { display: none; }
          .vl-btns { flex-direction: column; }
          .vl-btn-primary, .vl-btn-ghost { width: fit-content; }
        }
      `}</style>

      <section className="vl-hero">

        {/* Background images */}
        {prevSlide && phase === "in" && (
          <div
            className="vl-bg vl-bg-prev"
            style={{ backgroundImage: `url(${prevSlide.image})` }}
          />
        )}
        <div
          className={`vl-bg ${phase === "in" ? "vl-bg-next" : "vl-bg-idle"}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />

        {/* Overlay + grain */}
        <div className="vl-overlay" />
        <div className="vl-grain" />

        {/* Text content */}
        <div className="vl-content">
          <div className="vl-inner">

            <div
              className={`vl-label ${phase === "in" ? "anim-in" : ""}`}
              style={{ "--accent": slide.accent }}
            >
              <span className="vl-label-dot" />
              {slide.label}
            </div>

            {slide.title.map((line, i) => (
              <span
                key={`${current}-${i}`}
                className={`vl-title-wrap ${phase === "in" ? "anim-in" : ""}`}
                style={{ animationDelay: phase === "in" ? `${0.08 + i * 0.12}s` : "0s" }}
              >
                <span className="vl-title-line">
                  {i === 0 ? line : <em>{line}</em>}
                </span>
              </span>
            ))}

            <div className={`vl-sub ${phase === "in" ? "anim-in" : ""}`}>
              {slide.sub}
            </div>

            <div className={`vl-btns ${phase === "in" ? "anim-in" : ""}`}>
              <button
                className="vl-btn-primary"
                style={{ "--accent": slide.accent, background: slide.accent }}
              >
                Jetzt entdecken
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="vl-btn-ghost">
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>

        {/* Right-side UI: progress ring + dots */}
        <div className="vl-ui">
          {/* Progress ring */}
          <div className="vl-progress-ring">
            <svg className="vl-ring-svg" viewBox="0 0 44 44">
              <circle className="vl-ring-track" cx="22" cy="22" r="19" />
              <circle
                className="vl-ring-fill"
                cx="22" cy="22" r="19"
                strokeDasharray={`${2 * Math.PI * 19}`}
                strokeDashoffset={`${2 * Math.PI * 19 * (1 - progress)}`}
              />
            </svg>
            <div className="vl-ring-num">
              {String(current + 1).padStart(2, "0")}
            </div>
          </div>

          {/* Dot nav */}
          <div className="vl-dots">
            {slides.map((s, i) => (
              <button
                key={i}
                className={`vl-dot-btn ${i === current ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={s.label}
              >
                <span className="vl-dot-label">{s.label}</span>
                <span className="vl-dot" />
              </button>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="vl-scroll">
          <div className="vl-scroll-line" />
          <div className="vl-scroll-dot" />
        </div>

      </section>
    </>
  );
}
