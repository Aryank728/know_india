import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../Assets/DOC-20240518-WA0004.png";

const quotes = [
  "Swaraj is my birthright, and I shall have it. - Bal Gangadhar Tilak",
  "Give me blood, and I will give you freedom. - Subhas Chandra Bose",
  "You may kill me, but you cannot kill my ideas. - Bhagat Singh",
  "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
];

const Footer = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000); // Changes every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bottom-0 w-full py-6 px-8 transition-all duration-300 bg-white shadow-lg md:flex md:justify-between md:items-center">
      {/* Logo on Right Side */}
      <div className="flex justify-center md:justify-end">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>

      {/* Slideshow of Quotes */}
      <div className="flex-1 text-center">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-semibold text-gray-700 italic"
        >
          {quotes[index]}
        </motion.p>
      </div>

      {/* Copyright Section */}
      <div className="text-sm text-gray-500 text-center md:text-right">
        © {new Date().getFullYear()} Rajya. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
