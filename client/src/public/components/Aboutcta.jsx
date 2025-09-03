"use client";

import React from "react";
import { FaCheckCircle, FaArrowRight, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

const Aboutcta = () => {
  return (
    <section className="relative py-20 bg-top overflow-hidden">
      <div className="relative z-10 max-w-6xl px-6 mx-auto">
        {/* Headline & Subtitle */}
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-mont-alt font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 sm:text-5xl">
            Accelerate Team Success, Streamline Training & Drive Performance
            with Borcella LMS
          </h2>
          <p className="mt-4 font-mont-alt text-lg text-gray-600">
            Empower your workforce with seamless onboarding, smart training, and
            measurable growth—right from day one.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-14 lg:mt-16">
          {[
            { title: "Skill-Based Modules", desc: "Launch training instantly" },
            { title: "Custom Learning Paths", desc: "Upskill every role" },
            {
              title: "Insightful Dashboards",
              desc: "Track growth in real time",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <FaCheckCircle className="w-7 h-7 text-green-500" />
              <div>
                <h3 className="text-lg font-syne font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm font-mont text-gray-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Email Form */}
        <motion.form
          action="#"
          method="POST"
          className="max-w-xl mx-auto mt-12 sm:px-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex flex-col items-start sm:flex-row bg-white shadow-lg rounded-full p-1.5 sm:p-2">
            <div className="relative flex-1 w-full">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full font-mont px-5 py-4 pl-12 text-base text-gray-800 placeholder-gray-400 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>

            <button className="inline-flex items-center justify-center px-6 py-4 mt-4 sm:mt-0 text-base font-base text-white bg-blue-600 rounded-full hover:bg-blue-700 font-mont-alt transition-all duration-300">
              Get Instant Access
              <FaArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </motion.form>

        {/* Trust Notice */}
        <motion.div
          className="flex font-mont-alt items-center justify-center mt-6 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <FaLock className="w-4 text-red-400 h-4 mr-2" />
          Your learning data is secure. We value privacy and compliance.
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutcta;
