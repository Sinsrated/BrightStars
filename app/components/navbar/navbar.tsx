'use client'
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useState} from 'react';



export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-#EB1C22 text-white p-4 sm:p-6 md-flex md:justify-between">
    <div className="container mx-auto flex items-center justify-between">
          <div className={`${isOpen ?'flex':'hidden'} flex-col md:flex-row `}>
            <ul>
  
      <li><a href="/" className="flex items-center">
        <Image
          className="dark:invert"
          src="/logo.jpg"
          alt="logo"
          width={100}
          height={80}
          priority
        />
      </a></li>
  
     
      <li><Link href="/gallery" className=" mx-2 hover:text-gray-300">
        Gallery
      </Link></li>
      <li><Link href="/about" className=" mx-2 hover:text-gray-300">
        About us  
      </Link></li>
      </ul>
      </div>
      
      <div className="md:hidden flex items-center">
        <button
          onClick={() =>{ 
            setIsOpen(!isOpen)
          }}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        </div>
      </div>
      </nav>
       
  )
  }