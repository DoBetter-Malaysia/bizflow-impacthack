"use client";
import { Metadata } from "next";
import Overview from "./Overview";

export default function Home() {
  return (
    <main className="relative flex flex-col px-24 py-12">
      <Overview />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Home | BizFLow",
};
