import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResourcesSection = () => {
  return (
    <section className="py-7 bg-[#F8F7F5]">
      <h1 className="text-center my-5 text-5xl font-semibold">
        Find the resources you need
      </h1>
      <div className="gap-10 grid grid-cols-3 mx-28 my-16">
        <Column
          src={
            "https://www.smartsheet.com/sites/default/files/2024-01/icon-blue-500_CoE-certification.svg"
          }
          heading={"Get professional services, support, and training"}
          description={
            "Accelerate your time to value and get the most out of the Smartsheet platform at any scale."
          }
          links={[
            { title: "Explore professional services", href: "#" },
            { title: "Get Smartsheet support", href: "#" },
            { title: "Search training offerings", href: "#" },
          ]}
        />
        <Column
          src={
            "https://www.smartsheet.com/sites/default/files/2024-01/icon-blue-500_community_1.svg"
          }
          heading={"Meet our community of passionate experts"}
          description={
            "Connect with the Smartsheet Community to get and give assistance, and share stories and best practices."
          }
          links={[
            { title: "Join the community", href: "#" },
            { title: "Attend events", href: "#" },
            { title: "Explore.Ask.Answer", href: "#" },
          ]}
        />
        <Column
          src={
            "https://www.smartsheet.com/sites/default/files/2024-01/icon-blue-500_manage-decision-makers.svg"
          }
          heading={"Stay in the know with content just for you"}
          description={
            "Information, inspiration, and expert tutorials, tips, and tricks to help you achieve more."
          }
          links={[
            { title: "Read articles and reports", href: "#" },
            { title: "Study Smartsheet tutorials", href: "#" },
            { title: "Visit the template gallery", href: "#" },
          ]}
        />
      </div>
    </section>
  );
};

export default ResourcesSection;
const Column = ({ src, heading, description, links }) => {
  return (
    <div className="space-y-2 ">
      <div className="rounded-full p-2">
        <Image src={src} alt={heading} height={60} width={60} />
      </div>
      <h2 className="text-2xl font-semibold">{heading}</h2>
      <p>{description}</p>
      {links.map((link) => (
        <Link
          key={link.title}
          className="font-semibold text-[#235EDF] flex gap-1 items-center hover:border-b-[#235EDF] border-b-2 border-b-transparent w-fit"
          href={link.href}
        >
          {link.title} <ChevronRight size={18} />
        </Link>
      ))}
    </div>
  );
};
