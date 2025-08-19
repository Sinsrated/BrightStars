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
        "top-full",        // 👈 directly below navbar
        "left-0",
        "bg-[#eb1c22]",    // 👈 same red background
        "w-full",          // 👈 full width for mobile menu
        "p-4",
        "gap-4",
        "flex-col",
        "z-30"
      ].join(" ")
    } else {
      return "hidden"
    }
  }

  return (
    <nav className="relative bg-[#eb1c22] text-white p-2 sm:p-3 md:flex md:justify-between md:items-center">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2"> 
          <Image
            src="/logo.jpg"
            alt="logo"
            width={80}
            height={80}
            priority
          />
          <span className="uppercase font-bold text-xl">bright stars nur & pri school</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex md:items-center">
          <Link href="/gallery" className="uppercase font-semibold px-4 py-2 mx-2 text-white hover:text-yellow-300">Gallery</Link>
          <Link href="/about" className="uppercase font-semibold px-4 py-2 mx-2 text-white hover:text-yellow-300">About us</Link>
          <Link href="/grades" className="uppercase font-semibold px-4 py-2 mx-2 text-white hover:text-yellow-300">Grades</Link>
        </div>

        {/* Mobile Hamburger / Close Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              // X (close icon)
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={getMenuClasses()}>
        <Link href="/gallery" className="uppercase font-semibold text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>Gallery</Link>
        <Link href="/about" className="uppercase font-semibold text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>About us</Link>
        <Link href="/grades" className="uppercase font-semibold text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>Grades</Link>
      </div>
    </nav>
  )
}
