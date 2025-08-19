import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

const inter = Inter({subsets: ["latin"]});


export const metadata: Metadata = {
  title: "Bright Stars Nur & Pri School, Wankulukuku",
  description: "The Glory of God will Shine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ inter.className}>
      
        <nav>
          <Navbar></Navbar>
        </nav>
        <main>
        {children}
        </main>
      </body>
      
      <Footer />
      
    </html>
  );
}
// components/FloatingIcon.js


