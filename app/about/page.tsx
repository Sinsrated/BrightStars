"use client"
import { useState } from "react"
import Image from "next/image"
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("school") // default tab

  const directors = [
    { name: "Riley D", role: "School Director", img: "/staff/directors/riley.jpg" },
    { name: "Mary K", role: "Deputy Director", img: "/staff/directors/mary.jpg" },
  ]

  const teachingStaff = [
    { name: "Alice Brown", role: "Grade 1 Teacher", img: "/staff/teaching/alice.jpg" },
    { name: "Peter White", role: "Grade 2 Teacher", img: "/staff/teaching/peter.jpg" },
  ]

  const nonTeachingStaff = [
    { name: "Mary Johnson", role: "Administrator", img: "/staff/nonteaching/mattu.jpg" },
    { name: "David Wilson", role: "Support Staff", img: "/staff/nonteaching/david.jpg" },
  ]

  return (
    <div className="container mx-auto px-6 md:px-12 py-12 space-y-16 bg-gray-400/30">
      
      {/* Page Header */}
      <header className="text-center text-white">
        <h1 className="text-4xl font-bold mb-2">Bright Stars Nursery & Primary School</h1>
        <p className="text-white">
            The Glory of God Will Shine.
        </p>
      </header>

      {/* Tabs Navigation */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {["school", "directors", "teaching", "nonteaching"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded font-semibold transition ${
              activeTab === tab
                ? "bg-yellow-400 text-black"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab === "school"
              ? "Our School"
              : tab === "directors"
              ? "Directors"
              : tab === "teaching"
              ? "Teaching Staff"
              : "Non-Teaching Staff"}
          </button>
        ))}
      </div>

      {/* School Info & Map */}
      {activeTab === "school" && (
        <section className="container border-2 border-yellow-400">
          <h2 className=" text-2xl font-semibold mb-6">Our School</h2>
          <p className="text-white mb-6">
            Bright Stars Primary School is located in Wankulukuku - Kabowa, Kampala. We provide quality education, nurture creativity, and promote discipline in young minds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Clickable Map */}
            <a
              href="https://maps.app.goo.gl/juHUhYekypRGj7Mv5"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-80 md:h-full rounded-lg shadow-md overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.123456789!2d32.573456!3d0.320123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db3e123456789%3A0xabcdef123456789!2sBright%20Stars%20Primary%20School!5e0!3m2!1sen!2sug!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none"
              ></iframe>
            </a>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-4 text-white">
              <p className="flex items-center gap-2">
                <FaPhoneAlt size={20} /> <a href="tel:+256700123456" className="hover:text-black/70">+256 700 123 456</a>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope size={20} /> <a href="mailto:info@brightstars.ac.ug" className="hover:text-black/70">info@brightstars.ac.ug</a>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Directors */}
      {activeTab === "directors" && (
        <section className="container border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-6">Directors</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {directors.map((person, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <Image
                  src={person.img}
                  alt={person.name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover shadow-lg"
                />
                <h3 className="mt-4 font-semibold">{person.name}</h3>
                <p className="text-gray-900">{person.role}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Teaching Staff */}
      {activeTab === "teaching" && (
        <section className="container border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-6">Teaching Staff</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teachingStaff.map((person, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <Image
                  src={person.img}
                  alt={person.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover shadow-md"
                />
                <h3 className="mt-3 font-semibold">{person.name}</h3>
                <p className="text-gray-600">{person.role}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Non-Teaching Staff */}
      {activeTab === "nonteaching" && (
        <section className="container border-2 border-yellow-400  p-1">
          <h2 className="text-2xl font-semibold mb-6">Non-Teaching Staff</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {nonTeachingStaff.map((person, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <Image
                  src={person.img}
                  alt={person.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover shadow-md"
                />
                <h3 className="mt-3 font-semibold">{person.name}</h3>
                <p className="text-gray-600">{person.role}</p>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  )
}
