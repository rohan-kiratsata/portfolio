import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

export default function Links() {
  return (
    <div className="mt-14">
      <h2 className="heading">Useful links</h2>
      <div className="mt-3 flex gap-2">
        <Link
          href="https://github.com/rohan-kiratsata"
          className={buttonVariants({
            variant: "outline",
            className: "text-base",
          })}
        >
          Blogs
        </Link>
        <Link
          href="https://github.com/rohan-kiratsata"
          className={buttonVariants({
            variant: "outline",
            className: "text-base",
          })}
        >
          Hire me
        </Link>
        <Link
          href="https://github.com/rohan-kiratsata"
          className={buttonVariants({
            variant: "outline",
            className: "text-base",
          })}
        >
          Hire me
        </Link>
      </div>
    </div>
  );
}
