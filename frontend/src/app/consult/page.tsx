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
    <main className="relative flex w-full flex-col gap-2  px-24 py-8">
      <h2 className="mb-4 text-lg font-bold">Flow AI</h2>
      <div
        className="overflow-auto rounded-lg"
        style={{ height: "calc(100vh - 300px)" }}
      >
        <ChatSection ref={ref} />
      </div>
      <div className="bg-slate-100">
        <InputSection onChange={onChange} />
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Consult | BizFLow",
};
