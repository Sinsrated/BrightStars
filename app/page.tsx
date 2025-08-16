'use client'
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./globals.css";


export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20">
      <main className="flex flex-col gap-8 items-center text-center">
        <nav className="flex items-center gap-4">
          
            <Image
              className="dark:invert"
              src="/logo.jpg"
              alt="logo"
              width={180}
              height={38}
              priority
            />

            
            <button onClick={() => router.push('/contact')}>
      Click here to read more
    </button>
            </nav> 
         <nav className="flex items-center gap-4">
          <Link href="/about" className="text-blue-500 hover:underline">
            About Us
          </Link>
          <Link href="/contact" className="text-blue-500 hover:underline">
            Contact
          </Link>
          </nav>
    
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