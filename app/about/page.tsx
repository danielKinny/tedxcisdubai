"use client";
import React from "react";
import {
  ParallaxContainer,
  ParallaxLayer,
} from "../components/ParallaxContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import SplitText from "../components/SplitText";
import { metad } from "../../lib/data";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { Calendar, Clock } from "lucide-react";


// Set your event date here (example: Feb 15, 2026, 10:00:00)
const EVENT_DATE = new Date('2026-01-23T08:00:00');

export default function About() {
  const [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  React.useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = EVENT_DATE.getTime() - now.getTime();
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ParallaxContainer className="bg-linear-to-b from-white via-gray-50 to-white min-h-screen">
      <Header />

      <ParallaxLayer speed={0.5} maxOffset={320}>
        <div className="text-white text-4xl md:text-7xl lg:text-9xl font-extrabold text-center rounded-2xl my-10 w-12/13 mx-auto h-[200px] md:h-[300px] object-fit flex items-center justify-center bg-[url('/assets/pic.JPG')] bg-cover bg-center mb-8 md:mb-16">
          <SplitText
            text="About TEDxCIS Dubai"
            className="text-4xl md:text-7xl lg:text-8xl font-bold text-center"
            delay={400}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={0.2} maxOffset={240}>

        <div className="flex gap-5 justify-center h-100 gap-8 border rounded-2xl border-black text-black py-10 items-center justify-center max-w-7xl mx-auto">
          <div className="flex flex-col items-center border p-4 border-red-700 rounded-2xl min-w-50">
            <span className="countdown font-bold text-8xl">
              <span style={{ "--value": timeLeft.days } as React.CSSProperties} aria-live="polite" aria-label={`${timeLeft.days} days`}>{timeLeft.days}</span>
            </span>
            <span className="text-2xl mt-1">days</span>
          </div>
          <div className="flex flex-col items-center border p-4 border-black rounded-2xl min-w-50">
            <span className="countdown font-bold text-8xl">
              <span style={{ "--value": timeLeft.hours } as React.CSSProperties} aria-live="polite" aria-label={`${timeLeft.hours} hours`}>{timeLeft.hours}</span>
            </span>
            <span className="text-2xl mt-1">hours</span>
          </div>
          <div className="flex flex-col items-center border p-4 border-black rounded-2xl min-w-50">
            <span className="countdown font-bold text-8xl">
              <span style={{ "--value": timeLeft.minutes } as React.CSSProperties} aria-live="polite" aria-label={`${timeLeft.minutes} minutes`}>{timeLeft.minutes}</span>
            </span>
            <span className="text-2xl mt-1">min</span>
          </div>
          <div className="flex flex-col items-center border p-4 border-black rounded-2xl min-w-50">
            <span className="countdown font-bold text-8xl">
              <span style={{ "--value": timeLeft.seconds } as React.CSSProperties} aria-live="polite" aria-label={`${timeLeft.seconds} seconds`}>{timeLeft.seconds}</span>
            </span>
            <span className="text-2xl mt-1">sec</span>
          </div>

          <div className="text-4xl my-auto font-semibold">
            till the day!
          </div>
        </div>

      </ParallaxLayer>

      <ParallaxLayer speed={0.4} maxOffset={260}>
        <div className="mx-auto max-w-7xl my-10 text-2xl">
          <p className="text-4xl font-extrabold text-center">About the event</p>
          <hr className="my-4 border-t-4 border-red-700 w-80 mx-auto" />
          <div className="gap-4 flex flex-col p-6 border border-red-700 rounded-2xl">
            <div className="flex border-b border-red-700 py-4">
              <div className="w-1/3">
                <CalendarIcon className="h-10 w-10 inline-block mr-2 text-red-700" />
                <span className="align-middle">January 23, 2026</span>
              </div>
              <div className="w-1/3">
                <ClockIcon className="h-10 w-10 inline-block mr-2 text-red-700" />
                <span className="align-middle">8:00 AM - 11:00 AM </span>
              </div>
              <div className="w-1/3">
                <MapPinIcon className="h-10 w-10 inline-block mr-2 text-red-700" />
                <span className="align-middle">Cambridge International School, Dubai</span>
              </div>
            </div>

            <p className="text-lg">
              <b>TEDxCIS Dubai Youth</b> is an independently organized TED event that brings together students, educators, and members of the wider community for a day of thought-provoking ideas and exploration. Rooted in curiosity and dialogue, the event creates a space where learning extends beyond the classroom.<br /><br />
              This year’s event features <b>12 carefully selected speakers</b>, each bringing a distinct perspective shaped by the theme <b>Dimensional Infinity</b>. Through live talks and interactive moments, speakers will explore ideas that span disciplines such as science, philosophy, mathematics, identity, and creativity, revealing how seemingly separate dimensions connect and overlap.<br /><br />
              Attendees will engage in inspiring talks, meaningful conversations, and opportunities to connect with others who share a passion for ideas and innovation. The event is designed to encourage <b>questioning, reflection, and discussion</b> long after the talks end.<br /><br />
              <b>TEDxCIS Dubai Youth</b> is a platform that celebrates young voices and bold thinking. Whether you are a student eager to explore new ways of seeing the world or an educator seeking fresh perspectives, this event offers a memorable and enriching experience.<br /><br />
              <b>Join us</b> as we explore infinite dimensions of thought, challenge assumptions, and discover ideas worth spreading.
            </p>
          </div>
        </div>

      </ParallaxLayer>

      <ParallaxLayer speed={0.3} maxOffset={280}>
        <div className="bg-white flex flex-col hover:scale-102 transition-transform rounded-3xl shadow-2xl p-6 md:p-12 my-8 md:my-16 mx-4 md:mx-auto border border-gray-200 animate-fade-in-up max-w-7xl">

          <SplitText
            text="Our Manifesto"
            className="text-2xl md:text-4xl text-center text-black font-bold mb-6 md:mb-8"
            tag="h1"
            delay={400}
            duration={1}
            ease="power3.out"
            splitType="lines"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <SplitText
            text='TEDxCIS began with a simple belief: every young mind has a story worth sharing. What started as a small student-led initiative at Cambridge International School, Dubai, has become a platform that highlights diverse voices and encourages ideas that challenge, inspire, and transform. 
Our journey began with a desire to create a space where students, educators, and community members could step beyond the classroom. We wanted to engage with ideas that matter. Over the years, TEDxCIS has turned into an annual tradition that brings together thinkers, innovators, creatives, and problem-solvers from across the CIS community. Each event involves months of dedication, teamwork, and a shared commitment to making an impact. 
In 2026, our theme "Prism: Dimensional Infinity" captured what TEDxCIS stands for. We explore ideas from multiple angles, celebrate unique perspectives, and discover the limitless potential in every individual. Through this approach, our speakers continue to break boundaries, redefine narratives, and spark conversations that inspire action. 
Today, TEDxCIS remains a fully student-led effort, driven by passion, leadership, and teamwork. What started as an idea has grown into a movement powered by the belief that meaningful change begins with a single spark. Our story is still unfolding, and every speaker, volunteer, and audience member becomes part of it.'
            className="text-lg text-gray-700 leading-relaxed mb-6"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="lines"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
          />
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={0.7} maxOffset={360}>
        <div className="grid grid-cols-1 lg:grid-cols-2 p-4 md:p-8 gap-12 py-12 border border-black max-w-8xl rounded-2xl my-8 md:my-16 mx-4 md:mx-8 lg:mx-16">
          {metad.map((card) => (
            <div
              className="hover:scale-105 duration-300 transition-transform flex flex-col items-center justify-start"
              key={card.title}
            >
              <SplitText
                text={card.title}
                className="text-black text-center text-3xl md:text-5xl font-bold mb-2"
                delay={400}
                duration={0.6}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
              <Image
                src={card.image}
                className="mx-auto rounded-lg h-48 md:h-64 lg:h-96 w-full object-cover"
                width={350}
                height={300}
                alt={card.title}
              />
              <SplitText
                text={card.desc}
                className="text-black text-center max-w-2/3 mx-auto text-sm md:text-lg py-4"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="lines"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>
          ))}
        </div>
      </ParallaxLayer>

      <Footer />
    </ParallaxContainer>
  );
}
