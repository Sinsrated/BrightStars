'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  function getMenuClasses() {
    if (isOpen) {
      return [
        "flex",
        "absolute",
        "top-30",     // below navbar
        "left-0",
        "bg-[#eb1c22]",
        "w-full",
        "p-3",
        "gap-0",
        "flex-col",
        "z-40"
      ].join(" ")
    } else {
      return "hidden"
    }
  }

  return (
    <nav className="relative bg-[#eb1c22] text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className=""> 
          <Image
            src="/logo.jpg"
            alt="logo"
            width={100}
            height={80}
            priority
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex md:items-center">
          <Link href="/gallery" className="mx-2 hover:text-gray-300">Gallery</Link>
          <Link href="/about" className="mx-2 hover:text-gray-300">About us</Link>
          <Link href="/grades" className="mx-2 hover:text-gray-300">Grades</Link>
        </div>

        {/* Mobile Hamburger / Close Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              // X (close icon)
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg 
                className="w-6 h-6" 
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
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={getMenuClasses()}>
        <Link href="/gallery" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Gallery</Link>
        <Link href="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About us</Link>
        <Link href="/grades" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Grades</Link>
      </div>
    </nav>
  )
}
