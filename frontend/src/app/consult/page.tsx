"use client";
import { Metadata } from "next";
import { useRef } from "react";
import InputSection from "./InputSection";
import ChatSection from "./ChatSection";

export default function Consult() {
  const ref = useRef<HTMLDivElement>(null);
  const onChange = () => {
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 300);
  };

  return (
    <main className="relative flex w-full flex-col gap-2 px-16 py-3">
      <h2 className="mb-2 text-2xl font-bold">Flow AI</h2>

      <div className="rounded-md border-[1px] border-solid border-gray-400 bg-blue-50">
        <div
          className="overflow-auto rounded-lg"
          style={{ height: "calc(100vh - 250px)" }}
        >
          <ChatSection ref={ref} />
        </div>
        <div className="mx-8 mb-4 bg-slate-100">
          <InputSection onChange={onChange} />
        </div>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Consult | BizFLow",
};
