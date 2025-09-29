import type { Metadata } from "next";
import { Geist, Rajdhani } from "next/font/google";
import AnimateTransition from "@/components/AnimateTransition";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nikhil Mishra | Portfolio",
  description:
    "Master's student in MCA, building full-stack apps & AI/ML projects.",
  icons: {
    icon: "/logo.svg",
  },
  metadataBase: new URL("https://www.nikhil-mishra-portfolio.vercel.app"),

  openGraph: {
    title: "Nikhil Mishra | Portfolio",
    description: "Check out my projects in Full-stack development, AI & ML.",
    url: "https://nikhil-mishra-portfolio.vercel.app",
    siteName: "Nikhil Mishra",
    images: [
      {
        url: "/og-image.png", // put in public folder
        width: 1200,
        height: 630,
        alt: "Nikhil Mishra Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Mishra | Portfolio",
    description:
      "Student portfolio showcasing 20+ projects in full-stack & AI/ML.",
    images: ["/og-image.png"],
    creator: "@outbreak778", // optional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nikhil Mishra",
              url: "https://nikhil-mishra-portfolio.vercel.app",
              sameAs: [
                "https://github.com/nikhil",
                "https://linkedin.com/in/nikhil",
              ],
              jobTitle: "Master's Student | Full-Stack & AI/ML Enthusiast",
              worksFor: {
                "@type": "CollegeOrUniversity",
                name: "Sandip University",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} antialiased tracking-tight min-h-screen ${outfit.className}`}
      >
      <Toaster />
        <AnimateTransition>
          <Navbar />
          {children}
          <Footer />
        </AnimateTransition>
      </body>
    </html>
  );
}
