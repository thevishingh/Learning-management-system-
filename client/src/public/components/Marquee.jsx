import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Neha Sharma",
    username: "@neha",
    body: "Borcella LMS helped us upskill faster with zero friction.",
    img: "https://avatar.vercel.sh/neha",
  },
  {
    name: "Rahul Verma",
    username: "@rahul",
    body: "Seamless learning experience—our team productivity skyrocketed!",
    img: "https://avatar.vercel.sh/rahul",
  },
  {
    name: "Aisha Khan",
    username: "@aisha",
    body: "Exactly what we needed to train, track, and grow our workforce.",
    img: "https://avatar.vercel.sh/aisha",
  },
  {
    name: "Ravi Patel",
    username: "@ravi",
    body: "Intuitive, scalable, and tailored to our learning goals.",
    img: "https://avatar.vercel.sh/ravi",
  },
  {
    name: "Sneha Joshi",
    username: "@sneha",
    body: "Borcella turned our onboarding and training into a breeze!",
    img: "https://avatar.vercel.sh/sneha",
  },
  {
    name: "Aman Gupta",
    username: "@aman",
    body: "A modern LMS that actually delivers results highly recommended.",
    img: "https://avatar.vercel.sh/aman",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-amber-950/[.1] hover:bg-amber-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-syne font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium font-mont-alt dark:text-white/40">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 font-mont text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
