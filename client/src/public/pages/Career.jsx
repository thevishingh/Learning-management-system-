import React from "react";
import { motion } from "framer-motion";
import CareerAbout from "@/assets/Informative-pages/Banner-page/CareerAbout.jpg";
import CareerAbout2 from "@/assets/Informative-pages/Banner-page/About-Avtar2.jpg";
import CareerAbout3 from "@/assets/Informative-pages/Banner-page/CareerAbout2.jpg";
import Jobpage from "../components/Jobpage";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <>
      <section className="bg-top">
        <div className=" relative mx-auto max-w-7xl pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <h1 className="mb-5 font-syne text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  Revolutionize Learning with Borcella LMS
                </h1>
                <p className="mb-8 font-mont-alt max-w-7xl text-lg capitalize text-black font-[400] dark:text-dark-6">
                  Borcella LMS empowers educators, institutions, and learners
                  through a smart, seamless, and scalable digital learning
                  experience — trusted by forward-thinking organizations
                  worldwide.
                </p>
                <ul className="flex flex-wrap items-center">
                  <li>
                    <Button
                      href="/career"
                      className="inline-flex items-center font-syne justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                    >
                      Explore Careers
                    </Button>
                  </li>
                </ul>
                <div className="clients pt-16">
                  <h6 className="mb-6 flex font-mont-alt items-center text-xs font-normal text-body-color dark:text-dark-6">
                    Trusted by Leading Institutions
                    <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
                  </h6>

                  <div className="flex items-center space-x-4">
                    <SingleImage
                      href="#"
                      imgSrc="https://cdn.tailgrids.com/assets/images/marketing/brands/ayroui.svg"
                    />
                    <SingleImage
                      href="#"
                      imgSrc="https://cdn.tailgrids.com/assets/images/marketing/brands/graygrids.svg"
                    />
                    <SingleImage
                      href="#"
                      imgSrc="https://cdn.tailgrids.com/assets/images/marketing/brands/uideck.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <motion.img
                    src="https://cdn.tailgrids.com/assets/images/marketing/hero/hero-image-01.png"
                    alt="hero"
                    className="max-w-full lg:ml-auto"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-bottom relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <motion.img
                  src={CareerAbout}
                  alt="Borcella LMS platform image"
                  className="rounded-xl object-cover"
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <motion.img
                src={CareerAbout2}
                alt="Student learning on Borcella LMS"
                className="sm:ml-0 ml-auto rounded-xl object-cover"
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-gray-900 font-syne text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Learning That Powers Growth
                  </h2>
                  <p className="text-black text-md font-mont-alt font-normal leading-relaxed lg:text-start text-center">
                    At Borcella LMS, we don’t just host content we create
                    dynamic learning ecosystems where teams, educators, and
                    individuals evolve faster. Our platform helps you transform
                    skills into strategy, and knowledge into measurable
                    outcomes.
                  </p>
                </div>
                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <h3 className="text-gray-900 font-syne text-4xl font-bold font-manrope leading-normal">
                      20K+
                    </h3>
                    <h6 className="text-indigo-600 font-mont-alt text-base font-normal leading-relaxed">
                      Active Learners
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 font-syne text-4xl font-bold font-manrope leading-normal">
                      500+
                    </h4>
                    <h6 className="text-indigo-600 font-mont-alt text-base font-normal leading-relaxed">
                      Organizations Onboarded
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 font-syne text-4xl font-bold font-manrope leading-normal">
                      98%
                    </h4>
                    <h6 className="text-indigo-600 font-mont-alt text-base font-normal leading-relaxed">
                      User Retention Rate
                    </h6>
                  </div>
                </div>
              </div>
              <Button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <Link to="/register" className="px-1.5 text-white font-mont-alt text-sm font-medium leading-6">
                  Explore Platform
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-top">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6">
            {/* Main Testimonial */}
            <div className="grid grid-cols-1 items-stretch gap-x-0 gap-y-4 lg:grid-cols-3 lg:gap-4">
              <img
                src={CareerAbout3}
                alt="Team at Borcella LMS"
                className="h-72 w-full rounded-md object-cover lg:h-auto"
              />
              <div className="rounded-lg border bg-card text-card-foreground shadow-2xl font-syne col-span-2 flex items-center justify-center p-6">
                <div className="flex flex-col gap-4">
                  <q className="text-xl font-medium lg:text-3xl">
                    Joining Borcella LMS was the turning point in my career.
                    Every day I get to build tools that genuinely improve how
                    people learn and grow across the world.
                  </q>
                  <div className="flex font-mont-alt flex-col items-start">
                    <p>Sakshi Mehta</p>
                    <p className="text-zinc-600">
                      Lead Product Engineer, Borcella LMS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-bottom">
        <Jobpage />
      </section>
      <section className="bg-top">
        <div className="mx-auto max-w-7xl py-14 md:py-24 dark:bg-[#0b1727] text-white relative  ">
          <div className=" rounded-2xl overflow-hidden relative p-6 lg:p-12">
            <div className="absolute left-7 top-0 h-[96%] w-[1px] translate-y-[2%] bg-black bg-opacity-30" />
            <div className="absolute top-7 left-0 w-[98%] h-[1px] translate-x-[1%] bg-black bg-opacity-30" />
            <div className="grid grid-cols-12 justify-between p-4 lg:p-12">
              <div className="col-span-12 lg:col-span-6">
                <h1 className="text-2xl font-syne md:text-5xl leading-none text-black font-bold mb-6">
                  Stay Ahead With Borcella LMS
                </h1>
                <div className="grid grid-cols-12">
                  <div className="col-span-12 lg:col-span-11">
                    <p className="leading-7 font-mont-alt font-medium capitalize lg:pr-10 text-black text-justify">
                      Join thousands of learners and professionals who trust
                      Borcella to boost their skills, land better jobs, and stay
                      competitive in today’s market. Sign up now and receive
                      exclusive content, career tips, and course updates
                      straight to your inbox.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:col-start-8 mt-12 lg:mt-0">
                <SubscribeForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;

const SingleImage = ({ href, imgSrc }) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand image" className="h-10 w-full" />
      </a>
    </>
  );
};

const SubscribeForm = () => (
  <form>
    <div className="form-group mb-6 mt-4">
      <input
        type="text"
        className="h-14 leading-10 bg-opacity-10 border border-black text-black rounded-lg focus:outline-none focus:border-gray-400 w-full placeholder:text-black pl-4"
        placeholder="Full Name"
      />
    </div>
    <div className="form-group mb-4 mt-3">
      <input
        type="email"
        className="h-14 leading-10 bg-opacity-10 border border-black text-black rounded-lg focus:outline-none focus:border-gray-400 w-full placeholder:text-black font-mont pl-4"
        placeholder="Email Address"
      />
    </div>

    <button
      type="submit"
      className="px-7 py-3 bg-blue-600 text-white hover:bg-opacity-90 rounded-md font-mont-alt transition w-full mt-2"
    >
      Get Started
    </button>
  </form>
);

