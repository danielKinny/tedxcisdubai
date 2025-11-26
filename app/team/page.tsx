"use client";
import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ParallaxContainer,
  ParallaxLayer,
} from "../components/ParallaxContainer";
interface TeamMember {
  id: number;
  name: string;
  role: string;
  longDesc: string;
  photo: string;
}

const leads: TeamMember[] = [
  {
    id: 1,
    name: "Mohammed Mujtaba",
    role: "Event Lead",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",
    photo: "/profile.JPG",
  },
  {
    id: 2,
    name: "Joel Muthukattil",
    role: "Faculty Leader",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",
    photo: "/profile.JPG",
  },
  {
    id: 3,
    name: "Miraya Rego",
    role: "Executive Producer",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",
    photo: "/profile.JPG",
  },
];

const secondRow = [
  {
    id: 4,
    name: "Samyar Alamoti",
    role: "Deputy Lead and Host",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",
    photo: "/profile.JPG",
  },
  {
    id: 5,
    name: "Daniel Kinny",
    role: "Production Director",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",
    photo: "/profile.JPG",
  },
  {
    id: 6,
    name: "Nazia Akhtar",
    role: "Production Director",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",
    photo: "/profile.JPG",
  },
];

const thirdRow = [
  {
    id: 7,
    name: "Shlok Pillai",
    role: "Media Director",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",
    photo: "/profile.JPG",
  },
  {
    id: 8,
    name: "Lance Alera",
    role: "Creative Director",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",
    photo: "/profile.JPG",
  },
  {
    id: 9,
    name: "Hadiya Habib",
    role: "Marketing Director",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",
    photo: "/profile.JPG",
  },
];

const fourthRow = [
  {
    id: 10,
    name: "Lekisha Mehta",
    role: "Head Event Coordinator",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",
    photo: "/profile.JPG",
  },
  {
    id: 11,
    name: "Sahil Jaisinghani",
    role: "Event Coordinator",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",
    photo: "/profile.JPG",
  },
  {
    id: 12,
    name: "Ibrahim Imran",
    role: "Media Coordinator",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",
    photo: "/profile.JPG",
  },
];

const fiveRow = [
  {
    id: 13,
    name: "Joshua Fernandes",
    role: "Head of Volunteers",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",

    photo: "/profile.JPG",
  },
  {
    id: 14,
    name: "Saanj Panicker",
    role: "Communications Coordinator",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",

    photo: "/profile.JPG",
  },
  {
    id: 15,
    name: "Neharika Madhu",
    role: "Host",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",

    photo: "/profile.JPG",
  },
];

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
      className="hover:scale-102 transition-transform duration-300 flex flex-col items-center bg-white rounded-lg shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
      aria-label={`View more about ${member.name}`}
    >
      <div className="bg-[url('/profile.JPG')] bg-cover flex flex-col justify-end rounded-lg items-start bg-center p-8 w-full h-200 shadow-md text-left">
        <h1 className="text-white text-2xl font-bold ">{member.name}</h1>
        <h1 className="text-white text-3xl tracking-tighter font-semiold">
          {member.role}
        </h1>
      </div>
    </button>
  );
};

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = React.useState<TeamMember | null>(
    null,
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

      <div className="w-full backdrop-filter backdrop-blur-sm bg-[url('/pic.JPG')] bg-cover bg-center h-[300px] flex items-center justify-center mb-16">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm flex text-center justify-center items-center">
          <span className="text-white text-center text-8xl font-bold tracking-tight">
            MEET OUR TEAM
          </span>
        </div>
      </div>

      <ParallaxLayer speed={0.9}>
        <div className="w-full border-y-2 my-8">
          <p className="text-2xl text-center leading-[1.1] tracking-tight text-gray-600 max-w-5xl mx-auto py-8 ">
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
        <div className="grid grid-cols-3 shadow-2xl mx-24 p-8 gap-12 my-16">
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
        <div className="grid grid-cols-3 shadow-2xl mx-24 p-8 gap-12 my-16">
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
        <div className="grid grid-cols-3 shadow-2xl mx-24 p-8 gap-12 my-16">
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
        <div className="grid grid-cols-3 shadow-2xl mx-24 p-8 gap-12 my-16">
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
        <div className="grid grid-cols-3 shadow-2xl mx-24 p-8 gap-12 my-16">
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
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center">
          <div className="relative mx-auto flex w-full max-h-[85vh] min-h-[60vh] overflow-hidden bg-white/5">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-gray-700 shadow-lg transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              aria-label="Close member details"
            >
              Close
            </button>

            <div className="flex h-full w-full flex-col lg:flex-row">
              <div className="relative w-full min-h-[320px] lg:min-h-full lg:w-auto lg:max-w-md lg:flex-none lg:aspect-[3/4]">
                <Image
                  src={selectedMember.photo}
                  alt={`${selectedMember.name} portrait`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                    {selectedMember.role}
                  </p>
                  <h2 className="text-4xl font-bold tracking-tight">
                    {selectedMember.name}
                  </h2>
                </div>
              </div>

              <div className="flex-1 bg-white/95 backdrop-blur-sm overflow-y-auto">
                <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-12 md:px-12">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
                      Profile
                    </span>
                    <h3 className="text-3xl font-semibold text-gray-900">
                      {selectedMember.name}
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                    {selectedMember.longDesc}
                  </p>
                  <div className="h-px bg-gradient-to-r from-red-500/60 via-red-500/20 to-transparent" />
                  <div className="grid gap-4 text-sm text-gray-500 sm:grid-cols-2">
                    <div className="rounded-2xl border border-gray-100 bg-gray-50/80 p-4 shadow-sm">
                      <p className="text-xs uppercase tracking-wide text-red-600">
                        Role
                      </p>
                      <p className="text-base font-medium text-gray-900">
                        {selectedMember.role}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gray-100 bg-gray-50/80 p-4 shadow-sm">
                      <p className="text-xs uppercase tracking-wide text-red-600">
                        TEDx Season
                      </p>
                      <p className="text-base font-medium text-gray-900">
                        2024 · CIS Dubai
                      </p>
                    </div>
                  </div>
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
