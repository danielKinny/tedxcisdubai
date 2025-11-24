"use client";
import React from "react";
import {
  ParallaxContainer,
  ParallaxLayer,
} from "../components/ParallaxContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const metad: { title: string; image: string; desc: string }[] = [
  {
    title: "2018",
    image: "/null.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at aliquet odio. In hac habitasse platea dictumst. Vivamus eget nisl nisl. Ut nibh diam, pharetra sed dapibus quis, consectetur nec massa. Suspendisse sodales lectus ut porttitor ultricies. Nunc faucibus consectetur justo, ac placerat tortor tristique sit amet. Nullam non viverra tortor. Nunc aliquet, lorem vitae elementum porta, ante nibh gravida enim, eget sodales odio turpis nec purus. Ut id hendrerit nunc. Integer luctus enim turpis. Vestibulum sit amet nunc non felis viverra pharetra vel at ligula. Maecenas consectetur malesuada nisi, et commodo velit. ",
  },
  {
    title: "2024",
    image: "/null.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at aliquet odio. In hac habitasse platea dictumst. Vivamus eget nisl nisl. Ut nibh diam, pharetra sed dapibus quis, consectetur nec massa. Suspendisse sodales lectus ut porttitor ultricies. Nunc faucibus consectetur justo, ac placerat tortor tristique sit amet. Nullam non viverra tortor. Nunc aliquet, lorem vitae elementum porta, ante nibh gravida enim, eget sodales odio turpis nec purus. Ut id hendrerit nunc. Integer luctus enim turpis. Vestibulum sit amet nunc non felis viverra pharetra vel at ligula. Maecenas consectetur malesuada nisi, et commodo velit. ",
  },
  {
    title: "2025",
    image: "/null.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at aliquet odio. In hac habitasse platea dictumst. Vivamus eget nisl nisl. Ut nibh diam, pharetra sed dapibus quis, consectetur nec massa. Suspendisse sodales lectus ut porttitor ultricies. Nunc faucibus consectetur justo, ac placerat tortor tristique sit amet. Nullam non viverra tortor. Nunc aliquet, lorem vitae elementum porta, ante nibh gravida enim, eget sodales odio turpis nec purus. Ut id hendrerit nunc. Integer luctus enim turpis. Vestibulum sit amet nunc non felis viverra pharetra vel at ligula. Maecenas consectetur malesuada nisi, et commodo velit. ",
  },
];

export default function About() {
  return (
    <ParallaxContainer className="bg-linear-to-b from-white via-gray-50 to-white min-h-screen">
      <Header />

      <ParallaxLayer speed={0.5} maxOffset={320}>
        <div className="text-white text-6xl font-extrabold text-center w-full h-[300px] object-fit flex items-center justify-center bg-[url('/pic.JPG')] bg-cover bg-center mb-16">
          <span >OUR STORY</span>
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={0.3} maxOffset={280}>
        <div className="bg-white hover:scale-102 transition-transform rounded-3xl shadow-2xl p-12 my-16 border border-gray-200 animate-fade-in-up max-w-5xl mx-auto">
          <h1 className="text-4xl text-center text-black font-bold mb-8">
            Our Manifesto
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
            tempor risus. Sed sodales volutpat elit, non lacinia ante imperdiet
            sit amet. Pellentesque odio dui, finibus eget scelerisque vel,
            molestie nec urna. Sed nec dui eu dolor sagittis consequat suscipit
            eu magna. Phasellus scelerisque pretium dui sed tempor. Donec porta
            lacinia lorem, sed dignissim velit varius sit amet. Phasellus non
            sapien ut tortor dapibus eleifend.
          </p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={0.7} maxOffset={360}>
        <div className="grid grid-cols-3 mx-auto p-8 border border-black w-full rounded-2xl my-16 max-w-7xl">
          {metad.map((card) => (
            <div
              className="hover:scale-105 duration-300 transition-transform"
              key={card.title}
            >
              <p className="text-black text-center text-5xl font-bold mb-2">
                {card.title}
              </p>
              <Image
                src={card.image}
                className="mx-auto rounded-lg"
                width={400}
                height={400}
                alt={card.title}
              />
              <p className="text-black text-center max-w-5/6 mx-auto text-lg py-4">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </ParallaxLayer>

      <Footer />
    </ParallaxContainer>
  );
}
