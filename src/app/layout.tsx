import type { Metadata } from "next";
import { Bebas_Neue, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/helper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--fonts-roboto",
  weight: ["300", "400", "700"],
});
const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--fonts-bebas",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Dip-Portfolio",
  description: "Dip-Portfolio create by  next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          roboto.className,
          bebas.variable,
          "bg-zinc-900 text-zinc-50"
        )}
      >
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 md:px-8 space-y-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
