import Link from "next/link";
import { Globe, ExternalLink, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-8">
              <span className="font-display text-3xl font-black tracking-tighter text-white">
                STELLAR<span className="gold-gradient">CORE</span>
              </span>
            </Link>
            <p className="text-slate-500 max-w-sm mb-10 text-lg font-light leading-relaxed">
              Institutional-grade tokenization for physical commodity reserves. 
              The intersection of physical scarcity and digital liquidity.
            </p>
            <div className="flex gap-4">
              <ShieldCheck className="h-6 w-6 text-gold" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">SOC-2 Certified Platform</span>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-white mb-8 uppercase tracking-[0.3em]">Protocol</h4>
            <ul className="space-y-4 text-xs font-black text-slate-500 uppercase tracking-widest">
              <li><Link href="/docs" className="hover:text-gold transition-colors">Market Ledger</Link></li>
              <li><Link href="/docs/api" className="hover:text-gold transition-colors">Settlement API</Link></li>
              <li><Link href="/security" className="hover:text-gold transition-colors">Audit Reports</Link></li>
              <li><Link href="https://stellar.org" className="flex items-center gap-2 hover:text-gold transition-colors">Stellar Network <ExternalLink className="h-3 w-3" /></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-white mb-8 uppercase tracking-[0.3em]">Institutional</h4>
            <ul className="space-y-4 text-xs font-black text-slate-500 uppercase tracking-widest">
              <li><Link href="/about" className="hover:text-gold transition-colors">Governance</Link></li>
              <li><Link href="/privacy" className="hover:text-gold transition-colors">Custody Terms</Link></li>
              <li><Link href="/terms" className="hover:text-gold transition-colors">Market Rules</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">
            © {new Date().getFullYear()} STELLAR CORE PROTOCOL. PRIVATE & SECURE.
          </p>
          <div className="flex gap-10">
            <Link href="https://twitter.com" className="text-slate-600 hover:text-white transition-colors">
              <Globe className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
