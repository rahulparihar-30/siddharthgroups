import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Team = () => {
  const sliderRef = useRef(null);

  const persons = [
    {
      name: "Lana Steiner",
      designation: "Chief Operating Officier",
      image: "/team/p4.jpg",
    },
    { name: "Mia Ward", designation: "Founder & CEO", image: "/team/p2.jpg" },
    { name: "Lana Ray", designation: "Co-founder", image: "/team/p3.jpg" },
    {
      name: "Justin Rose",
      designation: "Co-founder and CFO",
      image: "/team/p1.jpg",
    },
    {
      name: "Lana Steiner",
      designation: "Chief Operating Officier",
      image: "/team/p4.jpg",
    },
    { name: "Mia Ward", designation: "Founder & CEO", image: "/team/p2.jpg" },
  ];

  // Animation variants
  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const People = (person, idx) => (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="group flex flex-col text-center lg:text-left w-[150px] md:w-[300px] md:h-fit h-[350px] mx-auto bg-[var(--secondary-color)]"
    >
      {/* Image section */}
      <div className="img-container w-full flex-1 overflow-hidden">
        <motion.img
          src={person.image}
          className="group-hover:sepia-50 group-hover:scale-110 w-full h-full md:h-[400px] object-cover object-top aspect-square transition-all duration-500"
          alt={person.name}
          loading="lazy"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        />
      </div>

      {/* Text section */}
      <div className="flex flex-col justify-between p-2 flex-none">
        <h3
          className="font-bold text-lg md:text-3xl truncate"
          style={{ fontFamily: '"Oswald", "sans-serif"' }}
        >
          {person.name}
        </h3>
        <span className="italic text-gray-400 text-sm md:text-xl line-clamp-2 ">
          {person.designation}
        </span>
      </div>
    </motion.div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };

  return (
    <div className="team-container section-headings space-y-5 mb-5">
      {/* Heading */}
      <motion.h1
        className="text-6xl"
        style={{ fontFamily: '"Oswald", "sans-serif"' }}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Meet Our Team
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-xl text-center p-4 text-wrap font-sans"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We bring together diverse, future-facing industries and communities to
        co-create a positive world, where one enables the other to Rise.
      </motion.p>

      {/* Slider */}
      <div className="relative w-full lg:max-w-4xl mx-auto">
        <Slider
          ref={sliderRef}
          {...settings}
          customPaging={() => (
            <div className="mt-5 w-2 h-2 bg-white rounded-full"></div>
          )}
        >
          {persons.map((person, idx) => (
            <div key={idx}>{People(person, idx)}</div>
          ))}
        </Slider>
      </div>

      {/* External Buttons */}
      <motion.div
        id="btn"
        className="flex justify-center gap-4 mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 cursor-pointer text-white rounded-lg flex items-center gap-2"
        >
          <ChevronLeft size={18} /> Prev
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 cursor-pointer text-white rounded-lg flex items-center gap-2"
        >
          Next <ChevronRight size={18} />
        </button>
      </motion.div>

      {/* Tagline */}
      <motion.h2
        className="tagline"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        From Dreams to Delivery Let's Begin.
      </motion.h2>
    </div>
  );
};

export default Team;
