import React from "react";
import { BiPlayCircle } from "react-icons/bi";
import Zoom from "@/assets/Informative-pages/Banner-page/Contact-zoom.png";
import ContactSection from "../components/Contactus";
import ContactUs1 from "../components/Contactform";
import Testimonials from "@/assets/Informative-pages/Banner-page/Contact-Testimonials.jpg";
import ContactLogocloud from "../components/ContactLogocloud";

const Contact = () => {
  return (
    <>
      <section className="py-10 sm:py-16 bg-bottom lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold font-syne text-black sm:text-6xl lg:text-7xl">
                Unlock Scalable Training Success with
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    Borcella LMS
                  </h1>
                </div>
              </h1>
              <p className="mt-8 font-mont text-base text-black sm:text-xl">
                Whether you're onboarding, upskilling, or scaling your workforce
                Borcella LMS helps you deliver learning experiences that drive
                real results. Let’s talk about how we can help transform your
                team’s growth journey.
              </p>
              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <a
                  href="#"
                  title="Contact Our Team"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-green-600 hover:bg-green-700 font-syne focus:bg-green-700"
                  role="button"
                >
                  Contact Our Team
                </a>
                <a
                  href="#"
                  title="Watch Overview"
                  className="inline-flex items-center font-mont-alt mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                >
                  <BiPlayCircle className="w-10  h-10 mr-3 text-green-600" />
                  Watch Overview
                </a>
              </div>
            </div>
            <div>
              <img
                className="w-full"
                src="https://www.auraui.com/memeimage/hero25.png"
                alt="Borcella LMS Illustration"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-top py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            {/* Left Section */}
            <div className="space-y-4">
              <h2 className="text-base-content font-mont-alt text-2xl font-semibold md:text-3xl lg:text-4xl">
                Seamless Integrations for a Smarter Learning Experience
              </h2>
              <p className="text-base font-mont">
                Supercharge your training and education delivery with Borcella
                LMS built to connect effortlessly with the tools you already
                use. Streamline workflows, boost engagement, and achieve better
                learning outcomes.
              </p>
            </div>

            {/* Right Section */}
            <div className="space-y-6">
              {/* Google Workspace */}
              <div className="border-base-content/20 rounded-box flex items-center justify-between gap-3.5  p-4">
                <div className="avatar avatar-placeholder">
                  <div className="border-base-content/20 rounded-box size-12 ">
                    <span className="size-7">
                      <img
                        src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/google-icon.png"
                        alt="Google Workspace"
                      />
                    </span>
                  </div>
                </div>
                <div className="grow">
                  <h3 className="text-base-content font-mont-alt text-lg font-medium">
                    Google Workspace
                  </h3>
                  <p className="text-base-content/80 font-mont">
                    Simplify learning with Docs, Drive, and Calendar
                    integration.
                  </p>
                </div>
              </div>

              {/* Zoom */}
              <div className="border-base-content/20 rounded-box flex items-center justify-between gap-3.5  p-4">
                <div className="avatar avatar-placeholder">
                  <div className="border-base-content/20 rounded-box size-12 ">
                    <span className="size-7">
                      <img src={Zoom} alt="Zoom" />
                    </span>
                  </div>
                </div>
                <div className="grow">
                  <h3 className="text-base-content font-mont-alt text-lg font-medium">
                    Zoom
                  </h3>
                  <p className="text-base-content/80 font-mont">
                    Deliver live sessions and webinars directly from your LMS.
                  </p>
                </div>
              </div>

              {/* Slack */}
              <div className="border-base-content/20 rounded-box flex items-center justify-between gap-3.5 p-4">
                <div className="avatar avatar-placeholder">
                  <div className="border-base-content/20 rounded-box size-12 ">
                    <span className="size-7">
                      <img
                        src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/slack-icon.png"
                        alt="Slack"
                      />
                    </span>
                  </div>
                </div>
                <div className="grow">
                  <h3 className="text-base-content font-mont-alt text-lg font-medium">
                    Slack
                  </h3>
                  <p className="text-base-content/80 font-mont">
                    Keep your teams in sync with real-time learning updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bottom">
        <div className="mx-auto max-w-7xl  relative py-12">
          <h1 className="mb-8 flex font-syne max-w-7xl text-center text-4xl font-semibold leading-none tracking-tight text-gray-800 md:text-6xl">
            Get in Touch We're Closer Than You Think
          </h1>
          <p className="max-w-7xl font-mont-alt first-letter:capitalize text-center text-lg leading-relaxed text-black">
            With Borcella LMS offices across major cities, our team is always
            within reach. Whether you prefer email, a quick chat, or an
            in-person meeting we’re here to support your learning
            transformation.
          </p>
        </div>
        <ContactSection />
      </section>
      <ContactUs1 />
  
        <section class="py-32 bg-bottom">
          <div class="mx-auto max-w-7xl">
            <div class="flex flex-col gap-6">
              <div class="grid grid-cols-1 items-stretch gap-x-0 gap-y-4 lg:grid-cols-3 lg:gap-4">
                <img
                  src={Testimonials}
                  alt="Testimonials-image"
                  class="h-72 w-full rounded-md object-cover lg:h-auto"
                />
                <div class="rounded-lg border bg-gray-100 text-card-foreground shadow-sm col-span-2 flex items-center justify-center p-6">
                  <div class="flex flex-col gap-4">
                    <q class="text-xl font-mont-alt font-medium lg:text-3xl">
                      Borcella LMS has redefined how we onboard and train
                      employees. The intuitive design and automation saved us
                      weeks of manual work and our teams love it!
                    </q>
                    <div class="flex font-mont flex-col items-start">
                      <p>Meera Sharma</p>
                      <p class="text-zinc-600">
                        Chief People Officer, TalentBridge
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div class="p-6 font-mont-alt px-6 pt-6 leading-7 text-foreground/70">
                    <q>
                      Our remote training used to be a mess now, with
                      Borcella, everything’s centralized, trackable, and
                      efficient. It’s a game-changer for distributed teams.
                    </q>
                  </div>
                  <div class="flex items-center p-6 pt-0">
                    <div class="flex font-mont gap-4 leading-5">
                      <span class="relative flex shrink-0 overflow-hidden size-9 rounded-full ring-1 ring-input"></span>
                      <div class="text-sm">
                        <p class="font-medium">Ankit Verma</p>
                        <p class="text-zinc-600">L&D Lead, Stratovate Inc.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div class="p-6 px-6 font-mont-alt pt-6 leading-7 text-foreground/70">
                    <q>
                      Borcella LMS helped us scale our training across multiple
                      locations without any drop in quality. The platform grows
                      with you seamlessly.
                    </q>
                  </div>
                  <div class="flex items-center p-6 pt-0">
                    <div class="flex gap-4 leading-5">
                      <span class="relative flex  shrink-0 overflow-hidden size-9 rounded-full ring-1 ring-input"></span>
                      <div class="text-sm font-mont">
                        <p class="font-medium">Ritika Sen</p>
                        <p class="text-zinc-600">
                          Operations Director, CoreX Systems
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div class="p-6 font-mont-alt px-6 pt-6 leading-7 text-foreground/70">
                    <q>
                      The integrations, UI, and support are world-class.
                      Borcella LMS didn’t just meet our needs it anticipated
                      them.
                    </q>
                  </div>
                  <div class="flex items-center p-6 pt-0">
                    <div class="flex gap-4 leading-5">
                      <span class="relative flex shrink-0 overflow-hidden size-9 rounded-full ring-1 ring-input"></span>
                      <div class="text-sm font-mont">
                        <p class="font-medium">Dev Malik</p>
                        <p class="text-zinc-600">Founder, Upskill Garage</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      <section>
        <ContactLogocloud/> 
      </section>
    </>
  );
};

export default Contact;
