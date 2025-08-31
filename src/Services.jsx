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
    },
    {
      name: "Franchise",
      description:
        "A proven franchise model with training, branding, and operational playbooks—start faster, scale smarter, and grow with Siddharth Group’s ecosystem.",
      image: "/background-images/Franchise.jpg",
      href: "https://mehtagroup.in",
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

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // cards appear one after another
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="services"
      className="flex flex-col space-y-5 justify-center items-center"
    >
      <motion.h1
        className="text-6xl"
        style={{ fontFamily: '"Oswald", "sans-serif"', fontWeight: "bold" }}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        What We Do
      </motion.h1>

      <motion.p
        className="text-xl text-center p-4 text-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We bring together diverse, future-facing industries and communities to
        co-create a positive world, where one enables the other to Rise.
      </motion.p>

      {/* Cards with stagger animation */}
      <motion.div
        id="services"
        className="fade-in flex flex-col w-full p-5 lg:flex-row justify-center items-center gap-5 flex-wrap"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={card}>
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
