import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">VA Services</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <motion.div whileHover={{ scale: 1.05 }}>
    <Link to={to} className="px-3 py-2 text-gray-600 hover:text-primary">
      {children}
    </Link>
  </motion.div>
);

export default Navbar;