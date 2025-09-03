import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <motion.div
      className="relative dark:bg-zinc-800 rounded-2xl shadow-md border overflow-hidden max-w-sm"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Animated Price Tag */}
      <motion.div
        className="absolute font-syne h-14 w-14 flex items-center justify-center top-4 right-4 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
        animate={{
          backgroundColor: [
            "#EF4444", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6", "#EC4899", "#EF4444"
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ₹{course.price}
      </motion.div>

      {/* Course Lottie Animation */}
      <div className="w-full h-48 overflow-hidden flex items-center justify-center">
        {course.lottie ? (
          <Lottie animationData={course.lottie} loop autoplay className="h-full" />
        ) : (
          <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
        )}
      </div>

      <div className="p-5">
        <h3 className="text-sm font-bold text-gray-800 dark:text-white font-mont-alt">{course.title}</h3>
        <p className="text-sm text-gray-500 font-mont-alt dark:text-gray-300 mt-2 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-sm font-medium text-indigo-600 font-mont">{course.instructor}</span>
          <div className="flex items-center gap-1 font-clash font-bold text-red-400 text-sm">
            <FaStar />
            <span>{course.rating}</span>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <Link to="/register">
            <Button className="px-4 py-1 bg-black font-syne cursor-pointer text-white text-sm rounded-md hover:bg-green-700 transition">
            Enroll Now
          </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
