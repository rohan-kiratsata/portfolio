import React from "react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

export default function Credits() {
  return (
    <div className="mt-14">
      <h2 className="heading">credits</h2>
      <p className="text-sm text-neutral-500">
        components library used -{" "}
        <Link
          href={"https://ui.shadcn.com"}
          className={buttonVariants({
            variant: "link",
            size: "sm",
            className: "!m-0 !p-0 !text-sm underline",
          })}
        >
          shadcn/ui
        </Link>
      </p>
      <p className="text-sm text-neutral-500">
        design inspired from -{" "}
        <Link
          href={"https://shadcn.com"}
          className={buttonVariants({
            variant: "link",
            size: "sm",
            className: "!m-0 !p-0 !text-sm underline",
          })}
        >
          shadcn
        </Link>
      </p>
    </div>
  );
}
