import Avtar from "@/assets/Informative-pages/Banner-page/About-Avtar.jpg";

export default function StatsSection() {
  return (
    <section className="py-10 bg-bottom">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 max-w-xl space-y-6">
          <h2 className="text-4xl font-mont-alt font-semibold lg:text-5xl">
            Empowering Learning, Elevating Results
          </h2>
          <p className="font-mont">
            At Borcella LMS, we don't just deliver content—we build seamless
            learning experiences designed to scale with your organization and
            inspire your teams.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div>
            <p className="font-mont">
              From startups to enterprises, Borcella LMS is transforming how
              organizations train, onboard, and upskill their workforce making
              learning simple, engaging, and measurable.
            </p>
            <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
              <div className="space-y-4">
                <div className="bg-linear-to-r font-syne from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  +5K
                </div>
                <p className=" font-mont-alt capitalize font-base">
                  Active Learners
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-linear-to-r font-syne from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  100+
                </div>
                <p className=" font-mont-alt capitalize font-base">
                  Organizations Onboarded
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <blockquote className="border-l-4 pl-4">
              <p className=" font-mont">
                Switching to Borcella LMS was a game-changer for our team. The
                intuitive interface and powerful analytics helped us reduce
                onboarding time by 40% while increasing learner engagement
                across all departments.
              </p>
              <div className="mt-6 space-y-3">
                <cite className="block font-medium font-clash">
                  Ananya Mehta, HR Head
                </cite>
                <img
                  className="w-12 h-12 rounded-full dark:invert object-cover"
                  src={Avtar}
                  alt="Slack Logo"
                />
              </div>
            </blockquote>
          </div>
        </div>
      </div>

      <section class="flex flex-col">
        <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-full mx-auto max-w-7xl px-5">
          <div class="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-3xl shadow-amber-200 border border-gray-400 justify-self-center">
            <div class="flex flex-row justify-center items-center">
              <svg
                class="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.37 18.432c0 3.058-.906 5.862-2.466 8.203a14.728 14.728 0 0 1-10.079 6.367c-.717.127-1.455.19-2.214.19-.759 0-1.497-.063-2.214-.19a14.728 14.728 0 0 1-10.078-6.368 14.692 14.692 0 0 1-2.467-8.202c0-8.16 6.6-14.76 14.76-14.76s14.759 6.6 14.759 14.76Z"
                  stroke="#FF6D42"
                  stroke-width="3.473"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="m44.712 38.17-3.431.83a2.063 2.063 0 0 0-1.539 1.572l-.728 3.122c-.09.384-.281.734-.554 1.012a2.068 2.068 0 0 1-.992.564c-.375.09-.768.073-1.134-.052a2.078 2.078 0 0 1-.938-.653l-9.92-11.64-9.92 11.661a2.078 2.078 0 0 1-.938.653 2.038 2.038 0 0 1-1.134.052 2.067 2.067 0 0 1-.992-.563 2.137 2.137 0 0 1-.554-1.012l-.728-3.123a2.13 2.13 0 0 0-.55-1.01 2.06 2.06 0 0 0-.988-.562L6.24 38.19a2.073 2.073 0 0 1-.956-.533 2.14 2.14 0 0 1-.563-.953 2.175 2.175 0 0 1-.015-1.113c.091-.366.276-.7.536-.97l8.11-8.284a14.672 14.672 0 0 0 4.307 4.281 14.34 14.34 0 0 0 5.634 2.134 12.29 12.29 0 0 0 2.183.191c.749 0 1.477-.063 2.184-.19 4.138-.617 7.694-3.017 9.94-6.416l8.11 8.285c1.144 1.147.583 3.165-.998 3.547Zm-18.03-26.532 1.227 2.507c.167.34.603.68.998.743l2.226.383c1.414.233 1.747 1.296.727 2.336l-1.726 1.764c-.29.297-.457.87-.353 1.295l.499 2.188c.395 1.721-.5 2.4-1.996 1.487l-2.08-1.253a1.434 1.434 0 0 0-1.372 0l-2.08 1.253c-1.497.892-2.392.234-1.996-1.487l.499-2.188c.083-.403-.063-.998-.354-1.295l-1.726-1.764c-1.019-1.04-.686-2.081.728-2.336l2.225-.383c.375-.063.811-.403.977-.743l1.227-2.507c.604-1.36 1.685-1.36 2.35 0Z"
                  stroke="#FF6D42"
                  stroke-width="3.473"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p class="font-bold font-syne text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                75K+
              </p>
            </div>
            <p class="font-medium text-base font-mont-alt sm:text-sm leading-6 mt-3 md:mt-6 text-center">
              Expert Guidance Minutes
            </p>
          </div>
          <div class="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-3xl shadow-amber-200 border border-gray-400 justify-self-center">
            <div class="flex flex-row justify-center items-center">
              <svg
                class="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                viewBox="0 0 51 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#a)">
                  <path
                    d="m26.91 5.776 4.483 10.683a1.544 1.544 0 0 0 1.287.942l11.474.992a1.544 1.544 0 0 1 .876 2.715L36.325 28.7a1.559 1.559 0 0 0-.49 1.523l2.61 11.296a1.544 1.544 0 0 1-2.295 1.677l-9.86-5.982a1.53 1.53 0 0 0-1.59 0l-9.861 5.982a1.544 1.544 0 0 1-2.295-1.677l2.609-11.296a1.56 1.56 0 0 0-.49-1.523l-8.705-7.593a1.544 1.544 0 0 1 .876-2.715l11.474-.992a1.544 1.544 0 0 0 1.287-.942l4.483-10.683a1.544 1.544 0 0 1 2.833 0Z"
                    stroke="#FF6D42"
                    stroke-width="4.341"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M.8.2h49.4v49.4H.8z"></path>
                  </clipPath>
                </defs>
              </svg>
              <p class="font-bold font-syne text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                4.9
              </p>
            </div>
            <p class="font-medium text-base font-mont-alt sm:text-sm leading-6 mt-3 md:mt-6 text-center">
              Average User Rating
            </p>
          </div>
          <div class="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-3xl shadow-amber-200 border border-gray-400 justify-self-center">
            <div class="flex flex-row justify-center items-center">
              <svg
                class="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  clip-path="url(#a)"
                  stroke="#FF6D42"
                  stroke-width="3.473"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M10.811 39.091c-1.775-1.775-.598-5.505-1.5-7.69-.939-2.255-4.377-4.089-4.377-6.5 0-2.413 3.438-4.246 4.376-6.502.903-2.182-.274-5.914 1.501-7.69 1.776-1.775 5.508-.598 7.69-1.5 2.266-.939 4.09-4.377 6.501-4.377 2.412 0 4.246 3.438 6.501 4.376 2.185.903 5.915-.274 7.69 1.501 1.776 1.776.598 5.506 1.502 7.69.937 2.266 4.376 4.09 4.376 6.501 0 2.412-3.439 4.246-4.377 6.501-.903 2.185.274 5.915-1.5 7.69-1.776 1.776-5.506.598-7.69 1.501-2.256.938-4.09 4.377-6.502 4.377s-4.245-3.439-6.5-4.377c-2.183-.903-5.915.275-7.69-1.5Z"></path>
                  <path d="m17.281 26.444 4.632 4.631L32.718 20.27"></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M.3.2h49.4v49.4H.3z"></path>
                  </clipPath>
                </defs>
              </svg>
              <p class="font-bold font-syne text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                8.9K+
              </p>
            </div>
            <p class="font-medium text-base font-mont-alt sm:text-sm leading-6 mt-3 md:mt-6 text-center">
              Learning Sessions Completed
            </p>
          </div>
          <div class="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-3xl shadow-amber-200 border border-gray-400 justify-self-center">
            <div class="flex flex-row justify-center items-center">
              <svg
                class="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                viewBox="0 0 51 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.571 12.006 27.046 30.531l-7.719-7.718L5.434 36.706"
                  stroke="#FF6D42"
                  stroke-width="4.341"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M45.569 24.356v-12.35h-12.35"
                  stroke="#FF6D42"
                  stroke-width="4.341"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p class="font-bold font-syne text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                1.5M+
              </p>
            </div>
            <p class="font-medium text-base font-mont-alt sm:text-sm leading-6 mt-3 md:mt-6 text-center">
              App Installs Worldwide
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
