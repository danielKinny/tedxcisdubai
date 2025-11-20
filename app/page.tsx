"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
const NAV_LINKS = ["Home", "About", "Events", "News", "Contacts"];
import {
  ArrowTopRightOnSquareIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// Hook to detect when element is in viewport
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, {
      threshold: 0.1,
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView] as const;
}

function AnimatedLogo({ className }: { className?: string }) {
  // Simple text-based SVG that reveals a red fill from bottom to top on load
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
          {/* animate with spline easing for a smoother, less linear fill */}
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

      {/* white base text centered */}
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

      {/* red text revealed by animated clip */}
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
  const [ref, isInView] = useInView();
  
  return (
    <div 
      ref={ref}
      className={`w-full min-h-50 shadow-2xl py-4 overflow-x-auto whitespace-nowrap mb-10 transition-opacity duration-1000 ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      {speakers.map((speaker, index) => (
        <div
          key={speaker.id}
          className={`inline-block p-4 hover:scale-110 transition-all duration-500 mx-12 hover:shadow-2xl ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: isInView ? `${index * 100}ms` : '0ms' }}
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
  
  // Refs for scroll animations
  const [aboutRef, aboutInView] = useInView();
  const [auditoriumRef, auditoriumInView] = useInView();
  const [speakersHeadingRef, speakersHeadingInView] = useInView();
  const [registrationRef, registrationInView] = useInView();
  const [footerRef, footerInView] = useInView();

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
    <div className="bg-white min-h-screen helvetica">
      <header className="bg-white/30 backdrop-blur-md py-4 relative animate-fade-in-down">
        <div className="grid grid-cols-[auto_1fr_auto] items-center px-4">
          {/* left: brand */}
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

          {/* center: nav links */}
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

          {/* right: tickets button + mobile hamburger */}
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

        {/* mobile menu overlay */}
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
        
        <div 
          ref={aboutRef}
          className={`text-center max-w-6xl text-black flex items-center justify-center flex-col mx-auto rounded-2xl my-8 p-2 shadow-xl hover:scale-102 transition-all duration-500 ${
            aboutInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h1 className={`text-6xl text-black font-bold text-center py-8 mt-10 transition-opacity duration-1000 ${
            aboutInView ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: aboutInView ? '200ms' : '0ms' }}>
            What is TEDxCIS Dubai?
          </h1>
          <p className={`text-lg max-w-4xl mb-15 transition-opacity duration-1000 ${
            aboutInView ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: aboutInView ? '400ms' : '0ms' }}>
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
        </div>
        
        <div 
          ref={auditoriumRef}
          className={`bg-[url('/auditorium.jpg')] bg-cover bg-center min-h-screen rounded-2xl shadow-lg transition-opacity duration-1000 ${
            auditoriumInView ? 'animate-fade-in' : 'opacity-0'
          }`}
        />

        <h1 
          ref={speakersHeadingRef}
          className={`text-6xl text-red-500 mt-10 font-semibold underline uppercase transition-opacity duration-1000 ${
            speakersHeadingInView ? 'animate-fade-in-left' : 'opacity-0'
          }`}
        >
          Our Speakers
        </h1>
      </main>
      <SpeakerArray speakers={externalSpeakers} label="External" />
      <SpeakerArray speakers={internalSpeakers} label="Internal" />

      <div 
        ref={registrationRef}
        className="max-w-7xl shadow-2xl mx-auto p-8 my-20 rounded-2xl hover:shadow-3xl transition-all duration-500 animate-fade-in-up"
      >
        <h1 className="text-red-600 text-start text-5xl mb-10 font-bold transition-opacity duration-1000 animate-fade-in-left">
          Registration
        </h1>
        <input 
          className="outline text-black p-2 text-lg rounded-lg block mb-4 w-full transition-all duration-300 focus:scale-105 focus:shadow-lg animate-fade-in-up" 
          style={{ animationDelay: '200ms' }} 
          placeholder="Enter your name here" 
        />
        <input 
          className="outline text-black p-2 text-lg rounded-lg block mb-4 w-full transition-all duration-300 focus:scale-105 focus:shadow-lg animate-fade-in-up" 
          style={{ animationDelay: '300ms' }} 
          placeholder="Enter your email here" 
        />
        <input 
          className="outline text-black p-2 text-lg rounded-lg block mb-4 w-full transition-all duration-300 focus:scale-105 focus:shadow-lg animate-fade-in-up" 
          style={{ animationDelay: '400ms' }} 
          placeholder="Enter your phone number here" 
        />
        <button 
          className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg animate-fade-in-up" 
          style={{ animationDelay: '500ms' }}
        >
          Submit
        </button>
      </div>

      <footer 
        ref={footerRef}
        className={`relative bg-[#e11d1d] transition-opacity duration-1000 ${
          footerInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        {/* Top SVG wave that 'cuts' into the red footer to create a wavy border */}
        <div
          className={`absolute -top-1 left-0 w-full overflow-hidden leading-none transition-opacity duration-1000 ${
            footerInView ? 'animate-fade-in' : 'opacity-0'
          }`}
          aria-hidden="true"
        >
          <svg
            className="block w-[150%] h-16 md:h-24"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* white path to reveal the page above as a wavy shape */}
            <path
              d="M0,0 C150,100 350,100 600,50 C850,0 1050,0 1200,50 L1200,120 L0,120 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        {/* Footer content spacer (adjust height as needed) */}
        <div className="pt-10 pb-6 md:pt-12 md:pb-8"></div>
      </footer>
    </div>
  );
}
