import type { Metadata } from "next";
import AdBar from "@/components/navigation/AdBar";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
    title: "Advance Computer",
    description: "Ecommerce website for computer parts and accessories",
    icons: {
        icon: "/logo_adv.png",
  },}


  export default function NavigationLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex flex-col min-h-screen">
        {/* This is an invisible spacer that matches the header height */}
        <div className="w-full">
          <div className="invisible">
            <AdBar />
            <Navbar />
          </div>
        </div>
        
        {/* This is the actual fixed header */}
        <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white">
          <AdBar />
          <Navbar />
        </header>
        
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    );
  }