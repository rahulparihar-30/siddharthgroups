import React from "react";
import { motion } from "framer-motion";
import "./styling/About.css";

const About = () => {
  return (
    <div
      className="p-2"
      style={{
        backgroundImage: "url('/bg1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="about-container section-headings wrapper min-h-screen mt-10 px-4 md:px-30">
        {/* Heading */}
        <motion.h1
          className="text-5xl sm:text-6xl font-bold text-center mb-6"
          style={{ fontFamily: '"Oswald", "sans-serif"' }}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Who We Are
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-center p-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Empowering Communities Through Technology & Trust.
        </motion.p>

        {/* About Info */}
        <div className="about-info grid grid-cols-1 md:grid-cols-2 gap-10 my-12 items-center">
          {/* Left Section - Text */}
          <motion.div
            className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl shadow-md"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-left font-bold font-oswald text-2xl">About Us</h3>
            <p className="text-base lg:text-lg text-justify leading-relaxed tracking-wide">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing hidden in the
              middle of text.
            </p>
            <p className="text-base lg:text-lg text-justify leading-relaxed tracking-wide">
              The generated Lorem Ipsum is therefore always free from repetition,
              injected humour, or non-characteristic words etc. If you are going
              to use a passage of Lorem Ipsum, you need to be sure there isn't
              anything embarrassing hidden in the middle of text.
            </p>
          </motion.div>

          {/* Right Section - Images */}
          <motion.div
            className="h-fit grid grid-cols-2 gap-3 p-2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/ai-generated-8846860_1280.jpg"
              alt="Main"
              className="w-full h-full object-cover rounded-2xl shadow-2xl brightness-75 hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.98 }}
            />
            <div id="subimage" className="flex flex-col gap-3">
              <motion.img
                src="/sunset-3660772_1280.jpg"
                alt="Sub One"
                className="w-full h-40 sm:h-48 object-cover rounded-2xl shadow-2xl brightness-75 hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.98 }}
              />
              <motion.img
                src="/women-9152739_1280.jpg"
                alt="Sub Two"
                className="w-full h-40 sm:h-48 object-cover rounded-2xl shadow-2xl brightness-75 hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.98 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
