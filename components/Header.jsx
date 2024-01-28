import React from "react";
import { Button } from "./ui/button";
import { Ghost, Globe, Search } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="flex gap-3 px-3 items-center justify-between shadow">
      <div className="flex gap-3 items-center p-3">
        <span className="class">
          <Image
            height={70}
            width={160}
            src="https://www.smartsheet.com/sites/default/files/smartsheet-logo-blue-new.svg"
            alt=""
          />
        </span>

        <div>
          <ul className="flex gap-5 p-3 font-semibold">
            <li
              role="button"
              className="hover:border-b-[#235EDF] data-[active=true]:border-b-[#235EDF] border-b-2 border-b-transparent hover:bg-white"
            >
              Products
            </li>
            <li
              role="button"
              className="hover:border-b-[#235EDF] data-[active=true]:border-b-[#235EDF] border-b-2 border-b-transparent hover:bg-white"
            >
              Solutions
            </li>
            <li
              role="button"
              className="hover:border-b-[#235EDF] data-[active=true]:border-b-[#235EDF] border-b-2 border-b-transparent hover:bg-white"
            >
              Resources
            </li>
            <li
              role="button"
              className="hover:border-b-[#235EDF] data-[active=true]:border-b-[#235EDF] border-b-2 border-b-transparent hover:bg-white"
            >
              Pricing
            </li>
            <li
              role="button"
              className="hover:border-b-[#235EDF] data-[active=true]:border-b-[#235EDF] border-b-2 border-b-transparent hover:bg-white"
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-3 items-center p-3">
        <Button variant="secondary">Watch a Demo</Button>
        <Button variant="green">Try SmartSheet for free</Button>
        <Globe />
        <Search />
        <Button variant="ghost" className="text-lg">
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Header;
