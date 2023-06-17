"use client";
import { Metadata } from "next";
import Overview from "./Overview";

export default function Home() {
  return (
    <main className="relative flex flex-col px-40 py-8">
      <Overview />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Home | BizFLow",
};
