"use client";
import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ParallaxContainer,
  ParallaxLayer,
} from "../components/ParallaxContainer";
import { leads, secondRow, thirdRow, fourthRow, fiveRow, TeamMember } from "../../lib/data";

const TeamCard = ({
  member,
  onSelect,
}: {
  member: TeamMember;
  onSelect: (member: TeamMember) => void;
}) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(member)}
      className="hover:scale-102 cursor-pointer transition-transform duration-300 flex flex-col items-center bg-white rounded-lg shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
      aria-label={`View more about ${member.name}`}
    >
      <div
        className="bg-cover flex flex-col justify-end rounded-lg items-start bg-center p-4 md:p-6 lg:p-8 w-full h-48 md:h-64 lg:h-200 shadow-md text-left"
        style={{ backgroundImage: `url(${member.photo})` }}
      >
        <h1 className="text-white text-lg md:text-xl lg:text-2xl ">{member.name}</h1>
        <h1 className="text-white text-xl md:text-2xl lg:text-3xl tracking-tighter uppercase font-bold">
          {member.role}
        </h1>
      </div>
    </button>
  );
};

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = React.useState<TeamMember | null>(
    null
  );

  React.useEffect(() => {
    if (!selectedMember) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedMember(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedMember]);

  const closeModal = () => setSelectedMember(null);

  return (
    <ParallaxContainer className="min-h-screen bg-linear-to-b from-white via-gray-50 to-white">
      <Header />

      <div className="w-12/13 mx-auto rounded-2xl backdrop-filter backdrop-blur-sm bg-[url('/team/team.png')] bg-cover bg-center h-[200px] md:h-[500px] flex items-center justify-center mb-8 md:mb-16">
        <div className="absolute inset-0 bg-black/10 flex text-center justify-center items-center px-4">

        </div>
      </div>

      <ParallaxLayer speed={0.9}>
        <div className="w-full border-y-2 my-8">
          <p className="text-base md:text-xl lg:text-2xl text-center leading-[1.1] tracking-tight text-gray-600 max-w-5xl mx-auto py-6 md:py-8 px-4">
            Our TEDx team is a dedicated group of individuals united by a
            genuine passion for ideas worth spreading. We work with commitment,
            creativity, and a shared vision to deliver an event that inspires
            our community. What motivates us is the opportunity TEDx provides to
            spark conversations, highlight meaningful perspectives, and create
            an experience that leaves a lasting impact. This is our team—driven,
            purposeful, and proud to bring TEDx to life.
          </p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={0.7}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-2xl mx-4 md:mx-12 lg:mx-24 p-4 md:p-8 gap-6 md:gap-12 my-8 md:my-16">
          {leads.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              onSelect={setSelectedMember}
            />
          ))}
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={0.9}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-2xl mx-4 md:mx-12 lg:mx-24 p-4 md:p-8 gap-6 md:gap-12 my-8 md:my-16">
          {secondRow.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              onSelect={setSelectedMember}
            />
          ))}
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={0.7}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-2xl mx-4 md:mx-12 lg:mx-24 p-4 md:p-8 gap-6 md:gap-12 my-8 md:my-16">
          {thirdRow.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              onSelect={setSelectedMember}
            />
          ))}
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={0.74}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-2xl mx-4 md:mx-12 lg:mx-24 p-4 md:p-8 gap-6 md:gap-12 my-8 md:my-16">
          {fourthRow.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              onSelect={setSelectedMember}
            />
          ))}
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={0.8}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-2xl mx-4 md:mx-12 lg:mx-24 p-4 md:p-8 gap-6 md:gap-12 my-8 md:my-16">
          {fiveRow.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              onSelect={setSelectedMember}
            />
          ))}
        </div>
      </ParallaxLayer>

      <Footer />

      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative mx-auto w-full max-w-7xl max-h-[90vh] overflow-hidden rounded-2xl md:rounded-3xl bg-white/95 shadow-2xl">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 cursor-pointer right-4 z-20 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-lg transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              aria-label="Close member details"
            >
              Close
            </button>

            <div className="flex h-full flex-col gap-4 md:gap-6 overflow-hidden p-4 md:p-6 md:flex-row">
              <div className="relative w-full overflow-hidden rounded-2xl bg-black md:w-1/2">
                <Image
                  src={selectedMember.photo}
                  alt={`${selectedMember.name} portrait`}
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
                      Profile
                    </span>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                      {selectedMember.name}
                    </h3>
                    <h4 className="text-lg md:text-xl lg:text-2xl tracking-tighter text-gray-700">
                      {selectedMember.role}
                    </h4>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                    {selectedMember.longDesc}
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
};

export default TeamPage;
