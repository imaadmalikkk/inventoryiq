"use client";

import * as React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/sections/HeroSection";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { HowItWorksSection } from "@/sections/HowItWorksSection";
import { SocialProofSection } from "@/sections/SocialProofSection";
import { PricingSection } from "@/sections/PricingSection";
import { CTASection } from "@/sections/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <SocialProofSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
