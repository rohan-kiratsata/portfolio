import React from "react";
import { PiCircleFill } from "@/utils/iconImports";

interface ItemCardProps {
  category: "videos" | "articles" | "others";
  title: string;
  date: string;
}

export default function TsiItemCard({ category, title, date }: ItemCardProps) {
  const categoryColors: { [key: string]: string } = {
    videos: "text-red-300",
    articles: "text-blue-300",
    other: "text-green-300",
  };

  const categoryColor = categoryColors[category];

  return (
    <div className="flex justify-between my-2">
      {/* Item Type */}
      <div className="flex items-center gap-3">
        <PiCircleFill size={16} className={categoryColor} />
        <h3 className="font-sans text-lg hover:underline cursor-pointer">
          {title}
        </h3>
      </div>
      <div className="">
        <p className="font-mono text-base text-content1">{date}</p>
      </div>
    </div>
  );
}
