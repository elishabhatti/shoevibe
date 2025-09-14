import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="bg-white border-b-1 border-gray-300 fixed top-0 w-full z-50">
      <div className="py-4 md:px-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-4xl font-bold text-black">
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
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Links */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4">
          <Link
            onClick={toggleMenu}
            to="/"
            className="text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            onClick={toggleMenu}
            to="/shop"
            className="text-gray-700 hover:text-blue-600"
          >
            Shop
          </Link>
          <Link
            onClick={toggleMenu}
            to="/about"
            className="text-gray-700 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            onClick={toggleMenu}
            to="/contact"
            className="text-gray-700 hover:text-blue-600"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
