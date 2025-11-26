import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const team = [
  {
    id: 1,
    name: "Mohammed Mujtaba",
    role: "Event Lead",
    photo: "/profile.JPG",
  },
  {
    id: 2,
    name: "Joel Muthukattil",
    role: "Faculty Leader",
    photo: "/profile.JPG",
  },
  {
    id: 3,
    name: "Miraya Rego",
    role: "Executive Producer",
    photo: "/profile.JPG",
  },
  // Add more team members as needed
];

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-white via-gray-50 to-white">
      <Header />

      <div className="w-full backdrop-filter backdrop-blur-sm bg-[url('/pic.JPG')] bg-cover bg-center h-[300px] flex items-center justify-center mb-16">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm flex text-center justify-center items-center">
          <span className="text-white text-center text-8xl font-bold tracking-tight">
            MEET OUR TEAM
          </span>
        </div>
      </div>

      <div className="w-full border-y-2 my-8">
        <p className="text-3xl leading-[1.1] tracking-tight text-gray-600 max-w-5xl mx-auto py-8 ">
          Our TEDx team is a dedicated group of individuals united by a genuine
          passion for ideas worth spreading. We work with commitment,
          creativity, and a shared vision to deliver an event that inspires our
          community. What motivates us is the opportunity TEDx provides to spark
          conversations, highlight meaningful perspectives, and create an
          experience that leaves a lasting impact. This is our team—driven,
          purposeful, and proud to bring TEDx to life.
        </p>
      </div>

      <div className="grid grid-cols-3 mx-8 gap-12 ">
        {team.map((member) => (
          <div
            key={member.id}
            className="hover:scale-102 transition-transform duration-300 flex flex-col items-center bg-white rounded-lg shadow-lg p-6"
          >
            <Image
              src={member.photo}
              alt={member.name}
              width={200}
              height={200}
              className="w-full object-cover max-h-[500px] mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
