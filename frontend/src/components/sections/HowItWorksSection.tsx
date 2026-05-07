export function HowItWorksSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl font-bold mb-4">How it <span className="text-gold">Works</span></h2>
        <p className="text-muted-text max-w-2xl mx-auto">
          Four simple steps to start trading physical commodities on the Stellar blockchain.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { step: "01", title: "Connect Wallet", desc: "Link your Freighter or Albedo wallet." },
          { step: "02", title: "Pass KYC", desc: "Complete a simple verification process." },
          { step: "03", title: "Add Funds", desc: "Deposit USDC or XLM into your account." },
          { step: "04", title: "Trade Assets", desc: "Buy and sell commodity tokens instantly." },
        ].map((item) => (
          <div key={item.step} className="relative p-6">
            <span className="text-6xl font-display font-extrabold text-white/5 absolute -top-4 -left-2">{item.step}</span>
            <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
            <p className="text-sm text-muted-text relative z-10">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
