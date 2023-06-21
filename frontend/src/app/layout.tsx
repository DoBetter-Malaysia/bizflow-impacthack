'use client';

import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Provider from './Provider';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <Provider>
        <body className={poppins.className}>
          <div className="bg-gray-200/70">
            {/* <Sidebar /> */}
            <main className="relative flex min-h-screen flex-col items-stretch justify-stretch">
              {pathname != '/test-integration' && <Header />}
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
    default: 'BizFlow',
    template: '%s | BizFlow',
  },
};
