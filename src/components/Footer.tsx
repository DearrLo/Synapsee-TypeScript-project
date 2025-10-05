export default function Footer() {
  return (
    <footer className="relative w-full bg-black py-12 px-6 overflow-hidden border-t border-zinc-800 text-center">
      {/* visible Text */}
      <p className="relative z-10 text-sm text-zinc-500">
        Coded with love by <span className="text-white font-semibold">Lorette Viel ❤️‍🩹</span>
      </p>

      {/* SVG for decoration */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
        <svg
          viewBox="0 0 2400 800"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-48 opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="oooscillate-grad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop stopColor="hsl(206, 75%, 49%)" offset="0%" />
              <stop stopColor="hsl(206, 64.50%, 66.90%)" offset="100%" />
            </linearGradient>
          </defs>
          <g strokeWidth="1" stroke="url(#oooscillate-grad)" fill="none" strokeLinecap="round">
            <path d="M 0 361 Q 600 295 1200 400 Q 1800 505 2400 361" opacity="0.28" />
            <path d="M 0 342 Q 600 295 1200 400 Q 1800 505 2400 342" opacity="0.53" />
            <path d="M 0 323 Q 600 295 1200 400 Q 1800 505 2400 323" opacity="0.35" />
            <path d="M 0 304 Q 600 295 1200 400 Q 1800 505 2400 304" opacity="0.96" />
            <path d="M 0 285 Q 600 295 1200 400 Q 1800 505 2400 285" opacity="0.65" />
            <path d="M 0 266 Q 600 295 1200 400 Q 1800 505 2400 266" opacity="0.73" />
            <path d="M 0 247 Q 600 295 1200 400 Q 1800 505 2400 247" opacity="0.28" />
            <path d="M 0 228 Q 600 295 1200 400 Q 1800 505 2400 228" opacity="0.91" />
            <path d="M 0 209 Q 600 295 1200 400 Q 1800 505 2400 209" opacity="0.52" />
            <path d="M 0 190 Q 600 295 1200 400 Q 1800 505 2400 190" opacity="0.13" />
            <path d="M 0 171 Q 600 295 1200 400 Q 1800 505 2400 171" opacity="0.23" />
            <path d="M 0 152 Q 600 295 1200 400 Q 1800 505 2400 152" opacity="0.76" />
            <path d="M 0 133 Q 600 295 1200 400 Q 1800 505 2400 133" opacity="0.73" />
            <path d="M 0 114 Q 600 295 1200 400 Q 1800 505 2400 114" opacity="0.47" />
            <path d="M 0 95 Q 600 295 1200 400 Q 1800 505 2400 95" opacity="0.96" />
            <path d="M 0 76 Q 600 295 1200 400 Q 1800 505 2400 76" opacity="0.78" />
            <path d="M 0 57 Q 600 295 1200 400 Q 1800 505 2400 57" opacity="0.28" />
            <path d="M 0 38 Q 600 295 1200 400 Q 1800 505 2400 38" opacity="0.36" />
          </g>
        </svg>
      </div>
    </footer>
  )
}
