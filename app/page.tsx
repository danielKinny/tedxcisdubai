"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
const NAV_LINKS = ["Home", "About", "Events", "News", "Contacts"];
import {
  ArrowTopRightOnSquareIcon
} from "@heroicons/react/24/outline";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3400);
  }, []);

  useEffect(() => {
    if (!loading) {
      const vid = videoRef.current;
      if (vid) {
        vid.play().catch(() => {});
      }
    }
  }, []);

  return loading ? (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <video
        autoPlay
        muted
        playsInline
        loop
        className="max-w-4xl flex object-cover h-auto rounded-2xl"
      >
        <source src="/loading.mp4" type="video/mp4" />
      </video>
    </div>
  ) : (
    <div className="bg-white min-h-screen helvetica">
      <header className="bg-white py-4">
        <div className="grid grid-cols-3 items-center">
          {/* left: brand */}
          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex items-baseline ml-4">
              <Image
                src="/logo-black.png"
                width={180}
                height={180}
                alt="logo"
              />
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
              href="/registration"
              className="ml-2 mr-8 inline-block uppercase hover:scale-105 transition-transform bg-red-600 hover:bg-red-700 text-white text-md font-bold px-4 py-4 rounded-2xl shadow "
            >
              <ArrowTopRightOnSquareIcon className="inline-block w-5 h-5 mr-2 -mt-1" />
              REGISTRATION
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-8xl pb-10 helvetica px-8">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          className="w-full object-cover h-auto rounded-2xl"
        >
          <source src="/looky.mp4" type="video/mp4" />
        </video>
      </main>
    </div>
  );
}
