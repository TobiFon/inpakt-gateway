// components/hero/WorldMapConnection.tsx
"use client";

import React, { useMemo } from "react";
import { useTranslations } from "next-intl";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import worldAtlas from "world-atlas/countries-110m.json";

type Position = {
  longitude: number;
  latitude: number;
};

const MAP_WIDTH = 1600;
const MAP_HEIGHT = 760;

// Geographic coordinates
const GERMANY: Position = {
  longitude: 10.45,
  latitude: 51.16,
};

const CAMEROON: Position = {
  longitude: 12.35,
  latitude: 5.96,
};

const cityLights = [
  // North America
  [-122.42, 37.77],
  [-118.24, 34.05],
  [-104.99, 39.74],
  [-95.36, 29.76],
  [-87.63, 41.88],
  [-74.01, 40.71],
  [-79.38, 43.65],

  // South America
  [-46.63, -23.55],
  [-58.38, -34.6],
  [-77.04, -12.05],
  [-74.08, 4.61],

  // Europe
  [-0.13, 51.51],
  [2.35, 48.85],
  [4.9, 52.37],
  [8.68, 50.11],
  [13.4, 52.52],
  [16.37, 48.21],
  [21.01, 52.23],
  [18.07, 59.33],
  [12.57, 55.68],
  [9.19, 45.46],
  [-3.7, 40.42],

  // Africa
  [3.38, 6.52],
  [7.49, 9.08],
  [15.06, 4.05],
  [11.5, 3.87],
  [3.37, 6.52],
  [28.05, -26.2],
  [31.23, 30.04],
  [-1.29, 36.82],

  // Asia
  [77.1, 28.7],
  [72.88, 19.08],
  [77.59, 12.97],
  [116.4, 39.9],
  [121.47, 31.23],
  [139.69, 35.68],
  [126.98, 37.57],
  [103.82, 1.35],
  [100.5, 13.75],

  // Oceania
  [151.21, -33.87],
  [144.96, -37.81],
];

function createConnectionPath(start: [number, number], end: [number, number]) {
  const [startX, startY] = start;
  const [endX, endY] = end;

  const distanceY = endY - startY;
  const curveStrength = Math.min(Math.abs(distanceY) * 0.9, MAP_WIDTH * 0.16);

  const controlX1 = startX - curveStrength;
  const controlY1 = startY + distanceY * 0.18;

  const controlX2 = endX - curveStrength * 1.05;
  const controlY2 = endY - distanceY * 0.22;

  return `
    M ${startX} ${startY}
    C ${controlX1} ${controlY1},
      ${controlX2} ${controlY2},
      ${endX} ${endY}
  `;
}

function Node({
  x,
  y,
  type,
}: {
  x: number;
  y: number;
  type: "germany" | "cameroon";
}) {
  const isGermany = type === "germany";
  const accent = isGermany ? "#F2B94B" : "#DDBB35";
  const secondary = isGermany ? "#FFF0B5" : "#FFE16D";

  return (
    <g transform={`translate(${x} ${y})`}>
      {/* Outer atmospheric aura */}
      <circle r="36" fill={accent} opacity="0.1" filter="url(#nodeGlow)" />
      <circle r="24" fill={accent} opacity="0.14" />

      {/* Radar rings */}
      <circle
        r="18"
        fill="none"
        stroke={accent}
        strokeWidth="1"
        opacity="0.3"
      />
      <circle
        r="12"
        fill="none"
        stroke={accent}
        strokeWidth="1.2"
        opacity="0.5"
      />

      {/* Outer ring */}
      <circle r="8" fill="#0A211B" stroke={accent} strokeWidth="2" />

      {/* Bright center */}
      <circle r="4" fill={secondary} filter="url(#nodeGlow)" />
      <circle r="1.6" fill="#FFFFFF" />
    </g>
  );
}

export const WorldMapConnection: React.FC = () => {
  const t = useTranslations("hero");

  const { countries, pathGenerator, projection } = useMemo(() => {
    const countriesObject = (
      worldAtlas.objects as unknown as {
        countries: object;
      }
    ).countries;

    const world = feature(
      worldAtlas as unknown as Parameters<typeof feature>[0],
      countriesObject as Parameters<typeof feature>[1]
    );

    const projection = geoMercator()
      .translate([MAP_WIDTH / 2, MAP_HEIGHT / 2])
      .scale(240)
      .center([10, 20]);

    const pathGenerator = geoPath(projection);

    return {
      countries: world,
      pathGenerator,
      projection,
    };
  }, []);

  const germanyPoint = projection([GERMANY.longitude, GERMANY.latitude]) as [
    number,
    number
  ];

  const cameroonPoint = projection([CAMEROON.longitude, CAMEROON.latitude]) as [
    number,
    number
  ];

  const connectionPath = createConnectionPath(germanyPoint, cameroonPoint);

  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(209,154,45,0.14),transparent_35%),radial-gradient(circle_at_70%_40%,rgba(38,100,75,0.12),transparent_45%)] blur-3xl" />

      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        className="relative z-10 h-auto w-full min-h-[430px] lg:min-h-[520px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="World map showing the connection between Cameroon and Germany"
      >
        <defs>
          {/* Dark land gradient */}
          <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#25342E" />
            <stop offset="45%" stopColor="#17251F" />
            <stop offset="100%" stopColor="#0D1714" />
          </linearGradient>

          {/* Regional Africa glow */}
          <radialGradient id="africaGlow">
            <stop offset="0%" stopColor="#6B5A2D" stopOpacity="0.42" />
            <stop offset="55%" stopColor="#34402A" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#0C1714" stopOpacity="0" />
          </radialGradient>

          {/* Gold connection gradient */}
          <linearGradient
            id="connectionGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FFF2B0" />
            <stop offset="18%" stopColor="#F6C65B" />
            <stop offset="55%" stopColor="#E9A92F" />
            <stop offset="100%" stopColor="#FFE37A" />
          </linearGradient>

          <filter id="routeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="10" result="blurOne" />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="3"
              result="blurTwo"
            />
            <feMerge>
              <feMergeNode in="blurOne" />
              <feMergeNode in="blurTwo" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="lightGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Subtle surface texture */}
          <filter id="mapNoise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="2"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              in="noise"
              type="saturate"
              values="0"
              result="monoNoise"
            />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.07" />
            </feComponentTransfer>
            <feBlend in="SourceGraphic" mode="overlay" />
          </filter>

          {/* Animated particles */}
          <circle id="travelParticle" r="4.5" fill="#FFF6C9" />
          <path id="connectionRoute" d={connectionPath} />
        </defs>

        {/* =====================================================
            BACKGROUND ATMOSPHERE
        ====================================================== */}
        <ellipse
          cx={MAP_WIDTH / 2}
          cy={MAP_HEIGHT / 2}
          rx="650"
          ry="360"
          fill="url(#africaGlow)"
          opacity="0.65"
        />

        {/* =====================================================
            REAL WORLD MAP
        ====================================================== */}
        <g filter="url(#mapNoise)">
          {(
            countries as unknown as {
              features: Array<{
                geometry: object;
              }>;
            }
          ).features.map((country, index) => {
            const path = pathGenerator(country as never);

            if (!path) return null;

            return (
              <path
                key={index}
                d={path}
                fill="url(#landGradient)"
                stroke="#7C8174"
                strokeOpacity="0.2"
                strokeWidth="0.7"
              />
            );
          })}
        </g>

        {/* Fine map contour */}
        <g opacity="0.16">
          {(
            countries as unknown as {
              features: Array<{
                geometry: object;
              }>;
            }
          ).features.map((country, index) => {
            const path = pathGenerator(country as never);

            if (!path) return null;

            return (
              <path
                key={`outline-${index}`}
                d={path}
                fill="none"
                stroke="#D7C789"
                strokeWidth="0.3"
              />
            );
          })}
        </g>

        {/* =====================================================
            SATELLITE CITY LIGHTS
        ====================================================== */}
        <g filter="url(#lightGlow)">
          {cityLights.map(([longitude, latitude], index) => {
            const point = projection([longitude, latitude]);

            if (!point) return null;

            return (
              <React.Fragment key={index}>
                <circle
                  cx={point[0]}
                  cy={point[1]}
                  r={index % 4 === 0 ? 3 : 1.8}
                  fill="#F5C65A"
                  opacity="0.18"
                />
                <circle
                  cx={point[0]}
                  cy={point[1]}
                  r={index % 4 === 0 ? 1.5 : 0.8}
                  fill="#FFE9A2"
                  opacity="0.95"
                />
              </React.Fragment>
            );
          })}
        </g>

        {/* =====================================================
            GLOWING CAMEROON-GERMANY CONNECTION
        ====================================================== */}
        {/* Soft aura */}
        <path
          d={connectionPath}
          stroke="#DDA329"
          strokeWidth="32"
          strokeLinecap="round"
          opacity="0.08"
          filter="url(#routeGlow)"
        />

        {/* Outer glow */}
        <path
          d={connectionPath}
          stroke="#F1B643"
          strokeWidth="16"
          strokeLinecap="round"
          opacity="0.18"
          filter="url(#routeGlow)"
        />

        {/* Main route */}
        <path
          d={connectionPath}
          stroke="url(#connectionGradient)"
          strokeWidth="4.5"
          strokeLinecap="round"
          filter="url(#routeGlow)"
        />

        {/* Inner bright filament */}
        <path
          d={connectionPath}
          stroke="#FFF7D7"
          strokeWidth="1.15"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Moving comet particle */}
        <use href="#travelParticle" filter="url(#routeGlow)">
          <animateMotion dur="5s" repeatCount="indefinite">
            <mpath href="#connectionRoute" />
          </animateMotion>
        </use>

        <circle r="3" fill="#F4B942" filter="url(#nodeGlow)">
          <animateMotion dur="5s" begin="-2.5s" repeatCount="indefinite">
            <mpath href="#connectionRoute" />
          </animateMotion>
        </circle>

        {/* =====================================================
            CENTER CONNECTION TEXT (FULLY TRANSLATED)
        ====================================================== */}
        <g
          transform={`translate(
            ${Math.min(germanyPoint[0], cameroonPoint[0]) - 260},
            ${(germanyPoint[1] + cameroonPoint[1]) / 2 - 8}
          )`}
        >
          <text
            x="0"
            y="0"
            fill="#E7B653"
            fontSize="12"
            fontWeight="700"
            letterSpacing="2.5px"
          >
            {t("mapConnectingLine1")}
          </text>

          <text
            x="-4"
            y="22"
            fill="#F5F1E6"
            fontSize="15"
            fontWeight="800"
            letterSpacing="1.2px"
          >
            {t("mapConnectingLine2")}
          </text>

          <text
            x="-2"
            y="42"
            fill="#D6AA54"
            fontSize="11.5"
            fontWeight="700"
            letterSpacing="2px"
          >
            {t("mapConnectingLine3")}
          </text>
        </g>

        {/* =====================================================
            NODE: GERMANY (FULLY TRANSLATED)
        ====================================================== */}
        <Node x={germanyPoint[0]} y={germanyPoint[1]} type="germany" />

        <g
          transform={`translate(
            ${germanyPoint[0] + 32},
            ${germanyPoint[1] - 25}
          )`}
        >
          <text
            fill="#F2F0E8"
            fontSize="18"
            fontWeight="800"
            letterSpacing="1.2px"
          >
            {t("germanyTitle")}
          </text>

          <text y="22" fill="#B5B76D" fontSize="12" fontWeight="500">
            • {t("germanyLine1")}
          </text>

          <text y="40" fill="#B5B76D" fontSize="12" fontWeight="500">
            • {t("germanyLine2")}
          </text>

          <text y="58" fill="#B5B76D" fontSize="12" fontWeight="500">
            • {t("germanyLine3")}
          </text>
        </g>

        {/* =====================================================
            NODE: CAMEROON (FULLY TRANSLATED)
        ====================================================== */}
        <Node x={cameroonPoint[0]} y={cameroonPoint[1]} type="cameroon" />

        <g
          transform={`translate(
            ${cameroonPoint[0] + 36},
            ${cameroonPoint[1] - 28}
          )`}
        >
          <text
            fill="#F2F0E8"
            fontSize="18"
            fontWeight="800"
            letterSpacing="1.2px"
          >
            {t("cameroonTitle")}
          </text>

          <text y="22" fill="#B5B76D" fontSize="12" fontWeight="500">
            • {t("cameroonLine1")}
          </text>

          <text y="40" fill="#B5B76D" fontSize="12" fontWeight="500">
            • {t("cameroonLine2")}
          </text>

          <text y="58" fill="#B5B76D" fontSize="12" fontWeight="500">
            • {t("cameroonLine3")}
          </text>
        </g>
      </svg>
    </div>
  );
};
