import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../Assets/DOC-20240518-WA0004.png";

const Navbar = () => {
    const location = useLocation();
    const [isTransparent, setIsTransparent] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsTransparent(location.pathname === "/");
    }, [location]);

    // Navigation items with their paths
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Places", path: "/places" },
        { name: "Test", path: "/test" },
        { name: "About Us", path: "/aboutus" },
        { name: "Contact Us", path: "/contactus" }
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full px-8 py-4 z-50 transition-all duration-300 ${isTransparent ? "bg-transparent" : "bg-white shadow-lg"}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo Section (Left-Aligned) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-start"
                >
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-12 w-auto" /> {/* Match height with footer */}
                    </Link>
                </motion.div>

                {/* Menu Wrapper (Right-Aligned) */}
                <div className="flex items-center ml-auto">
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 * index, duration: 0.5 }}
                            >
                                <Link
                                    to={item.path}
                                    className="relative text-gray-800 hover:text-blue-600 text-lg font-medium group"
                                >
                                    {item.name}
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden ml-4" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Dropdown Under Menu Button) */}
            {isOpen && (
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden flex flex-col space-y-4 mt-4 bg-white shadow-lg p-4 rounded-lg text-right"
                >
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className="text-gray-800 hover:text-blue-600 text-lg font-medium"
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
