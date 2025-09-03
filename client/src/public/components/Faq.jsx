import React, { useState } from "react";
import PropTypes from "prop-types";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const faqList = [
  {
    question: "What is Borcella LMS?",
    answer:
      "Borcella LMS is a cloud-based learning management system that helps educators, trainers, and organizations create, manage, and deliver online learning experiences effectively.",
  },
  {
    question: "Is there a limit on the number of courses I can create?",
    answer:
      "No, Borcella LMS allows unlimited course creation. Whether you're an individual instructor or a training institution, you're free to scale as needed.",
  },
  {
    question: "Can I track my students’ progress?",
    answer:
      "Yes, Borcella LMS provides real-time analytics dashboards to monitor learner progress, course completion rates, quiz performance, and more.",
  },
  {
    question: "Does Borcella LMS support live classes and video content?",
    answer:
      "Absolutely. You can host live sessions via integrations (Zoom, Google Meet, etc.) and upload video lessons, documents, and interactive content.",
  },
];

const FaqItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className={`${isOpen && "active"} rounded-lg`}>
      <button
        type="button"
        className="btn p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <span className="font-syne font-semibold capitalize">{faq.question}</span>
        {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } p-4 lg:p-6 bg-white shadow-xl border shadow-amber-100 dark:shadow-none dark:bg-[#1E2735] rounded-xl`}
      >
        <p className="opacity-50 font-mont-alt capitalize text-sm font-medium">{faq.answer}</p>
      </div>
    </div>
  );
};

FaqItem.propTypes = {
  faq: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // open the first one by default

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <section className="ezy__faq8 light py-14 md:pb-14 pt-0 dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-16 md:px-8 lg:px-28">
        <div className="grid grid-cols-12 justify-between gap-6">
          <div className="col-span-12 md:col-span-5">
            <h2 className="font-bold font-syne text-[25px] md:text-[45px] leading-none mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-base font-mont capitalize opacity-70">
              Learn more about how Borcella LMS helps educators and learners thrive in a digital environment. Find answers to our most asked questions.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            {faqList.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                isOpen={index === activeIndex}
                    onClick={() => handleToggle(index)}
                    
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
