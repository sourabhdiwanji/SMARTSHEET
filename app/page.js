import BrandsSection from "@/components/BrandsSection";
import GrowthSection from "@/components/GrowthSection";
import HeroSection from "@/components/HeroSection";
import ITSection from "@/components/ITSection";
import IntegrationSection from "@/components/IntegrationSection";
import LearnSection from "@/components/LearnSection";
import ResourcesSection from "@/components/ResourcesSection";
import StartedSection from "@/components/StartedSection";
import TabsSection from "@/components/TabsSection";
import TrustSection from "@/components/TrustSection";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <HeroSection /> <BrandsSection /> <LearnSection /> <TabsSection />
      <GrowthSection /> <IntegrationSection /> <TrustSection /> <ITSection />
      <ResourcesSection />
      <StartedSection />
    </div>
  );
};

export default Homepage;
