import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivpujan Kumar - Developer, Founder & Problem Solver",
  description: "Full-stack developer and startup founder specializing in web & mobile apps, AI integration, and innovative tech solutions. Available for freelance projects.",
  keywords: ["developer", "founder", "full-stack", "React", "Node.js", "AI", "startup", "freelance"],
  authors: [{ name: "Shivpujan Kumar" }],
  creator: "Shivpujan Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shivpujan.dev",
    siteName: "Shivpujan Kumar Portfolio",
    title: "Shivpujan Kumar - Developer, Founder & Problem Solver",
    description: "Full-stack developer and startup founder specializing in web & mobile apps, AI integration, and innovative tech solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivpujan Kumar - Developer, Founder & Problem Solver",
    description: "Full-stack developer and startup founder specializing in web & mobile apps, AI integration, and innovative tech solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
