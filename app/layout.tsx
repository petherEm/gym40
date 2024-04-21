import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "FitPhysique | The place you belong to",
  description:
    "Don't wait - grab you membership now and start your journey to a healthier life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-200">
      <body
        className={`${oswald.variable} ${roboto.variable} w-full max-w-[1920px] mx-auto bg-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
