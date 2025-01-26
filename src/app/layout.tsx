import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const futura = localFont({
  src: "./fonts/futura light bt.ttf",
  variable: "--font-futura",
  weight: "100 900",
});

const luloClean = localFont({
  src: "./fonts/Lulo Clean One.otf",
  variable: "--font-luloClean",
  weight: "100 900",
});

const luloCleanBold = localFont({
  src: "./fonts/Lulo Clean One Bold.otf",
  variable: "--font-luloCleanBold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "thehalwahouse",
  description: "Exotic Homemade Halwas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${luloClean.variable} ${luloCleanBold.variable} ${futura.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
