"use client";
import React from "react";
import {
  ParallaxContainer,
  ParallaxLayer,
} from "../components/ParallaxContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <ParallaxContainer className="bg-linear-to-b from-white via-gray-50 to-white min-h-screen">
      <Header />

      <ParallaxLayer speed={0.4}>
        <div className="text-white text-6xl font-extrabold text-center w-full h-[300px] object-fit flex items-center justify-center bg-[url('/auditorium.jpg')] bg-cover bg-center">
          <span className="shadow-lg">
            OUR STORY
          </span>
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={0.6}>
        <div className="bg-white hover:scale-102 transition-transform rounded-3xl shadow-2xl p-12 my-8 border border-gray-200 animate-fade-in-up max-w-5xl mx-auto">
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

      <div className="grid grid-cols-3">

        <div>
            <p>
                2018
            </p>
            <Image src="/razeen.jpg" width={100} height={100} alt="Razeen"/>
        </div>



      </div>

      <Footer />
    </ParallaxContainer>
  );
}
