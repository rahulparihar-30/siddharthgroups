import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import useMediaQuery from "./useMediaQuery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { persons } from "./data";

const Team = () => {
  const desktopSliderRef = useRef(null);
  const mobileSliderRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 767px)");

  const PersonCard = (person, idx) => (
    <div
      key={idx}
      className="group flex flex-col items-center rounded-2xl shadow-lg overflow-hidden 
                 bg-white dark:bg-gray-900 hover:shadow-2xl transition-all duration-500 
                 w-full max-w-[300px] mx-auto"
    >
      <div className="relative w-full h-60 md:h-72 overflow-hidden">
        <img
          src={person.image}
          alt={person.name}
          loading="lazy"
          className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="text-white text-sm md:text-base font-semibold text-center px-2">
            {person.designation}
          </span>
        </div>
      </div>
      <div className="p-4 w-full text-center overflow-hidden">
        <h3
          className="font-bold text-lg md:text-xl text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors truncate"
          style={{ fontFamily: '"Oswald", "sans-serif"' }}
        >
          {person.name}
        </h3>
        <p className="italic text-gray-500 dark:text-gray-400 text-sm md:text-base mt-1 line-clamp-2">
          {person.designation}
        </p>
      </div>
    </div>
  );

  // Desktop/Tablet settings (clean slide only)
  const desktopSettings = {
    dots: true,
    infinite: true,
    speed: 400, // smaller = snappier
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear", // removes easing bounce
    fade: false, // disable fade animation
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    ],
  };

  // Mobile settings (autoplay clean slide)
  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    fade: false,
  };

  return (
    <section className="py-5 px-4 md:px-12 lg:px-20 flex flex-col justify-center" id="team">
      <h1 className="text-5xl text-center font-oswald font-bold text-[#0056b3] mb-4">
        Meet Our Team
      </h1>

      <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-10">
        We bring together diverse, future-facing industries and communities to co-create a positive world, where one enables the other to Rise.
      </p>

      {isMobile ? (
        // 👉 Mobile View
        <Slider ref={mobileSliderRef} {...mobileSettings}>
          {persons.map((p, idx) => (
            <div key={idx} className="flex justify-center px-2">
              {PersonCard(p, idx)}
            </div>
          ))}
        </Slider>
      ) : (
        // 👉 Desktop/Tablet View
        <div className="relative w-full max-w-6xl mx-auto">
          <Slider ref={desktopSliderRef} {...desktopSettings}>
            {persons.map((p, idx) => (
              <div key={idx} className="flex justify-center px-2">
                {PersonCard(p, idx)}
              </div>
            ))}
          </Slider>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => desktopSliderRef.current.slickPrev()}
              className="flex items-center gap-1 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg"
            >
              <ChevronLeft size={16} /> Prev
            </button>
            <button
              onClick={() => desktopSliderRef.current.slickNext()}
              className="flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg"
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      <h2 className="text-center mt-10 text-lg md:text-xl font-semibold text-[#0056b3]">
        From Dreams to Delivery Let's Begin.
      </h2>
    </section>
  );
};

export default Team;
