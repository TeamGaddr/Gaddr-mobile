import React from 'react';
import type { Metadata } from "next";
import { Open_Sans, Montserrat,Geist, Geist_Mono, Inter } from "next/font/google";
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap'
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400','600'],
  variable: '--font-open-sans',
  display: 'swap'
})


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaddr",
  description: "Hire workforce effortlessly and streamline workflows",
  icons: {
    icon: "/favicon.ico", // Standard favicon
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${openSans.variable} antialiased`}>
      <body className={`${inter.className} `}>
        {/* <AuthProvider> */}
          {children}
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}