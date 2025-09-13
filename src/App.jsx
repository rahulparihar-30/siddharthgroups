import React from "react";
import Home from "./Home";
import Chat from "./Chat";
import Navbar from "./Navbar";
import "./styling/App.css";
import Services from "./Services";
import About from "./About";
import Team from "./Team";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Highlights from "./Highlights";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Home />
      <div className="md:h-screen">
      <img src="/slope.svg" className="w-full h-auto" />
      <Highlights />
      </div>
          
      <img src="/slope.svg" className="w-full h-auto bg-[#f9fafb]" />
      <Services />
      {/* <img src="/slope.svg" className="w-full h-auto bg-[#f9fafb]" /> */}

      <About />
      <img src="/slope.svg" className="w-full h-auto bg-[#f9fafb]" />
      <Team />
      <Footer />
      <Chat />
    </main>
  );
}

export default App;
