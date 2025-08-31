import React,{useState,useEffect} from "react";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./styling/Home.css"
import { useGSAP } from "@gsap/react";
const Home = ()=>{
    const services = ["Construction","Finance","Agriculture","Franchise"];
    const images = ["Construction","Finance","Agriculture","Franchise"]
    const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 3 seconds
    return () => clearInterval(interval);
    
  }, [images.length]);

    return(
        <div className="Home" id="Home">
            <div
  className="w-full h-screen bg-cover bg-center transition-all duration-500 relative"
  style={{
    backgroundImage: `url(/background-images/${images[currentIndex]}.jpg)`,
  }}
></div>
            <div className="overlay-layer w-full h-full bg-black absolute top-0 opacity-30"></div>
            <div className="home-overlay">
                <h3>Siddharth Groups</h3>
                <h1>One Stop Solution <span>for all your needs.</span></h1>
                <ul className="services-labels">
                    {
                        services.map((service => <li className={`service-label ${service == images[currentIndex]?"bg-[var(--secondary-color)] p-0.5":"bg-none"} font-bold`} id={service}>
                            {service}
                    </li>))
                    }
                </ul>
                <div className="btns md:justify-start" id="btn">
                        <button id="whatsapp" className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"><WhatsAppIcon/> Chat Now</button>
                </div>
            </div>
        </div>
    )
}

export default Home;