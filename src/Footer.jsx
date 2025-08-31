import { Mail, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-10 pb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 sm:gap-8 md:text-center">
        {/* Company Info */}
        <div>
          <img
            src="/logo.png"
            alt="Siddharth Group Logo"
            className="h-12  mb-4 object-contain"
          />
          <p className="text-sm leading-relaxed">
            S. No, AP81, 83, N Main Rd, near Hard Rock Cafe, Koregaon Park
            Annexe, Mundhwa, Pune, Maharashtra 411036
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <p className="flex md:justify-center justify-start items-center gap-2 flex-wrap">
              <Mail size={16} /> sidharthgroups@gmail.com
            </p>
            <p className="flex md:justify-center justify-start items-center gap-2">
              <Phone size={16} /> +91-88053608977
            </p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Construction</li>
            <li>Agriculture</li>
            <li>Finance</li>
            <li>Franchise</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Overview</li>
            <li>Team</li>
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Projects</h3>
          <ul className="space-y-2 text-sm">
            <li>Construction</li>
            <li>Agriculture</li>
            <li>Finance</li>
            <li>Franchise</li>
          </ul>
        </div>

        {/* Policies & Socials */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Terms & Conditions</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Disclaimer</a>
            </li>
          </ul>

          <div className="flex justify-center sm:justify-start gap-5 mt-6 text-lg">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700 mt-8 pt-4 text-center text-xs sm:text-sm px-4">
        <p>
          © 2025 Siddharth Group. All Rights Reserved.{" "}
          <br className="sm:hidden" />
          Company Registration No.: SG/IND/2020/4582
        </p>
      </div>
    </footer>
  );
}
