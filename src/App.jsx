import React, { useEffect, useRef } from "react";
import Home from "./Home";
import Chat from "./Chat";
import Navbar from "./Navbar";
import Services from "./Services";
import About from "./About";
import Team from "./Team";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Highlights from "./Highlights";

// 👉 Import GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother"; // 👈 needs Club GreenSock file

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const homeRef = useRef(null);
  const highlightsRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    // ✅ initialize ScrollSmoother once
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true, // enable data-speed, data-lag
    });

    // ✅ section animations
    const sections = [
      homeRef.current,
      highlightsRef.current,
      servicesRef.current,
      aboutRef.current,
      teamRef.current,
    ];

    sections.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { scale: 1, opacity: 1 },
          {
            scale: 0.85,
            opacity: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    });

    return () => {
      smoother.kill(); // cleanup when component unmounts
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <Navbar />
      <div id="smooth-content">
        <main className="App">
          {/* Home */}
          <div ref={homeRef}>
            <Home />
          </div>

          {/* Highlights */}
          <div className="md:h-screen" ref={highlightsRef}>
            {/* <img src="/slope.svg" className="w-full h-auto" /> */}
            <Highlights />
          </div>

          {/* Services */}
          <div ref={servicesRef}>
            {/* <img src="/slope.svg" className="w-full h-auto bg-[#f9fafb]" /> */}
            <Services />
          </div>

          {/* About */}
          <div ref={aboutRef}>
            <About />
          </div>

          {/* Team */}
          <div ref={teamRef}>
            {/* <img src="/slope.svg" className="w-full h-auto bg-[#f9fafb]" /> */}
            <Team />
          </div>

          {/* Footer (no scaling, keep stable) */}
          <Footer />
        </main>
      </div>
      <Chat />
    </div>
  );
}

export default App;
