import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const handler = createMiddleware(routing);

export function proxy(request: Request) {
  return handler(request as any);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};