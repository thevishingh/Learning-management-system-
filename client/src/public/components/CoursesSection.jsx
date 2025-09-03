import React from "react";
import CourseCard from "../hooks/CourseCard";

// Import your Lottie files
import reactLottie from "@/assets/Informative-pages/Banner-page/reactLottie.json";
import uiuxLottie from "@/assets/Informative-pages/Banner-page/uiuxLottie.json";
import jsLottie from "@/assets/Informative-pages/Banner-page/jsLottie.json";
import pythonLottie from "@/assets/Informative-pages/Banner-page/pythonLottie.json";
import dsaLottie from "@/assets/Informative-pages/Banner-page/dsaLottie.json";
import devopsLottie from "@/assets/Informative-pages/Banner-page/devopsLottie.json";
import fullstackLottie from "@/assets/Informative-pages/Banner-page/fullstackLottie.json";
import mlLottie from "@/assets/Informative-pages/Banner-page/mlLottie.json";
import marketingLottie from "@/assets/Informative-pages/Banner-page/marketingLottie.json";
import gptLottie from "@/assets/Informative-pages/Banner-page/gptLottie.json";
import appDevLottie from "@/assets/Informative-pages/Banner-page/appDevLottie.json";
import cybersecurityLottie  from "@/assets/Informative-pages/Banner-page/cybersecurityLottie.json";  


const courseList = [
  {
    lottie: reactLottie,
    title: "Master React in 30 Days",
    description: "Learn React from scratch with hands-on projects.",
    instructor: "John Doe",
    rating: "4.8",
    price: "1499",
  },
  {
    lottie: uiuxLottie,
    title: "UI/UX Design Bootcamp",
    description: "Design engaging interfaces with Figma and Adobe XD.",
    instructor: "Sarah Parker",
    rating: "4.6",
    price: "1299",
  },
  {
    lottie: jsLottie,
    title: "Advanced JavaScript",
    description: "Deep dive into JS concepts and modern practices.",
    instructor: "Mark Wilson",
    rating: "4.7",
    price: "1399",
  },
  {
    lottie: pythonLottie,
    title: "Python for Beginners",
    description: "Build a strong Python foundation with mini projects.",
    instructor: "Lisa Ray",
    rating: "4.5",
    price: "999",
  },
  {
    lottie: dsaLottie,
    title: "Data Structures & Algorithms",
    description: "Crack coding interviews with strong DSA skills.",
    instructor: "Amit Mishra",
    rating: "4.9",
    price: "1599",
  },
  {
    lottie: devopsLottie,
    title: "DevOps Essentials",
    description: "Learn CI/CD, Docker, Jenkins, and Kubernetes.",
    instructor: "Raj Verma",
    rating: "4.8",
    price: "1699",
  },
  {
    lottie: fullstackLottie,
    title: "Full Stack Web Development",
    description: "Become a full stack pro with MERN stack.",
    instructor: "Nina Singh",
    rating: "4.7",
    price: "1799",
  },
  {
    lottie: mlLottie,
    title: "Machine Learning A-Z",
    description: "Step-by-step ML course with real-world projects.",
    instructor: "Dr. Arjun Patel",
    rating: "4.8",
    price: "1999",
  },
  {
    lottie: marketingLottie,
    title: "Digital Marketing Mastery",
    description: "Grow your brand with SEO, ads, and strategy.",
    instructor: "Megha Kapoor",
    rating: "4.6",
    price: "1199",
  },
  {
    lottie: gptLottie,
    title: "AI with ChatGPT & GPT-4",
    description: "Build AI apps with OpenAI and prompt engineering.",
    instructor: "Tanmay Das",
    rating: "4.8",
    price: "1699",
  },
 {
  lottie: appDevLottie,
  title: "Mobile App Development Mastery",
  description: "Create stunning Android & iOS apps with Flutter and React Native.",
  instructor: "Rohan Mehta",
  rating: "4.8",
  price: "1799",
},
{
  lottie: cybersecurityLottie,
  title: "Cybersecurity Fundamentals",
  description: "Protect systems and data from real-world threats.",
  instructor: "Dev Rathi",
  rating: "4.7",
  price: "1499",
},
];


const CoursesSection = () => {
  return (
    <section className="py-16 px-4 bg-bottom dark:bg-[#0b1727]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-syne font-[700] mb-8 text-center text-gray-800 dark:text-white">
          Explore Popular Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseList.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
