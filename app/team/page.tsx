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
    role: "Lead Organizer",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",
    photo: "/mujtaba.JPG",
  },
  {
    id: 2,
    name: "Joel Francis Muthukattil",
    role: "Lead Organizer",
    longDesc:
      "In a world of reels, reactions and scrolling, powerful oratory is quietly fading.\nTEDxCIS brings it back to life.\nAs Lead Organizer and Innovation Coordinator, my vision, strongly supported by the school management, is to put student voices, skills and ideas centre stage.\nThis is where confidence meets creativity, stories spark change and ideas find courage.\nCome for the talks, stay for the inspiration, leave ready to change the world.",
    photo: "/joel.JPG",
  },
  {
    id: 3,
    name: "Miraya Aimee Rego",
    role: "Executive Producer",
    longDesc:
      "Hi! I’m Miraya, this year’s Executive Producer of TEDxCIS Dubai Youth 2026. TEDx has always been something that's held a special place in my heart. I found my start in this event in the 2024 edition, starting off as a production director. The event left me with a lifelong lesson - the importance of giving others a voice, no matter the age, no matter the person. For this year’s TEDx, my main focus remains on sharing the lesson that inspired me during my first TEDx. To remind everyone that ideas change people; and people change the world.",
    photo: "/miraya.JPG",
  },
];

const secondRow = [
  {
    id: 4,
    name: "Samyar Alamoti",
    role: "Deputy Lead and Host",
    longDesc:
      "I aim to approach life logically, preferring solutions over unnecessary stress and keeping calm when situations get tricky. Ambition drives me to learn broadly, picking up skills where I can, while observing, analyzing, and adapting naturally. My mindset focuses on growth, knowing there's always more to learn, though am confident in my ability to handle whatever comes my way. While valuing honesty, consistency, and connection, I believe meaningful interactions come from being present, curious, and genuine in every moment. Holding reflection and action together guides my choices. Over time, I continue refining how I move through life. In every challenge, I tend to stay steady. Active observation shapes my approach, and My principles guide me.",
    photo: "/samyar.JPG",
  },
  {
    id: 5,
    name: "Daniel Kinny",
    role: "Production Director",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",
    photo: "/daniel.JPG",
  },
  {
    id: 6,
    name: "Nazia Akhtar",
    role: "Production Director",
    longDesc:
      "As Production Director for the TEDxCIS organising team, I work closely with the team behind the scenes to ensure that each idea is brought to life smoothly, from planning and coordination to execution on the day itself. \n\nBeing part of the TEDxCIS team has meant learning how much work actually happens offstage. A lot of it comes down to coordination and staying committed even under pressure. I've learned to be detail oriented, and take responsibility for things people don't always see. I value spaces where ideas are appreciated and presented with care, and I hope TEDxCIS leaves the audience thinking differently, even after the event ends.",
    photo: "/nazia.JPG",
  },
];

const thirdRow = [
  {
    id: 7,
    name: "Shlok Pillai",
    role: "Media Director",
    longDesc:
      "I'm the Media Director for TEDxCIS Dubai Youth at Cambridge International School, Dubai. My role involves managing live event coverage, photography, and social media, with a focus on ensuring that the visual narrative of the event remains clear, cohesive, and aligned with TEDx's values. I've contributed to shaping the event's visual identity through aesthetic planning and creative support across platforms in assistance to the creative leads.\n Through this role, I aim to support the speakers and ideas by creating media that feels considered, consistent, and true to the purpose of the event.",
    photo: "/shlok.JPG",
  },
  {
    id: 8,
    name: "Lance Alera",
    role: "Creative Director",
    longDesc:
      "As Creative Director at TEDxCIS, I oversee the visual identity and creative direction of the event, ensuring a cohesive and impactful experience across all platforms. I lead the development of branding, stage design, and digital content to support and amplify the ideas shared on stage. By combining strategic thinking with strong visual storytelling, I aim to create designs that are both engaging and purposeful. I work closely with the team to maintain high creative standards and ensure that every visual element reflects the theme, Dimensional Infinity.",
    photo: "/lance.JPG",
  },
  {
    id: 9,
    name: "Hadiya Habib",
    role: "Marketing Director",
    longDesc:
      "Hello! I'm Hadiya, the Marketing Director for TEDxCIS Dubai and I help shape the creative direction behind how our ideas are shared with the community.\n\nFrom crayons and pens to graphics and shapes, experimenting with art and media has always been a passion of mine. I look forward to bringing each speaker's story to life, adding a little magic through color and design. \n\nWith unique ideas, I hope to create lasting impressions and dimensional experiences that extend far beyond the stage.",
    photo: "/hadiya.JPG",
  },
];

const fourthRow = [
  {
    id: 10,
    name: "Lekisha Mehta",
    role: "Head Event Coordinator",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",
    photo: "/lekisha.JPG",
  },
  {
    id: 11,
    name: "Sahil Jaisinghani",
    role: "Event Coordinator",
    longDesc:
      "I am a student at GEMS CIS Dubai with a strong passion for finance, entrepreneurship, and creating impactful experiences through organizing events. As the Event Coordinator for TEDx CIS Youth Dubai, I work closely with fellow students to plan and bring ideas to life, ensuring every detail is thoughtfully executed. I enjoy taking on leadership roles, whether as the captain of my football academy team or through participating in and winning school competitions. I thrive in collaborative environments that value clear communication, organisation, and accountability, and I aim to contribute meaningfully to every project I am involved in.",
    photo: "/sahil.JPG",
  },
  {
    id: 12,
    name: "Ibrahim Imran",
    role: "Media Coordinator",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",
    photo: "/ibrahim.JPG",
  },
];

const fiveRow = [
  {
    id: 13,
    name: "Joshua Fernandes",
    role: "Head of Volunteers",
    longDesc:
      "My name is Joshua Fernandes, and I'm truly honored to be the head of admins for TEDxCIS 2026. The main aim of TEDx is to spread ideas that matter and inspire change. An event like TEDx, where it focuses on giving young individuals voices and the ability to spread ideas within the community, really inspires creativity and leadership from a young age. I was apart of the TEDxCIS 2025, and it was a wonderful experience to see so many young students having so many different ideas, stories, and perspectives. I strongly believe its important to provide young students with this opportunity, as it provides them with the chance to learn how to communicate effectively, inspire others, and engage with real-world issues in a meaningful way",

    photo: "/joshua.JPG",
  },
  {
    id: 14,
    name: "Saanj Panicker",
    role: "Communications Coordinator",
    longDesc:
      "My name is Saanj Panicker, currently in Year 13, serving as the Communications Director. I’m someone who genuinely enjoys shaping how ideas are shared and making sure messages are clear, engaging, and meaningful. In my role, I love bringing people together, organising information, and helping create a narrative that represents our team’s vision. Communication has always been something I’ve gravitated towards- whether it’s writing, coordinating, or simply connecting with others. I take pride in being organised, collaborative, and open-minded, and I try to approach every project with creativity and intention. As I continue to grow, I’m excited to explore how communication can influence change and create opportunities. I look forward to contributing my voice, ideas, and energy to our Tedx event.",

    photo: "/saanj.JPG",
  },
  {
    id: 15,
    name: "Neharika Madhu",
    role: "Host",
    longDesc:
      "I approach ideas by paying attention to how they take shape and move forward. Having taken part in several elocution competitions, I have developed strength to improve my confidence in expressing ideas clearly with purpose. I am equally comfortable taking responsibility behind the scenes, where organization, coordination and attention to detail are essential for a successful outcome. I value direct thinking and clear communication and believe that understanding details in key to meaningful progress. As the host of TEDxCIS, I focus on creating an experience that feels organized, purposeful and engaging. I aim to support speakers in sharing their ideas clearly, while helping the audience connect with them. Through this role, I hope to encourage curiosity, confidence and thoughtful engagement amongst all. ",

    photo: "/neharika.JPG",
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

      <div className="w-full backdrop-filter backdrop-blur-sm bg-[url('/pic.JPG')] bg-cover bg-center h-[200px] md:h-[300px] flex items-center justify-center mb-8 md:mb-16">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm flex text-center justify-center items-center px-4">
          <span className="text-white text-center text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight">
            MEET OUR TEAM
          </span>
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
