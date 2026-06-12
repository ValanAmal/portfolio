import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { Starfield } from "@/components/Starfield";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Valan Amal | AI-Powered Full Stack Builder",
  description: "Transforming Ideas Into Intelligent Digital Experiences. The personal portfolio of Valan Amal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${orbitron.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
        <Starfield />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
