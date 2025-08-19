"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

interface Slide {
  src: string
  caption: string
  className: string
  year: string
}

interface CarouselProps {
  slides: Slide[]
  interval?: number
  height?: number // new prop to adjust height
  onSlideClick?: (className: string, year: string) => void
}

export default function Carousel({ slides, interval = 4000, height = 400, onSlideClick }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, interval)
    return () => clearInterval(timer)
  }, [slides.length, interval])

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)`, height: `${height}px` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full cursor-pointer relative"
            onClick={() => onSlideClick && onSlideClick(slide.className, slide.year)}
          >
            <Image
              src={slide.src}
              alt={slide.caption}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-2 left-4 bg-black bg-opacity-40 text-white text-center py-2 px-2 rounded-[10px]">
              {slide.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-yellow-400" : "bg-gray-300"}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>

      {/* Prev/Next buttons */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-400/40 text-white text-2xl px-2 rounded"
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
      >
        ‹
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-400/40 text-white text-2xl px-2 rounded"
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
      >
        ›
      </button>
    </div>
  )
}
