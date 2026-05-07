"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2, PlusCircle } from "lucide-react";
import Link from "next/link";

export function ContributeSection() {
  return (
    <section className="container mx-auto px-4">
      <div className="relative p-12 md:p-16 rounded-3xl overflow-hidden border border-gold/20 bg-gradient-to-br from-gold/10 via-background to-stellar-blue/10">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Code2 className="h-64 w-64" />
        </div>
        
        <div className="relative z-10 max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="text-gold">Open Source</span> Wave
          </h2>
          <p className="text-lg text-muted-text mb-8 leading-relaxed">
            StellarCommodity is a community-driven project. We have 500+ open issues for contributors. Whether you are a Rust expert or a frontend enthusiast, there is a place for you.
          </p>
          
          <div className="flex flex-col sm:row gap-4">
            <Button size="lg" className="bg-gold hover:bg-gold-light text-black font-bold h-12 px-8" asChild>
              <Link href="https://github.com">
                <Code2 className="mr-2 h-5 w-5" /> View on GitHub
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-surface h-12 px-8" asChild>
              <Link href="/docs/contributing">
                <PlusCircle className="mr-2 h-5 w-5" /> How to Contribute
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
