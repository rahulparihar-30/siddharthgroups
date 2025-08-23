import React from "react";
import CHome from "./CHOme";
import Section from "./Section";
import AboutCons from "./AboutCons";
import {services,projects} from "./data"
import Why from "./Why";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
const AppHome = ()=>{
    return(<>
        <CHome id="Home"/>
        <Section id="Services" title="Our Services" tagline="Building Excellence, Delivering Trust." services={services}/>
        <AboutCons id="About"/>
        <Section id="Projects" title="Projects" kind="project" tagline="Turning Blueprints Into Landmarks." services={projects} />
        <Why/>
        <Testimonial/>
        <Footer id="contact" className="bg-amber-500"/>
    </>)
}

export default AppHome