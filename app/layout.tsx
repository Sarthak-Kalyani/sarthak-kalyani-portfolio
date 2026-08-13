import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarthak Kalyani | Software Developer & Cybersecurity Enthusiast",
  description:
    "Portfolio of Sarthak Kalyani — Computer Science Engineering student focused on Java, full-stack development, AI, and cybersecurity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
