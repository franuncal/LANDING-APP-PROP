import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import PropertyCard from "./components/PropertyCard/PropertyCard";
import PropertyDetail from "./components/PropertyDetail/PropertyDetail";
import Footer from "./components/Footer/Footer";
import { properties } from "./data/properties";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      {location.pathname === "/" && <Banner />}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="property-cards-container">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          }
        />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
