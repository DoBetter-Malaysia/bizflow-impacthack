"use client";
import { Metadata } from "next";
import Integration from "./Integration";

export default function TestIntegration() {
  return (
    <main className="relative flex flex-col px-40 py-8">
      <Integration />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Test Integration",
};
