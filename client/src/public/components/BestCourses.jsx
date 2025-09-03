import React from "react";
import softwareDevelopment from "@/assets/Informative-pages/Banner-page/Top-courses-1.jpg";
import appDevelopment from "@/assets/Informative-pages/Banner-page/Top-courses-2.jpg";
import DataScience from "@/assets/Informative-pages/Banner-page/Data-science.jpg";
import Robotics from "@/assets/Informative-pages/Banner-page/Robotics.jpg";
import Mentorship from "@/assets/Informative-pages/Banner-page/Mentorship.jpg";
import CloudComputing from "@/assets/Informative-pages/Banner-page/Cloud-Computing.jpg";
import { Button } from "@/components/ui/button";
export default function BestCourses() {
  return (
    <>
      <section className="pt-22 dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="flex items-center justify-center text-center">
          <div className="flex  flex-col gap-6">
            <h1 className="text-3xl font-bold font-syne lg:text-6xl">
              Best-Selling Courses 📚 That Transform Careers
            </h1>
            <p className="text-balance font-mont-alt font-medium dark:text-zinc-300 lg:text-lg">
              Explore expert-led courses designed to upskill fast and smart.
              Whether you're entering the tech world or advancing your
              leadership, Borcella LMS has a learning path tailored for you.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            {/* Software Development */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gradient-to-br from-amber-100 to-pink-200 lg:rounded-l-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-syne font-semibold text-gray-950 max-lg:text-center">
                    Full-Stack Software Development
                  </p>
                  <p className="mt-2 max-w-lg text-sm font-mont-alt font-medium max-lg:text-center">
                    Master modern tech stacks like React, Node.js, and MongoDB.
                    Build real-world projects that showcase your full
                    development potential.
                  </p>
                </div>
                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-amber-500 bg-amber-500 shadow-2xl">
                    <img
                      alt="Software Development"
                      src={softwareDevelopment}
                      className="size-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
            </div>

            {/* App Development */}
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-gradient-to-br from-amber-100 to-pink-200 max-lg:rounded-t-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-semibold font-syne text-gray-950 max-lg:text-center">
                    Mobile App Development
                  </p>
                  <p className="mt-2 max-w-lg text-sm font-mont-alt font-medium max-lg:text-center">
                    Learn to build stunning iOS and Android apps using Flutter,
                    React Native, and native SDKs.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img
                    alt="App Development"
                    src={appDevelopment}
                    className="w-full max-lg:max-w-xs rounded-2xl"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
            </div>
            {/* DevOps & AWS */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-gradient-to-br from-amber-100 to-pink-200" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-semibold text-gray-950 font-syne max-lg:text-center">
                    DevOps & AWS Cloud Mastery
                  </p>
                  <p className="mt-2 max-w-lg text-sm font-mont-alt font-medium max-lg:text-center">
                    Automate deployments, master CI/CD pipelines, and get
                    certified in AWS cloud architecture.
                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <img
                    alt="AWS and DevOps"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                    className="h-[min(152px,40cqw)] object-cover"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
            </div>

            {/* APIs */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gradient-to-br from-amber-100 to-pink-200 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-semibold font-syne text-gray-950 max-lg:text-center">
                    Database Design & Architecture
                  </p>
                  <p className="mt-2 max-w-lg text-sm font-mont-alt font-medium max-lg:text-center">
                    Learn to structure, model, and optimize databases for high
                    performance, scalability, and real-world application needs.F
                  </p>
                </div>
                <div className="relative min-h-120 w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gradient-to-br from-amber-100 to-pink-200 shadow-2xl outline outline-white/10">
                    <div className="flex bg-gray-900 outline outline-white/5">
                      <div className="-mb-px flex text-sm font-medium text-gray-400">
                        <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                          api-service.js
                        </div>
                        <div className="border-r border-amber-600/10 px-4 py-2">
                          index.js
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pt-6 pb-14">
                      <pre className="text-sm text-red-500 font-mono">
                        <code>
                          {`// Hello World
console.log("Hello, World!");`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-22">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mx-auto flex flex-col items-center gap-6 text-center max-w-7xl">
            <h2 className="text-4xl font-bold font-syne  text-gray-900 dark:text-white">
              Pick Courses As Per Your Area of Interest
            </h2>
            <p className="text-lg font-mont font-medium text-zinc-600 dark:text-zinc-300">
              Advance your career with Borcella LMS featuring expert-led courses
              in Data Science, AI, Robotics, and more. Gain job-ready skills to
              excel in tomorrow’s tech driven world.
            </p>
          </div>

          {/* Cards Grid - now 4 columns on large screens */}
          <div className="bg-base-100 py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Course Grid */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Course Card 1 */}
                <div className="card border-2 p-2 bg-amber-50 border-zink-500 rounded-md card-border shadow-2xl ">
                  <figure>
                    <img
                      src={DataScience}
                      alt="Data Science"
                      className="rounded-md"
                    />
                  </figure>
                  <div className="card-body gap-3">
                    <h5 className="card-title font-syne font-semibold text-lg">
                      Data Science & Analytics
                    </h5>
                    <p className="mb-5 font-medium text-neutral-500 font-mont-alt">
                      Learn Python, SQL, and machine learning to launch a career
                      in data science. Build real-world projects and get
                      job-ready in 6 months.
                    </p>
                  </div>
                </div>

                {/* Course Card 2 */}
                <div className="card border-2 p-2 bg-amber-50 border-zink-500 rounded-md card-border shadow-2xl ">
                  <figure>
                    <img
                      src={Robotics}
                      alt="AI Robotics"
                      className="rounded-md"
                    />
                  </figure>
                  <div className="card-body gap-3">
                    <h5 className="card-title font-syne font-semibold text-lg">AI, ML & Robotics</h5>
                    <p className="mb-5 font-medium text-neutral-500 font-mont-alt">
                      Master artificial intelligence and robotics through
                      hands-on labs, algorithms, and real-time automation
                      challenges.
                    </p>
                  </div>
                </div>

                {/* Course Card 3 */}
                <div className="card border-2 p-2 bg-amber-50 border-zink-500 rounded-md card-border shadow-2xl ">
                  <figure>
                    <img
                      src={CloudComputing}
                                          alt="Cloud DevOps"
                                           className="rounded-md"
                    />
                  </figure>
                  <div className="card-body gap-3">
                    <h5 className="card-title font-syne font-semibold text-lg">
                      Cloud & DevOps Essentials
                    </h5>
                    <p className="mb-5 font-medium text-neutral-500 font-mont-alt">
                      Learn AWS, Docker, Kubernetes, and CI/CD tools used by top
                      engineering teams. Get certified and ready for real-world
                      roles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
