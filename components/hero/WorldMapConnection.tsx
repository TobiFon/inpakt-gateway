import React from "react";
import { useTranslations } from "next-intl";

export const WorldMapConnection: React.FC = () => {
  const t = useTranslations("hero");

  // Exact coordinates mapped onto a 1000x560 normalized SVG canvas
  // Germany: lat ~51N, lon ~10E -> Canvas (X: 520, Y: 145)
  // Cameroon: lat ~4N, lon ~12E -> Canvas (X: 524, Y: 335)
  const germanyPoint = { x: 520, y: 145 };
  const cameroonPoint = { x: 524, y: 335 };
  const connectionArcPath = `M ${germanyPoint.x} ${germanyPoint.y} C 460 210, 470 270, ${cameroonPoint.x} ${cameroonPoint.y}`;

  return (
    <div className="relative w-full overflow-hidden select-none">
      {/* SVG Canvas Map Graphic */}
      <svg
        viewBox="0 0 1000 560"
        className="w-full h-auto max-h-[640px] drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Subtle gradient for landmasses */}
          <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#133527" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#0B2319" stopOpacity="0.9" />
          </linearGradient>

          {/* Glow filter for connection pathways */}
          <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Secondary green glow */}
          <filter id="greenGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Linear gradient for connecting curve */}
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F3B84A" />
            <stop offset="50%" stopColor="#D99227" />
            <stop offset="100%" stopColor="#288768" />
          </linearGradient>
        </defs>

        {/* Global Dotted Network Pattern & Subtle Continent Silhouettes */}
        <g opacity="0.32">
          {/* North America */}
          <path
            d="M 120 70 Q 180 50 240 80 T 290 140 T 240 210 T 170 190 T 130 130 Z"
            fill="url(#landGradient)"
            stroke="#1A4D3B"
            strokeWidth="0.8"
          />
          {/* South America */}
          <path
            d="M 260 250 Q 320 280 310 370 T 250 480 T 230 380 T 240 270 Z"
            fill="url(#landGradient)"
            stroke="#1A4D3B"
            strokeWidth="0.8"
          />
          {/* Eurasia */}
          <path
            d="M 450 70 Q 600 40 750 70 T 890 140 T 820 230 T 670 180 T 520 120 Z"
            fill="url(#landGradient)"
            stroke="#1A4D3B"
            strokeWidth="0.8"
          />
          {/* Africa */}
          <path
            d="M 440 180 Q 560 170 590 230 T 570 360 T 510 470 T 430 310 T 420 230 Z"
            fill="url(#landGradient)"
            stroke="#1A4D3B"
            strokeWidth="0.8"
          />
          {/* Australia */}
          <path
            d="M 780 340 Q 860 330 870 390 T 800 440 T 750 390 Z"
            fill="url(#landGradient)"
            stroke="#1A4D3B"
            strokeWidth="0.8"
          />
        </g>

        {/* Dynamic Global Grid Nodes (Atmosphere Points) */}
        <g fill="#288768" opacity="0.4">
          <circle cx="160" cy="110" r="1.5" />
          <circle cx="210" cy="150" r="1.5" />
          <circle cx="280" cy="320" r="1.5" />
          <circle cx="680" cy="120" r="1.5" />
          <circle cx="740" cy="160" r="1.5" />
          <circle cx="820" cy="380" r="1.5" />
          <circle cx="470" cy="220" r="1.5" />
          <circle cx="560" cy="290" r="1.5" />
        </g>

        {/* ---------------------------------------------------- */}
        {/* SIGNATURE CAMEROON <-> GERMANY CONNECTION ARCH       */}
        {/* ---------------------------------------------------- */}

        {/* Ambient Glow Aura Behind Route */}
        <path
          d={connectionArcPath}
          stroke="#D99227"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.18"
          filter="url(#goldGlow)"
        />

        {/* Secondary Soft Core Line */}
        <path
          d={connectionArcPath}
          stroke="url(#routeGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.75"
        />

        {/* Animated Flow Dash Particles */}
        <path
          d={connectionArcPath}
          stroke="#FFF2D6"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="8 20"
          className="animate-particle-flow"
        />

        {/* Connecting Label Centered on Arc */}
        <g transform="translate(415, 235)">
          <rect
            x="-10"
            y="-10"
            width="210"
            height="20"
            rx="10"
            fill="#051811"
            fillOpacity="0.85"
            stroke="#D99227"
            strokeWidth="0.7"
          />
          <text
            x="95"
            y="3.5"
            fill="#E5A338"
            fontSize="7"
            fontWeight="700"
            textAnchor="middle"
            letterSpacing="0.8"
          >
            {t("mapConnecting")}
          </text>
        </g>

        {/* ---------------------------------------------------- */}
        {/* NODE: GERMANY                                        */}
        {/* ---------------------------------------------------- */}
        <g transform={`translate(${germanyPoint.x}, ${germanyPoint.y})`}>
          {/* Pulsing Beacon Ring */}
          <circle
            cx="0"
            cy="0"
            r="16"
            fill="#D99227"
            fillOpacity="0.2"
            className="animate-pulse-glow"
          />
          <circle
            cx="0"
            cy="0"
            r="8"
            fill="#144D3A"
            stroke="#E5A338"
            strokeWidth="2"
          />
          <circle cx="0" cy="0" r="3.5" fill="#F3B84A" />

          {/* Germany Callout Box */}
          <g
            transform="translate(24, -26)"
            className="transition-transform duration-300"
          >
            <rect
              x="0"
              y="0"
              width="105"
              height="58"
              rx="8"
              fill="#061C14"
              fillOpacity="0.9"
              stroke="#D99227"
              strokeWidth="1"
              filter="url(#goldGlow)"
            />
            <text
              x="12"
              y="16"
              fill="#F3B84A"
              fontSize="9.5"
              fontWeight="800"
              letterSpacing="0.6"
            >
              {t("germanyTitle")}
            </text>
            <text x="12" y="29" fill="#EBF4F0" fontSize="7.5" fontWeight="500">
              • {t("germanyLine1")}
            </text>
            <text x="12" y="40" fill="#EBF4F0" fontSize="7.5" fontWeight="500">
              • {t("germanyLine2")}
            </text>
            <text x="12" y="51" fill="#EBF4F0" fontSize="7.5" fontWeight="500">
              • {t("germanyLine3")}
            </text>
          </g>
        </g>

        {/* ---------------------------------------------------- */}
        {/* NODE: CAMEROON                                       */}
        {/* ---------------------------------------------------- */}
        <g transform={`translate(${cameroonPoint.x}, ${cameroonPoint.y})`}>
          {/* Pulsing Beacon Ring */}
          <circle
            cx="0"
            cy="0"
            r="18"
            fill="#10B981"
            fillOpacity="0.25"
            className="animate-pulse-glow"
          />
          <circle
            cx="0"
            cy="0"
            r="9"
            fill="#09261C"
            stroke="#10B981"
            strokeWidth="2"
          />
          <circle cx="0" cy="0" r="4" fill="#34D399" />

          {/* Cameroon Callout Box */}
          <g
            transform="translate(26, -26)"
            className="transition-transform duration-300"
          >
            <rect
              x="0"
              y="0"
              width="112"
              height="58"
              rx="8"
              fill="#061C14"
              fillOpacity="0.9"
              stroke="#10B981"
              strokeWidth="1"
              filter="url(#greenGlow)"
            />
            <text
              x="12"
              y="16"
              fill="#34D399"
              fontSize="9.5"
              fontWeight="800"
              letterSpacing="0.6"
            >
              {t("cameroonTitle")}
            </text>
            <text x="12" y="29" fill="#EBF4F0" fontSize="7.5" fontWeight="500">
              • {t("cameroonLine1")}
            </text>
            <text x="12" y="40" fill="#EBF4F0" fontSize="7.5" fontWeight="500">
              • {t("cameroonLine2")}
            </text>
            <text x="12" y="51" fill="#EBF4F0" fontSize="7.5" fontWeight="500">
              • {t("cameroonLine3")}
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};
