import React from "react";
import { motion } from "framer-motion";
import BorcellaBannerImages from "@/assets/Informative-pages/Banner-page/Borcella-banner-1.png";
import BrocellaHomeBanner from "@/assets/Informative-pages/Banner-page/Borcella-home-banner.png";
import CourseVideoPodcastVideo from "@/assets/Informative-pages/Banner-page/Course-podcast-video-1.mp4";
import { MarqueeDemo } from "./Marquee";
import Stats from "./Stats";
export default function Banner() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section className="py-2  mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Video Section */}
          <div className="flex justify-end ">
            <img
              src={BrocellaHomeBanner}
              alt="BrocellaHomeBanner"
              className="max-h-[600px] w-full object-cover lg:max-h-[800px]"
            />
          </div>

          {/* Text Content Section */}
          <motion.div
            className="flex flex-col items-center text-center lg:max-w-3xl lg:items-start lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex font-mont-alt capitalize items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Now Live
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-down-right ml-2 size-4"
              >
                <path d="m7 7 10 10"></path>
                <path d="M17 7v10H7"></path>
              </svg>
            </motion.div>

            <motion.h1
              className="my-6 font-syne text-pretty text-4xl font-bold lg:text-6xl xl:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Master Learning with{" "}
              <span className="text-green-700 italic ">Borcella</span>
            </motion.h1>

            <motion.p
              className="mb-8 font-mont-alt max-w-xl text-zinc-600 lg:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              A complete learning platform that brings you expert-led courses,
              live classes, and interactive tools all tailored for modern online
              education.
            </motion.p>

            <motion.div
              className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-mont bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2 w-full sm:w-auto">
                Join Now
              </button>
              <button className="inline-flex cupo items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-mont border border-input bg-white hover:bg-zinc-100 hover:text-zinc-800 h-10 px-4 py-2 w-full sm:w-auto">
                Know About Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-down-right ml-2 size-4"
                >
                  <path d="m7 7 10 10"></path>
                  <path d="M17 7v10H7"></path>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 p-5  flex items-center justify-center">
        <div className="container">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4 max-w-full text-sm font-normal lg:mb-10 lg:py-2 lg:pl-2 lg:pr-5">
            <span className="mr-2 flex size-8 shrink-0 items-center justify-center rounded-full bg-zinc-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bell size-4"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </span>
            <p className="truncate font-mont-alt font-medium capitalize whitespace-nowrap">
              Trusted by 10,000+ educators and learning teams worldwide 🌍
            </p>
          </div>

          <motion.h1
            className="mb-6 font-mont-alt text-4xl font-semibold leading-none tracking-tighter md:text-5xl capitalize lg:text-6xl"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Power Your Learning Experience with{" "}
            <motion.span
              className="italic text-green-700 relative inline-block"
              animate={{
                rotate: [0, 5, -5, 0],
                transition: {
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                },
              }}
            >
              Borcella
            </motion.span>{" "}
            LMS
          </motion.h1>

          <p className="max-w-2xl text-black capitalize font-mont md:text-[2vw] lg:text-xl">
            Borcella is the all-in-one platform to launch, manage, and scale
            your online learning. From live classes to advanced analytics we
            help you deliver smarter, faster, better education.
          </p>
        </div>
      </section>

      <Stats />

      <section className="py-12 mx-auto max-w-8xl">
        <MarqueeDemo />
      </section>

      <section className="flex py-14 items-center mx-auto max-w-7xl justify-center">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 font-syne text-pretty text-3xl font-semibold lg:text-6xl">
              Smarter Learning Starts with Borcella LMS
            </h1>
            <p className="mb-8 max-w-xl font-mont-alt capitalize text-black font-medium lg:text-lg">
              Transform the way your team learns and grows. Borcella LMS
              delivers seamless onboarding, real-time progress tracking, and a
              user-first experience all built to boost productivity and
              performance across your organization.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2 w-full sm:w-auto">
                Discover Courses
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-zinc-200 hover:bg-zinc-100 hover:text-zinc-800 h-10 px-4 py-2 w-full sm:w-auto">
                Why Borcella
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-down-right ml-2 size-4"
                >
                  <path d="m7 7 10 10"></path>
                  <path d="M17 7v10H7"></path>
                </svg>
              </button>
            </div>
          </div>
          <img
            src={BorcellaBannerImages}
            alt="Borcella LMS Dashboard"
            className="max-h-full w-full rounded-md object-cover"
          />
        </div>
      </section>

      <section className="flex items-center justify-center">
        <div className=" relative py-14">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="mb-8 max-w-9xl font-mont-alt text-4xl font-semibold leading-none tracking-tight md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-700">
              Why Borcella LMS is Your Smartest Choice
            </h1>

            <p className="max-w-6xl font-mont-alt text-[1rem] leading-relaxed text-gray-500 capitalize font-medium">
              At Borcella, we go beyond basic learning. Our LMS is built to help
              individuals and teams unlock their full potential through
              industry-ready courses, intuitive tools, and performance-driven
              progress tracking. Join the thousands already accelerating their
              careers powered by Borcella.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="py-14">
          <div className="relative h-[800px] flex-1">
            <div className="relative inset-0 flex size-full items-center justify-center overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute size-full object-cover"
              >
                <source
                  src={CourseVideoPodcastVideo}
                  type="video/mp4"
                  alt="CourseVideoPodcastVideo"
                />
                Your browser does not support the video tag.
              </video>
              <span className="absolute inset-0 z-10 bg-black/50"></span>
            </div>
          </div>
          <div className="grid mx-auto max-w-7xl grid-cols-1 gap-12 pt-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-8 font-mont-alt max-w-6xl text-4xl font-semibold leading-none tracking-tight text-black md:text-6xl">
                Unlock Smarter Learning
                <motion.span
                  className="inline-block"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  🧐
                </motion.span>
              </h1>
            </div>
            <div>
              <p className="text-lg leading-normal font-mont-alt font-medium capitalize text-gray-500">
                Discover a powerful platform built to simplify learning. With
                Borcella LMS, access expertly crafted courses, track your
                progress effortlessly, and learn at your own pace — all in one
                seamless experience.
              </p>
              <div className="mt-8 flex font-mont-alt justify-start gap-4">
                <button className="flex items-center rounded-xl bg-zinc-200 px-5 py-3 text-center text-base font-medium text-black hover:text-black cursor-pointer transition duration-500 ease-in-out hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 lg:px-6">
                  Discover Courses
                </button>
                <button className="flex items-center rounded-xl border border-gray-600 px-5 py-3 text-center font-medium text-gray-600 transition duration-500 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 lg:px-6">
                  Explore Features
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="ml-1 size-6"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-4 4l4-4m-4-4l4 4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
