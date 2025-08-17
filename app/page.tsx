'use client'
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import "./globals.css";
import Navbar from "./components/navbar/navbar";


export default function Home() {
  const router = useRouter();
  return  (
  
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20">
      <Navbar />
      <main className="flex flex-col gap-8 items-center text-center">
      

        
    
        <h1 className="font-mono text-sm/6 sm:text-left">
          Welcome to Bright Stars Nursery & Primary school, Wankulukuku- Kabowa
        </h1>
      
       
        
      </main>
      <footer className="flex flex-wrap items-center justify-center gap-6 mt-8">
        <p>&copy; {new Date().getFullYear()} Bright Stars Nursery & Primary School</p>
        <p>All rights reserved.</p>     
        </footer>
    </div>
  );
}