export const contactDetails = [
    {
        title: "Email",
        value: "tedxcisdubai@gmail.com",
        description: "Reach out for partnerships, press, or general questions."
    },
    {
        title: "Location",
        value: "Cambridge International School, Dubai",
        description: "Find us on campus or arrange a visit by appointment."
    }
];

export const metad: { title: string; image: string; desc: string }[] = [
  {
    title: "2024",
    image: "/assets/2024.JPG",
    desc: "TEDx CIS Dubai 2024 was a landmark event, being the first TEDx after COVID-19 and the first to take place in our school’s new campus. Under the theme VIVID: Voice Inspiring Valuable Ideas and Discussion, speakers shared a vibrant range of ideas that sparked curiosity and conversation. The theme helped celebrate the power of expression and the impact that sharing ideas can have. It encouraged speakers to use their voice to inspire reflection and offer perspectives that challenge assumptions. At its core, the theme emphasized how diverse experiences and insights can create a richer understanding of the world and motivate positive action. Our speakers were phenomenal in their talks, covering a wide range of fascinating topics. From exploring personal journeys in entrepreneurship and redefining what it means to excel academically, to challenging perspectives on mental health, mathematics, law, and the meaning of happiness. The talks offered a variety of unique experiences and valuable insights. Some speakers shared how they inspired others while navigating lifelong challenges such as ADHD, autism, and other disabilities, while others encouraged reflection on the choices and dilemmas that shape our lives. Through these talks, the event created a space that challenged conventional thinking, and encouraged participants to reflect on ideas that inspire growth and creativity. TEDx 2024 successfully brought together the community that cherished curiosity and the power of sharing valuable ideas",
  },
  {
    title: "2025",
    image: "/assets/2025.JPG",
    desc: "TEDxCIS Dubai 2025 was a powerful continuation of our school's tradition of celebrating ideas and dialogue. Under the theme Innate. Innovate. Intonate., the event explored how ideas are formed, developed, and ultimately shared. The theme encouraged speakers to reflect on what is instinctive and natural within us, how those instincts can evolve into innovation, and how ideas gain meaning when they are voiced with purpose. Innate focused on the abilities, instincts, and perspectives we are born with — the quiet drivers that shape who we are and how we think. Innovate examined how these innate qualities can be transformed into new ways of thinking, problem-solving, and creating change. Intonate emphasised the importance of expression, highlighting how ideas must be communicated thoughtfully in order to resonate, inspire reflection, and spark discussion.",
  },
];

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  longDesc: string;
  photo: string;
}

export const leads: TeamMember[] = [
  {
    id: 1,
    name: "Mohammed Mujtaba",
    role: "Lead Organizer",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",
    photo: "/team/mujtaba.JPG",
  },
  {
    id: 2,
    name: "Joel Francis Muthukattil",
    role: "Lead Organizer",
    longDesc:
      "In a world of reels, reactions and scrolling, powerful oratory is quietly fading.\nTEDxCIS brings it back to life.\nAs Lead Organizer and Innovation Coordinator, my vision, strongly supported by the school management, is to put student voices, skills and ideas centre stage.\nThis is where confidence meets creativity, stories spark change and ideas find courage.\nCome for the talks, stay for the inspiration, leave ready to change the world.",
    photo: "/team/joel.JPG",
  },
  {
    id: 3,
    name: "Miraya Aimee Rego",
    role: "Executive Producer",
    longDesc:
      "Hi! I’m Miraya, this year’s Executive Producer of TEDxCIS Dubai Youth 2026. TEDx has always been something that's held a special place in my heart. I found my start in this event in the 2024 edition, starting off as a production director. The event left me with a lifelong lesson - the importance of giving others a voice, no matter the age, no matter the person. For this year’s TEDx, my main focus remains on sharing the lesson that inspired me during my first TEDx. To remind everyone that ideas change people; and people change the world.",
    photo: "/team/miraya.JPG",
  },
];

export const secondRow = [
  {
    id: 4,
    name: "Samyar Alamoti",
    role: "Deputy Lead and Host",
    longDesc:
      "I aim to approach life logically, preferring solutions over unnecessary stress and keeping calm when situations get tricky. Ambition drives me to learn broadly, picking up skills where I can, while observing, analyzing, and adapting naturally. My mindset focuses on growth, knowing there's always more to learn, though am confident in my ability to handle whatever comes my way. While valuing honesty, consistency, and connection, I believe meaningful interactions come from being present, curious, and genuine in every moment. Holding reflection and action together guides my choices. Over time, I continue refining how I move through life. In every challenge, I tend to stay steady. Active observation shapes my approach, and My principles guide me.",
    photo: "/team/samyar.JPG",
  },
  {
    id: 5,
    name: "Daniel Kinny",
    role: "Production Director",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",
    photo: "/team/daniel.JPG",
  },
  {
    id: 6,
    name: "Nazia Akhtar",
    role: "Production Director",
    longDesc:
      "As Production Director for the TEDxCIS organising team, I work closely with the team behind the scenes to ensure that each idea is brought to life smoothly, from planning and coordination to execution on the day itself. \n\nBeing part of the TEDxCIS team has meant learning how much work actually happens offstage. A lot of it comes down to coordination and staying committed even under pressure. I've learned to be detail oriented, and take responsibility for things people don't always see. I value spaces where ideas are appreciated and presented with care, and I hope TEDxCIS leaves the audience thinking differently, even after the event ends.",
    photo: "/team/nazia.JPG",
  },
];

export const thirdRow = [
  {
    id: 7,
    name: "Shlok Pillai",
    role: "Media Director",
    longDesc:
      "I'm the Media Director for TEDxCIS Dubai Youth at Cambridge International School, Dubai. My role involves managing live event coverage, photography, and social media, with a focus on ensuring that the visual narrative of the event remains clear, cohesive, and aligned with TEDx's values. I've contributed to shaping the event's visual identity through aesthetic planning and creative support across platforms in assistance to the creative leads.\n Through this role, I aim to support the speakers and ideas by creating media that feels considered, consistent, and true to the purpose of the event.",
    photo: "/team/shlok.JPG",
  },
  {
    id: 8,
    name: "Lance Alera",
    role: "Creative Director",
    longDesc:
      "As Creative Director at TEDxCIS, I oversee the visual identity and creative direction of the event, ensuring a cohesive and impactful experience across all platforms. I lead the development of branding, stage design, and digital content to support and amplify the ideas shared on stage. By combining strategic thinking with strong visual storytelling, I aim to create designs that are both engaging and purposeful. I work closely with the team to maintain high creative standards and ensure that every visual element reflects the theme, Dimensional Infinity.",
    photo: "/team/lance.JPG",
  },
  {
    id: 9,
    name: "Hadiya Habib",
    role: "Marketing Director",
    longDesc:
      "Hello! I'm Hadiya, the Marketing Director for TEDxCIS Dubai and I help shape the creative direction behind how our ideas are shared with the community.\n\nFrom crayons and pens to graphics and shapes, experimenting with art and media has always been a passion of mine. I look forward to bringing each speaker's story to life, adding a little magic through color and design. \n\nWith unique ideas, I hope to create lasting impressions and dimensional experiences that extend far beyond the stage.",
    photo: "/team/hadiya.JPG",
  },
];

export const fourthRow = [
  {
    id: 10,
    name: "Lekisha Mehta",
    role: "Head Event Coordinator",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",
    photo: "/team/lekisha.JPG",
  },
  {
    id: 11,
    name: "Sahil Jaisinghani",
    role: "Event Coordinator",
    longDesc:
      "I am a student at GEMS CIS Dubai with a strong passion for finance, entrepreneurship, and creating impactful experiences through organizing events. As the Event Coordinator for TEDx CIS Youth Dubai, I work closely with fellow students to plan and bring ideas to life, ensuring every detail is thoughtfully executed. I enjoy taking on leadership roles, whether as the captain of my football academy team or through participating in and winning school competitions. I thrive in collaborative environments that value clear communication, organisation, and accountability, and I aim to contribute meaningfully to every project I am involved in.",
    photo: "/team/sahil.JPG",
  },
  {
    id: 12,
    name: "Ibrahim Imran",
    role: "Media Coordinator",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit. Curabitur vitae pharetra quam. Suspendisse nulla erat, luctus ut pharetra sit amet, bibendum sit amet neque. Curabitur aliquet egestas sem ac pharetra. Mauris sit amet nisi eget dui sagittis vestibulum sit amet a magna. ",
    photo: "/team/ibrahim.JPG",
  },
];

export const fiveRow = [
  {
    id: 13,
    name: "Joshua Fernandes",
    role: "Head of Volunteers",
    longDesc:
      "My name is Joshua Fernandes, and I'm truly honored to be the head of admins for TEDxCIS 2026. The main aim of TEDx is to spread ideas that matter and inspire change. An event like TEDx, where it focuses on giving young individuals voices and the ability to spread ideas within the community, really inspires creativity and leadership from a young age. I was apart of the TEDxCIS 2025, and it was a wonderful experience to see so many young students having so many different ideas, stories, and perspectives. I strongly believe its important to provide young students with this opportunity, as it provides them with the chance to learn how to communicate effectively, inspire others, and engage with real-world issues in a meaningful way",

    photo: "/team/joshua.JPG",
  },
  {
    id: 14,
    name: "Saanj Panicker",
    role: "Communications Coordinator",
    longDesc:
      "My name is Saanj Panicker, currently in Year 13, serving as the Communications Director. I’m someone who genuinely enjoys shaping how ideas are shared and making sure messages are clear, engaging, and meaningful. In my role, I love bringing people together, organising information, and helping create a narrative that represents our team’s vision. Communication has always been something I’ve gravitated towards- whether it’s writing, coordinating, or simply connecting with others. I take pride in being organised, collaborative, and open-minded, and I try to approach every project with creativity and intention. As I continue to grow, I’m excited to explore how communication can influence change and create opportunities. I look forward to contributing my voice, ideas, and energy to our Tedx event.",

    photo: "/team/saanj.JPG",
  },
  {
    id: 15,
    name: "Neharika Madhu",
    role: "Host",
    longDesc:
      "I approach ideas by paying attention to how they take shape and move forward. Having taken part in several elocution competitions, I have developed strength to improve my confidence in expressing ideas clearly with purpose. I am equally comfortable taking responsibility behind the scenes, where organization, coordination and attention to detail are essential for a successful outcome. I value direct thinking and clear communication and believe that understanding details in key to meaningful progress. As the host of TEDxCIS, I focus on creating an experience that feels organized, purposeful and engaging. I aim to support speakers in sharing their ideas clearly, while helping the audience connect with them. Through this role, I hope to encourage curiosity, confidence and thoughtful engagement amongst all. ",

    photo: "/team/neharika.JPG",
  },
];

export interface Speaker {
  id: number;
  name: string;
  href: string;
  longDesc: string;
}

export const speakers: Speaker[] = [
  {
    id: 1,
    name: "Paresh Bharadwaj",
    href: "/speaker/paresh.JPG",
    longDesc: "My name is Paresh Vamshi Bharadwaj, an 11-year-old student studying in year 6 at Cambridge International School. I'm from Mysore, Karnataka, India. I enjoy reading, cycling, learning, debating, and I love listening to music, as it helps me focus and vibe. I have a knack for debates and MUNS, and am hardworking, determined, and give my best in whatever I do. I am a clear and concise communicator, and I love to share ideas, as well as listen to other people. I strive to maintain a balance between extracurricular and curricular activities. Most of all, I am passionate about cars, planes, and anything related, which sparked my interest in the Air Force Defense sector. I aspire to be an exceptional squadron leader for the IAF. My life as a student involves listening to feedback and adapting effectively. I also enjoy giving speeches and engaging in public speaking. Thank you.",
  },
  {
    id: 2,
    name: "Mahdi Insaf",
    href: "/speaker/mahdi.JPG",
    longDesc: "Hi! I am Mahdi Insaf, a 12-year-old studying in year 8 at Cambridge International School Dubai. I'm from Colombo, Sri Lanka. I am a passionate football player, a public speaking enthusiast, and have a huge interest in economics and law studies. My interest in economics and law equips me with analytical and ethical skills. It helps me be a better and clearer thinker, so that I am more careful when it comes to real-life decisions. I love public speaking because it helps me share ideas with the world with full confidence, as it also makes me comfortable with inspiring people while also increasing my communication and embracing every chance to be better. I also really love cars, especially BMWs, because of their outstanding performance, which helped me discover my goal of becoming CEO of a successful car brand and having my own showroom. I love sports, and football for me stands out. It teaches me the art of control and focus, team-building skills and motivation for winning more matches.",
  },
  {
    id: 3,
    name: "Anaaya Anil",
    href: "/assets/null.JPG",
    longDesc: "I'm Anaaya Anil, a 14-year-old student at a Cambridge International School. I'm from India. I enjoy reading, listening to music, and playing volleyball, which helps me stay disciplined and balanced. I'm hardworking, I manage my time effectively, and I am confident in communicating my ideas in both academic and group settings. I like observing people and understanding how they think, which sparked my interest in psychology and mental health. This interest has led me to aspire to become a psychiatrist in the future. As a student, I focus on learning consistently and improving myself through both academics and extracurricular activities.",
  },
  {
    id: 4,
    name: "Dhiya Somaia",
    href: "/speaker/dhiya.JPG",
    longDesc: "Hi! I'm Dhiya Somaia, a 14-year old student studying in year 9 at Cambridge International School, Dubai. I'm from Mumbai, India. I'm a passionate dancer, a pilates enthusiast, and most importantly a huge book lover, as they ignite my imagination and submerge me into a sublime world full of fantasies. I'm super friendly, outgoing, and skilled at interacting with others. The principal reason for my academic success is my organisational skills. I believe the key to great success and time management comes from categorising and prioritising your workload. Additionally, I'm fond of business and public speaking, which has led me to aspire to become an entrepreneur. My love for books has made me want to publish my own book in the future, and whatever more I do hereafter will be done with hard work, consistency, and effectiveness. Being a student, my aim is to make the most of all opportunities I receive, give my best at whatever I do, learn from my mistakes, and make progress.",
  },
  {
    id: 5,
    name: "Hridik Misra",
    href: "/speaker/hridik.JPG",
    longDesc: "Hi, I'm Hridik. I'm 15-years-old and a student at Cambridge International School, Dubai. Despite my eccentric Indian name, I'm officially from Australia. What's there to say about me? I'm a zealous musician who finds solace in learning, listening, and performing as a pianist/keyboard player, augmented by my interests in filmography and cinematic scores, as a form of escapism and storytelling. Outside of music, I enjoy reading comic books in my spare time and engaging in interactive entertainment, which is just a flamboyant way of saying video games. More recently, I have been intrigued by philosophy, psychology, and sociology, which can all be attributed to my interest in debate, not so much public speaking. In the future, I'm not sure what I aspire to, but I am committed to fulfilling my academic duties and making it to the end of the week. I look forward to the opportunity to present myself and share my ideas at TEDxCIS.",
  },
  {
    id: 6,
    name: "Poorvikaa Vickraman",
    href: "/assets/null.JPG",
    longDesc: "Hello Everyone! Born in the beautiful state of Tamil Nadu, I am Poorvikaa Vickraman, a year 11 student from CIS Dubai. My personality is built upon values of honesty, straightforwardness, and care for everyone. I love learning new things a lot and always get excited to discover different aspects of life. My main interests revolve around public speaking, debating, dancing, reading, martial arts, and basketball. I have done multiple MUNs, where I have won several of them as well. I find joy in sports since I believe that learning a sport teaches many values like teamwork, resilience, hard work, and respect. So any sport you might want to try, count me in! I enjoy studying as well, since it makes me feel like I can accomplish a lot of things with less struggle, and I yearn for the power of knowledge. I've always wondered how planes and birds fly; therefore, I aspire to be an Aeronautical Engineer so that one day I can contribute to people discovering this world from a different altitude.",
  },
  {
    id: 7,
    name: "Raunak Ramesh",
    href: "/speaker/raunak.JPG",
    longDesc: "Hi, I'm Raunak Ramesh, a student at Cambridge International School in Dubai. I come from India and have been actively participating in Model United Nations, both as a delegate and a chairperson, where I have won several awards at different conferences. I am a massive fan of debating, which has really helped me to build up my public speaking and critical thinking skills. Apart from studying, I love music and working out. My goal is to get a job at the United Nations one day since I am really into international relations, global affairs and diplomacy. I also like to volunteer a lot and I am convinced that it is very important to support the community and have a positive impact through meaningful actions.",
  },
  {
    id: 8,
    name: "Souparnika Menon",
    href: "/speaker/souparnika.JPG",
    longDesc: "Hi, my name is Souparnika, and I am an 18-year-old A Level student at Cambridge International School Dubai. I am naturally shy and introverted; however, the stage has always been a space where quietness fades, and confidence takes over, a contrast I discovered through years of public speaking after my parents introduced me to Toastmasters, where I later served as President of my club for two years. Alongside that, I am drawn to performance, whether it's dancing, singing, or acting in productions; these creative spaces allow me to express myself fully. Swimming is where I find calm and clarity; it's a sport I have used as my escape world for years. Anyone who knows me knows my fascination with cinema. I have always been drawn to how talented directors create their own worlds on a screen and immerse audiences for a span of two hours. nothing can compare to the magic of filmmaking, inspiring my dream of becoming a filmmaker and creating worlds of my own one day.",
  },
  {
    id: 9,
    name: "Sagar Tejwani",
    href: "/speaker/sagar.jpg",
    longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit.",
  },
  {
    id: 10,
    name: "Kartika Nair",
    href: "/speaker/kartika.jpg",
    longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit.",
  },
  {
    id: 11,
    name: "Lina Ismail Maged",
    href: "/speaker/lina.JPG",
    longDesc: "Hello! I am Dr. Lina Ismail Abdelsalam, an educational leader, Islamic education specialist, and visionary learning designer who believes education should move hearts before it moves minds. With over a decade of experience in schools and leadership, I currently serve as Head of Islamic Studies, where I bridge modern pedagogy with timeless values. I hold a PhD in Educational Leadership and Business Administration and a Master's in Professional Training and Development, which makes me passionate about transforming learning into a life experience. I am the creator of the L6X Strategy™ Learn Deep Link Wide Lead Bold. A framework designed to empower educators and students to think critically, act purposefully, and lead with meaning. Beyond titles, I am a storyteller, coach, and changemaker who challenges conventional education and invites audiences to reimagine learning as a journey of intention and real impact. I believe that true education does not end in the classroom; it begins there.",
  },
  {
    id: 12,
    name: "SP Roy",
    href: "/speaker/sproy.jpeg",
    longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra posuere rutrum. Pellentesque ullamcorper eu lacus vitae varius. Phasellus ante nisl, mattis vel sagittis quis, vestibulum quis dolor. Vestibulum vehicula, dui id viverra vulputate, velit nisl egestas nisl, et dapibus massa ex eu massa. Vestibulum tellus leo, facilisis vitae tincidunt vitae, ultricies eu erat. Vivamus luctus dolor vel felis consectetur, ac volutpat nisi blandit.",
  },
];