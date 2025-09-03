import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Jane D",
    title: "CEO",
    rating: 4.9,
    avatar: "https://pagedone.io/asset/uploads/1696229969.png",
    comment:
      "Borcella LMS keeps our team updated with the latest skills. It’s efficient, scalable, and incredibly easy to manage.",
  },
  {
    id: 2,
    name: "Harsh P.",
    title: "Product Designer",
    rating: 4.9,
    avatar: "https://pagedone.io/asset/uploads/1696229994.png",
    comment:
      "We use Borcella LMS to onboard new designers. The structured flow and tracking features are super helpful for our team.",
  },
  {
    id: 3,
    name: "Alex K.",
    title: "Design Lead",
    rating: 4.9,
    avatar: "https://pagedone.io/asset/uploads/1696230027.png",
    comment:
      "Borcella’s support team helped us customize our courses within hours. Great platform and amazing assistance!",
  },
  {
    id: 4,
    name: "Ritika Sharma",
    title: "Founder, ArtLeap Studio",
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    comment:
      "Borcella LMS made it easy for us to create video tutorials. It’s smooth, user-friendly, and works great on mobile too.",
  },
  {
    id: 5,
    name: "Amit Verma",
    title: "Marketing Manager, Delhi",
    rating: 5.0,
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    comment:
      "The built-in analytics in Borcella LMS help us measure employee progress and fine-tune training strategies fast.",
  },
  {
    id: 6,
    name: "Neha Desai",
    title: "Freelance Developer",
    rating: 4.7,
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    comment:
      "I’ve used several LMS tools, but none are as intuitive and flexible as Borcella. It’s ideal for solo instructors like me.",
  },
  {
    id: 7,
    name: "Rohan Joshi",
    title: "Startup Founder, Bengaluru",
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    comment:
      "Borcella LMS gave our startup a professional edge. We deployed training modules for our interns in under a day.",
  },
  {
    id: 8,
    name: "Shweta Mehra",
    title: "UI/UX Designer",
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    comment:
      "Love the clean design and UX! Borcella makes course creation a breeze, especially for visual and interactive content.",
  },
  {
    id: 9,
    name: "Vikram Patel",
    title: "Tech Lead, Mumbai",
    rating: 5.0,
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    comment:
      "We integrated Borcella with our HR tools and automated compliance training. Saved hours every week for our team.",
  },
  {
    id: 10,
    name: "Anjali Nair",
    title: "Content Strategist",
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    comment:
      "Borcella LMS helped us turn dry documents into engaging learning paths. Our team retention has never been better.",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="py-5 bg-top">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-sm font-mont-alt text-indigo-600 font-semibold mb-2 block">
            SUCCESS STORIES
          </span>
          <h2 className="text-4xl font-syne font-bold text-gray-900">
            Why Educators & Enterprises Trust{" "}
            <span className="text-indigo-600">Borcella LMS</span>
          </h2>
          <p className="mt-4 font-mont text-base text-gray-600 max-w-2xl mx-auto">
            From seamless onboarding to measurable learning outcomes discover
            how Borcella LMS is transforming training, upskilling, and education
            across industries.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="group border border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm">
                <div>
                  <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-base font-syne font-semibold text-indigo-600">
                      {item.rating}
                    </span>
                  </div>
                  <p className="text-base font-mont text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                    {item.comment}
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-gray-200 pt-5">
                  <img
                    className="rounded-full h-10 w-10 object-cover"
                    src={item.avatar}
                    alt={item.name}
                  />
                  <div>
                    <h5 className="text-gray-900 font-syne font-medium transition-all duration-500 mb-1">
                      {item.name}
                    </h5>
                    <span className="text-sm font-mont-alt font-semibold leading-4 text-gray-500">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
