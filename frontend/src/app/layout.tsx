import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond, DM_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LiveTicker } from "@/components/layout/LiveTicker";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' });
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  variable: '--font-display',
  weight: ['300', '400', '600']
});
const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500']
});

export const metadata: Metadata = {
  title: "StellarCommodity | Institutional RWA Tokenization",
  description: "Celestial Vault: Sovereign-grade tokenization of physical commodities on the Stellar blockchain.",
};

import { CursorTrailer } from "@/components/layout/CursorTrailer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(outfit.variable, cormorant.variable, dmMono.variable)}>
      <body className="antialiased bg-void text-celestial-white selection:bg-gold/30">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <CursorTrailer />
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <div className="pt-16">
              <LiveTicker />
            </div>
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
