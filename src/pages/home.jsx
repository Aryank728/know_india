import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CategoryCard from "../components/categorycard";

// Import images correctly
import Beach from "../Assets/home/Beach.jpg";
import Heritage from "../Assets/home/Heritage.jpg";
import Historical from "../Assets/home/Historical.jpg";
import Mountain from "../Assets/home/Mountains.jpg";
import Religious from "../Assets/home/religion.jpg";

const categories = [
  { name: "Historical", image: Historical, link: "/historical" },
  { name: "Beaches", image: Beach, link: "/beaches" },
  { name: "Hill Stations", image: Mountain, link: "/hill-stations" },
  { name: "Religious", image: Religious, link: "/religious" },
  { name: "Heritage", image: Heritage, link: "/heritage" },
];

const slideshowImages = [Heritage, Beach, Mountain, Religious];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section with Slideshow */}
      <div className="relative w-full h-screen overflow-hidden">
        {slideshowImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${image})`,
              opacity: index === currentImageIndex ? 1 : 0,
            }}
          ></motion.div>
        ))}
        
        {/* Blur effect */}
        <div className="absolute inset-0 backdrop-blur-md bg-black bg-opacity-1"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold"
          >
            Discover India
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-4 text-lg max-w-2xl mb-6"
          >
            Explore the beauty of India's diverse landscapes, rich history, and cultural heritage.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link
              to="/places"
              className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg shadow-lg"
            >
              Explore Now
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 bg-gray-100 mt-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Explore by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-4">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
