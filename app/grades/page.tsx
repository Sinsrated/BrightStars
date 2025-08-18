'use client'
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';  
import Navbar from '../components/navbar/navbar';


export default function Grades() {
   const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20">
     
      <main className="flex flex-col gap-8 items-center text-center">
 
        

        <h1 className="font-mono text-sm/6 sm:text-left">
          Welcome to Bright Stars Nursery & Primary school, Wankulukuku- Kabowa
        </h1>
        
       

        <section className="mt-8 text-center">
          <h2 className="text-2xl font-bold">Grades</h2>
          <p className="mt-2 text-lg">Your journey to excellence in education starts here.</p>
        </section>
      </main>

      <footer className="mt-8 text-sm text-gray-500 text-center">
        <p>&copy; {new Date().getFullYear()} Bright Stars Nursery & Primary School</p>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
}