import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const GrowthSection = () => {
  return (
    <div
      className="grid gap-14 grid-cols-[7fr_3fr] bg-[#F8F7F5]"
      style={{ direction: "rtl" }}
    >
      <div className="mr-10">
        <img src="new.png" alt="" />
      </div>
      <div className="space-y-2 p-20 mr-20 text-left">
        <div className="text-5xl font-semibold">Drive growth and impact</div>
        <div className="text-lg">
          Companies of all sizes can scale with confidence and deliver value as
          business requirements evolve.
        </div>
        <div className="flex gap-2">
          <Button size="lg" variant="blue">
            Read Customer growth stories
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GrowthSection;
