"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { ParallaxContainer, ParallaxLayer } from "./components/ParallaxContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
    name: "placeholder",
    href: "/null.jpg",
  },
  {
    id: 2,
    name: "placeholder",
    href: "/null.jpg",
  },
  {
    id: 3,
    name: "placeholder",
    href: "/null.jpg",
  },
  {
    id: 4,
    name: "placeholder",
    href: "/null.jpg",
  },
  {
    id: 5,
    name: "placeholder",
    href: "/null.jpg",
  },
];

const internalSpeakers: Speaker[] = [
  {
    id: 1,
    name: "placeholder",
    href: "/null.jpg",
  },
  {
    id: 2,
    name: "placeholder",
    href: "/null.jpg",
  },
  {
    id: 3,
    name: "placeholder",
    href: "/null.jpg",
  },
  {
    id: 4,
    name: "placeholder",
    href: "/null.jpg",
  },
  {
    id: 5,
    name: "placeholder",
    href: "/null.jpg",
  },
  {
    id: 6,
    name: "placeholder",
    href: "/null.jpg",
  },
  {
    id: 7,
    name: "placeholder",
    href: "/null.jpg",
  }
];

const SpeakerArray = ({speakers, label}: {speakers: Speaker[], label: string}) => {
  return (
    <div 
      className="w-full min-h-50 shadow-2xl py-4 overflow-x-auto whitespace-nowrap mb-10 animate-fade-in-up rounded-2xl"
    >
      {speakers.map((speaker, index) => (
        <div
          key={speaker.id}
          className="inline-block p-4 hover:scale-105 transition-all duration-500 mx-12 animate-fade-in-up group"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl group-hover:shadow-red-200 transition-all duration-300">
            <Image
              src={`${speaker.href}`}
              width={300}
              height={300}
              alt={speaker.name}
              className="object-cover max-h-[300px] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-red/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <p className="text-center text-gray-800 mt-4 text-xl font-semibold">
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
    <ParallaxContainer className="bg-linear-to-b from-white via-gray-50 to-white min-h-screen">
      <Header />

      <main className="max-w-8xl pb-10 px-8">
        <ParallaxLayer speed={0.7}>
          <div className="mt-8 mb-16">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              loop
              className="w-full object-cover h-auto rounded-3xl shadow-2xl border-white transition-opacity duration-1000 hover:shadow-red-200"
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer speed={0.8}>
          <div className="text-center w-full text-black flex items-center justify-center flex-col mx-auto rounded-3xl my-16 p-12 bg-linear-to-br from-white via-red-50 to-gray-50 shadow-2xl hover:shadow-red-200 border-gray-200 hover:scale-105 transition-all duration-500 animate-fade-in-up">
            <h1 className="text-6xl font-bold text-center py-8 bg-linear-to-r from-gray-900 via-red-700 to-black bg-clip-text text-transparent transition-all duration-1000 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              What is TEDxCIS Dubai?
            </h1>
            <p className="text-lg max-w-4xl mb-8 text-gray-700 leading-relaxed transition-all duration-1000 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
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
        </ParallaxLayer>
        
        <ParallaxLayer speed={0.5}>
          <div 
            className="relative bg-[url('/pic.jpg')] bg-cover bg-center min-h-screen rounded-3xl shadow-2xl border-white animate-fade-in mt-16 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.8}>
          <h1 
            className="text-6xl bg-linear-to-r from-red-600 to-red-800 bg-clip-text text-transparent mt-20 mb-8 font-bold uppercase animate-fade-in-left relative inline-block"
          >
            Our Speakers
            <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-red-600 to-red-800 rounded-full"></div>
          </h1>
        </ParallaxLayer>
        
        <ParallaxLayer speed={0.9}>
          <div className="my-8">
            <SpeakerArray speakers={externalSpeakers} label="External" />
          </div>
        </ParallaxLayer>
      
        <ParallaxLayer speed={0.9}>
          <div className="my-8">
            <SpeakerArray speakers={internalSpeakers} label="Internal" />
          </div>
        </ParallaxLayer>
      </main>
      
      

      <Footer />
    </ParallaxContainer>
  );
}
