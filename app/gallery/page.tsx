"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Carousel from "../components/carousel/carousel"

export default function Gallery() {
  const classes = ["Baby", "Middle", "Top", "P.1", "P.2", "P.3", "P.4", "P.5", "P.6", "P.7"]

  const imagesByYear: Record<string, Record<string, string[]>> = {
    "2024": {
      Baby: ["/gallery/2024/baby/photo1.jpg", "/gallery/2024/baby/photo2.jpg", "/gallery/2024/baby/photo3.jpg"],
      Middle: ["/gallery/2024/middle/photo1.jpg", "/gallery/2024/middle/photo2.jpg", "/gallery/2024/middle/photo3.jpg"],
      Top: ["/gallery/2024/top/photo1.jpg"],
      "P.1": ["/gallery/2024/p1/photo1.jpg"],
      "P.2": ["/gallery/2024/p2/photo1.jpg"],
      "P.3": ["/gallery/2024/p3/photo1.jpg"],
      "P.4": ["/gallery/2024/p4/photo1.jpg"],
      "P.5": ["/gallery/2024/p5/photo1.jpg"],
      "P.6": ["/gallery/2024/p6/photo1.jpg"],
      "P.7": ["/gallery/2024/p7/photo1.jpg"],
    },
    "2025": {
      Baby: ["/gallery/2025/baby/photo1.jpg"],
      Middle: ["/gallery/2025/middle/photo1.jpg"],
      Top: ["/gallery/2025/top/photo1.jpg"],
      "P.1": ["/gallery/2025/p1/photo1.jpg"],
      "P.2": ["/gallery/2025/p2/photo1.jpg"],
      "P.3": ["/gallery/2025/p3/photo1.jpg"],
      "P.4": ["/gallery/2025/p4/photo1.jpg"],
      "P.5": ["/gallery/2025/p5/photo1.jpg"],
      "P.6": ["/gallery/2025/p6/photo1.jpg"],
      "P.7": ["/gallery/2025/p7/photo1.jpg"],
    },
  }

  const [selectedYear, setSelectedYear] = useState<string>("2024")
  const [selectedClass, setSelectedClass] = useState<string | null>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const slides = [
    { src: "/gallery/2024/baby/photo1.jpg", caption: "Baby Class Year 2024", className: "Baby", year: "2024" },
    { src: "/gallery/2025/middle/photo1.jpg", caption: "Middle Class Year 2025", className: "Middle", year: "2025" },
    { src: "/gallery/2025/top/photo1.jpg", caption: "Top Class Year 2025", className: "Top", year: "2025" },
  ]

  const currentImages = selectedClass ? imagesByYear[selectedYear][selectedClass] || [] : []

  // Keyboard navigation for desktop
  useEffect(() => {
    if (openIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setOpenIndex((prev) => (prev! + 1) % currentImages.length)
      } else if (e.key === "ArrowLeft") {
        setOpenIndex((prev) => (prev! - 1 + currentImages.length) % currentImages.length)
      } else if (e.key === "Escape") {
        setOpenIndex(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [openIndex, currentImages.length])

  return (
    <div className="flex flex-col min-h-screen bg-gray-500/40 text-gray-800">
      {/* Header */}
      <header className="text-center mb-12">
        {/* Desktop Carousel */}
        <div className="hidden md:block mb-4">
          <Carousel
            slides={slides}
            interval={4000}
            height={550} // Desktop height
            onSlideClick={(cls, yr) => {
              setSelectedYear(yr)
              setSelectedClass(cls)
              setOpenIndex(0)

              setTimeout(() => {
                const el = document.getElementById(`section-${yr}-${cls}`)
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
              }, 100)
            }}
          />
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden border-2 border-red-300 mb-4">
          <Carousel
            slides={slides}
            interval={4000}
            height={250} // Mobile height
            onSlideClick={(cls, yr) => {
              setSelectedYear(yr)
              setSelectedClass(cls)
              setOpenIndex(0)

              setTimeout(() => {
                const el = document.getElementById(`section-${yr}-${cls}`)
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
              }, 100)
            }}
          />
        </div>
        <section className="py-4 bg-indigo-50 text-cente">
        <h1 className="text-4xl font-bold mb-2">Gallery</h1>
        <p className="text-gray-700">Explore our students’ activities and memories.</p>
        </section>
      </header>

{/* Year Selection */}
<div className="flex justify-center gap-6 mb-8 year-selector">
  {Object.keys(imagesByYear).map((year) => (
    <label key={year} className="cursor-pointer">
      <input
        type="radio"
        value={year}
        checked={selectedYear === year}
        onChange={() => {
          setSelectedYear(year)
          setSelectedClass(null)
        }}
      />
      <span>{year}</span>
    </label>
  ))}
</div>


      {/* Step 1: Select Class */}
      {!selectedClass && (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {classes.map((cls) => (
            <div
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className="cursor-pointer bg-red-700/40 rounded p-6 text-center font-semibold hover:bg-red-600 transition"
            >
              {cls}
            </div>
          ))}
        </div>
      )}

      {/* Step 2: Show Images */}
      {selectedClass && (
        <div id={`section-${selectedYear}-${selectedClass}`}>
          <button
            onClick={() => setSelectedClass(null)}
            className="mb-6 px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition"
          >
            ← Back
          </button>
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {selectedClass} - Year {selectedYear}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentImages.map((imgSrc, index) => (
              <div
                key={index}
                className="rounded overflow-hidden shadow-md cursor-pointer"
                onClick={() => setOpenIndex(index)}
              >
                <Image
                  src={imgSrc}
                  alt={`${selectedClass} ${selectedYear} - Photo ${index + 1}`}
                  width={400}
                  height={300}
                  className="object-cover w-full h-64"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal */}
      {openIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          {/* Desktop/Laptop */}
          <div className="hidden md:block relative max-w-5xl w-full p-6 bg-black rounded-lg">
            {/* Close */}
            <button
              onClick={() => setOpenIndex(null)}
              className="absolute top-[180] right-[-10] text-white text-3xl font-bold"
            >
              ×
            </button>
            {/* Download */}
            <a
              href={currentImages[openIndex]}
              download
              className="absolute bottom-[160] right-[-50] bg-yellow-400/50 text-black px-3 py-5 rounded hover:bg-yellow-500 transition"
            >
              ⬇ DOWNLOAD
            </a>
            {/* Prev / Next */}
            <button
              onClick={() => setOpenIndex((prev) => (prev! - 1 + currentImages.length) % currentImages.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-400/40 text-white text-4xl font-bold"
            >
              ‹
            </button>
            <button
              onClick={() => setOpenIndex((prev) => (prev! + 1) % currentImages.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-400/40 text-white text-4xl font-bold"
            >
              ›
            </button>
            {/* Image */}
            <Image
              src={currentImages[openIndex]}
              alt="Opened"
              width={1200}
              height={800}
              className="w-full h-auto mx-auto rounded"
            />
          </div>

          {/* Mobile */}
          <div className="md:hidden relative w-full h-full flex items-center justify-center">
            {/* Close */}
            <button
              onClick={() => setOpenIndex(null)}
              className="absolute top-12 right-4 text-white text-4xl font-bold z-50"
            >
              ×
            </button>
            {/* Download */}
            <a
              href={currentImages[openIndex]}
              download
              className="absolute bottom-20 right-[15] bg-yellow-400 text-black px-4 py-2 rounded-full shadow-lg hover:bg-yellow-500 transition z-50"
            >
              ⬇
            </a>
            {/* Prev / Next */}
            <button
              onClick={() => setOpenIndex((prev) => (prev! - 1 + currentImages.length) % currentImages.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-5xl font-bold z-50 bg-gray-400/40"
            >
              ‹
            </button>
            <button
              onClick={() => setOpenIndex((prev) => (prev! + 1) % currentImages.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-5xl font-bold z-50 bg-gray-400/40"
            >
              ›
            </button>
            {/* Fullscreen Image */}
            <Image
              src={currentImages[openIndex]}
              alt="Opened"
              fill
              className="object-contain rounded"
            />
          </div>
        </div>
      )}
    </div>
  )
}
