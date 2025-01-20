import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp} from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';

const ContactSection = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    try {
      const response = await fetch('https://formspree.io/f/xqaavorl', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600">Let's discuss how I can help you achieve your goals</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <BsTelephone className="text-xl text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-600">Phone</p>
                    <a href="tel:+1234567890" className="text-lg font-medium">+27 69 442 0089</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MdEmail className="text-xl text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <a href="mailto:luyandak367@gmail.com" className="text-lg font-medium">luyandak367@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MdLocationOn className="text-xl text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="text-lg font-medium">Durban, South Africa & Remote - Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <SocialIcon 
                  Icon={FaInstagram}
                  href="https://instagram.com/luyandava_solutions"
                  bgColor="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500"
                />
                <SocialIcon 
                  Icon={FaTwitter}
                  href="https://x.com/LuyandaRh_Nasha"
                  bgColor="bg-[#0077b5]"
                />
                <SocialIcon 
                  Icon={FaLinkedinIn}
                  href="https://linkedin.com/in/khumalo-luyanda"
                  bgColor="bg-[#0077b5]"
                />
                <SocialIcon 
                  Icon={FaWhatsapp}
                  href="https://wa.me/+27694420089"
                  bgColor="bg-[#25D366]"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold
                         hover:bg-primary/90 transition-colors duration-300"
              >
                Send Message
              </motion.button>

              {status === 'success' && (
                <p className="text-green-600 text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ Icon, href, bgColor }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    className={`w-10 h-10 flex items-center justify-center rounded-full ${bgColor} text-white shadow-lg
               hover:shadow-xl transition-shadow duration-300`}
  >
    <Icon className="text-lg" />
  </motion.a>
);

export default ContactSection;