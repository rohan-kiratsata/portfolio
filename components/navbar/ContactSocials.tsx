import React from "react";
import { Button } from "@nextui-org/react";
import { FaGithub } from "@/utils/iconImports";
import { socials } from "@/utils/content";
import generateID from "@/utils/generateId";
import Link from "next/link";

type Props = {};

export default function ContactSocials({}: Props) {
  return (
    <div className="flex gap-3">
      {socials.map((item) => {
        return (
          <Button
            key={generateID("SOCIAL")}
            isIconOnly
            size="sm"
            variant="bordered"
            className="border-1"
            as={Link}
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
            style={{
              borderColor: item.color,
              color: item.color,
            }}
          >
            {item.icon}
          </Button>
        );
      })}
    </div>
  );
}
