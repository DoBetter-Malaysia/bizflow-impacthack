import { Metadata } from "next";
import Provider from "./Provider";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={poppins.className}>
          <div className="bg-gray-50/50">
            {/* <Sidebar /> */}
            <main className="relative flex min-h-screen flex-col items-stretch justify-stretch">
              <Header />
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
    template: "%s | BizFlow",
  },
};
