"use client";

import { useEffect, useRef, useState } from "react";
import PageTitle from "@/components/PageTitle";
import { fetchAirtableData } from "../api/airtable/airtableData";
import TsiItemCard from "@/components/tsi/TsiItemCard";
import { TableItem } from "@/types";
import generateID from "@/utils/generateId";
import { AnimatePresence, motion } from "framer-motion";
import { PiCircleFill } from "@/utils/iconImports";
import { formatDate } from "@/utils/formatDate";

type Props = {};

export default function TSI({}: Props) {
  const [tableData, setTableData] = useState<TableItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    fetchAirtableData((data: TableItem[]) => {
      setTableData(data);
    });
  }, []);

  const filteredData = selectedCategory
    ? tableData.filter((item) => item.category === selectedCategory)
    : tableData;

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="w-[80%] mx-auto my-5">
        <PageTitle title="That's So Interesting" />
        <p className="text-lg text-content1 font-mono">
          Inconsitently curating interesting stuff from the internet.
        </p>
        <div className="my-2 flex gap-6">
          <button
            className={`font-mono flex gap-1 items-center ${
              selectedCategory === null ? "text-white" : "text-gray-500"
            }`}
            onClick={() => handleCategoryChange(null)}
          >
            <PiCircleFill size={16} className={"text-white"} />
            All
          </button>
          <button
            className={`font-mono flex gap-1 items-center ${
              selectedCategory === "videos" ? "text-white" : "text-gray-500"
            }`}
            onClick={() => handleCategoryChange("videos")}
          >
            <PiCircleFill size={16} className={"text-red-300"} />
            Videos
          </button>
          <button
            className={`font-mono flex gap-1 items-center ${
              selectedCategory === "articles" ? "text-white" : "text-gray-500"
            }`}
            onClick={() => handleCategoryChange("articles")}
          >
            <PiCircleFill size={16} className={"text-blue-300"} />
            Articles
          </button>
          <button
            className={`font-mono flex gap-1 items-center ${
              selectedCategory === "others" ? "text-white" : "text-gray-500"
            }`}
            onClick={() => handleCategoryChange("others")}
          >
            <PiCircleFill size={16} className={"text-green-300"} />
            Other
          </button>
        </div>
        <div className="my-10">
          <AnimatePresence>
            {filteredData.map((item) => {
              console.log("category:", item.category);
              console.log("date:", item.createdAt);
              return (
                <motion.div
                  // initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  layout
                  key={generateID("TSI")}
                >
                  <TsiItemCard
                    category={item.category}
                    title={item.name}
                    date={formatDate(item.createdAt)}
                    link={item.url}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
