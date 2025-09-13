import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // ✅ for hamburger icons

const Navbar = () => {
  const navigations = ["Home", "Services", "About", "Contact"];
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        // Desktop: enable scroll effect
        setIsScrolled(window.scrollY > 50);
      } else {
        // Mobile: always solid background
        setIsScrolled(true);
      }
    };

    handleScroll(); // run on mount to set correct state
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 text-white ${
        isScrolled ? "bg-[#0035e3] shadow-lg border-b-2" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navigations.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-[#f59e0b] transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-[#0035e3] shadow-md">
          <ul className="flex flex-col items-center gap-6 py-6 font-medium">
            {navigations.map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-[#f59e0b] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
