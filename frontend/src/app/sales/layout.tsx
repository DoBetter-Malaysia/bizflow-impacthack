import React from "react";
import "../globals.css";
import Header from "./Header";

export default function SalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      <div className="relative -top-24">{children}</div>
    </section>
  );
}
