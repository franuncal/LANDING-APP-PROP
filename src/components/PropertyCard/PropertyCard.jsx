import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./PropertyCard.css";

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.images[0]} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p>Ubicación: {property.location}</p>
      <p>Huspedes: {property.passengers}</p>{" "}
      {/* <p>Tarifa por Noche: {property.price}</p> */}
      <Link to={`/property/${property.id}`}>
        <button>Ver más</button>
      </Link>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    passengers: PropTypes.number.isRequired, // Asegúrate de que passengers esté presente
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    googleMapsLink: PropTypes.string.isRequired,
    whatsappLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default PropertyCard;
