import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Services = () => {
  const services = [
    {
      name: "Construction",
      description:
        "From modern residences to large-scale commercial developments, we deliver structures that blend quality craftsmanship, innovative design, and uncompromising safety—built to inspire, empower, and endure.",
      image: "/background-images/Construction.jpg",
      link: "/services/construction",
    },
    {
      name: "Agriculture",
      description:
        "We enable sustainable farming through smart irrigation, precision inputs, and supply-chain support—helping growers boost yield, reduce costs, and protect the environment.",
      image: "/background-images/Agriculture1.jpg",
      link: "/services/agriculture",
    },
    {
      name: "Finance",
      description:
        "Flexible financing, project funding, and advisory solutions designed to accelerate growth while managing risk—transparent terms, quick processing, and trusted guidance.",
      image: "/background-images/Finance.jpg",
      link: "/services/finance",
    },
    {
      name: "Franchise",
      description:
        "A proven franchise model with training, branding, and operational playbooks—start faster, scale smarter, and grow with Siddharth Group’s ecosystem.",
      image: "/background-images/Franchise.jpg",
      link: "/services/franchise",
    },
  ];

  const serviceCard = (service) => {
    return (
      <div className="bg-black relative rounded overflow-hidden hover:translate-y-2 transition-all duration-300">
        <img
          src={service.image}
          className="w-full h-56 sm:h-64 md:h-72 object-cover opacity-50"
          alt={service.name}
        />
        <div className="text-left flex flex-col space-y-3 absolute bottom-4 left-4 right-4">
          <h2 style={{ fontFamily: "Golco" }} className="text-white text-lg md:text-xl">
            {service.name}
          </h2>
          <p className="text-gray-200 text-sm md:text-base line-clamp-3">
            {service.description}
          </p>
          <button className="cursor-pointer flex items-center gap-1 hover:bg-[var(--secondary-color)] bg-[#073775bd] text-white text-sm md:text-base px-3 py-1 rounded border border-[var(--secondary-color)] w-fit">
            Explore <ArrowForwardIcon fontSize="small" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen text-center flex flex-col space-y-5 mt-10 px-4" id="services">
      <h4  style={{ fontFamily: "Golco" }}>
        Services
      </h4>
      <h2 className="tagline">
        Tailored solutions for every business
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 sm:mt-16">
        {services.map((service, index) => (
          <div key={index}>{serviceCard(service)}</div>
        ))}
      </div>
    </div>
  );
};

export default Services;
