"use client";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BrocellaAbout2 from "@/assets/Informative-pages/Banner-page/Brocella-About-2.png";
import { GlowingEffectDemoSecond } from "../components/GlowingEffect";
import ColourfulText from "@/components/ui/colourful-text";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrocellaAbout3 from "@/assets/Informative-pages/Banner-page/Brocella-About-3.jpg";
import BrocellaAbout4 from "@/assets/Informative-pages/Banner-page/Brocella-About-4.jpg";
import StatsSection from "@/components/stats-4";
import Logopage from "../components/Logopage";
import Aboutcta from "../components/Aboutcta";
import Testimonials from "../components/TestimonialCard";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const images = gsap.utils.toArray(".animated-img");

    gsap.from(images, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <div className="bg-top">
        <section className="bg-opacity-30 py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <p className="text-base font-clash font-semibold tracking-wider text-green-600 uppercase">
                  The Future of Learning
                </p>
                <h1 className="mt-4 font-syne text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                  Upskill faster with <br className="hidden lg:block" />
                  <span className="text-yellow-500">Borcella LMS</span>
                </h1>
                <p className="mt-4 sm:text-xl font-mont-alt capitalize font-medium text-black lg:mt-8 md:text-lg">
                  Learn from industry pros, build real-world projects, and join
                  a powerful community that's redefining online education.
                </p>

                <Link
                  href="#"
                  className="inline-flex font-mont-alt items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                >
                  Start Learning Now
                  <svg
                    className="w-6 h-6 ml-8 -mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>
              </div>

              <div>
                <img
                  className="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                  alt="Borcella LMS Preview"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="overflow-hidden bg-bottom py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            {/* Left Column - Image */}
            <div className="flex justify-center">
              <img
                src={BrocellaAbout2}
                alt="Borcella LMS Dashboard"
                className="max-w-md lg:max-w-xl"
              />
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6 max-md:px-6">
              <h2 className="text-3xl font-mont-alt font-bold text-gray-900 lg:text-4xl">
                Empowering Growth with Smarter Learning
              </h2>
              <p className="text-gray-600 font-mont text-lg">
                At Borcella LMS, we're redefining how teams learn and grow. Our
                journey has been driven by one mission: to make learning simple,
                engaging, and measurable for every business, at every stage.
              </p>
              <p className="text-gray-600 font-mont text-lg">
                From fast growing startups to global enterprises, Borcella
                equips organizations with powerful tools to onboard faster,
                upskill smarter, and drive measurable impact across every
                department.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "download", label: "Platform Users", value: "17M+" },
                  {
                    icon: "users",
                    label: "Enterprise Clients",
                    value: "1.2K+",
                  },
                  { icon: "message", label: "5-Star Reviews", value: "2,300+" },
                  {
                    icon: "devices",
                    label: "Courses Delivered",
                    value: "150K+",
                  },
                ].map(({ icon, label, value }, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex items-center gap-4 transition hover:shadow-md"
                  >
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <span className={`icon-[tabler--${icon}] text-xl`} />
                    </div>
                    <div>
                      <div className="text-lg font-syne font-semibold text-gray-900">
                        {value}
                      </div>
                      <div className="text-sm font-mont-alt text-gray-500">
                        {label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-top">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <h2 className="text-4xl font-mont-alt font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-xl lg:mx-0">
                Unlock Powerful Learning Tools for Smarter Teams
              </h2>
            </div>
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <p className="text-lg font-mont font-normal text-gray-500 mb-5">
                Borcella LMS equips organizations with modern, flexible learning
                experiences designed to drive engagement, upskill teams, and
                track progress all from one place.
              </p>
              <a
                href="#"
                className="flex font-mont-alt flex-row items-center justify-center gap-2 text-base font-semibold text-indigo-600 lg:justify-start hover:text-indigo-700"
              >
                Explore LMS Features
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            {/* Feature Card */}
            {[
              {
                icon: "📚",
                title: "Tailored Path",
                description:
                  "Deliver curated training journeys for individuals or departments with goal-based modules and progress tracking.",
              },
              {
                icon: "🔒",
                title: "Secure & Scalable",
                description:
                  "From startups to enterprises, Borcella LMS scales securely with your team while protecting sensitive learner data.",
              },
              {
                icon: "⚡",
                title: "Fast Onboarding",
                description:
                  "Upload content, assign courses, and launch training programs in minutes—with no technical skills required.",
              },
              {
                icon: "📊",
                title: "Real-Time Analytics",
                description:
                  "Monitor learner engagement, identify skill gaps, and export performance reports that inform smarter decisions.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-200"
              >
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 text-2xl">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 font-mont-alt">
                  {feature.title}
                </h4>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 font-mont-alt">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bottom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative py-12">
          <div className="">
            <ColourfulText text="Brocella" />
            <h1 className="mb-8 flex font-mont-alt leading-[5rem] font-extrabold max-w-7xl text-4xl tracking-tight text-gray-800 md:text-7xl">
              Powering Learning for Modern Teams & Future Leaders
            </h1>
            <p className="max-w-7xl font-mont-alt capitalize font-medium text-lg leading-relaxed text-gray-500">
              Borcella LMS is your all-in-one platform to train, upskill, and
              engage your workforce. With interactive courses, smart analytics,
              and seamless onboarding, we make learning a competitive advantage
              for fast-moving companies.
            </p>
          </div>
        </div>
        <section className="mx-auto pb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
          <GlowingEffectDemoSecond />
        </section>
      </section>

      <section className="bg-top">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Content */}
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
                <svg className="text-red-600 w-7 h-7" viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4h16v16H4z"
                  />
                </svg>
              </div>
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-mont-alt text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Built for Growth,
                  <br className="hidden md:block" />
                  Designed for{" "}
                  <span className="text-red-600 tracking-wide inline-block font-syne">
                    Learning
                  </span>
                </h2>
                <p className="text-base text-gray-700 font-mont md:text-[1rem] font-medium">
                  At Borcella LMS, we help teams and individuals unlock their
                  full potential with over 5,500 expert-led courses tailored for
                  real-world success.
                </p>
                <p className="text-base font-mont text-gray-700 md:text-[1rem] font-medium mt-4">
                  Whether you're stepping into tech for the first time or
                  advancing your leadership capabilities, Borcella provides
                  affordable, flexible, and engaging learning designed for
                  today’s fast-paced world.
                </p>
                <p className="text-base font-mont text-gray-700 md:text-[1rem] font-medium mt-4">
                  With lifetime access, remote-friendly formats, and powerful
                  insights, we’re more than just a platform we're your long term
                  learning partner.
                </p>
              </div>
            </div>

            {/* Image Grid */}
            <div
              ref={containerRef}
              className="flex items-center justify-center -mx-4 lg:pl-8"
            >
              <div className="flex flex-col items-end px-3">
                <motion.img
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="animated-img object-cover mb-6 rounded-2xl shadow-2xl h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  src={BrocellaAbout4}
                  alt="Borcella Learning Demo"
                />
                <motion.img
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="animated-img object-cover w-20 h-20 rounded-2xl shadow-2xl sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                  src={BrocellaAbout3}
                  alt="Engaging Content"
                />
              </div>
              <div className="px-3">
                <motion.img
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="animated-img object-cover w-40 h-40 rounded-2xl shadow-2xl sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                  src="https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg"
                  alt="Team Learning"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="bg-top">
        <Testimonials />
      </section>

      <Logopage />

      <Aboutcta />
    </>
  );
}
