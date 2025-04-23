import type { Metadata } from "next";
import "./globals.css";
import AdBar from "@/components/navigation/AdBar";
import Navbar from "@/components/navigation/Navbar";

export const metadata: Metadata = {
  title: "Advance Computer",
  description: "Ecommerce website for computer parts and accessories",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}