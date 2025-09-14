import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShoeVibe
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/shop" className="text-gray-700 hover:text-blue-600">
            Shop
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Links */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4">
          <Link onClick={toggleMenu} to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link onClick={toggleMenu} to="/shop" className="text-gray-700 hover:text-blue-600">
            Shop
          </Link>
          <Link onClick={toggleMenu} to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link onClick={toggleMenu} to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
