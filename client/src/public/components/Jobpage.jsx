import React from "react";
import { FaArrowRight, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const contents = [
  {
    title: "Product Designer",
    details:
      "Shape the future of online learning by designing intuitive, accessible, and beautiful interfaces that empower global learners.",
    duration: "Full Time",
    location: "100% Remote",
    link: "#",
  },
  {
    title: "Content Writer",
    details:
      "Craft compelling educational content and campaigns that inspire, inform, and help our users thrive.",
    duration: "Part Time",
    location: "100% Remote",
    link: "#",
  },
  {
    title: "WordPress Developer",
    details:
      "Build seamless, scalable, and performance-driven WordPress sites using Elementor and modern workflows.",
    duration: "Part Time",
    location: "100% Remote",
    link: "#",
  },
];

const CareerCard = ({ content, index }) => {
  const { title, duration, details, location, link } = content;
  return (
    <>
      {index < contents.length && (
        <hr className="my-10 mx-2 dark:border-gray-700" />
      )}

      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-7">
          <div>
            <h3 className="text-3xl font-semibold font-mont-alt mb-2">{title}</h3>
            <h5 className="text-xl font-mont font-normal my-4 pb-4 text-zinc-700 dark:text-zinc-300">
              {details}
            </h5>
            <p className="border-2 font-mont border-black dark:border-white font-medium inline py-2 px-4 rounded-full mb-2 mr-2">
              <FaMapMarkerAlt className="inline mr-2" />
              {location}
            </p>
            <p className="border-2 font-mont border-black dark:border-white font-medium inline py-2 px-4 rounded-full mb-2">
              <FaClock className="inline mr-2" />
              {duration}
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 mt-6 md:mt-0">
          <div className="flex md:justify-end">
            <a
              href={link}
              className="text-2xl font-medium group text-black font-syne hover:text-blue-800"
            >
              Apply{" "}
              <FaArrowRight className="inline ml-2 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

CareerCard.propTypes = {
  content: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const Jobpage = () => {
  return (
    <section className="mx-auto max-w-7xl py-14 md:py-24  text-zinc-900">
      <div className="container px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-10 lg:col-span-7 xl:col-span-6">
            <div>
              <p className="border-2 font-mont-alt border-black dark:border-white font-medium inline py-2 px-4 rounded-full">
                We're Hiring
              </p>
              <h1 className="text-[32px] font-bold font-syne capitalize lg:text-6xl mt-6 mb-4">
                Find your dream job at Borcella LMS
              </h1>
              <p className="text-lg font-medium capitalize font-mont-alt leading-normal lg:text-xl text-zinc-700 dark:text-zinc-300">
                We're not just offering roles we’re offering opportunities to
                grow, create impact, and build your future. Whether you're a
                creative, developer, or strategist, we’ll help you land the role
                that brings out your best.
              </p>
              <p className="mt-4 font-syne text-lg font-medium text-blue-600 dark:text-blue-400">
                Reach out to us  and let’s build your career together.
              </p>
            </div>
          </div>

          {contents.map((content, i) => (
            <div className="col-span-12 mt-12" key={i}>
              <CareerCard content={content} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobpage;
