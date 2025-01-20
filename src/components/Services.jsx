import { motion } from 'framer-motion';

const services = [
  {
    title: "Email Management",
    icon: "✉️",
    description: "Inbox organization and email response handling"
  },
  {
    title: "Calendar Management",
    icon: "📅",
    description: "Schedule optimization and appointment setting"
  },
  {
    title: "Social Media",
    icon: "📱",
    description: "Content creation and engagement management"
  }
];

const ServicesSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, rotateY: 10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;