import { motion } from 'framer-motion';

const services = [
  {
    title: "Email Management",
    icon: "✉️",
    description: "Inbox organization, email response handling, and newsletter management",
    color: "bg-blue-50"
  },
  {
    title: "Calendar Management",
    icon: "📅",
    description: "Schedule optimization, appointment setting, and meeting coordination",
    color: "bg-green-50"
  },
  {
    title: "Social Media Management",
    icon: "📱",
    description: "Content creation, scheduling, and engagement monitoring",
    color: "bg-purple-50"
  },
  {
    title: "Customer Support",
    icon: "🤝",
    description: "Responding to customer inquiries and managing support tickets",
    color: "bg-yellow-50"
  },
  {
    title: "Data Entry",
    icon: "📊",
    description: "Accurate data input, spreadsheet management, and database maintenance",
    color: "bg-pink-50"
  },
  {
    title: "Travel Arrangements",
    icon: "✈️",
    description: "Booking flights, hotels, and coordinating travel itineraries",
    color: "bg-orange-50"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Services I Offer
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className={`${service.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{service.icon}</span>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;