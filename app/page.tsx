import Image from "next/image";
import React from "react";
const NAV_LINKS = ["Home", "About", "Events", "News", "Contacts"];

export default function Home() {
  return(
    <div className="bg-white min-h-screen helvetica">
      <header className="bg-white py-6">
        <div className="grid grid-cols-3 items-center">
          {/* left: brand */}
          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex items-baseline">
              <Image src="/logo-black.png" width={180} height={180} alt="logo"/>
            </a>
          </div>

          {/* center: nav links */}
          <nav className="flex justify-center w-full">
            <ul className="flex gap-8 uppercase text-sm tracking-wider items-center">
              {NAV_LINKS.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-gray-700 transition-all hover:text-red-600"
                  >
                    <p className="hover:scale-105 transition-transform">
                      {label}
                      </p>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
              
          {/* right: tickets button */}
          <div className="flex flex-row justify-end">
            {/* tickets button */}
            <a
              href="#"
              className="ml-2 mr-8 inline-block bg-red-600 hover:bg-white hover:text-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow"
            >
              Registration
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto helvetica px-6">
        <video autoPlay loop className="w-full h-auto rounded-2xl">
          <source src="/looky.mp4" type="video/mp4" />
        </video>
      </main>
    </div>
  );
}
