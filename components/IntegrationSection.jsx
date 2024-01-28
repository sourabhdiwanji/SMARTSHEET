import React from "react";
import { Button } from "./ui/button";

const IntegrationSection = () => {
  return (
    <div className="grid gap-20 grid-cols-[7fr_4fr] bg-[#F8F7F5]">
      <div>
        <img src="new2.png" alt="" />
      </div>
      <div className="space-y-2 p-10 mr-20">
        <div className="text-5xl font-semibold">We work the way you do</div>
        <div className="text-lg">
          Chances are, Smartsheet integrates with software you’re already using.
          Because we believe if it works for you, it works for us.
        </div>
        <div className="flex gap-2">
          <Button size="lg" variant="blue">
            See all integrations
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IntegrationSection;
