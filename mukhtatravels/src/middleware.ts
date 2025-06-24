import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all routes except for:
    // - /_next/ (static files like Tailwind CSS)
    // - /favicon.ico or other dot files
    // - /api, /trpc, etc.
    "/((?!api|trpc|_next|_vercel|favicon.ico|.*\\.(?:svg|jpg|jpeg|png|webp|ico|css|js|woff2|woff|ttf)).*)"
  ],
};
