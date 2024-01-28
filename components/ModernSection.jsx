import React from "react";
import { Button } from "./ui/button";

const ModernSection = () => {
  return (
    <div
      className="grid gap-14 grid-cols-[2fr_1fr] bg-[#F8F7F5]"
      style={{ direction: "rtl" }}
    >
      <div className="mr-10 p-10 relative top-6">
        <img src="tab2.png" alt="" />
      </div>
      <div className="space-y-2 p-20 mr-20 text-left">
        <div className="text-4xl font-semibold">Accelerate speed to market</div>
        <div className="text-lg">
          Combine best-in-class user experience with process consistency and
          scale to drive alignment, project delivery, and business results
          across your programs and portfolios.
        </div>
        <div className="flex gap-2">
          <Button size="lg" variant="green">
            Learn More
          </Button>
          <Button size="lg" variant="blue">
            Watch a Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModernSection;
