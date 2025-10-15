import mainLogo from '@/public/logos/torque-fest-logo.png'
import eventsImg from '@/public/logos/exciting-events-logo.svg'
import aboutUsImg from '@/public/logos/college-campus-logo.svg'

import adClashLogo from '@/public/event-logos/ad-clash.png'
import assemblexLogo from '@/public/event-logos/assemblex.png'
import creepyClipsLogo from '@/public/event-logos/creepy-clips.png'
import curseOfCadLogo from '@/public/event-logos/curse-of-cad.png'
import knightAuctionLogo from '@/public/event-logos/knigths-auction.png'
import memechanicsLogo from '@/public/event-logos/memechanics.png'
import projectExpoLogo from '@/public/event-logos/project-expo.png'
import rcDaCorsaLogo from '@/public/event-logos/rc-da-corsa.png'
import techscriptLogo from '@/public/event-logos/techscript.png'
import tdpLogo from '@/public/event-logos/tdp-workshop.png'
import evLogo from '@/public/event-logos/ev-workshop.png'

import thiyaguPic from '@/public/event-coordinators/ThiyaguPhoto.jpg'
import mharishPic from '@/public/event-coordinators/MHarishPhoto.jpg'
import kesavanPic from '@/public/event-coordinators/KesavanPhoto.jpg'
import dhanavanthiriPic from '@/public/event-coordinators/DhanvanthiriPhoto.jpg'
import muthuPic from '@/public/event-coordinators/MuthukumaranPhoto.png'
import sanjayPic from '@/public/event-coordinators/SanjayMathavPhoto.png'
import nithyaPic from '@/public/event-coordinators/NithyananthamPhoto.png'
import sivaramanPic from '@/public/event-coordinators/SivaramanPhoto.jpg'
import aharishPic from '@/public/event-coordinators/AHarishPhoto.jpg'
import arjunPic from '@/public/event-coordinators/ArjunPhoto.png'
import abineshPic from '@/public/event-coordinators/AbineshPhoto.png'
import anandPic from '@/public/event-coordinators/AnandhrajaPhoto.jpg'
import giriPic from '@/public/event-coordinators/GiridharanPhoto.jpg'
import akashPic from '@/public/event-coordinators/AkashKumarPhoto.jpg'
import nandhaPic from '@/public/event-coordinators/NandhaKumarPhoto.jpg'
import jananiPic from '@/public/event-coordinators/JananiPhoto.jpg'
import sriDharshiniPic from '@/public/event-coordinators/SriDharshiniPhoto.jpg'
import rishiPic from '@/public/event-coordinators/RishiPhoto.jpg'
import kawinPic from '@/public/event-coordinators/KawinPhoto.jpg'
import bashaPic from '@/public/event-coordinators/BashaPhoto.jpg'
import suryaPic from '@/public/event-coordinators/SuryaPhoto.jpg'
import santhoshPic from '@/public/event-coordinators/SanthoshPhoto.jpg'
import abishekPic from '@/public/event-coordinators/AbishekPhoto.jpg'

import sangeethPic from '@/public/our-team/student-coordinators/sangeeth.webp'
import saiPic from '@/public/our-team/student-coordinators/sai.webp'
import mahentraPic from '@/public/our-team/student-coordinators/mahentra.webp'
import sriramPic from '@/public/our-team/student-coordinators/sriram.webp'
import priyankaPic from '@/public/our-team/student-coordinators/priyanka.webp'

import ceoPic from '@/public/our-team/staffs/ceo.jpg'
import principalPic from '@/public/our-team/staffs/Principal.jpeg'
import rpPic from '@/public/our-team/staffs/rp.jpeg'
import hodPic from '@/public/our-team/staffs/hod.jpg'
import prabhuPic from '@/public/our-team/staffs/prabhuSir.png'
import dineshPic from '@/public/our-team/staffs/dineshSir.jpg'

import img_1 from "@/public/about-us-page/img_1.jpg";
import img_2 from "@/public/about-us-page/img_2.jpg";
import img_3 from "@/public/about-us-page/img_3.jpg";
import img_4 from "@/public/about-us-page/img_4.jpg";
import img_5 from "@/public/about-us-page/img_5.jpg";
import img_6 from "@/public/about-us-page/img_6.jpg";
import img_7 from "@/public/about-us-page/img_7.jpg";
import img_8 from "@/public/about-us-page/img_8.jpg";

import clgImg from '@/public/about-us-page/clg-img.jpg'
import departmentImg from '@/public/about-us-page/department.jpeg'
import secMotorsportsImg from '@/public/about-us-page/sec-motorsports-logo.jpeg'

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/events", label: "Events" },
  { to: "/our-team", label: "Our Team" },
  { to: "/faqs", label: "FAQs" },
];

export {
  mainLogo
}


export const eventsContent = {
  title: "Exciting Events",
  description: "Join us to experience engineering excellence at SAIMECH’25 – TORQUEFEST! A perfect blend of technology, collaboration through interactive workshops, exciting technical and Non technical event along with immersive activities.",
  linkLabel: "Explore Events",
  linkTo: "/events",
  img: eventsImg,
  imgAlt: "events",
  imgWidth: 320,
};

export const aboutContent = {
  title: "About Us",
  img: aboutUsImg,
  imgAlt: "events",
  imgWidth: 380,
  description: "Sri Sai Ram Engineering College, Chennai, established in the year 1995 by MJF. Ln. Leo Muthu, Chairman of Sapthagiri Educational Trust, is a non-profitable and a non-minority institution.  The Department of Mechanical Engineering, accredited by the NBA(4 times) is backed by a well experienced teaching professionals, state of the art laboratories and actively participating in societies such as SAE, IEEE, IEI, ISHRAE and IWS, etc.,. The SEC Motorsports includes The Rocketeer Racing, Team Evega Racing, Team Luaskart, Team Agrosters & Revival Racing.",
  linkTo: "/about",
  linkLabel: "Learn More",
};


export const quickLinks = {
  title: "Quick Links",
  links: [
    { name: "Home", linkTo: "/" },
    { name: "About Us", linkTo: "/about" },
    { name: "Events", linkTo: "/events" },
    { name: "Our Team", linkTo: "/our-team" },
    { name: "FAQs", linkTo: "/faqs" },
  ],
};

export const eventsData = [
  {
    id: 1,
    logo: techscriptLogo,
    title: "TechScript",
    description:
      "Present innovative engineering solutions addressing real-world challenges through engaging presentations and Q&A sessions.",
    guidelines: [
      "Team size: 2 – 3 members.",
      "Selection will be on a first-come, first-served basis.",
      "Teams will have a presentation duration of 5 minutes and Q&A session of 2 minutes.",
      "Participants must send their presentation PPT on or before 25.10.2025.",
      "Participants must assemble in the mentioned venue on time."
    ],
    generalInstructions: [
      {
        title: "1. PRESENTATION GUIDELINES",
        points: [
          "Time Limit: Each team/participant will have 7 minutes for the presentation followed by 2 minutes for Q&A.",
          "Format: The presentation should be in PowerPoint (PPT) format, and one slide must contain Business model of your topic.",
          "Prepare a number of slides based on the given time limit."
        ]
      },
      {
        title: "2. TECHNICAL REQUIREMENTS",
        points: [
          "Participants must send a copy of their presentation in advance through mail.",
          "System and Projector Facility will be arranged for you. Bring of your laptop is highly appreciable.",
          "If using special software or videos, inform the organizers beforehand."
        ]
      },
      {
        title: "3. SUBMISSION & FORMATTING",
        points: [
          "Abstract word limit: 250–300 words",
          "Format: Times New Roman, 12 pt, 1.5 line spacing",
          "Presentation medium: PPT (7–10 slides maximum)",
          "Time: 10 minutes (5 – 7 mins presentation + 2 min Q&A)"
        ]
      }
    ],
    eventCoordinators: [
      { image: kesavanPic, name: "KESAVAN S", contact: "8148864524" },
      { image: dhanavanthiriPic, name: "DHANAVANTHIRI B", contact: "8015792388" }
    ],
    notes: [
      "The confirmation mail will be sent to participants, and they will be added to a WhatsApp group for communication.",
      "Please note that the registration for this event is handled through a common Google Form.",
      "Stay tuned for important information and instructions shared via email and WhatsApp.",
      "You can click Go Back to return to the events page or Register Now to proceed with registration."
    ]
  },

  {
    id: 2,
    logo: curseOfCadLogo,
    title: "Curse of CAD",
    description:
      "Unleash your creativity and engineering skills in the Curse of CAD. Participants will design a complex object or assembly using SOLIDWORKS within a specific time frame. It’s a test of design principles, accuracy, and execution.",
    guidelines: [
      "Participants must compete individually.",
      "A 3D model will be given, and you must complete it within 1 hour using SOLIDWORKS software.",
      "There will be two rounds, and winners will be chosen based on accuracy and time management.",
      "Any form of malpractice will result in disqualification.",
      "PC will be provided to participants; you may also bring your own laptop."
    ],
    eventCoordinators: [
      { image: thiyaguPic , name: "THIYAGARAJAN S", contact: "9092552423" },
      { image: mharishPic, name: "HARISH M", contact: "7639011009" }
    ],
    notes: [
      "The confirmation mail will be sent to participants, and they will be added to a WhatsApp group for communication.",
      "Please note that the registration for this event is handled through a common Google Form.",
      "Stay tuned for important information and instructions shared via email and WhatsApp.",
      "You can click Go Back to return to the events page or Register Now to proceed with registration."
    ]
  },


  {
    id: 3,
    logo: rcDaCorsaLogo,
    title: "RC Da Corsa",
    description:
      "Race your remote-controlled cars across challenging tracks in this thrilling RC Racing event testing control, speed, and precision.",
    guidelines: [
      "Team size: 2 – 4 members.",
      "Selection will be on a first-come, first-served basis.",
      "Initial inspection will be done before the race.",
      "Each penalty will cause you an additional time.",
      "Participants are fully responsible for their own RC car.",
      "Dimensions: 30 cm × 30 cm × 30 cm; Weight: 2 – 5 kg."
    ],
    generalInstructions: [
      {
        title: "",
        points: [
          "Only one participant can control the car at a time.",
          "The race will generally be a time trial or circuit race where the RC car completes laps or a set course in the shortest time possible.",
          "The RC car must be fully remote controlled during the race; no physical assistance except by designated marshals.",
          "If the car overturns or goes off track, marshals may place it back on the track with time penalties applied.",
          "Cars must not leave any disintegrated parts on the track or deliberately damage opponents' vehicles.",
          "The car must comply with size, weight, and technical specifications as defined by the event organizers (e.g., around 30 × 30 × 30 cm, max 5 kg).",
          "The track will have checkpoints; completing laps requires crossing these checkpoints.",
          "Drivers must remain in designated driver areas and should not run alongside the car on the track.",
          "Time penalties apply for touching the car, boundary violations, skipping obstacles.",
          "Obstacle challenges may include ramps, rough terrain, and maybe water/fire etc., for testing control and durability of RC Car.",
          "Any damage to track leads to penalty."
        ]
      }
    ],
    eventCoordinators: [
      { image: muthuPic, name: "MUTHUKUMARAN V", contact: "8072844918" },
      { image: sanjayPic, name: "SANJAY MATHAV M", contact: "8148743882" },
      { image: nithyaPic, name: "NITHYANANDAM M", contact: "9159160194" }
    ],
    notes: [
      "The confirmation mail will be sent to participants, and they will be added to a WhatsApp group for communication.",
      "Please note that the registration for this event is handled through a common Google Form.",
      "Stay tuned for important information and instructions shared via email and WhatsApp.",
      "You can click Go Back to return to the events page or Register Now to proceed with registration."
    ]
  },

  {
    id: 4,
    logo: projectExpoLogo,
    title: "Project Expo",
    description:
      "A celebration of innovation, sustainability, and engineering brilliance where students present projects aligned with the UN Sustainable Development Goals (SDGs).",
    guidelines: [
      "Each team must have 2–4 members.",
      "Cross-year collaboration is allowed but participants must be from the same institution.",
      "Internet-based or copied projects will be disqualified.",
      "One member must be designated as the Team Leader.",
      "Participants must carry College ID cards.",
      "Teams must maintain professionalism and discipline.",
      "The decision of judges is final and binding."
    ],
    generalInstructions: [
      {
        title: "1. PROJECT REQUIREMENTS",
        points: [
          "Projects must address at least any one SDG.",
          "Working models/prototypes are strongly encouraged. Conceptual designs will also be accepted with proper justification.",
          "Each team must prepare a PPT (max 10 pages) covering:",
          "Title & Problem Statement",
          "Objective & SDG Linkage",
          "Methodology / Design",
          "Expected Impact",
          "Conclusion"
        ]
      },
      {
        title: "2. PRESENTATION GUIDELINES",
        points: [
          "Time: 7 minutes presentation + 3 minutes Q&A.",
          "Mode: PPT/Prototype/Poster display.",
          "Teams must rehearse for smooth delivery and stick to the time limit.",
          "Participants must send their presentation PPT on or before 26.10.2025."
        ]
      }
    ],
    eventCoordinators: [
      { image: sivaramanPic, name: "SIVARAMAN M", contact: "8925202427" },
      { image: aharishPic, name: "HARISH A", contact: "9344533357" }
    ],
    notes: [
      "The confirmation mail will be sent to participants, and they will be added to a WhatsApp group for communication.",
      "Please note that the registration for this event is handled through a common Google Form.",
      "Stay tuned for important information and instructions shared via email and WhatsApp.",
      "You can click Go Back to return to the events page or Register Now to proceed with registration."
    ]
  },

  {
    id: 5,
    logo: adClashLogo,
    title: "AD Clash",
    description:
      "A fun-filled and creative marketing event where teams conceptualize and perform live advertisements for random products.",
    guidelines: [
      "Each team should consist of 2 – 4 members.",
      "Each team must report 15 to 30 minutes before the event for product allotment.",
      "Random products will be given to the team before their performance.",
      "Maximum time limit for each team performance is 10 minutes.",
      "Teams will be evaluated based on creativity, presentation, entertainment value and advertisement strategy.",
      "Use of offensive language, obscene gestures or false claims is strictly prohibited and will lead to disqualification."
    ],
    eventCoordinators: [
      { image: arjunPic, name: "ARJUN P B", contact: "9524007686" },
      { image: abineshPic, name: "ABINESH J", contact: "8838338464" }
    ],
    notes: [
      "The confirmation mail will be sent to participants, and they will be added to a WhatsApp group for communication.",
      "Please note that the registration for this event is handled through a common Google Form.",
      "Stay tuned for important information and instructions shared via email and WhatsApp.",
      "You can click Go Back to return to the events page or Register Now to proceed with registration."
    ]
  },

  {
    id: 6,
    logo: memechanicsLogo,
    title: "Memechanics",
    description:
      "A meme-making competition celebrating humor, creativity, and engineering culture.",
    guidelines: [
      "Each team should consist of 2 members.",
      "This event will be conducted online.",
      "Participants must create a meme based on the given theme or topic.",
      "Meme should be fun, creative, entertaining, and respectful.",
      "Meme must not contain any vulgarity, offensive, political, or religiously sensitive content.",
      "Judging will be based on creativity, humor, originality, and relevance to the theme given.",
      "Topics: Engineering Reloaded, Campus Chronicles, Hostel Diaries, Classroom Confidential, Canteen Tales."
    ],
    eventCoordinators: [
      { image: anandPic, name: "ANANDHARAJA S", contact: "9500792433" },
      { image: giriPic, name: "GIRIDHARAN V", contact: "6374305761" }
    ],
    notes: [
      "The confirmation mail will be sent to participants, and they will be added to a WhatsApp group for communication.",
      "Please note that the registration for this event is handled through a common Google Form.",
      "Stay tuned for important information and instructions shared via email and WhatsApp.",
      "You can click Go Back to return to the events page or Register Now to proceed with registration."
    ]
  },

  {
    id: 7,
    logo: assemblexLogo,
    title: "AssembleX",
    description:
      "A mechanical assembly challenge where participants must assemble given components correctly within the time limit.",
    guidelines: [
      "Each team should consist of 2 participants.",
      "Participants must complete the assembly within the given time.",
      "The parts should be assembled in the correct order and orientation as per the given instructions/model.",
      "Do not bend, break, or damage the mechanical parts provided. Any intentional damage may lead to disqualification.",
      "Teams are not allowed to exchange or borrow parts from other teams.",
      "Arguments, misbehaviour, or disturbing other participants will not be tolerated. Violating teams will be disqualified."
    ],
    eventCoordinators: [
      { image: akashPic, name: "SREE AKASH KUMAR S", contact: "9043657272" },
      { image: nandhaPic, name: "NANDHAKUMAR N", contact: "6381302542" }
    ],
    notes: [
      "The confirmation mail will be sent to participants, and they will be added to a WhatsApp group for communication.",
      "Please note that the registration for this event is handled through a common Google Form.",
      "Stay tuned for important information and instructions shared via email and WhatsApp.",
      "You can click Go Back to return to the events page or Register Now to proceed with registration."
    ]
  },

  {
    id: 8,
    logo: creepyClipsLogo,
    title: "Creepy Clips",
    description:
      "A short-reel event celebrating the emotions, creativity, and energy of campus life through visuals and storytelling.",
    guidelines: [
      "Each team consists of 1 – 2 members.",
      "Participants should capture the campus infrastructure, students, events, nature, and symposium vibes.",
      "Captured reel or video time should be maximum 1 minute.",
      "Participants may use filters, music, and captions to enhance their creativity.",
      "Maintain decorum while filming and avoid disturbing classes or events.",
      "Reels will be judged based on creativity, video quality, and editing."
    ],
    eventCoordinators: [
      { image: jananiPic, name: "JANANI G", contact: "9585579223" },
      { image: sriDharshiniPic, name: "SHRI DHARSHANI P", contact: "9094801330" }
    ],
    notes: [
      "The confirmation mail will be sent to participants, and they will be added to a WhatsApp group for communication.",
      "Please note that the registration for this event is handled through a common Google Form.",
      "Stay tuned for important information and instructions shared via email and WhatsApp.",
      "You can click Go Back to return to the events page or Register Now to proceed with registration."
    ]
  },

  {
    id: 9,
    logo: knightAuctionLogo,
    title: "Knights Auction",
    description:
      "An IPL-style cricket auction event where participants act as franchise owners, bidding strategically to build their dream team.",
    guidelines: [
      "Each team consists of two members.",
      "Each team will be provided with a budget of Rs.100 crores.",
      "Each team must select 16 to 20 players for their squad, following the given rules.",
      "The squad must consist of 5 to 6 batsmen, 5 to 6 bowlers, 4 to 5 all-rounders, and 2 to 3 wicketkeepers.",
      "A team can have a maximum of six foreign players.",
      "At the end of the auction, the playing XI should have 4 batsmen, 3 bowlers, 3 all-rounders, and 1 wicketkeeper.",
      "Winners will be decided based on the total credit points of the playing XI.",
      "Violating any rule will lead to immediate disqualification."
    ],
    eventCoordinators: [
      { image: kawinPic, name: "KAWIN HARSHAN K", contact: "9176602306" },
      { image: rishiPic, name: "RISHIKESHWARAN R H", contact: "7904124281" }
    ],
    notes: [
      "The confirmation mail will be sent to participants, and they will be added to a WhatsApp group for communication.",
      "Please note that the registration for this event is handled through a common Google Form.",
      "Stay tuned for important information and instructions shared via email and WhatsApp.",
      "You can click Go Back to return to the events page or Register Now to proceed with registration."
    ]
  },

  {
    id: 10,
    logo: tdpLogo,
    title: "3D Printing Workshop",
    description:
      "A hands-on workshop exploring 3D printing technology, from design to fabrication, guided by expert instructors.",
    guidelines: [
      "Limited seats available – selection is strictly first come, first served.",
      "Online registration is mandatory to confirm participation.",
      "Participants must carry their college ID on the day of the workshop.",
      "Be punctual and attend the full session to receive your certificate.",
      "Maintain discipline and decorum throughout the event."
    ],
    eventCoordinators: [
      { image: bashaPic, name: "GNAMATH BASHA A", contact: "9600159097" },
      { image: suryaPic, name: "SURYA A", contact: "6380530806" }
    ],
    notes: [
      "The confirmation mail will be sent to participants, and they will be added to a WhatsApp group for communication.",
      "Please note that the registration for this event is handled through a common Google Form.",
      "Stay tuned for important information and instructions shared via email and WhatsApp.",
      "You can click Go Back to return to the events page or Register Now to proceed with registration."
    ]
  },

  {
    id: 11,
    logo: evLogo,
    title: "EV Technology Workshop",
    description:
      "A practical workshop exploring the technology behind electric vehicles, including batteries, motors, and charging systems.",
    guidelines: [
      "Online registration is mandatory to confirm your participation.",
      "Limited seats available – allocation will be done on a first-come, first-served basis.",
      "Participants must carry their college ID card on the day of the workshop.",
      "Be punctual and attend the full session to receive your certificate.",
      "Maintain discipline and decorum throughout the event."
    ],
    eventCoordinators: [
      { image: santhoshPic, name: "SANTHOSH KUMAR P", contact: "6374903071" },
      { image: abishekPic, name: "KARUPU ABISHEK M", contact: "9384954085" }
    ],
    notes: [
      "The confirmation mail will be sent to participants, and they will be added to a WhatsApp group for communication.",
      "Please note that the registration for this event is handled through a common Google Form.",
      "Stay tuned for important information and instructions shared via email and WhatsApp.",
      "You can click Go Back to return to the events page or Register Now to proceed with registration."
    ]
  }
];


export const faqContent = [
  {
    question: "What is the dress code for the participants?",
    answer:
      "Formal Dress Code. Jeans, T-shirts, Casuals are not allowed (both boys and girls).",
  },

  {
    question: "Is transport facilities available for participants?",
    answer:
      "College Bus: Boarding point - Viveks Showroom, Rajaji road, West Tambaram at 8:00 A.M.",
  },

  {
    question: "When and where will the events be conducted?",
    answer:
      "Events will be conducted as per the program agenda will be given on the day of symposium",
  },
  {
    question: "Will lunch be provided to the students?",
    answer: "Yes, lunch will be provided for all participants.",
  },
  {
    question: "Is there any registration fee to participate in the events?",
    answer: "There is no entry fee.",
  },
  {
    question: "I have more questions regarding the event.",
    answer:
      "You can reach our event coordinator, the contact information is provided in the respective events page",
  },
  {
    question: "Can I participate in more than one event?",
    answer: "No, a participant should register for only one event.",
  },
  {
    question: "Is accommodation facilities available for participants ?",
    answer: "Yes, Participants from other districts ( Chennai, Chengalpattu, Kancheepuram, Thiruvallur) has accommodation facility. NOTE: Need a prior information from participants for accommodation."
  }
];




export const motorSportsImages = [
  {
    img: '/about-us-page/img_1.jpg',
    imgAlt: "img-1",
  },
  {
    img: '/about-us-page/img_2.jpg',
    imgAlt: "img-2",
  },
  {
    img: '/about-us-page/img_3.jpg',
    imgAlt: "img-3",
  },
  {
    img: '/about-us-page/img_4.jpg',
    imgAlt: "img-4",
  },
  {
    img: '/about-us-page/img_5.jpg',
    imgAlt: "img-5",
  },
  {
    img: '/about-us-page/img_6.jpg',
    imgAlt: "img-6",
  },
  {
    img: '/about-us-page/img_7.jpg',
    imgAlt: "img-7",
  },
  {
    img: '/about-us-page/img_8.jpg',
    imgAlt: "img-8",
  },
];

export const aboutClg = {
  title: "Our College",
  img: clgImg,
  imgAlt: "college img",
  imgWidth: 500,
  description:
    "Sri Sai Ram Engineering College, Chennai, established in the year 1995 by MJF.Ln.Leo Muthu, Chairman of Sapthagiri Educational Trust, a non-profitable and a non-minority institution. A well defined vision, highly committed mission and a dedicated leadership facilitate Sri Sai Ram Engineering College to be in the best of educational institutions in the country. The institution is situated in a sprawling campus with architecturally and aesthetically designed buildings, blocks, stadiums, auditoriums, hostels, gymnasium and the sports grounds. The institution is affiliated to Anna University and approved by the All India Council for Technical Education (AICTE), New Delhi.",
};

export const aboutSecMotorSports = {
  title: "SEC Motorsports",
  img: secMotorsportsImg,
  imgAlt: "SecMotorsports img",
  imgWidth: 500,
  description:
    "SEC Motorsports is a club from the Mechanical Engineering Department of Sri Sai Ram Engineering College. This club is the hub of all motorsport's events under one banner. This includes The Rocketeer Racing, Team Evega Racing, Team Luaskart, Team Agrosters, Racing Rois, Green Pyora, Black Squad and Revival Racing those take part in various National Level Events. These teams are the club's pride as they have won various prestigious awards under different categories in different core events and also got All India Ranking (AIR). SEC Motorsports encourages students to enroll, get hands on experience and gain knowledge on recent automotive and manufacturing technologies, starts from design, modelling, prototyping and fabrication.",

  linkTo: "https://www.instagram.com/sec_motorsports/",
};

export const aboutDepartment = {
  title: "Our Department",
  img: departmentImg,
  imgAlt: "department img",
  imgWidth: 500,
  description:
    "Established in the year 1995, the Department of Mechanical Engineering has excelled in its infrastructural facilities keeping pace with the latest development in technologies. The Department is accredited(4 times) by the National board of accreditation and is backed by professionally experienced and highly qualified faculty and supporting staff. More than 350 students have enrolled in the Mechanical Engineering branch. The Department has well developed laboratories equipped with latest equipments. Professional societies like Society of Automotive Engineers (SAE) and the Association of Mechanical Engineering are regularly conducting seminars, workshops and guest lectures by eminent personalities in various streams of mechanical engineering for making the students Industry Ready.  Our Department received AICTE-CII industry linked institutional award in the year 2015 and 2020.",
};


export const keyPersonsProfiles = [
  {
    img: ceoPic,
    imgAlt: "ceoSirImg",
    name: "Dr. Sai Prakash Leomuthu",
    year: `Chairman & CEO - Sairam Institutions`,
    linkedIn: "https://www.linkedin.com/in/sairamceo/",
  },

  {
    img: principalPic,
    imgAlt: "principalSirImg",
    name: "Dr. J. Raja",
    year: "Principal",
    linkedIn: "https://www.linkedin.com/in/raja-j-32b44164/",
  },
  {
    img: rpPic,
    imgAlt: "rpSirImg",
    name: "Dr. A. Rajendra Prasad",
    year: "Dean of Student Affairs",
    linkedIn: "https://www.linkedin.com/in/arprasad225/",
  },
  {
    img: hodPic,
    imgAlt: "hodSirImg",
    name: "Dr. B. Vijaya Ramnath",
    year: "Head of the Department",
    linkedIn: "https://www.linkedin.com/in/dr-b-vijaya-ramnath-5bb11542/",
  },
];

export const staffCoordinatorsProfiles = [
  {
    img: prabhuPic,
    imgAlt: "prabhuSirImg",
    name: "Mr. V. Prabhu",
    year: "Assistant Professor",
    linkedIn: "https://www.linkedin.com/in/prabhu-v-b5b507165/",
  },

  {
    img: dineshPic,
    imgAlt: "dineshSirImg",
    name: "	Mr. S.K. Dinesh Kumar",
    year: "Assistant Professor",
    linkedIn:
      "https://www.linkedin.com/in/dinesh-kumar-s-k-46608339/",
  },
];

export const studentCoordinatorsProfiles = [
  {
    id: 1,
    img: sangeethPic,
    imgAlt: "sangeethImg",
    name: "Sangeeth V",
    year: "President",
    linkedIn: "https://www.linkedin.com/in/sangeeth74/",
  },

  {
    id: 2,
    img: saiPic,
    imgAlt: "saiRohithImg",
    name: "Sai Rohith V",
    year: "Vice President",
    linkedIn: "https://www.linkedin.com/in/sairohithchidatmav/",
  },

  {
    id: 3,
    img: mahentraPic,
    imgAlt: "mahentraImg",
    name: "Mahenthra KP",
    year: "Secretary",
    linkedIn: "https://www.linkedin.com/in/mahenthra-kp-7b830b317/",
  },

  {
    id: 4,
    img: sriramPic,
    imgAlt: "sriramImg",
    name: "Shriram R",
    year: "Outreach",
    linkedIn: "https://www.linkedin.com/in/allforgood/",
  },

  {
    id: 5,
    img: priyankaPic,
    imgAlt: "priyankaImg",
    name: "Priyanka S",
    year: "Treasurer",
    linkedIn: "https://www.linkedin.com/in/priyanka-s-16b6522b7/",
  },
];