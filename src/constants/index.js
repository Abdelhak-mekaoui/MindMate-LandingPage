import { steps } from "framer-motion";
import {
 


  cc,

  shopify,
  vsc,
  tiktok,
  i1,
  i2,
  i3,
  i4,
} from "../assets";



import avt1 from "../assets/avatar1.jpg";
import avt2 from "../assets/avatar2.jpg";
import avt3 from "../assets/avatar3.jfif";
import project1 from "../assets/portfolio1.png";
import project2 from "../assets/portfolio2.png";
import project3 from "../assets/portfolio4.png";
import Section1 from '../assets/Section41.svg'
import Section2 from '../assets/Section42.svg'
import Section3 from '../assets/Section43.svg'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Services",
  },
  {
    id: "mobile app",
    title: "mobile app",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cognitive stimulation",
    icon: vsc,
  },
  {
    title: "Story telling",
    icon: shopify,
  },
  {
    title: "Real time monitoring",
    icon: cc,
  },
  {
    title: "Medication reminder",
    icon: tiktok,
  },
];



const experiences = [
  {
    title: "Cognitive stimulation",
    company_name: "",
    icon: vsc,
    iconBg: "#383E56",
    date: "",
    points: [
      "Mental Stimulation: Games engage the brain and slow cognitive decline.",
      "Memory Enhancement: Memory games improve recall abilities",
      "Routine: Regular play can establish a structured daily routine.",
      "Quality of Life: Cognitive games can enhance the overall quality of life for Alzheimer's patients",
    ],
  },
  {
    title: "Medications Reminders",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "The service tailors medication reminders to individual patient needs.",
      "Personalized reminders increase medication adherence rates.",
      "Provides patients and families with peace of mind regarding medication schedules.",
    ],
  },
  {
    title: "Personalized stories",
    company_name: "",
    icon: cc,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "The robot crafts individualized stories based on a patient's life history.",
      "Stories are designed to trigger memories and evoke emotions.",
      "Patients feel a stronger connection to their own life stories.",
      "Families can contribute to the storytelling process, fostering connections.",
    ],
  },
  {
    title: "Real time monitoring",
    company_name: "",
    icon: tiktok,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      " Provides real-time visual monitoring, enhancing safety.",
      "Offers comprehensive reports on the patient's well-being and activities.",
      "Ensures immediate response to emergencies or unusual situations.",
      "Helps healthcare providers make informed decisions for patient care.",
      "Keeps families informed about their loved one's condition and daily activities."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "umerous studies show that cognitive stimulation activities, such as personalized storytelling or games, can slow cognitive decline in Alzheimer's patients.",
    name: "Alzheimer's Society",
    designation: "",
    company: "",
    image: vsc,
  },
  {
    testimonial:
      "Research indicates that medication adherence improves significantly when reminders are tailored to an individual's schedule and preferences.",
    name: "Journal of the American Pharmacists Association",
    designation: "",
    company: "",
    image: vsc,
  },
  {
    testimonial: "Studies have demonstrated that real-time monitoring with video streaming and vital sign signaling enhances safety and reduces the risk of adverse events in Alzheimer's patients.",
    name: "Journal of Alzheimer's Disease",
    designation: "",
    company: "",
    image: vsc,
  },
];

const projects = [
  {
    name: "Memory loss",
    description:
      "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "googlefirebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Section1,
    source_code_link: "https://github.com/zeph1697/restaurant-app",
    link: "https://zeph1697.github.io/restaurant-app/",
  },
  {
    name: "confusion",
    description:
      "Responsive portfolio in flat modern material design showcases my projects.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailjs",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: Section2,
    source_code_link: "https://github.com/zeph1697/portfolio",
    link: "https://zeph1697.github.io/portfolio/",
  },
  {
    name: "Daily challenges",
    description:
      "A comprehensive website platform that allows users to choose task, training level, and offers curated recommendations for people who wants to keep the shape nicely.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "multi-page",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Section3,
    source_code_link: "https://github.com/zeph1697/fitness-website",
    link: "https://zeph1697.github.io/fitness-website/",
  },
];
const statistics = [
  {

    name: "Real-Time Tracking",
    description:
      "The insole utilizes advanced sensors to monitor your posture and movements in real time, providing valuable insights into activities that may trigger sciatic pain.",
    image: shopify,

  },
  {
    name: "Pain Prediction",
    description:

      "By analyzing your posture and activities, the insole predicts potential pain triggers, allowing you to make informed decisions to prevent discomfort before it starts.",
    image: shopify,

  },
  {
    name: "Battery Life",
    description:
      "Ensure the insoles have a durable and long-lasting battery life, allowing users to rely on them throughout the day without frequent charging.",
    image: shopify,

  },
];

export const features = [
  {

    name: "Real-Time Tracking",
    description:
      "The insole utilizes advanced sensors to monitor your posture and movements in real time, providing valuable insights into activities that may trigger sciatic pain.",
    image: shopify,

  },
  {
    name: "Pain Prediction",
    description:

      "By analyzing your posture and activities, the insole predicts potential pain triggers, allowing you to make informed decisions to prevent discomfort before it starts.",
    image: shopify,

  },
  {
    name: "Battery Life",
    description:
      "Ensure the insoles have a durable and long-lasting battery life, allowing users to rely on them throughout the day without frequent charging.",
    image: shopify,

  },
];

const step = [
  {
    title: "Get our Product",
    img:i1
  },
  {
    title: "Download Our App",
    img:i2
  },
  {
    title: "Login",
    img:i3
  },{
    title: "Get better!",
    img:i4
  },
]


export {step, services, statistics, experiences, testimonials, projects };
