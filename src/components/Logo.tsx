import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  hideMark?: boolean;
}

/**
 * Authentic TEQX Brand Mark & Logotype
 * 
 * Features:
 * - Geometric forward-slanted aerodynamics (~11° speed tilt)
 * - T with chamfered top-right terminal harmonizing into E
 * - E with 3 dynamic horizontal bars
 * - Q with rounded contour and diagonal trapezoidal tail
 * - X with horizontally trimmed top/bottom terminals
 * - Signature TEQX electric blue accent dot (#0B63CE)
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  showTagline = false,
  size = 'md',
  hideMark = false,
}) => {
  const isDarkBg = variant === 'light'; // Light text for dark backgrounds

  // Scaled dimensions
  const scale = size === 'sm' ? 0.8 : size === 'lg' ? 1.25 : 1;
  const markSize = size === 'sm' ? 28 : size === 'lg' ? 42 : 34;

  const textColor = isDarkBg ? '#FFFFFF' : '#0B1F3A';
  const dotColor = '#0B63CE';
  const accentColor = isDarkBg ? '#38BDF8' : '#0B63CE';

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <div className="flex items-center gap-2.5">
        {!hideMark && (
          /* TEQX Brand Mark Icon Badge */
          <div
            style={{ width: markSize, height: markSize }}
            className="relative flex items-center justify-center rounded-xl bg-gradient-to-b from-[#0D6FE8] via-[#0B63CE] to-[#074794] text-white shadow-md shadow-[#0B63CE]/25 overflow-hidden flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
          >
            {/* Subtle inner top highlight */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-white/40" />

            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full p-1.5"
            >
              {/* Dynamic forward-slanted geometric TEQX Monogram */}
              <g transform="matrix(1 0 -0.194 1 3.5 0)">
                {/* Chamfered T bar & stem */}
                <path
                  d="M 6 9 H 23 L 20 14 H 17 V 30 H 11 V 14 H 6 Z"
                  fill="white"
                />

                {/* Connected dynamic Q loop with diagonal tail */}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M 21 16 C 18.5 16 17 18 17 21 V 24 C 17 27.5 19 29.5 22 29.5 C 23.5 29.5 24.8 28.8 25.8 27.6 L 28.5 31 H 32.5 L 29.5 26.8 C 30.5 25.8 31 24.2 31 22.5 C 31 18.5 28.5 16 24.5 16 H 21 Z M 22.5 20.5 H 24 C 25.5 20.5 26.5 21.3 26.5 22.8 C 26.5 24.3 25.5 25.2 24 25.2 H 22.5 C 22.5 25.2 21.8 25 21.8 23.5 V 22.2 C 21.8 21 22 20.5 22.5 20.5 Z"
                  fill="white"
                />

                {/* Crossing X node terminal */}
                <path
                  d="M 27 9 H 32.5 L 29.2 13.5 H 24.2 Z"
                  fill="white"
                  fillOpacity="0.9"
                />
              </g>

              {/* High-tech Accent Dot */}
              <circle cx="31" cy="9.5" r="2.2" fill="#60A5FA" />
            </svg>
          </div>
        )}

        {/* TEQX Stylized Vector Wordmark */}
        <div className="flex items-center">
          <svg
            viewBox="0 0 152 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: 22 * scale,
              width: 104 * scale,
            }}
            className="transition-colors overflow-visible"
            aria-label="TEQX"
          >
            {/* Forward-slanted italic coordinate transform */}
            <g transform="matrix(1 0 -0.194 1 5 0)">
              {/* === LETTER T === */}
              {/* Top bar with right-side chamfered cut + central stem */}
              <path
                d="M 4 4 H 32 L 27.5 9.8 H 22 V 28 H 14 V 9.8 H 4 Z"
                fill={textColor}
              />

              {/* === LETTER E === */}
              {/* Slanted vertical spine + 3 parallel horizontal bars */}
              <path
                d="M 33 4 H 56 V 9.6 H 41 V 13.2 H 53 V 18.4 H 41 V 22.4 H 56.5 V 28 H 33 Z"
                fill={textColor}
              />

              {/* === LETTER Q === */}
              {/* Rounded geometric loop with hollow center and dynamic angled tail */}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 69 4 C 62 4 58 8.5 58 16 C 58 23.5 62 28 69 28 C 72.8 28 76 26.2 78 23.4 L 84 30.5 H 92 L 84.8 22 C 86.8 19.8 88 17 88 14 C 88 7.5 83.5 4 76 4 H 69 Z M 71 9.8 H 73 C 78.5 9.8 80.2 12.5 80.2 15.5 C 80.2 19 77.8 22 72.5 22 H 70 C 67.5 22 65.8 20 65.8 16 C 65.8 12 67.8 9.8 71 9.8 Z"
                fill={textColor}
              />

              {/* === LETTER X === */}
              {/* Two crossing diagonals with horizontal flat terminals top & bottom */}
              <path
                d="M 94 4 H 102.5 L 111.5 15.5 L 120.5 4 H 129 L 116.5 19.5 L 129.5 28 H 120.5 L 111.5 16.5 L 102.5 28 H 94 L 106.5 15.5 Z"
                fill={textColor}
              />
            </g>

            {/* TEQX Signature Brand Dot */}
            <circle
              cx="138"
              cy="7.5"
              r="3.2"
              fill={dotColor}
              className="drop-shadow-[0_0_6px_rgba(11,99,206,0.6)]"
            />
          </svg>
        </div>
      </div>

      {showTagline && (
        <span
          className={`text-[10px] font-semibold tracking-[0.14em] uppercase mt-1 pl-0.5 ${
            isDarkBg ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          Connect. Automate. Care.
        </span>
      )}
    </div>
  );
};
