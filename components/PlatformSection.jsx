import React from "react";
import { Button } from "./ui/button";

const PlatformSection = () => {
  return (
    <div
      className="grid gap-14 grid-cols-[2fr_1fr] bg-[#F8F7F5]"
      style={{ direction: "rtl" }}
    >
      <div className="mr-10 p-10 relative top-6">
        <img src="tab1.png" alt="" />
      </div>
      <div className="space-y-2 p-20 mr-20 text-left">
        <div className="text-4xl font-semibold">Work better, at scale</div>
        <div className="text-lg">
          Capture and track your plans, resources, and schedules. Smartsheet
          offers a rich set of views, workflows, reports, and dashboards to
          adapt to your needs – from projects to multi-faceted company-wide
          initiatives.
        </div>
        <div className="flex gap-2 ">
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

export default PlatformSection;
