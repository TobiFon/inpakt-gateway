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
          backgroundColor: "#0c3323",
          backgroundImage:
            "radial-gradient(circle at 85% 25%, rgba(217, 146, 39, 0.32), transparent 50%), radial-gradient(circle at 15% 80%, rgba(21, 128, 61, 0.5), transparent 50%)",
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
              gap: "10px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              padding: "10px 20px",
              borderRadius: "9999px",
              border: "1px solid rgba(243, 184, 74, 0.3)",
              fontSize: "14px",
              fontWeight: 800,
              color: "#f3b84a",
              letterSpacing: "1px",
            }}
          >
            <span>AFRICA 🌍</span>
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
            maxWidth: "980px",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: 800,
              color: "#f3b84a",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Connect. Collaborate. Create Impact.
          </div>

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
                color: "#d99227",
                letterSpacing: "-1px",
              }}
            >
              become impact.
            </span>
          </div>

          <p
            style={{
              fontSize: "21px",
              color: "#f0fdf4",
              opacity: 0.9,
              margin: 0,
              lineHeight: 1.45,
              maxWidth: "860px",
            }}
          >
            Connecting people, institutions, resources and opportunities across
            Africa and Germany for sustainable development.
          </p>
        </div>

        {/* Bottom Footer Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: "20px",
          }}
        >
          <span style={{ fontSize: "15px", color: "#cbd5d0" }}>
            Registered Non-Profit Association (e.V.) • Germany & Africa
          </span>
          <span style={{ fontSize: "16px", color: "#f3b84a", fontWeight: 800 }}>
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
