import { GraduationCap, LineChart } from "lucide-react";
import ChartImage from "@/assets/Informative-pages/Banner-page/Chart.jpg";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 font-mont-alt capitalize max-w-4xl text-4xl font-semibold lg:text-5xl">
          Empower Learning with Borcella’s Smart LMS Ecosystem
        </h2>
        <div className="relative p-2">
          <div className="relative z-10 space-y-4 md:w-1/2">
            <p className="text-body font-mont">
              Borcella isn't just a learning platform it's your partner in
              creating{" "}
              <span className="text-title font-medium">
                scalable, engaging, and efficient education experiences
              </span>{" "}
              for modern learners.
            </p>
            <p className="font-mont">
              From intuitive course design to real-time analytics, Borcella
              helps institutions and businesses streamline training, boost
              engagement, and scale with ease.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="size-4" />
                  <h3 className="text-sm font-medium text-red-600 font-syne">
                    Learner-Centric
                  </h3>
                </div>
                <p className=" capitalize text-black font-medium font-mont-alt text-sm">
                  Personalized learning paths, interactive content, and mobile
                  access built to drive better learning outcomes.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <LineChart className="size-4" />
                  <h3 className="text-sm font-medium text-red-600 font-syne">
                    Insight-Driven
                  </h3>
                </div>
                <p className=" font-mont-alt capitalize text-black font-medium text-sm">
                  Monitor learner progress, track KPIs, and optimize your
                  training strategy with actionable insights.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
            <div
              aria-hidden
              className="bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-55% md:block"
            ></div>
            <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
              <img
                src={ChartImage}
                className="hidden rounded-[12px] dark:block"
                alt="LMS Dashboard"
                width={1207}
                height={929}
              />
              <img
                src={ChartImage}
                className="rounded-[12px] shadow dark:hidden"
                alt="LMS Dashboard"
                width={1207}
                height={929}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
