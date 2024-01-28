import Image from "next/image";
import React from "react";

const BrandsSection = () => {
  return (
    <div className=" bg-[#F8F7F5] m-10 my-10">
      <div className="text-xl text-center">
        Trusted by over 90% of Fortune 100 companies
      </div>
      <div className="flex justify-center gap-20 my-7">
        <Image
          src={
            "https://www.smartsheet.com/sites/default/files/2022-03/LEGO_logo.svg"
          }
          height={50}
          width={50}
        />

        <Image
          src={
            "https://www.smartsheet.com/sites/default/files/2021-07/Procter_and_Gamble_logo_1.svg"
          }
          height={50}
          width={50}
        />
        <Image
          src={
            "https://www.smartsheet.com/sites/default/files/2021-05/Nasa-JPL-Logo.svg"
          }
          height={100}
          width={150}
        />
        <Image
          src={
            "https://www.smartsheet.com/sites/default/files/2021-07/Pfizer-2021_0.svg"
          }
          height={100}
          width={120}
        />
        <Image
          src={
            "https://www.smartsheet.com/sites/default/files/2021-08/KP%20Logo.svg"
          }
          height={100}
          width={150}
        />
        <Image
          src={
            "https://www.smartsheet.com/sites/default/files/2022-10/alaska-airlines-logo.svg"
          }
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};

export default BrandsSection;
