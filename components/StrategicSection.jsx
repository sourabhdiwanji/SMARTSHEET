import React from "react";
import { Button } from "./ui/button";

const StrategicSection = () => {
  return (
    <div
      className="grid gap-14 grid-cols-[2fr_1fr] bg-[#F8F7F5]"
      style={{ direction: "rtl" }}
    >
      <div className="mr-10 p-10 relative top-6">
        <img src="tab4.png" alt="" />
      </div>
      <div className="space-y-2 p-20 mr-20 text-left">
        <div className="text-4xl font-semibold">Transform business, faster</div>
        <div className="text-lg">
          Align people, priorities, and purpose while scaling faster, using
          portfolio-level automation to implement lasting transformational
          change.
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

export default StrategicSection;
