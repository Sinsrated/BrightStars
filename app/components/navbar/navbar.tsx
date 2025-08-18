'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './modules.css'; 

export default function Home() {
  return (
    <nav className="bg-[#EB1C22] text-white p-4 sm:p-6 md:flex md:justify-between">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={100}
            height={80}
            priority
          />
        </a>

        {/* Links */}
        <div className="flex flex-col md:flex-row md:items-center">
          <Link href="/gallery" className="Link">Gallery</Link>
          <Link href="/about" className="Link">About us</Link>
          <Link href="/grades" className="Link">Grades</Link>
        </div>
      </div>
    </nav>
  )
}
