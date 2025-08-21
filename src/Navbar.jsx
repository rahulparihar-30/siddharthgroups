import React,{useEffect,useState} from "react";
import "./styling/Navbar.css"

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
        <nav className={`nav  ${isScrolled ? "bg-[var(--secondary-color)]" : "bg-transparent text-white"}`}>
            <div className={`nav-bar`}>
                <img className="brand-icon" src="/logo.png" alt="Logo" />
            <ul className="nav-list">
                {
                    navigations.map(navigation => <li id={navigation}>{navigation}</li>)
                }
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;