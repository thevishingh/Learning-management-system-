import React from "react";
import { useId } from "react";

export default function FeaturesSectionDemo() {
  return (
    <div className="py-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b font-syne dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-black font-mont dark:text-neutral-400 mt-4 text-base font-[500] relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Frontend Development",
    description:
      "Master HTML, CSS, JavaScript, React, Tailwind CSS, and more to build beautiful, interactive web interfaces used by millions.",
  },
  {
    title: "Backend Development",
    description:
      "Learn to power web applications using Node.js, Express, MongoDB, SQL, and API integrations. Build the logic that makes apps work.",
  },
  {
    title: "Full Stack Development",
    description:
      "Combine frontend and backend skills to become a full-stack developer. Work with MERN stack (MongoDB, Express, React, Node) and Git workflows.",
  },
  {
    title: "Mobile App Development",
    description:
      "Build cross-platform mobile apps with Flutter, React Native, and Dart. Learn how top apps deliver seamless experiences on iOS & Android.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Get hands-on with AWS, Docker, CI/CD pipelines, and Linux fundamentals. Prepare for real-world deployment and automation scenarios.",
  },
  {
    title: "UI/UX Design",
    description:
      "Learn to design user-centric apps using Figma, Adobe XD, wireframes, and design systems that align with development processes.",
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Strengthen your problem-solving skills with in-depth DSA training in JavaScript, Python, or Java. Perfect for interviews and logic building.",
  },
  {
    title: "Soft Skills & Career Prep",
    description:
      "Sharpen your communication, teamwork, and interview readiness with real-world project presentations, resume help, and mock interviews.",
  },
];

export const Grid = ({ pattern, size }) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
