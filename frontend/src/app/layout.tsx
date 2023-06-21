"use client";

import { Metadata } from "next";
import Provider from "./Provider";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./globals.css";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"]
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <Provider>
        <body className={poppins.className}>
          <div className="bg-gray-200/70">
            {/* <Sidebar /> */}
            <main className="relative flex min-h-screen flex-col items-stretch justify-stretch">
              {pathname != "/test-integration" && <Header />}
              {children}
            </main>
          </div>
        </body>
      </Provider>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: "BizFlow",
    template: "%s | BizFlow"
  }
};
