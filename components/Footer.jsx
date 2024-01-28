import {
  ArrowRight,
  ChevronRight,
  Download,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-5 px-10">
      <section className="grid grid-cols-[1fr_1.2fr_1.5fr_1fr_2fr]">
        <div>
          <div>
            <Image
              height={70}
              width={160}
              src="https://www.smartsheet.com/sites/default/files/smartsheet-logo-blue-new.svg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="font-semibold">PRODUCT</div>
          <ul className="space-y-2 mt-3">
            <li>
              <LinkButton>Platform</LinkButton>
            </li>
            <li>
              <LinkButton> Solutions</LinkButton>
            </li>
            <li>
              <LinkButton>Features</LinkButton>
            </li>
            <li>
              <LinkButton>Integrations</LinkButton>
            </li>
            <li>
              <LinkButton>Pricing & plans</LinkButton>
            </li>
            <li>
              <LinkButton>Smartsheet Advance</LinkButton>
            </li>
            <li>
              <LinkButton>Professional services</LinkButton>
            </li>
            <li>
              <LinkButton>Trust Center</LinkButton>
            </li>
            <li>
              <LinkButton>Template Gallery</LinkButton>
            </li>
            <li>
              <LinkButton>Why SmartSheet</LinkButton>
            </li>
          </ul>
          <Button className="group" variant="blueghost">
            Start a trial
            <ArrowRight className="hidden group-hover:inline" />
            <ChevronRight className="group-hover:hidden" />
          </Button>
        </div>
        <div>
          <div className="font-semibold">RESOURCES</div>
          <ul className="space-y-2 mt-3">
            <li>
              <LinkButton>Content Center</LinkButton>
            </li>
            <li>
              <LinkButton>Product updates & insights</LinkButton>
            </li>
            <li>
              <LinkButton>Help & Learning</LinkButton>
            </li>
            <li>
              <LinkButton>SmartSheet University</LinkButton>
            </li>
            <li>
              <LinkButton>Training options</LinkButton>
            </li>
            <li>
              <LinkButton>Technical support</LinkButton>
            </li>
            <li>
              <LinkButton>Community</LinkButton>
            </li>
            <li>
              <LinkButton>Partner program</LinkButton>
            </li>
            <li>
              <LinkButton>Developers & API</LinkButton>
            </li>
          </ul>
          <Button className="group" variant="blueghost">
            Watch a demo
            <ArrowRight className="hidden group-hover:inline" />
            <ChevronRight className="group-hover:hidden" />
          </Button>
        </div>
        <div>
          <div className="font-semibold">COMPANY</div>
          <ul className="space-y-2 mt-3">
            <li>
              <LinkButton>About Us</LinkButton>
            </li>
            <li>
              <LinkButton>Leadership</LinkButton>
            </li>
            <li>
              <LinkButton>Investors</LinkButton>
            </li>
            <li>
              <LinkButton>Newsroom</LinkButton>
            </li>
            <li>
              <LinkButton>Customer Stories</LinkButton>
            </li>
            <li>
              <LinkButton>Careers</LinkButton>
            </li>
            <li>
              <LinkButton>Privacy</LinkButton>
            </li>
            <li>
              <LinkButton>Legal</LinkButton>
            </li>
          </ul>
          <Button className="group" variant="blueghost">
            Contact us
            <ArrowRight className="hidden group-hover:inline" />
            <ChevronRight className="group-hover:hidden" />
          </Button>
        </div>
        <div>
          <div className="font-semibold">LEARN</div>
          <ul className="space-y-2 mt-3">
            <li>
              <LinkButton>Project management templates</LinkButton>
            </li>
            <li>
              <LinkButton>SmartSheet dashboard gallery</LinkButton>
            </li>
            <li>
              <LinkButton>
                5 steps for getting started with SmartSheet API
              </LinkButton>
            </li>
            <li>
              <LinkButton>3 formulas to look up data in SmartSheet</LinkButton>
            </li>
          </ul>
        </div>
      </section>
      <section className=" mt-5 flex justify-between">
        <div className="flex gap-7">
          <LinkButton hideIcon>
            {" "}
            <Globe /> English{" "}
          </LinkButton>
          <LinkButton>
            {" "}
            <Download /> Download Desktop App{" "}
          </LinkButton>
        </div>
        <div className="flex gap-2">
          <Link
            href="https://www.instagram.com/smartsheetplatform"
            target="_blank"
          >
            {" "}
            <Instagram />{" "}
          </Link>{" "}
          <Link
            href="https://www.instagram.com/smartsheetplatform"
            target="_blank"
          >
            {" "}
            <Twitter />{" "}
          </Link>{" "}
          <Link
            href="https://www.instagram.com/smartsheetplatform"
            target="_blank"
          >
            {" "}
            <Facebook />{" "}
          </Link>{" "}
          <Link
            href="https://www.instagram.com/smartsheetplatform"
            target="_blank"
          >
            {" "}
            <Linkedin />{" "}
          </Link>{" "}
          <Link
            href="https://www.instagram.com/smartsheetplatform"
            target="_blank"
          >
            {" "}
            <Youtube />{" "}
          </Link>{" "}
        </div>
      </section>
      <Separator className="my-2" />
      <section></section>
    </footer>
  );
};
const LinkButton = ({ children, hideIcon }) => {
  return (
    <div>
      <button
        className=" flex gap-1 hover:text-[#235EDF]  text-black group"
        variant="ghost"
      >
        {" "}
        {children}
        {hideIcon || <ChevronRight className="hidden group-hover:inline" />}
      </button>
    </div>
  );
};

export default Footer;
