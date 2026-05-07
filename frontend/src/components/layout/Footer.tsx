import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-void border-t border-gold/15 pt-24 pb-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
             <Link href="/" className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-gold flex items-center justify-center font-display text-void font-bold text-xs tracking-tighter shadow-[0_0_15px_rgba(201,168,76,0.3)]">
                SC
              </div>
              <span className="font-display text-2xl font-light tracking-[-0.04em] text-celestial-white uppercase">
                Stellar<span className="font-semibold text-gold">Commodity</span>
              </span>
            </Link>
            <p className="font-sans text-ghost-white text-lg font-light leading-relaxed max-w-sm mb-10">
              Sovereign-grade custody. Atomic settlement. 
              The intersection of physical scarcity and digital rails.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gold" />
              </div>
              <span className="font-sans text-[10px] font-black uppercase tracking-[0.2em] text-platinum">Built on Stellar Platform</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans text-[10px] font-black text-celestial-white uppercase tracking-[0.3em] mb-10">Institutional</h4>
            <ul className="space-y-4 font-sans text-xs font-semibold text-platinum uppercase tracking-widest">
              <li><Link href="/about" className="hover:text-gold transition-colors">Governance</Link></li>
              <li><Link href="/terms" className="hover:text-gold transition-colors">Market Rules</Link></li>
              <li><Link href="/security" className="hover:text-gold transition-colors">Audit Reports</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="font-sans text-[10px] font-black text-celestial-white uppercase tracking-[0.3em] mb-10">Network</h4>
             <ul className="space-y-4 font-sans text-xs font-semibold text-platinum uppercase tracking-widest">
              <li><Link href="/docs" className="hover:text-gold transition-colors">Market Ledger</Link></li>
              <li><Link href="/docs/api" className="hover:text-gold transition-colors">Settlement API</Link></li>
              <li><Link href="https://stellar.org" className="hover:text-gold transition-colors">Stellar.org</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-mono text-[9px] text-void-mist uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} STELLAR COMMODITY PROTOCOL. ALL ASSETS AUDITED.
          </p>
          <div className="flex gap-10 items-center">
             <div className="font-mono text-[9px] text-gold-light uppercase tracking-[0.3em] transition-all cursor-default">
               TX: G...A2B4C
             </div>
             <div className="font-mono text-[9px] text-platinum uppercase tracking-[0.3em] transition-all hover:text-gold cursor-pointer">
               ISO 20022 COMPLIANT
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
