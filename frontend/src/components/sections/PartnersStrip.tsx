"use client";

export function PartnersStrip() {
  const partners = ["Bloomberg", "Stellar Foundation", "Goldman Sachs", "LBMA", "Deloitte", "Soroban"];

  return (
    <section className="py-16 border-y border-white/5 bg-void">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-default">
          {partners.map((name) => (
            <span key={name} className="font-display text-xl md:text-2xl font-light uppercase tracking-[0.25em] text-platinum whitespace-nowrap">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
