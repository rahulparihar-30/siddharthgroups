import React, { useState, useEffect, useRef } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; // arrow
import "./styling/Home.css";

const Home = () => {
  const services = ["Construction", "Finance", "Agriculture", "Franchise"];
  const videos = ["c1.mp4", "c2.mp4", "c3.mp4"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrow, setShowArrow] = useState(false);
  const videoRef = useRef(null);

  // Show arrow after 2s
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // When video ends → go to next
  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [currentIndex]);

  // Scroll handler
  const handleServiceClick = (service, index) => {
    setCurrentIndex(index);
    const target = document.getElementById(service);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Scroll down arrow handler
  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="Home relative w-full 
      md:min-h-screen min-h-[90vh] 
      mt-15 md:mt-0 flex overflow-hidden items-center justify-center"
      id="home"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover brightness-95 transition-opacity duration-1000"
        src={"c2.mp4"}
        autoPlay
        muted
        loop
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 max-w-4xl py-10">
        <h3 className="relative inline-block text-xl font-oswald text-white px-4 font-bold backdrop-blur-md bg-blue-800 p-1">
          Siddharth Groups
        </h3>

        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-6 font-oswald">
          One Stop Solution <br />
          <span className="text-[#f0c93d]">for all your needs.</span>
        </h1>

        {/* Services Labels Carousel */}
        <div className="overflow-hidden w-[400px] mb-6 group" id="services-carousel">
          <ul className="flex gap-6 animate-scroll whitespace-nowrap group-hover:pause-scroll">
            {[...services, ...services].map((service, index) => (
              <li
                key={index}
                onClick={() =>
                  handleServiceClick(service, index % services.length)
                }
                className="cursor-pointer px-4 py-2 font-oswald rounded border border-white/40 bg-white/10 text-white font-semibold text-sm md:text-base backdrop-blur-md transition-all duration-300 hover:scale-105 hover:text-amber-500"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="btns flex flex-wrap gap-4 justify-center">
          <button
            id="whatsapp"
            className="flex items-center gap-2 px-3 py-2 rounded 
             bg-green-500 hover:bg-green-500/50 
             backdrop-blur-md border border-white/20 
             transition-all duration-300 transform hover:scale-105 
             text-white font-semibold shadow-lg font-oswald"
          >
            <WhatsAppIcon /> Chat Now
          </button>

          <button
            id="learn-more"
            className="px-4 py-2 rounded font-oswald bg-white/10 border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-white font-semibold shadow-lg"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Down Arrow (hidden on mobile) */}
      {showArrow && (
        <div
          onClick={scrollToNextSection}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce hidden md:block"
        >
          <KeyboardArrowDownIcon className="text-white text-5xl opacity-80 hover:opacity-100 transition" />
        </div>
      )}
    </div>
  );
};

export default Home;
