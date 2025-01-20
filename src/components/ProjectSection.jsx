import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import calendaImg from '../assets/calendar.png';
import emailImg from '../assets/email.png';
import reseachImg from '../assets/research.png';
import travelImg from '../assets/travel.png';

const projects = [
  {
    title: "Email Management System",
    description: "Implemented an efficient email management system for myself, reducing response time by 70%",
    image: emailImg, 
    category: "Email Management",
    duration: "ongoing"
  },
  {
    title: "Data Entry and Research",
    description: "Performed data entry, HR, and administrative tasks, including lead generation, email outreach, and cold emailing, while managing LinkedIn Sales Navigator to support client growth. Delivered results with a focus on accuracy and efficiency, earning performance-based bonuses.",
    image: reseachImg,
    category: "Social Media",
    duration: "4 months"
  },
  {
    title: "Calendar Optimization",
    description: "Streamlined scheduling process for myself, saving 10 hours per week",
    image: calendaImg,
    category: "Calendar Management",
    duration: "Ongoing"
  },
  {
    title: "Travel Coordination",
    description: "Managed international travel arrangements for a client",
    image: travelImg,
    category: "Travel Planning",
    duration: "2 months"
  }
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600">Success stories from my virtual assistance journey</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Project Cards */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {project.category}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {project.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 
                     w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center
                     text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <FaArrowLeft />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12
                     w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center
                     text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <FaArrowRight />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 
                          ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;