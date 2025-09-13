import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      name: "Construction",
      description:
        "From modern residences to large-scale commercial developments, we deliver structures that blend quality craftsmanship, innovative design, and uncompromising safety—built to inspire, empower, and endure.",
      image: "/pexels-rezwan-1216589.jpg",
      href: "/services/construction",
    },
    {
      name: "Agriculture",
      description:
        "We enable sustainable farming through smart irrigation, precision inputs, and supply-chain support—helping growers boost yield, reduce costs, and protect the environment.",
      image: "/pexels-jk04-2933243.jpg",
      href: "/services/agriculture",
    },
    {
      name: "Finance",
      description:
        "Flexible financing, project funding, and advisory solutions designed to accelerate growth while managing risk—transparent terms, quick processing, and trusted guidance.",
      image: "/traxer-kM6QNrgo0YE-unsplash.jpg",
      href: "https://finbridgeadvisor.com",
      external: true,
    },
    {
      name: "Franchise",
      description:
        "A proven franchise model with training, branding, and operational playbooks—start faster, scale smarter, and grow with Siddharth Group’s ecosystem.",
      image: "/background-images/Franchise.jpg",
      href: "https://mehtagroup.in",
      external: true,
    },
    {
      name: "Films",
      image: "/pexels-kyleloftusstudios-5642754.jpg",
      href: "/services/films",
    },
    {
      name: "Pharmaceutical",
      image: "/pexels-anntarazevich-5910953.jpg",
      href: "/pharmacy",
    },
  ];

  // Variants
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.25 } },
  };

  const card = {
    hidden: { opacity: 0, scale: 0.8, y: 100 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="services"
      className="flex flex-col justify-center items-center py-16 px-6 w-full bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
    >
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-6xl text-center text-[#0056b3] font-extrabold mb-6 tracking-tight"
        style={{ fontFamily: '"Oswald", sans-serif' }}
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        What We Do
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-base md:text-xl text-center text-[#1a1f36] max-w-3xl leading-relaxed mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We create opportunities across industries—building infrastructures, empowering businesses, 
        farmers, and communities. Every service is designed to add value, drive growth, and improve lives.
      </motion.p>

      {/* Service Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{
              scale: 1.05,
              rotate: [0, 1.5, -1.5, 0],
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
            className="group relative"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-indigo-600 opacity-0 group-hover:opacity-20 blur-2xl transition duration-500"></div>
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
