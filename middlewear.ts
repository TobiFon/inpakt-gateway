// middleware.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Explicitly match root and localized paths, excluding static files and API
  matcher: ["/", "/(de|en|fr)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
