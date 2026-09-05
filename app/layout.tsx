import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarthak Kalyani | AI · Software · Cybersecurity",
  description:
    "Portfolio of Sarthak Kalyani — Computer Science Engineering student focused on software development, AI, machine learning, and cybersecurity.",
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
