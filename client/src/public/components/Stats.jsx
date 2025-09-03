import React from "react";
import { HiUserGroup } from "react-icons/hi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import PropTypes from "prop-types";
import StatsBanner from "@/assets/Informative-pages/Banner-page/Stats-Banner.png";
import { motion } from "framer-motion";

const cards = [
    {
        icon: <HiUserGroup className="text-[40px] text-red-600 mx-auto" />,
        count: "93,000+",
        title: "Learners Empowered",
    },
    {
        icon: (
            <MdOutlineLibraryBooks className="text-[40px] text-green-600 mx-auto" />
        ),
        count: "1,500+",
        title: "Courses Launched",
    },
];

const CardItem = ({ item }) => (
    <div className="text-center mr-6">
        {item.icon}
        <div className="p-4 pt-2 text-center">
            <h5 className="text-[26px] font-semibold font-clash mb-2">
                {item.count}
            </h5>
            <p className="font-bold font-mont mb-2">{item.title}</p>
        </div>
    </div>
);

CardItem.propTypes = {
    item: PropTypes.object.isRequired,
};

const Cards = () => (
    <div className="flex mt-12 flex-wrap gap-6">
        {cards.map((item, i) => (
            <CardItem item={item} key={i} />
        ))}
    </div>
);

const Stats = () => {
    return (
        <section className="ezy__numbers10 light mx-auto max-w-7xl md:flex md:items-center md:justify-centerdark:bg-[#0b1727] text-zinc-900 dark:text-white">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-6">
                        <div className="flex flex-col justify-center h-full">
                            <h1 className="text-3xl font-mont-alt font-bold leading-none md:text-[45px] mb-4">
                                Fueling Growth Through Smarter Learning
                            </h1>
                            <p className="text-[17px] font-mont capitalize opacity-80">
                                Discover a next-gen learning platform built to scale with your
                                ambitions. Whether you're onboarding new hires, upskilling
                                teams, or training customers—Borcella LMS delivers intuitive,
                                data-driven learning experiences that stick.
                            </p>
                            <Cards />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <motion.img
                            src={StatsBanner}
                            alt="Borcella LMS Dashboard Preview"
                            className="rounded-tr-[100px] rounded-bl-[100px] max-w-full h-auto mt-6 md:mt-0"
                            animate={{
                                x: [0, 10, -10, 0], // moves left and right
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
