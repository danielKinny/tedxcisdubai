"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  ArrowTopRightOnSquareIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const NAV_LINKS = [{name:"Home",href:"/"}, {name:"About", href:"/about"},{name:"Team", href:"/team"}, {name:"Contact", href:"/contact"}];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  return (
    <header className="bg-white/10 backdrop-blur-xl py-4 animate-fade-in-down z-10 sticky top-0 border-b border-gray-200 shadow-sm">
      <div className="grid grid-cols-[auto_1fr_auto] items-center px-4">
        <div className="flex items-center gap-3 animate-fade-in-left">
          <a
            href="#"
            className="inline-flex items-baseline ml-4 hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="/logo-black.png"
              width={180}
              height={180}
              alt="logo"
            />
          </a>
        </div>

        <nav className="hidden md:flex justify-center w-full animate-fade-in">
          <ul className="flex gap-8 uppercase text-sm tracking-wider items-center">
            {NAV_LINKS.map((label, index) => (
              <li key={label.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <a
                  href={label.href}
                  className="text-gray-800 font-medium transition-all duration-300 hover:text-red-600 relative group"
                >
                  <p className="transition-transform duration-300">
                    {label.name}
                  </p>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-row justify-end items-center animate-fade-in-right">
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="md:hidden mr-2 p-2 hover:bg-gray-100 rounded cursor-pointer transition-all duration-300 hover:scale-110"
          >
            <Bars3Icon className="w-6 h-6 text-gray-800" />
          </button>

          <div className="px-4 cursor-pointer mt-2">
            <Image
              src="/united-arab-emirates.png"
              width={30}
              height={30}
              alt="Some image"
            />
            <div>
              <p className="text-black text-center">
                AE
              </p>
            </div>
          </div>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://forms.gle/gcMBxQGmNwKZENMd7"
            className="hidden md:inline-block ml-2 mr-8 uppercase hover:scale-105 transition-all duration-300 bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-md font-bold px-6 py-4 rounded-xl shadow-lg hover:shadow-xl"
          >
            <ArrowTopRightOnSquareIcon className="inline-block w-5 h-5 mr-2 -mt-1" />
            REGISTRATION
          </a>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-linear-to-br from-white via-gray-50 to-red-50 p-6 overflow-auto animate-fade-in">
          <div className="flex items-center justify-between animate-fade-in-down">
            <a href="#" className="inline-flex items-center">
              <Image
                src="/logo-black.png"
                width={120}
                height={120}
                alt="logo"
              />
            </a>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <XMarkIcon className="w-7 h-7 text-gray-800" />
            </button>
          </div>

          <nav className="mt-8">
            <ul className="flex flex-col gap-6 uppercase text-xl tracking-wider">
              {NAV_LINKS.map((label, index) => (
                <li key={label.name} className="animate-fade-in-left" style={{ animationDelay: `${index * 100 + 200}ms` }}>
                  <a
                    href={label.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-gray-800 ml-2 hover:text-red-600 block transition-all duration-300 hover:ml-4"
                  >
                    {label.name}
                  </a>
                </li>
              ))}
            </ul>

            <a
              rel="noreferrer"
              target="_blank"
              href="https://forms.gle/gcMBxQGmNwKZENMd7"
              className="mt-8 inline-block w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-3 rounded-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: '700ms' }}
              onClick={() => setMobileOpen(false)}
            >
              REGISTRATION
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
