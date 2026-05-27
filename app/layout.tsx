import type { ReactNode } from "react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";

/**
 * Root layout (Vite/React equivalent of Next.js app/layout).
 * Inter is loaded via @fontsource/inter — same family as next/font/google Inter.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
