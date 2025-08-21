import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Services = ()=>{
    const services = [
  {
    "name": "Construction",
    "description": "From modern residences to large-scale commercial developments, we deliver structures that blend quality craftsmanship, innovative design, and uncompromising safety—built to inspire, empower, and endure.",
    "image": "/background-images/Construction.jpg",
    "link": "/services/construction"
  },
  {
    "name": "Agriculture",
    "description": "We enable sustainable farming through smart irrigation, precision inputs, and supply-chain support—helping growers boost yield, reduce costs, and protect the environment.",
    "image": "/background-images/Agriculture1.jpg",
    "link": "/services/agriculture"
  },
  {
    "name": "Finance",
    "description": "Flexible financing, project funding, and advisory solutions designed to accelerate growth while managing risk—transparent terms, quick processing, and trusted guidance.",
    "image": "/background-images/Finance.jpg",
    "link": "/services/finance"
  },
  {
    "name": "Franchise",
    "description": "A proven franchise model with training, branding, and operational playbooks—start faster, scale smarter, and grow with Siddharth Group’s ecosystem.",
    "image": "/background-images/Franchise.jpg",
    "link": "/services/franchise"
  }
]
    const serviceCard = (service)=>{
        return (<div className="w-[330px] bg-black h-120 relative rounded hover:translate-y-5">
            <img src={service.image} className=" w-full h-full object-cover opacity-50 rounded"/>
            <div className="text-left flex flex-col space-y-5 absolute w-[300px] top-40 p-5">
                <h2 style={{fontFamily:'Golco'}}>{service.name}</h2>
                <p>{service.description}</p>
                <button className="cursor-pointer hover:bg-[var(--secondary-color)] text-left bg-[#073775bd] w-fit p-1 rounded border-1 border-[var(--secondary-color)]">Explore  <ArrowForwardIcon/></button>
            </div>
        </div>)
    }
    return(<div className="h-[100vh] text-center flex flex-col space-y-5 mt-10" id="services">
        <h4 className="text-[10px]" style={{fontFamily:'Golco'}}>Services</h4>
        <h2 className="tagline">Tailored solutions for every business</h2>
        <div className="cards grid grid-cols-4 justify-center mt-20 mx-20 space-x-10">
        {services.map(service=>serviceCard(service))}

        </div>
    </div>)
}
export default Services;