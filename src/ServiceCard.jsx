import { Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ServiceCard = ({ service }) => {
  const isExternal = service.external || service.href?.startsWith("http");

  const CardWrapper = ({ children }) =>
    isExternal ? (
      <a
        href={service.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 will-change-transform"
      >
        {children}
      </a>
    ) : (
      <Link
        to={service.href || "#"}
        className="group relative block w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 will-change-transform"
      >
        {children}
      </Link>
    );

  return (
    <div id={service.name}>
      <CardWrapper>
        {/* Background Image */}
        <img
          src={service.image}
          alt={service.name}
          loading="lazy" // ✅ Lazy load for performance
          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 sm:group-hover:scale-110"
          style={{
            backfaceVisibility: "hidden", // ✅ Prevent GPU jank
            transform: "translateZ(0)", // ✅ Force GPU acceleration
          }}
        />

        {/* Overlay (hover effects only on larger screens) */}
        <div className="absolute inset-0 bg-black/30 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Title */}
        <span
          className="absolute bottom-6 left-6 flex items-center gap-2 font-bold text-2xl text-white sm:group-hover:text-blue-400 transition-colors"
          style={{ fontFamily: '"Oswald", "sans-serif"' }}
        >
          {service.name}
          <ArrowOutwardIcon fontSize="medium" />
        </span>
      </CardWrapper>
    </div>
  );
};

export default ServiceCard;
