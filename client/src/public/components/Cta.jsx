import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const avatarGroup = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const avatarItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const textFade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
};

function AnimatedCounter({ from = 0, to = 5000 }) {
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 10,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [to]);

  return <span>{display.toLocaleString()}+</span>;
}

export default function CallToActionSection() {
  return (
    <motion.section
      className="py-10 sm:py-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            className="flex items-center justify-center"
            variants={avatarGroup}
          >
            <motion.div
              className="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full"
              variants={avatarItem}
            >
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg"
                alt="User Avatar"
              />
            </motion.div>

            <motion.div
              className="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28"
              variants={avatarItem}
            >
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/male-avatar-1.jpg"
                alt="User Avatar"
              />
            </motion.div>

            <motion.div
              className="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full"
              variants={avatarItem}
            >
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-2.jpg"
                alt="User Avatar"
              />
            </motion.div>
          </motion.div>

          <motion.h2
            className="mt-8 font-mont-alt capitalize text-3xl font-bold leading-tight text-black lg:mt-12 sm:text-4xl lg:text-4xl"
            variants={textFade}
          >
            Join{" "}
            <span className="border-b-8 font-syne border-yellow-300">
              <AnimatedCounter to={5000} />
            </span>{" "}
            learners leveling up with <br />
            <span className="text-amber-600 font-clash font-medium uppercase">
              Borcella LMS
            </span>
          </motion.h2>

          <motion.p
            className="max-w-7xl font-mont-alt mx-auto mt-6 text-xl text-gray-600 md:mt-10"
            variants={textFade}
          >
            Unlock skills in Data Science, AI, Robotics & more. Learn from
            industry experts, build job-ready portfolios, and land your dream
            role faster.
          </motion.p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            variants={textFade}
            className="inline-flex items-center justify-center px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-green-600 font-mont-alt capitalize border border-transparent rounded-md lg:mt-12 hover:bg-green-700 focus:bg-green-700"
            role="button"
          >
            <svg
              className="w-5 h-5 mr-2 -ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Start Learning Today
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
