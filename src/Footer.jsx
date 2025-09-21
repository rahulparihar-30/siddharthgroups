import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { services } from "./data";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    console.log(services)
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gradient-to-t from-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-5 text-left md:text-left">
        {/* Logo + About */}
        <div className=" col-span-2 flex flex-col items-start">
          <img
            src="/logo.png"
            alt="Siddharth Group Logo"
            className="h-14 mb-4 object-contain"
          />
          <p className="text-sm md:text-base text-left leading-relaxed text-gray-200 max-w-md">
            Siddharth Group is committed to building trust and shaping the future
            through excellence in Construction, Agriculture, Finance, Franchise,
            Films, and Pharmaceuticals. We believe in growth that empowers communities.
          </p>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-blue-300">Our Services</h3>
          <ul className="space-y-2 text-sm md:text-base">
            {
              services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="hover:text-[#f59e0b] transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-blue-300">Contact Us</h3>
          <div className="space-y-3 text-sm md:text-base">
            <p className="flex md:items-center  justify-start gap-2">
              <MapPin size={16} /> Pune, Maharashtra, India
            </p>
            <p className="flex justify-start gap-2">
              <Mail size={16} />
              <a href="mailto:sidharthgroups@gmail.com" className="hover:text-white transition-colors">
                sidharthgroups@gmail.com
              </a>
            </p>
            <p className="flex justify-start gap-2">
              <Phone size={16} />
              <a href="tel:+9188053608977" className="hover:text-white transition-colors">
                +91-88053608977
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-start gap-5 mt-5 text-xl">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-400 transition-colors"><FaFacebookF /></a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-300 transition-colors"><FaTwitter /></a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-400 transition-colors"><FaInstagram /></a>
            <a href="https://youtube.com" aria-label="YouTube" className="hover:text-red-500 transition-colors"><FaYoutube /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-blue-200 transition-colors"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700 py-4 text-center text-xs sm:text-sm px-4 bg-blue-900/80">
        <p>
          © {new Date().getFullYear()} Siddharth Group. All Rights Reserved. |{" "}
          Website Developed by{" "}
          <a
            href="https://rahulparihar.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline font-semibold text-white hover:text-[#f59e0b]"
          >
            Rahul Parihar
          </a>
        </p>
      </div>
    </footer>
  );
}
