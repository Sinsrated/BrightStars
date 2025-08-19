"use client"
import Link from "next/link"
import Image from "next/image"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-yellow-400 text-black py-10 mt-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* School Info */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Image
              src="/logo.jpg"
              alt="Bright Stars Primary School logo"
              width={60}
              height={60}
              priority
              className="rounded-md"
            /> 
            <p className="uppercase text-2xl font-bold">
              Bright Stars Primary School
            </p>
          </div>
          <p className="text-sm text-black/80">
            Nurturing young minds with quality education, discipline, and creativity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-black/70">About Us</Link></li>
            <li><Link href="/admissions" className="hover:text-black/70">Admissions</Link></li>
            <li><Link href="/gallery" className="hover:text-black/70">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-black/70">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="flex items-center gap-2">
           <FaMapMarkerAlt size={22} />
          <a 
          href="https://maps.app.goo.gl/juHUhYekypRGj7Mv5" 
          target="_blank" 
          rel="noopener noreferrer"
           className="hover:text-black/70"
          >
           Wankulukuku, Kabowa
         </a>
          </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt size={22} />
               <a href="tel:0200 907934" className="hover:text-black/70">
                   0200 907934
               </a>
           </p>

                  {/* Email */}
               <p className="flex items-center gap-2">
                 <FaEnvelope size={22} />
                   <a href="mailto:info@brightstars.ac.ug" className="hover:text-black/70">
                     info@brightstars.ac.ug
                    </a>
                 </p>


          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-black/70"><FaFacebook size={22} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-black/70"><FaTwitter size={22} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-black/70"><FaInstagram size={22} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Note with Ugandan Flag */}
      <div className="text-center text-sm text-black/70 mt-8 border-t border-black/30 pt-4 flex flex-col sm:flex-row justify-center items-center gap-2">
        © {new Date().getFullYear()} Bright Stars Primary School, Uganda. All rights reserved.
        <Image 
          src="/uganda-flag.jpg" 
          alt="Ugandan Flag" 
          width={28} 
          height={20} 
          className="inline-block rounded-sm shadow-md"
        />
      </div>
    </footer>
  )
}
