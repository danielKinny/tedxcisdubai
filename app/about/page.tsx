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

const metad: { title: string; image: string; desc: string }[] = [
  {
    title: "2018",
    image: "/null.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at aliquet odio. In hac habitasse platea dictumst. Vivamus eget nisl nisl. Ut nibh diam, pharetra sed dapibus quis, consectetur nec massa. Suspendisse sodales lectus ut porttitor ultricies. Nunc faucibus consectetur justo, ac placerat tortor tristique sit amet. Nullam non viverra tortor. Nunc aliquet, lorem vitae elementum porta, ante nibh gravida enim, eget sodales odio turpis nec purus. Ut id hendrerit nunc. Integer luctus enim turpis. Vestibulum sit amet nunc non felis viverra pharetra vel at ligula. Maecenas consectetur malesuada nisi, et commodo velit. ",
  },
  {
    title: "2024",
    image: "/null.jpg",
    desc: "TEDx CIS Dubai 2024 was a landmark event, being the first TEDx after COVID-19 and the first to take place in our school’s new campus. Under the theme VIVID: Voice Inspiring Valuable Ideas and Discussion, speakers shared a vibrant range of ideas that sparked curiosity and conversation. The theme helped celebrate the power of expression and the impact that sharing ideas can have. It encouraged speakers to use their voice to inspire reflection and offer perspectives that challenge assumptions. At its core, the theme emphasized how diverse experiences and insights can create a richer understanding of the world and motivate positive action. Our speakers were phenomenal in their talks, covering a wide range of fascinating topics. From exploring personal journeys in entrepreneurship and redefining what it means to excel academically, to challenging perspectives on mental health, mathematics, law, and the meaning of happiness. The talks offered a variety of unique experiences and valuable insights. Some speakers shared how they inspired others while navigating lifelong challenges such as ADHD, autism, and other disabilities, while others encouraged reflection on the choices and dilemmas that shape our lives. Through these talks, the event created a space that challenged conventional thinking, and encouraged participants to reflect on ideas that inspire growth and creativity. TEDx 2024 successfully brought together the community that cherished curiosity and the power of sharing valuable ideas",
  },
  {
    title: "2025",
    image: "/2025.JPG",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at aliquet odio. In hac habitasse platea dictumst. Vivamus eget nisl nisl. Ut nibh diam, pharetra sed dapibus quis, consectetur nec massa. Suspendisse sodales lectus ut porttitor ultricies. Nunc faucibus consectetur justo, ac placerat tortor tristique sit amet. Nullam non viverra tortor. Nunc aliquet, lorem vitae elementum porta, ante nibh gravida enim, eget sodales odio turpis nec purus. Ut id hendrerit nunc. Integer luctus enim turpis. Vestibulum sit amet nunc non felis viverra pharetra vel at ligula. Maecenas consectetur malesuada nisi, et commodo velit. ",
  },
];

export default function About() {
  return (
    <ParallaxContainer className="bg-linear-to-b from-white via-gray-50 to-white min-h-screen">
      <Header />

      <ParallaxLayer speed={0.5} maxOffset={320}>
        <div className="text-white text-9xl font-extrabold text-center w-full h-[300px] object-fit flex items-center justify-center bg-[url('/pic.JPG')] bg-cover bg-center mb-16">
          <SplitText
            text="OUR STORY"
            className="text-9xl font-bold text-center"
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
        <div className="bg-white hover:scale-102 transition-transform rounded-3xl shadow-2xl p-12 my-16 border border-gray-200 animate-fade-in-up max-w-5xl mx-auto">
          <SplitText
            text="Our Manifesto"
            className="text-4xl text-center text-black font-bold mb-8"
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
        <div className="grid grid-cols-3 p-8 border border-black max-w-8xl rounded-2xl my-16  mx-16">
          {metad.map((card) => (
            <div
              className="hover:scale-105 duration-300 transition-transform flex flex-col items-center justify-start"
              key={card.title}
            >
              <SplitText
                text={card.title}
                className="text-black text-center text-5xl font-bold mb-2"
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
                className="mx-auto rounded-lg h-96 w-108 object-cover"
                width={350}
                height={300}
                alt={card.title}
              />
              <SplitText
                text={card.desc}
                className="text-black text-center max-w-5/6 mx-auto text-lg py-4"
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
