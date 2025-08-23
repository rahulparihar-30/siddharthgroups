import React from "react";
import { NavLink } from "react-router-dom";

const serviceCard = (service) => {
    return (
      <div className="card relative w-[300px] h-[400px] border-2 border-amber-600 bg-black overflow-hidden">
        <img
          src={service.image}
          className="w-full h-full opacity-40 object-cover"
        />
        <div
          id="description"
          className="absolute left-1/2 bottom-6 transform -translate-x-1/2 
                     text-amber-50 space-y-4 text-center"
        >
          <h3
            style={{ fontFamily: "Golco" }}
            className="text-[20px]"
          >
            {service.name}
          </h3>
          {service.description ? (
            <p className="text-[10px]">{service.description}</p>
          ) : (
            <p className="text-[10px]" style={{ fontFamily: "Golco" }}>
              {service.location}
            </p>
          )}
          {service.id && (
            <NavLink
              className="p-2 px-10 text-center border-2 border-amber-300 
                         bg-[#ffc247ad] hover:bg-amber-300 cursor-pointer rounded"
            >
              View
            </NavLink>
          )}
        </div>
      </div>
    );
  };
const Section = (props) => {
  

  return (
    <section id={props.id} className="text-blue-950 lg:mx-30 my-10 pb-10 text-center space-y-5">
      <h3
        style={{ fontFamily: "Golco" }}
        className="text-1"
      >
        {props.title}
      </h3>
      <h1
        className="tagline"
        style={{ fontFamily: "Golco" }}
      >
        {props.tagline}
      </h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
  {props.services.map((service, index) => (
    <div key={index}>{serviceCard(service)}</div>
  ))}
</div>
{
    props.kind =="project" && <NavLink to="./projects" className="bg-[#fba700c6] hover:bg-amber-500 p-2 rounded border-2 border-amber-500 text-center text-white font-bold">Explore More</NavLink>
  }
    </section>
  );
};

export default Section;
export {serviceCard};