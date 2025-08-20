"use client"
import React, { useState } from "react"
import { Search, School, FileSignature, X } from "lucide-react"

export default function Admissions() {
  const [isOpen, setIsOpen] = useState(false)
  const [formType, setFormType] = useState<"inquiry" | "tour" | "enrollment" | null>(null)

  const openForm = (type: "inquiry" | "tour" | "enrollment") => {
    setFormType(type)
    setIsOpen(true)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-500/40 text-gray-800">

      {/* Hero */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-6 text-gray-800">
            Admissions at Bright Stars
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Start your child’s journey to a lifetime of learning. Our admissions
            process is simple, supportive, and designed to guide you every step
            of the way.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <Search className="w-8 h-8" />,
              title: "Step 1: Submit an Inquiry",
              desc: "Read through our admissions information. No forms required.",
              color: "bg-indigo-600",
              btn: "Read Document →",
              type: "inquiry",
            },
            {
              icon: <School className="w-8 h-8" />,
              title: "Step 2: Visit & Tour",
              desc: "Come meet our teachers, explore our facility, and discover what makes us unique.",
              color: "bg-orange-500",
              btn: "Schedule a Tour →",
              type: "tour",
            },
            {
              icon: <FileSignature className="w-8 h-8" />,
              title: "Step 3: Complete Enrollment",
              desc: "Finalize your child’s registration with our easy guided process and welcome aboard!",
              color: "bg-green-500",
              btn: "Complete Enrollment →",
              type: "enrollment",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="bg-gray-400 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition"
            >
              <div className={`${step.color} inline-flex p-4 rounded-full text-white mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-6">{step.desc}</p>
              <button
                onClick={() => openForm(step.type as any)}
                className="inline-block text-indigo-600 font-semibold hover:underline"
              >
                {step.btn}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-3xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Inquiry Document */}
            {formType === "inquiry" && (
              <>
                <h2 className="text-2xl font-bold mb-6">Admissions Information</h2>
                <div className="space-y-8">
                  {/* Page 1 */}
                  <div className="border-b pb-6">
                    <h3 className="text-xl font-semibold mb-2">Page 1: Welcome</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Welcome to Bright Stars! Our mission is to provide a nurturing environment 
                      where children can grow academically, socially, and emotionally. 
                      Please read through the following pages to understand our admissions process.
                    </p>
                  </div>

                  {/* Page 2 */}
                  <div className="border-b pb-6">
                    <h3 className="text-xl font-semibold mb-2">Page 2: Steps to Apply</h3>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                      <li>Review our programs and age groups.</li>
                      <li>Prepare your child’s documents (birth certificate, immunization record).</li>
                      <li>Schedule a visit or tour to meet our teachers and staff.</li>
                    </ol>
                  </div>

                  {/* Page 3 */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Page 3: Contact & Support</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      If you have any questions, you can contact our admissions office at 
                      <a href="mailto:admissions@brightstars.com" className="text-blue-600 underline"> admissions@brightstars.com</a>.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Thank you for considering Bright Stars. We look forward to welcoming 
                      your child into our learning community!
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* Tour & Enrollment Forms */}
            {(formType === "tour" || formType === "enrollment") && (
              <>
                <h2 className="text-2xl font-bold mb-6 capitalize">
                  {formType === "tour" && "Schedule a Tour"}
                  {formType === "enrollment" && "Complete Enrollment"}
                </h2>

                <form action="/api/admissions" method="POST" className="space-y-4">
                  <input type="hidden" name="type" value={formType || ""} />

                  <input
                    type="text"
                    name="parentName"
                    placeholder="Parent Full Name"
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                  <input
                    type="text"
                    name="childName"
                    placeholder="Child Full Name"
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Parent Email"
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                  <input
                    type="date"
                    name="date"
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                  <textarea
                    name="notes"
                    placeholder="Additional Notes..."
                    className="w-full px-4 py-2 border rounded-lg"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700"
                  >
                    Submit
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-24 bg-red-500/80 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6">Ready to Join Us?</h2>
          <p className="text-lg mb-8 leading-relaxed">
            We are excited to welcome your family. Take the next step today by submitting an inquiry or scheduling a tour.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => openForm("inquiry")}
              className="px-8 py-3 bg-yellow-400 rounded-xl font-bold hover:bg-orange-600 transition"
            >
              Read Document
            </button>
            <button
              onClick={() => openForm("tour")}
              className="px-8 py-3 bg-blue-500 rounded-xl font-bold hover:bg-green-600 transition"
            >
              Schedule Tour
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-400">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-3">What age groups do you accept?</h3>
              <p className="text-gray-600">
                We offer programs for children from 3 years, including toddler, foundation, and primary levels.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Do you offer after-school programs?</h3>
              <p className="text-gray-600">
                Yes, we provide engaging after-school activities designed to support working families and enrich learning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
