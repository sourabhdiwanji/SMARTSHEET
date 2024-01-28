import React from "react";
import { Button } from "./ui/button";

const StartedSection = () => {
  return (
    <div className="bg-[#F8F7F5] pb-20 grid place-items-center gap-5">
      <h2 className="text-2xl font-semibold">Ready to get started?</h2>
      <Button size="lg" variant="green">
        Try Smartsheet for free
      </Button>
    </div>
  );
};

export default StartedSection;
