import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const LearnSection = () => {
  return (
    <div className=" py-5 mx-10 my-7 px-24 flex gap-5 bg-[#01184C] text-white items-center">
      <div>
        <Image
          height={100}
          width={100}
          src={
            "https://www.smartsheet.com/sites/default/files/styles/large/public/2023-12/gartner-cwm-magic-quadrant-2023-graph-1.webp?itok=6JM-tYeq"
          }
        />
      </div>
      <div className="text-xl flex-1">
        Smartsheet has been named a Leader in the Gartner®
        <br />
        Magic Quadrant™ for Collaborative Work Management.
      </div>
      <div>
        <Button variant="blue" size="lg">
          Learn why
        </Button>
      </div>
    </div>
  );
};

export default LearnSection;
