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
  longDesc: string;
}

const externalSpeakers: Speaker[] = [
  {
    id: 1,
    name: "placeholder",
    href: "/null.jpg",
    longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit.",
  },
  {
    id: 2,
    name: "placeholder",
    href: "/null.jpg",
    longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit.",
  },
  {
    id: 3,
    name: "placeholder",
    href: "/null.jpg",
    longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit.",
  },
  {
    id: 4,
    name: "placeholder",
    href: "/null.jpg",
    longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit.",
  },
  {
    id: 5,
    name: "placeholder",
    href: "/null.jpg",
    longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit.",
  },
];

const internalSpeakers: Speaker[] = [
  {
    id: 1,
    name: "Paresh Bharadwaj",
    href: "/speaker/paresh.JPG",
    longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit.",
  },
  {
    id: 2,
    name: "Mahdi Insaf",
    href: "/speaker/mahdi.JPG",
    longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit.",
  },
  {
    id: 3,
    name: "Anaaya Anil",
    href: "/null.JPG",
    longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit.",
  },
  {
    id: 4,
    name: "Dhiya Somaia",
    href: "/speaker/dhiya.JPG",
    longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit.",
  },
  {
    id: 5,
    name: "Hridik Misra",
    href: "/speaker/hridik.JPG",
    longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit.",
  },
  {
    id: 6,
    name: "Poorvika Vickraman",
    href: "/null.JPG",
    longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit.",
  },
  {
    id: 7,
    name: "Raunak Ramesh",
    href: "/speaker/raunak.JPG",
    longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit.",
  },{
    id: 8,
    name: "Souparnika Menon",
    href: "/speaker/souparnika.JPG",
    longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit.",
  },
  {
    id: 9,
    name: "Sagar Tejwani",
    href: "/null.jpg",
    longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit.",
  },
  {
    id: 10,
    name: "Kartika Nair",
    href: "/null.JPG",
    longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit.",
  },
  {
    id: 11,
    name: "Lina Ismail Maged",
    href: "/speaker/lina.JPG",
    longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit.",
  },
  {
    id: 12,
    name: "SP Roy",
    href: "/speaker/sproy.jpeg",
    longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit.",
  },
];

const SpeakerArray = ({
  speakers,
  onSelect,
}: {
  speakers: Speaker[];
  label: string;
  onSelect: (speaker: Speaker) => void;
}) => {
  return (
    <div className="w-full shadow-2xl py-6 md:py-8 px-4 md:px-6 mb-6 md:mb-10 animate-fade-in-up rounded-2xl bg-white/70">
      <div className="grid gap-6 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {speakers.map((speaker, index) => (
          <button
            type="button"
            key={speaker.id}
            onClick={() => onSelect(speaker)}
            className="flex flex-col items-center hover:scale-105 transition-all duration-500 animate-fade-in-up group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-2xl"
            style={{ animationDelay: `${index * 100}ms` }}
            aria-label={`View more about ${speaker.name}`}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl w-full aspect-square group-hover:shadow-2xl group-hover:shadow-red-200 transition-all duration-300">
              <Image
                src={`${speaker.href}`}
                width={300}
                height={300}
                alt={speaker.name}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-red/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <p className="text-center text-gray-800 mt-3 md:mt-4 text-lg md:text-xl font-semibold">
              {speaker.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

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

  useEffect(() => {
    if (!selectedSpeaker) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedSpeaker(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedSpeaker]);

  const closeModal = () => setSelectedSpeaker(null);

  return loading ? (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center gap-4 px-4">
        <AnimatedLogo className="w-72 md:w-96 max-w-full h-auto" />
      </div>
    </div>
  ) : (
    <ParallaxContainer className="bg-linear-to-b from-white via-gray-50 to-white min-h-screen">
      <Header />

      <main className="max-w-8xl pb-10 px-4 md:px-6 lg:px-8">
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
          <div className="text-center w-full text-red-500 flex items-center justify-center flex-col rounded-3xl my-8 md:my-16 p-6 md:p-12 bg-linear-to-br from-white via-red-50 to-gray-50 shadow-2xl hover:shadow-red-200 border-gray-200 hover:scale-101 transition-all duration-500 animate-fade-in-up">
            <SplitText
            text="What is TEDxCIS?"
            className="text-4xl md:text-6xl lg:text-8xl mb-4 font-bold text-center"
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
          <div className="relative bg-[url('/mariamma.JPG')] flex-col bg-cover bg-center rounded-3xl shadow-2xl border-white animate-fade-in mt-8 md:mt-16 overflow-hidden group flex items-start justify-center">
          
          <p className="text-gray-200 tracking-tighter leading-[1.1] font-bold p-4 px-4 md:px-8 text-3xl sm:text-5xl md:text-7xl lg:text-[125px]">Location:<br/>The Mariamma Varkey <br/> Auditorium</p>
          <p className="text-gray-300 max-w-3xl tracking-tighter leading-[1.1] p-4 px-4 md:px-8 text-base md:text-xl lg:text-3xl">The Mariamma Auditorium is CIS Dubai's 800-seat performance space, designed for assemblies, productions, music events, and community gatherings. With clear acoustics, professional lighting, and tiered seating, it delivers a polished, comfortable environment for every event.</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.8}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl bg-linear-to-r text-center w-full from-red-600 to-red-800 bg-clip-text text-transparent mt-12 md:mt-20 mb-6 md:mb-8 font-bold uppercase animate-fade-in-left relative inline-block">
            Meet The Speakers
          </h1>
        </ParallaxLayer>

        <ParallaxLayer speed={0.9}>
          <div className="my-8">
            <SpeakerArray
              speakers={internalSpeakers}
              label="Internal"
              onSelect={setSelectedSpeaker}
            />
          </div>
        </ParallaxLayer>
      </main>

      <Footer />

      {selectedSpeaker && (
        <div className="fixed inset-0 z-50 flex items-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative mx-auto w-full max-w-7xl max-h-[90vh] overflow-hidden rounded-2xl md:rounded-3xl bg-white/95 shadow-2xl">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 cursor-pointer right-4 z-20 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-lg transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              aria-label="Close speaker details"
            >
              Close
            </button>

            <div className="flex h-full flex-col gap-4 md:gap-6 overflow-hidden p-4 md:p-6 md:flex-row">
              <div className="relative w-full overflow-hidden rounded-2xl bg-black md:w-1/2">
                <Image
                  src={selectedSpeaker.href}
                  alt={`${selectedSpeaker.name} portrait`}
                  width={600}
                  height={800}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <div className="flex-1 overflow-y-auto rounded-2xl bg-white/90 p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
                      Speaker
                    </span>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                      {selectedSpeaker.name}
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                    {selectedSpeaker.longDesc}
                  </p>
                  <div className="h-px bg-linear-to-r from-red-500/60 via-red-500/20 to-transparent" />
                  <div className="grid gap-4 text-sm text-gray-500 sm:grid-cols-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ParallaxContainer>
  );
}
