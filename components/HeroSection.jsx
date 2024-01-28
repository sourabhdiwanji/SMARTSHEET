import React from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="grid gap-14 grid-cols-[7fr_3fr] bg-[#08112E] text-white">
      <div className="p-7">
        <img src="hero.png" alt="" />
      </div>
      <div className="space-y-2 p-10 mr-20">
        <div className="text-5xl font-semibold">
          The enterprise work management platform
        </div>
        <div className="text-lg">
          The foundation for managing projects, programs, and processes that
          scale.
        </div>
        <div className="flex gap-2">
          <Button variant="green" size="lg">
            Try for Free
          </Button>
          <Button size="lg" variant="blue">
            Watch a Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
