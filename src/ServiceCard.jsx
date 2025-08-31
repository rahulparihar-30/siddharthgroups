import { Link } from "react-router-dom";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const ServiceCard = ({ service }) => (
  <Link
    to={service.href || "#"}
    className="group relative block w-full h-60 md:h-70 lg:w-100 lg:h-50 rounded-2xl overflow-hidden bg-amber-50"
  >
    <img
      src={service.image}
      alt={service.name}
      className="absolute inset-0 w-full h-full object-cover transition duration-300
                 group-hover:filter group-hover:sepia-50 group-hover:opacity-90 brightness-75 group-hover:scale-110"
    />
    <span className="absolute underline underline-offset-6 bottom-6 left-6 font-bold text-2xl text-white " style={{fontFamily:'"Oswald", "sans-serif"'}}>
      {service.name} <ArrowOutwardIcon/>
    </span>
  </Link>
);

export default ServiceCard;