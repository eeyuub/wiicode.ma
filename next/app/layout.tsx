import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flipper Next App",
  description: "Interactive 3D flipbook menu",
  icons: {
    icon: '/favico.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/assets/css/dflip.min.css" rel="stylesheet" type="text/css" />
        <link href="/assets/css/themify-icons.min.css" rel="stylesheet" type="text/css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script src="/assets/js/libs/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/dflip.min.js" strategy="afterInteractive" />
        <Script id="dflip-config" strategy="lazyOnload">
          {`
            if(typeof DFLIP !== 'undefined' && DFLIP.defaults) {
              DFLIP.defaults.soundEnable = false;
            }
          `}
        </Script>
      </body>
    </html>
  );
}
