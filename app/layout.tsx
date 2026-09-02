import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sora — Make room for what matters",
  description:
    "A mindful workspace for your ideas, intentions, and meaningful work.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
