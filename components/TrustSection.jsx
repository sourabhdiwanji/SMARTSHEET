import React from "react";
import { Button } from "./ui/button";

const TrustSection = () => {
  return (
    <div
      className="grid gap-14 grid-cols-[7fr_5fr] bg-[#F8F7F5]"
      style={{ direction: "rtl" }}
    >
      <div className=" relative top-16 p-2 mt-10 mr-5 ">
        <img src="new3.png" alt="" />
      </div>
      <div className="space-y-2 p-20 mr-20 text-left">
        <div className="text-5xl font-semibold">Trusted by experts</div>
        <div className="text-lg">
          We move beyond best practices to make sure everything you do with us
          is safe and secure, from access to policies to the data flows through
          your work. We’re enterprise-grade, so you can focus on innovation with
          the trust that we have your back.
        </div>
        <div className="flex gap-2 justify-end">
          <Button size="lg" variant="blue">
            Visit the Trust center
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
