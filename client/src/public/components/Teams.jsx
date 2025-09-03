import React from "react";
import Carasoul from "./Carasoul";

export default function Teams() {
  return (
    <>
      <section class="mx-auto max-w-7xl">
        <div class="flex flex-col items-start text-left">
          <p class="semibold text-2xl capitalize font-bold tracking-wide font-mont-alt text-black">
            Meet the Minds Behind Borcella ✨
          </p>
          <h2 class="my-6 text-pretty text-2xl font-syne capitalize text-indigo-400 font-bold lg:text-4xl">
            The team driving innovation in online learning
          </h2>
          <p class="mb-8 max-w-3xl font-mont-alt text-zinc-600 lg:text-xl">
            At Borcella, our leadership blends deep technical expertise with a
            passion for empowering learners. From full-stack engineers and AI
            specialists to seasoned educators and curriculum strategists we’re
            united by one goal: building the most intuitive, industry-ready LMS
            platform.
          </p>
        </div>
      </section>

      <Carasoul />
    </>
  );
}
