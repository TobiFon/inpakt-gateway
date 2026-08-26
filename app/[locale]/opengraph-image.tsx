import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Impakt Gateway e.V. — Where connections become impact.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  let logoDataUrl = "";
  try {
    const logoBuffer = await readFile(join(process.cwd(), "public/logo.png"));
    logoDataUrl = `data:image/png;base64,${logoBuffer.toString("base64")}`;
  } catch (error) {
    console.error("Could not load logo for OpenGraph image:", error);
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#051811",
          backgroundImage:
            "radial-gradient(circle at 85% 25%, rgba(217, 146, 39, 0.28), transparent 50%), radial-gradient(circle at 15% 80%, rgba(20, 77, 58, 0.45), transparent 50%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top Bar with Real Logo & Country Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {logoDataUrl ? (
            <img
              src={logoDataUrl}
              alt="Impakt Gateway e.V."
              width={260}
              height={65}
              style={{ objectFit: "contain" }}
            />
          ) : (
            <span
              style={{ fontSize: "28px", fontWeight: 800, color: "#ffffff" }}
            >
              IMPAKT GATEWAY e.V.
            </span>
          )}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              padding: "8px 18px",
              borderRadius: "9999px",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              fontSize: "14px",
              fontWeight: 700,
              color: "#F3B84A",
              letterSpacing: "1px",
            }}
          >
            <span>CAMEROON 🇨🇲</span>
            <span style={{ color: "#ffffff", opacity: 0.6 }}>↔</span>
            <span>GERMANY 🇩🇪</span>
          </div>
        </div>

        {/* Central Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "960px",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: 800,
              color: "#E5A338",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Connect. Collaborate. Create Impact.
          </div>

          {/* Flex title container with explicit 14px gap */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              flexWrap: "wrap",
              gap: "14px",
              lineHeight: 1.12,
              margin: 0,
            }}
          >
            <span
              style={{
                fontSize: "58px",
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: "-1px",
              }}
            >
              Where connections
            </span>
            <span
              style={{
                fontSize: "58px",
                fontWeight: 900,
                color: "#D99227",
                letterSpacing: "-1px",
              }}
            >
              become impact.
            </span>
          </div>

          <p
            style={{
              fontSize: "21px",
              color: "#EBF4F0",
              opacity: 0.88,
              margin: 0,
              lineHeight: 1.45,
              maxWidth: "850px",
            }}
          >
            Connecting people, institutions, resources and opportunities across
            Cameroon and Germany for sustainable development.
          </p>
        </div>

        {/* Bottom Footer Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "20px",
          }}
        >
          <span style={{ fontSize: "15px", color: "#B8C4BF" }}>
            Registered Non-Profit Association (e.V.) • Germany & Cameroon
          </span>
          <span style={{ fontSize: "16px", color: "#F3B84A", fontWeight: 800 }}>
            impakt-gateway.org
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
