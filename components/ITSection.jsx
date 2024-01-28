import React from "react";
import { Button } from "./ui/button";

const ITSection = () => {
  return (
    <div className="grid gap-20 grid-cols-[7fr_4fr] bg-[#F8F7F5]">
      <div>
        <img src="new4.png" alt="" />
      </div>
      <div className="space-y-2 p-10 mr-20">
        <div className="text-5xl font-semibold">We get IT</div>
        <div className="text-lg">
          IT Professionals, breathe easy. We build our platform with you in mind
          to give you granular control and visibility over access, data, and
          security.
        </div>
        <div className="flex gap-2">
          <Button size="lg" variant="blue">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ITSection;
