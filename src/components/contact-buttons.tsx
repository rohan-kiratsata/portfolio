import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { RiArrowRightSLine } from "@remixicon/react";

export default function ContactButtons() {
  return (
    <div className="my-10 flex flex-col gap-2 ">
      <Button variant={"outline"} className="w-full" asChild>
        <Link href="/freelance">
          view freelance projects{" "}
          <RiArrowRightSLine className="ml-1" size={20} />
        </Link>
      </Button>
      <Button variant={"outline"} className="w-full" asChild>
        <Link href="mailto:kiratsatarohan@gmail.com">
          open for freelance work
        </Link>
      </Button>
    </div>
  );
}
