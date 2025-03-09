import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import logo from "../Assets/logo.png";

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
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-4 mt-0 mb-2">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Center: Quotes */}
        <div className="flex-1 text-center">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-gray-600 italic"
          >
            {quotes[index]}
          </motion.p>
        </div>

        {/* Right: Social Icons & Copyright */}
        <div className="flex flex-col items-center md:items-end">
          <div className="flex space-x-3 mb-1">
            <a href="https://www.linkedin.com/in/aryank728/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-600 hover:text-blue-600 text-lg transition" />
            </a>
            <a href="https://github.com/Aryank728" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-600 hover:text-black text-lg transition" />
            </a>
            <a href="https://aryankr.netlify.app/" target="_blank" rel="noopener noreferrer">
              <FaGlobe className="text-gray-600 hover:text-green-600 text-lg transition" />
            </a>
          </div>
          <div className="text-xs text-gray-500 text-center md:text-right">
            © {new Date().getFullYear()} Know India. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
