import Image from "next/image";
import React from "react";

export default function FreelanceSection() {
  return (
    <section className="mt-10">
      <h1 className="text-lg text-neutral-400 font-medium">freelance work</h1>
      <p className="text-lg text-gray-500">
        I have been freelancing for a now almost 4 years. Some of my work
        includes @
      </p>
      
    </section>
  );
}

const FreelanceCard = ({ image }: { image: string }) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <Image src={image} alt={"logo"} width={100} height={100} />
    </div>
  );
};
