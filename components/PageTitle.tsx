import { Divider } from "@nextui-org/react";
import React from "react";

type PageTitleProps = {
  title: string;
};

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <>
      <h2 className="text-3xl font-medium">{title}</h2>
      <Divider className="my-3" />
    </>
  );
}
