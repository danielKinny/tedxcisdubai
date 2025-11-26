"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import {
  ParallaxContainer,
  ParallaxLayer,
} from "./components/ParallaxContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import SplitText from "./components/SplitText";

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
  },
];

const SpeakerArray = ({
  speakers,
  label,
  heading,
}: {
  speakers: Speaker[];
  label: string;
  heading: string;
}) => {
  return (
    <div className="w-full min-h-50 shadow-2xl py-4 overflow-x-auto whitespace-nowrap mb-10 animate-fade-in-up rounded-2xl">
      <h1 className="text-red-500 text-4xl p-4 mx-8 font-bold text-center">
        {heading}
      </h1>
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
          <div className="text-center w-8xl text-red-500 flex items-center justify-center flex-col rounded-3xl my-16 p-12 bg-linear-to-br from-white via-red-50 to-gray-50 shadow-2xl hover:shadow-red-200 border-gray-200 hover:scale-101 transition-all duration-500 animate-fade-in-up">
            <SplitText
            text="What is TEDxCIS?"
            className="text-8xl font-bold text-center"
            delay={400}
            duration={0.9}
            ease="power3.out"
            splitType="lines"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            />
            <SplitText
            text="TEDxCIS is an independently organized TEDx event designed to bring
              the TED spirit of “ideas worth spreading” into the CIS community.
              Its goal is simple: inspire curiosity, spark meaningful
              conversations, and highlight ideas that can drive positive change.
              Although it follows TED’s official guidelines and uses a free
              license from TED, the event is fully run by members of the local
              CIS community. At TEDxCIS, speakers share original talks on a wide
              range of topics like science, technology, social issues,
              creativity, personal growth, and global perspectives. Each talk is
              chosen and shaped to be genuine, thought-provoking, and aligned
              with the event’s theme. The aim is to create a space where people
              feel encouraged to question, learn, and explore new ways of
              thinking. TEDxCIS is not only about the talks on stage. It’s also
              about the connections built around them. Attendees can meet the
              speakers, join discussions, and connect with others who care about
              making an impact."
              className="text-lg max-w-4xl mb-8 text-gray-700 leading-relaxed transition-all duration-1000 animate-fade-in-up"
            delay={100}
            duration={0.9}
            ease="power3.out"
            splitType="lines"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            >
              
            </SplitText>
          </div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.5}>
          <div className="relative bg-[url('/mariamma.JPG')] flex-col bg-cover bg-center rounded-3xl shadow-2xl border-white animate-fade-in mt-16 overflow-hidden group flex items-start justify-center">
          
          <p className="text-gray-200 tracking-tighter leading-[1.1] font-bold p-4 px-8 mb-50 text-[125px]">Location:<br/>The Mariamma Varkey <br/> Auditorium</p>

          </div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.8}>
          <h1 className="text-6xl bg-linear-to-r text-center w-full from-red-600 to-red-800 bg-clip-text text-transparent mt-20 mb-8 font-bold uppercase animate-fade-in-left relative inline-block">
            Meet The Speakers
          </h1>
        </ParallaxLayer>

        <ParallaxLayer speed={0.9}>
          <div className="my-8">
            <SpeakerArray
              speakers={externalSpeakers}
              label="External"
              heading="External Speakers"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.9}>
          <div className="my-8">
            <SpeakerArray
              speakers={internalSpeakers}
              label="Internal"
              heading="Internal Speakers"
            />
          </div>
        </ParallaxLayer>
      </main>

      <Footer />
    </ParallaxContainer>
  );
}
