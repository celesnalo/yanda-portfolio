import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    );
  };

  export default Layout;