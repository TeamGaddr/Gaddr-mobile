import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { AuthProvider } from "@/lib/auth-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlowerWork",
  description: "Hire workforce effortlessly and streamline workflows",
  icons: {
    icon: "/favicon.ico", // Standard favicon
  },
  viewport: "width=device-width, initial-scale=1", // 关键，移动端适配
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        {/* <AuthProvider> */}
          {children}
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}