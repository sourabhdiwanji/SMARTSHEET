"use client";
import React, { useState } from "react";
import PlatformSection from "./PlatformSection";
import ModernSection from "./ModernSection";
import MarketSection from "./MarketSection";
import StrategicSection from "./StrategicSection";

const TabsSection = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="bg-[#F8F7F5] py-10 ">
      <h1 className="text-center text-5xl pb-10 font-semibold">
        Flexible solutions fit your work at any scale
      </h1>
      <div className="flex justify-center">
        <button
          onClick={() => setActive(0)}
          data-active={active === 0}
          className="text-2xl px-5 py-3 font-semibold text-[#235EDF] hover:border-b-[#235EDF] data-[active=true]:border-b-[#235EDF] border-b-2 border-b-transparent hover:bg-white"
        >
          Platform
        </button>
        <button
          onClick={() => setActive(1)}
          data-active={active === 1}
          className="text-2xl px-5 py-3 font-semibold text-[#235EDF] hover:border-b-[#235EDF] data-[active=true]:border-b-[#235EDF] border-b-2 border-b-transparent hover:bg-white"
        >
          Modern PPM
        </button>
        <button
          onClick={() => setActive(2)}
          data-active={active === 2}
          className="text-2xl px-5 py-3 font-semibold text-[#235EDF] hover:border-b-[#235EDF] data-[active=true]:border-b-[#235EDF] border-b-2 border-b-transparent hover:bg-white"
        >
          Marketing & Creative
        </button>
        <button
          onClick={() => setActive(3)}
          data-active={active === 3}
          className="text-2xl px-5 py-3 font-semibold text-[#235EDF] hover:border-b-[#235EDF] data-[active=true]:border-b-[#235EDF] border-b-2 border-b-transparent hover:bg-white"
        >
          Strategic Transformation
        </button>
      </div>
      {active === 0 && <PlatformSection />}
      {active === 1 && <ModernSection />}
      {active === 2 && <MarketSection />}
      {active === 3 && <StrategicSection />}
    </div>
  );
};

export default TabsSection;
