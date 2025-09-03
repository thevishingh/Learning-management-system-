import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Shape = ({ classes }) => (
  <span
    className={`w-1/2 h-[28%] -z-[1] absolute dark:bg-opacity-80 ${classes}`}
  />
);

Shape.propTypes = {
  classes: PropTypes.string.isRequired,
};
export default function Calltoaction() {
  return (
    <>
      <section className="ezy__cta15 light bg-top dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1]">
        {/* <Shape classes="top-0 left-0 bg-lime-50" />
        <Shape classes="top-0 right-0 bg-red-50" />
        <Shape classes="top-1/2 left-0 -translate-y-1/2 bg-pink-50" />
        <Shape classes="top-1/2 right-0 -translate-y-1/2 bg-blue-50" />
        <Shape classes="bottom-0 left-0 bg-orange-50" />
        <Shape classes="bottom-0 right-0 bg-violet-50" /> */}

        <div className="container px-4 mx-auto h-full">
          <div className="grid grid-cols-12 justify-center">
            <div className="col-span-12 md:col-span-10 md:col-start-2 text-center">
              <div className="bg-top dark:bg-[#0b1727] py-20 md:px-12">
                <h1 className="text-3xl font-mont md:text-[52px] lg:text-[65px] font-bold leading-tight mb-4">
                  Revolutionize Your Training with
                  <span className="relative text-red-600"> Borcella LMS </span>
                  Built for Modern Learning
                </h1>
                <p className="text-lg leading-6 font-mont-alt opacity-80 px-0 md:px-12">
                  Whether you're an enterprise or an institution, Borcella LMS
                  helps you onboard, train, and upskill teams seamlessly.
                  Intuitive dashboards, automated workflows, and powerful
                  analytics all in one place.
                </p>
                <div className="text-center mt-12">
                  <Link to="/register">
                    <button className="bg-transparent font-mont cursor-pointer text-blue-600 border border-blue-600 hover:text-white hover:bg-blue-600 px-8 py-3 rounded transition m-2">
                      Request Free Demo
                    </button>
                  </Link>
                  <button className="bg-blue-600 font-mont cursor-pointer border border-blue-600 text-white hover:bg-opacity-90 px-8 py-3 rounded transition m-2">
                    Refer to Your Network
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
