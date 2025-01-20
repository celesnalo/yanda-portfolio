import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="service-card"
    >
      <motion.div
        className="icon"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        {service.icon}
      </motion.div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;
