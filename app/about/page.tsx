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
import {metad} from "../../lib/data";


export default function About() {
  return (
    <ParallaxContainer className="bg-linear-to-b from-white via-gray-50 to-white min-h-screen">
      <Header />

      <ParallaxLayer speed={0.5} maxOffset={320}>
        <div className="text-white text-4xl md:text-7xl lg:text-9xl font-extrabold text-center w-full h-[200px] md:h-[300px] object-fit flex items-center justify-center bg-[url('/assets/pic.JPG')] bg-cover bg-center mb-8 md:mb-16">
          <SplitText
            text="OUR STORY"
            className="text-4xl md:text-7xl lg:text-9xl font-bold text-center"
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

      <ParallaxLayer speed={0.3} maxOffset={280}>
        <div className="bg-white hover:scale-102 transition-transform rounded-3xl shadow-2xl p-6 md:p-12 my-8 md:my-16 mx-4 md:mx-auto border border-gray-200 animate-fade-in-up max-w-5xl">
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
