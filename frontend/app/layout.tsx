import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Expert Phone Reviews | Your Trusted Source for Smartphone Insights",
  description:
    "Discover in-depth smartphone reviews, comparisons, and expert insights. Explore the latest models, find the best deals, and make informed buying decisions.",
  keywords:
    "phone reviews, smartphone reviews, best smartphones, phone comparisons, technology insights, mobile reviews, smartphone recommendations",

  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Expert Phone Reviews | Your Trusted Source for Smartphone Insights",
    description:
      "Explore detailed reviews of the latest smartphones, expert comparisons, and insights to help you choose the right phone.",
    url: "https://yourwebsite.com",
    siteName: "Your Website Name",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Smartphone Review",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Phone Reviews | Your Trusted Source for Smartphone Insights",
    description:
      "In-depth smartphone reviews, comparisons, and expert insights.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white min-h-screen `}
      >
        <div className="p-sm md:p-md lg:p-lg xl:p-xl">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
