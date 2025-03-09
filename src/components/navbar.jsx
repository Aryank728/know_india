import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../Assets/logo.png";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Places", path: "/places" },
        { name: "About Us", path: "/aboutus" },
        { name: "Contact Us", path: "/contactus" }
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full px-6 py-3 z-50 transition-all duration-300 ${
                isScrolled ? "bg-white/60 backdrop-blur-lg shadow-lg" : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-12 w-auto" />
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                        >
                            <Link
                                to={item.path}
                                className="relative text-gray-900 hover:text-blue-600 text-lg font-medium group transition-all duration-300"
                            >
                                {item.name}
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} className="text-gray-900" /> : <Menu size={28} className="text-gray-900" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden flex flex-col space-y-4 mt-4 bg-white/80 backdrop-blur-lg shadow-lg p-4 rounded-lg"
                >
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className="text-gray-900 hover:text-blue-600 text-lg font-medium transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
