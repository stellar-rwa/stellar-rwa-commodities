import Link from "next/link";
import { Code2, Globe, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-surface/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="font-display text-2xl font-bold tracking-tighter text-gold">
                STELLAR<span className="text-white">COMMODITY</span>
              </span>
            </Link>
            <p className="text-muted-text max-w-xs mb-6">
              Tokenizing physical commodities on the Stellar blockchain. Open-source, production-grade infrastructure for the future of finance.
            </p>
              <Link href="https://github.com" className="text-muted-text hover:text-gold transition-colors">
                <Code2 className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-muted-text hover:text-gold transition-colors">
                <Globe className="h-5 w-5" />
              </Link>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-text">
              <li><Link href="/docs" className="hover:text-gold transition-colors">Documentation</Link></li>
              <li><Link href="/docs/api" className="hover:text-gold transition-colors">API Reference</Link></li>
              <li><Link href="/docs/getting-started" className="hover:text-gold transition-colors">Getting Started</Link></li>
              <li><Link href="https://stellar.org" className="flex items-center gap-1 hover:text-gold transition-colors">Stellar.org <ExternalLink className="h-3 w-3" /></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-text">
              <li><Link href="/marketplace" className="hover:text-gold transition-colors">Marketplace</Link></li>
              <li><Link href="/dashboard" className="hover:text-gold transition-colors">Dashboard</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/security" className="hover:text-gold transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-xs text-muted-text">
            © {new Date().getFullYear()} StellarCommodity. Built for Stellar Wave.
          </p>
          <div className="flex gap-6 text-xs text-muted-text">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
