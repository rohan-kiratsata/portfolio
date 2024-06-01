import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { RiGithubFill, RiTwitterFill, RiMailFill } from "@remixicon/react";
import { site } from "@/config";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <header className="flex flex-col">
        <h1 className="text-xl font-semibold">{site.name}</h1>
      </header>
      <nav>
        <Link
          href="https://github.com/rohan-kiratsata"
          title="Github"
          target="_blank"
          className={buttonVariants({
            variant: "ghost",
            size: "icon",
            className: "p-0",
          })}
        >
          <RiGithubFill className="h-5 w-5" />
        </Link>
        <Link
          href="https://x.com/rohanzig"
          title="Twitter"
          target="_blank"
          className={buttonVariants({
            variant: "ghost",
            size: "icon",
            className: "p-0",
          })}
        >
          <RiTwitterFill className="h-5 w-5" />
        </Link>
        <Link
          href="mailto:kiratsatarohan@gmail.com"
          title="Email"
          target="_blank"
          className={buttonVariants({
            variant: "ghost",
            size: "icon",
            className: "p-0",
          })}
        >
          <RiMailFill className="h-5 w-5" />
        </Link>
      </nav>
    </div>
  );
}
