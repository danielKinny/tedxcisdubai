"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
const NAV_LINKS = ["Home", "About", "Events", "News", "Contacts"];
import {
  ArrowTopRightOnSquareIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ParallaxContainer, ParallaxLayer } from "./components/ParallaxContainer";

function AnimatedLogo({ className }: { className?: string }) {
  return (
    <svg
      className={`${className ?? ""} block`}
      viewBox="0 0 300 80"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="TEDx CIS Dubai"
    >
      <defs>
        <clipPath id="clip-reveal">
          <rect x="0" y="80" width="300" height="150">
            <animate
              attributeName="y"
              from="80"
              to="0"
              dur="2s"
              fill="freeze"
              begin="0.15s"
              calcMode="spline"
              keyTimes="0;1"
              keySplines="0.22 0 0.2 1"
            />
          </rect>
        </clipPath>
      </defs>

      <text
        x="50%"
        y="56"
        textAnchor="middle"
        fontFamily="var(--font-geist-sans), Helvetica, Arial, sans-serif"
        fontWeight={800}
        fontSize={48}
        fill="#ffffff"
      >
        TEDxCIS
      </text>

      <text
        x="50%"
        y="56"
        textAnchor="middle"
        fontFamily="var(--font-geist-sans), Helvetica, Arial, sans-serif"
        fontWeight={800}
        fontSize={48}
        fill="#e11d1d"
        clipPath="url(#clip-reveal)"
      >
        TEDxCIS
      </text>
    </svg>
  );
}

export interface Speaker {
  id: number;
  name: string;
  href: string;
}

const externalSpeakers: Speaker[] = [
  {
    id: 1,
    name: "razeen",
    href: "razeen.jpg",
  },
  {
    id: 2,
    name: "razeen",
    href: "razeen.jpg",
  },
  {
    id: 3,
    name: "razeen",
    href: "razeen.jpg",
  },
  {
    id: 4,
    name: "razeen",
    href: "razeen.jpg",
  },
  {
    id: 5,
    name: "razeen",
    href: "razeen.jpg",
  },
];

const internalSpeakers: Speaker[] = [
  {
    id: 1,
    name: "razeen",
    href: "razeen.jpg",
  },
  {
    id: 2,
    name: "razeen",
    href: "razeen.jpg",
  },
  {
    id: 3,
    name: "razeen",
    href: "razeen.jpg",
  },
  {
    id: 4,
    name: "razeen",
    href: "razeen.jpg",
  },
  {
    id: 5,
    name: "razeen",
    href: "razeen.jpg",
  },
  {
    id: 6,
    name: "razeen",
    href: "razeen.jpg",
  },
  {
    id: 7,
    name: "razeen",
    href: "razeen.jpg",
  }
];

const SpeakerArray = ({speakers, label}: {speakers: Speaker[], label: string}) => {
  return (
    <div 
      className="w-full min-h-50 shadow-2xl py-4 overflow-x-auto whitespace-nowrap mb-10 animate-fade-in-up"
    >
      {speakers.map((speaker, index) => (
        <div
          key={speaker.id}
          className="inline-block p-4 hover:scale-110 transition-all duration-500 mx-12 animate-fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Image
            src={`/${speaker.href}`}
            width={300}
            height={300}
            alt={speaker.name}
            className="rounded-2xl object-cover max-h-[300px] transition-transform duration-300"
          />
          <p className="text-center text-black mt-2 text-xl font-medium">
            {speaker.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!loading) {
      const vid = videoRef.current;
      if (vid) vid.play().catch(() => {});
    }
  }, [loading]);

  return loading ? (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center gap-4">
        <AnimatedLogo className="w-96 max-w-full h-auto" />
      </div>
    </div>
  ) : (
    <ParallaxContainer className="bg-white min-h-screen helvetica">
      <header className="bg-white/30 backdrop-blur-md py-4 animate-fade-in-down z-10 sticky top-0">
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
                <li key={label} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <a
                    href="#"
                    className="text-gray-700 transition-all duration-300 hover:text-red-600"
                  >
                    <p className="hover:scale-110 transition-transform duration-300">
                      {label}
                    </p>
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

            <a
              rel="noreferrer"
              target="_blank"
              href="https://forms.gle/gcMBxQGmNwKZENMd7"
              className="hidden md:inline-block ml-2 mr-8 uppercase hover:scale-105 transition-all duration-300 bg-red-600 hover:bg-red-700 text-white text-md font-bold px-4 py-4 rounded-2xl shadow hover:shadow-lg"
            >
              <ArrowTopRightOnSquareIcon className="inline-block w-5 h-5 mr-2 -mt-1" />
              REGISTRATION
            </a>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-white p-6 overflow-auto animate-fade-in">
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
                  <li key={label} className="animate-fade-in-left" style={{ animationDelay: `${index * 100 + 200}ms` }}>
                    <a
                      href="#"
                      onClick={() => setMobileOpen(false)}
                      className="text-gray-800 ml-2 hover:text-red-600 block transition-all duration-300 hover:ml-4"
                    >
                      {label}
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

      <main className="max-w-8xl pb-10 helvetica px-8">
        <ParallaxLayer speed={0.3}>
          <div>
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              loop
              className="w-full object-cover h-auto rounded-2xl shadow-lg transition-opacity duration-1000"
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
        </ParallaxLayer>
        
        <div className="text-center max-w-6xl text-black flex items-center justify-center flex-col mx-auto rounded-2xl my-8 p-8 shadow-xl hover:scale-105 transition-all duration-500 animate-fade-in-up">
          <ParallaxLayer speed={0.4}>
            <h1 className="text-6xl text-black font-bold text-center py-8 transition-all duration-1000 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              What is TEDxCIS Dubai?
            </h1>
          </ParallaxLayer>
          <ParallaxLayer speed={0.6}>
            <p className="text-lg max-w-4xl mb-8 transition-all duration-1000 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
              rutrum urna at malesuada. Praesent laoreet tincidunt tellus ac
              porta. Sed consequat, odio sit amet iaculis laoreet, enim orci
              convallis elit, vitae scelerisque lectus eros sit amet mi. Donec
              dictum tortor sit amet consequat iaculis. Suspendisse nunc erat,
              porta vitae dolor vitae, fermentum imperdiet magna. Cras id molestie
              augue. In molestie luctus felis, in sagittis lacus interdum at.
              Fusce sagittis vel tellus et accumsan. Integer rhoncus, lorem non
              elementum porttitor, mauris tortor egestas ligula, et dapibus turpis
              enim at lorem. Etiam at gravida arcu, vel mattis ante. Suspendisse
              potenti. Curabitur odio nisi, imperdiet sed risus nec, luctus
              volutpat erat.
            </p>
          </ParallaxLayer>
        </div>
        
        <ParallaxLayer speed={0.7}>
          <div 
            className="bg-[url('/auditorium.jpg')] bg-cover bg-center min-h-screen rounded-2xl shadow-lg animate-fade-in"
          />
        </ParallaxLayer>

        <ParallaxLayer speed={0.4}>
          <h1 
            className="text-6xl text-red-500 mt-10 font-semibold underline uppercase animate-fade-in-left"
          >
            Our Speakers
          </h1>
        </ParallaxLayer>
      </main>
      
      <ParallaxLayer speed={0.6}>
        <SpeakerArray speakers={externalSpeakers} label="External" />
      </ParallaxLayer>
      
      <ParallaxLayer speed={0.5}>
        <SpeakerArray speakers={internalSpeakers} label="Internal" />
      </ParallaxLayer>

      <div className="max-w-4xl bg-linear-to-br from-white to-gray-50 shadow-2xl mx-auto p-12 my-20 rounded-3xl hover:shadow-3xl transition-all duration-500 animate-fade-in-up border border-gray-100">
        <ParallaxLayer speed={0.3}>
          <div className="text-center mb-12">
            <h1 className="text-red-600 text-6xl font-bold transition-opacity duration-1000 animate-fade-in-left mb-3">
              Registration
            </h1>
            <p className="text-gray-600 text-lg">Join us for an unforgettable TEDx experience</p>
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer speed={0.35}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2 ml-1">
              Full Name
            </label>
            <input 
              type="text"
              className="w-full px-6 py-4 text-lg text-gray-800 bg-white border-2 border-gray-200 rounded-2xl focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-300 hover:border-gray-300 animate-fade-in-up" 
              style={{ animationDelay: '200ms' }} 
              placeholder="John Doe" 
            />
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer speed={0.4}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2 ml-1">
              Email Address
            </label>
            <input 
              type="email"
              className="w-full px-6 py-4 text-lg text-gray-800 bg-white border-2 border-gray-200 rounded-2xl focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-300 hover:border-gray-300 animate-fade-in-up" 
              style={{ animationDelay: '300ms' }} 
              placeholder="john@example.com" 
            />
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer speed={0.45}>
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-semibold mb-2 ml-1">
              Phone Number
            </label>
            <input 
              type="tel"
              className="w-full px-6 py-4 text-lg text-gray-800 bg-white border-2 border-gray-200 rounded-2xl focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-300 hover:border-gray-300 animate-fade-in-up" 
              style={{ animationDelay: '400ms' }} 
              placeholder="+971 50 123 4567" 
            />
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer speed={0.5}>
          <button 
            className="w-full bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xl font-bold px-8 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up transform active:scale-95" 
            style={{ animationDelay: '500ms' }}
          >
            Register Now
          </button>
        </ParallaxLayer>
      </div>

      <footer 
        className="relative bg-[#e11d1d] animate-fade-in-up"
      >
        <div
          className="absolute -top-1 left-0 w-full overflow-hidden leading-none animate-fade-in"
          aria-hidden="true"
        >
          <svg
            className="block w-[150%] h-24 md:h-32"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,20 C100,100 200,40 300,70 C400,90 500,50 600,70 C700,80 800,60 900,50 C1000,40 1100,50 1200,45 L1200,120 L0,120 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        <div className="pt-10 pb-6 md:pt-12 md:pb-8"></div>
      </footer>
    </ParallaxContainer>
  );
}
