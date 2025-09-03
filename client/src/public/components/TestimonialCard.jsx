"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

export function Highlight({ children, className }) {
  return (
    <span
      className={cn(
        "bg-blue-500/10 p-1 py-0.5 font-bold text-blue-500",
        className
      )}
    >
      {children}
    </span>
  );
}

export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
        "border-border bg-card/50 border shadow-sm",
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
      {...props}
    >
      <div className="text-muted-foreground font-mont-alt text-sm font-normal select-none">
        {description}
        <div className="flex flex-row py-1">
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
        </div>
      </div>

      <div className="flex w-full items-center justify-start gap-5 select-none">
        <img
          width={40}
          height={40}
          src={img || ""}
          alt={name}
          className="size-10 rounded-full ring-1 ring-blue-500/20 ring-offset-2"
        />
        <div>
          <p className="text-foreground font-medium font-mont capitalize">{name}</p>
          <p className="text-muted-foreground text-xs font-normal font-syne">{role}</p>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "Jordan Hayes",
    role: "CTO at Quantum Innovations",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    description: (
      <p>
        Borcella LMS has completely redefined how we onboard engineers.{" "}
        <Highlight>
          The modular learning paths saved us weeks of manual setup.
        </Highlight>{" "}
        Now, every team member hits the ground running.
      </p>
    ),
  },
  {
    name: "Maya Rodriguez",
    role: "L&D Head at Skyline Digital",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
    description: (
      <p>
        I was hesitant to switch platforms, but Borcella won me over.{" "}
        <Highlight>It's fast, intuitive, and actually fun to use.</Highlight>{" "}
        Learner feedback has been overwhelmingly positive.
      </p>
    ),
  },
  {
    name: "Ethan Park",
    role: "Startup Founder at Elevate Labs",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    description: (
      <p>
        As a lean team, we needed a solution that just works.{" "}
        <Highlight>Borcella helped us train and scale 3x faster.</Highlight> It
        turned our growing pains into real growth.
      </p>
    ),
  },
  {
    name: "Zoe Bennett",
    role: "UX Architect at Fusion Systems",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    description: (
      <p>
        Borcella's design is sleek and smart.{" "}
        <Highlight>
          From micro-interactions to adaptive flows, it's clearly built with UX
          in mind.
        </Highlight>{" "}
        It’s a game-changer for teams that care about engagement.
      </p>
    ),
  },
  {
    name: "Victor Nguyen",
    role: "Product Lead at FinEdge",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
    description: (
      <p>
        We revamped our internal training with Borcella.{" "}
        <Highlight>
          The learning analytics and reporting tools are top-tier.
        </Highlight>{" "}
        Productivity jumped across departments.
      </p>
    ),
  },
  {
    name: "Amara Johnson",
    role: "Frontend Specialist at Nimbus Tech",
    img: "https://randomuser.me/api/portraits/women/67.jpg",
    description: (
      <p>
        I onboarded three teams using Borcella in under a week.{" "}
        <Highlight>
          The documentation and support are the best I’ve seen in an LMS.
        </Highlight>{" "}
        It’s now part of every project kickoff.
      </p>
    ),
  },
  {
    name: "Leo Tanaka",
    role: "People Ops at Prism Agency",
    img: "https://randomuser.me/api/portraits/men/78.jpg",
    description: (
      <p>
        Borcella strikes the perfect balance between structure and flexibility.{" "}
        <Highlight>
          We deliver consistent experiences while customizing learning by role.
        </Highlight>{" "}
        Our completion rates have never been higher.
      </p>
    ),
  },
  {
    name: "Sophia Martinez",
    role: "HR Director at StyleHub",
    img: "https://randomuser.me/api/portraits/women/89.jpg",
    description: (
      <p>
        Our employee ramp-up time dropped by 35% after switching to Borcella.{" "}
        <Highlight>
          The mobile experience is a favorite among remote teams.
        </Highlight>{" "}
        It just fits how modern teams work.
      </p>
    ),
  },
  {
    name: "Aiden Wilson",
    role: "Compliance Manager at MedLink",
    img: "https://randomuser.me/api/portraits/men/92.jpg",
    description: (
      <p>
        We needed a compliant and accessible solution fast.{" "}
        <Highlight>
          Borcella met our industry standards out of the box.
        </Highlight>{" "}
        It's the most painless implementation I’ve done.
      </p>
    ),
  },
  {
    name: "Olivia Chen",
    role: "EdTech Product Manager at LearnSphere",
    img: "https://randomuser.me/api/portraits/women/29.jpg",
    description: (
      <p>
        Borcella helped us build inclusive, learner-first experiences.{" "}
        <Highlight>
          The customizable modules and quizzes are perfect for K–12 to adult
          learners.
        </Highlight>{" "}
        Our NPS scores went up by 40%.
      </p>
    ),
  },
];

export default function Testimonials() {
  return (
    <section className="relative mx-auto max-w-7xl pb-10">
      <div className="absolute top-20 -left-20 z-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute -right-20 bottom-20 z-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-foreground font-mont-alt mb-4 text-center text-4xl leading-[1.2] font-bold tracking-tighter md:text-5xl">
          Trusted by Ambitious Teams & Fast-Growing Startups
        </h2>
        <h3 className="text-muted-foreground font-mont mx-auto mb-8 max-w-7lg text-center text-lg font-medium tracking-tight text-balance">
          Don&apos;t just take our word for it. See how{" "}
          <span className="bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
            real professionals
          </span>{" "}
          are transforming their workflow with{" "}
          <span className="font-semibold text-blue-500">NexaUI</span>.
        </h3>
      </motion.div>

      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        {/* <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-20%"></div>
        <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-20%"></div> */}
      </div>
    </section>
  );
}
