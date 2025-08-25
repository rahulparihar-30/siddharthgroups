import React from "react";
import "./styling/About.css";

const About = () => {
  return (
    <div className="about-container section-headings space-y-5 wrapper min-h-screen mt-10 px-4 sm:px-6 lg:px-12">
      <h4 className="text-[10px] uppercase tracking-wide" style={{ fontFamily: "Golco" }}>
        About Us
      </h4>
      <h2 className="tagline">
        We Build. We Grow. We Prosper
      </h2>
      <span className="text-2xl sm:text-3xl" style={{ fontFamily: "Golco" }}>
        Together
      </span>

      <div className="about-info flex flex-col lg:flex-row items-start gap-8 my-10">
        {/* Left Section - Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <p className="text-sm sm:text-base text-justify leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable.
          </p>
          <p className="text-sm sm:text-base text-justify leading-relaxed">
            The generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc. If you are going
            to use a passage of Lorem Ipsum, you need to be sure there isn't
            anything embarrassing hidden in the middle of text. All the Lorem
            Ipsum generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet.
          </p>
        </div>

        {/* Right Section - Shapes */}
        <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto relative bg-amber-600 rounded-lg overflow-hidden">
          <div className="w-28 h-28 sm:w-40 sm:h-40 rounded bg-amber-50 absolute right-10 top-5"></div>
          <div className="w-28 h-28 sm:w-40 sm:h-40 rounded bg-amber-50 absolute right-32 top-16"></div>
          <div className="w-28 h-28 sm:w-40 sm:h-40 rounded bg-green-300 absolute right-5 bottom-10"></div>
          <div className="w-28 h-28 sm:w-40 sm:h-40 rounded bg-amber-50 absolute right-24 bottom-5"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
