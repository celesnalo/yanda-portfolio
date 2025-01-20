import { motion } from 'framer-motion';

const timelineSteps = [
  {
    title: "Initial Consultation",
    description: "We discuss your needs and how I can help",
    icon: "👋"
  },
  {
    title: "Strategy Planning",
    description: "Creating a customized action plan",
    icon: "📝"
  },
  {
    title: "Implementation",
    description: "Executing tasks and providing regular updates",
    icon: "⚡"
  },
  {
    title: "Review & Optimize",
    description: "Regular check-ins to ensure satisfaction",
    icon: "✨"
  }
];

const TimelineSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16"
        >
          How We Work Together
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary opacity-20" />
          
          {timelineSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center justify-center mb-12 relative"
            >
              <div className={`absolute w-1/2 px-6 ${index % 2 === 0 ? 'text-right right-1/2' : 'text-left left-1/2'}`}>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              <div className="relative flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white z-10">
                {step.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;