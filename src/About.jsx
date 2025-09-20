import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const About = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let effect = null;

    if (window.VANTA) {
      effect = window.VANTA.RINGS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0xf5f7ff,
        color: 0x18589d,
      });
    }

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <section
      id="about"
      ref={vantaRef}
      className="relative py-16 px-4 md:px-12 lg:px-20 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h1
          className="text-5xl font-bold text-center text-[#0056b3] mb-6"
          style={{ fontFamily: '"Oswald", "sans-serif"' }}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Who We Are
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-center max-w-2xl mx-auto font-sans text-[#1a1f36] leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We empower communities through innovative technology and unwavering
          trust, driving growth, enabling opportunities, and building a brighter
          future for all.
        </motion.p>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12">
          {/* Left */}
          <motion.div
            className="flex flex-col gap-6 p-6 sm:p-10 rounded-2xl backdrop-blur-md bg-white/60"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-2xl md:text-3xl font-bold text-[#0056b3]"
              style={{ fontFamily: '"Oswald", "sans-serif"' }}
            >
              About Us
            </h3>
            <p className="text-base md:text-lg text-[#1a1f36] text-justify leading-relaxed tracking-wide">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injected
              humour, or randomised words which don’t look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn’t anything embarrassing hidden in the
              middle of text.
            </p>
            <p className="text-base md:text-lg text-[#1a1f36] text-justify leading-relaxed tracking-wide">
              The generated Lorem Ipsum is therefore always free from repetition,
              injected humour, or non-characteristic words etc. If you are going
              to use a passage of Lorem Ipsum, you need to be sure there isn’t
              anything embarrassing hidden in the middle of text.
            </p>
          </motion.div>

          {/* Right - Images */}
          {/* <motion.div
            className="grid grid-cols-2 gap-4 overflow-hidden p-2 rounded-2xl bg-white/60 backdrop-blur-md"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/ai-generated-8846860_1280.jpg"
              alt="Main"
              className="col-span-2 w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl brightness-75 transition-transform duration-500 hover:scale-105"
              whileTap={{ scale: 0.98 }}
            />
            <motion.img
              src="/sunset-3660772_1280.jpg"
              alt="Sub One"
              className="w-full h-40 sm:h-48 object-cover rounded-2xl shadow-xl brightness-75 transition-transform duration-500 hover:scale-105"
              whileTap={{ scale: 0.95 }}
            />
            <motion.img
              src="/women-9152739_1280.jpg"
              alt="Sub Two"
              className="w-full h-40 sm:h-48 object-cover rounded-2xl shadow-xl brightness-75 transition-transform duration-500 hover:scale-105"
              whileTap={{ scale: 0.98 }}
            />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
