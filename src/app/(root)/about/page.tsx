import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <h1 className="font-mono text-base font-medium">
        <Link href="/" className="text-blue-500 hover:underline">
          home
        </Link>{" "}
        / about
      </h1>
      <div className="mt-3">
        <p className="text-sm text-neutral-500">
          ordinary & mediocre coder.
          <br />
          currently working as lead web3 frontend engineer. I mostly spend my
          time designing and optimizing frontend architectures.
        </p>
        <h1 className="font-mono text-sm mt-4 font-medium">
          things i tried - and failed.
        </h1>
        <ul className="list-disc list-inside text-sm text-neutral-500 mt-2">
          <li>Tried graphic design on Fiverr. Got 1.2 ratings.</li>
          <li>Selling posters on Etsy. made only 3 sales in 7 months.</li>
          <li>Selling Notion templates. Zero sales.</li>
          <li>Selling Bootstrap website templates on Gumroad.</li>
          <li>Tried trading. Lost money.</li>
          <li>
            Build agency with friend. Somewhat successful. co-founder left,
            couldn't handle the heat. (latest failure)
          </li>
        </ul>
        <h1 className="font-mono text-sm mt-4 font-medium">
          things that are somewhat working.
        </h1>
        <ul className="list-disc list-inside text-sm text-neutral-500 mt-2">
          <li>Upwork and Code. Both did wonders for me</li>
          <li>can't really recognize if it's working or not. Until i fail</li>
        </ul>
      </div>
    </>
  );
}
