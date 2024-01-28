import React from "react";
import { Button } from "./ui/button";

const MarketSection = () => {
  return (
    <div
      className="grid gap-14 grid-cols-[2fr_1fr] bg-[#F8F7F5]"
      style={{ direction: "rtl" }}
    >
      <div className="mr-10 p-10 relative top-6">
        <img src="tab3.png" alt="" />
      </div>
      <div className="space-y-2 p-20 mr-20 text-left">
        <div className="text-4xl font-semibold">
          Empower marketing and creative teams
        </div>
        <div className="text-lg">
          Manage marketing and creative work, content, and people to deliver
          better customer experiences at scale.
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

export default MarketSection;
