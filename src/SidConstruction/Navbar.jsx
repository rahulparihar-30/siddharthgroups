import React,{useEffect,useState} from "react";
import { NavLink } from "react-router-dom";

const Navbar = ()=>{
    const navigations = ["Home","Services","About","Contact"]
    
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
        <nav className={`nav fixed w-full top-0 left-0 p-2 z-1 ${isScrolled ? "bg-amber-500" : "bg-transparent text-white"}`}>
            <div className={`nav-bar flex h-10 justify-evenly lg:justify-between lg:mx-30 lg:w-6/12 gap-10`}>
                <img className="brand-icon rounded-sm" src="/logo.png" alt="Logo" />
            <ul className="nav-list flex gap-10 font-medium lg:font-bold pt-2">
                {
                    navigations.map(navigation => <li id={navigation} className="hover:text-amber-600"><a href={`#${navigation}`}>{navigation}</a></li>)
                }
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;