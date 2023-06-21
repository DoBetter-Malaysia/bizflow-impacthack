"use client";
import { Metadata } from "next";
import Overview from "./Overview";

export default function Home() {
  const onOpen = () => {
    const newWindow = window.open(
      "/test-integration",
      "_blank",
      "toolbar=0,location=0,menubar=0,height=600,width=600"
    );
    newWindow.onbeforeunload = (ev) => {
      console.log("CLOSED");
    };
  };
  return (
    <main className="relative flex flex-col px-40 py-8">
      <Overview />
      <button onClick={onOpen}>CLICK ME</button>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Home | BizFLow"
};
