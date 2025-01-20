import { color, motion } from 'framer-motion';
import { SiGmail, SiSlack, SiAsana, SiTrello, SiNotion, SiZoom} from 'react-icons/si';

const skills = [
  { name: "Gmail", Icon: SiGmail, proficiency: 90 , color: "#EA4335"},
  { name: "Slack", Icon: SiSlack, proficiency: 85 , color: "#4A154B"},
  { name: "Asana", Icon: SiAsana, proficiency: 88 , color: "#0052CC"},
  { name: "Trello", Icon: SiTrello, proficiency: 80 , color: "#0079BF"},
  { name: "Notion", Icon: SiNotion, proficiency: 82 , color: "#000000"},
  { name: "Zoom", Icon: SiZoom, proficiency: 78 , color: "#2D8CFF"},
];

const SkillsSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Tools & Skills
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <motion.div
                  className="absolute inset-0 border-4 rounded-full"
                  style={{ 
                    pathLength: skill.proficiency / 100,
                    borderColor: skill.color 
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <skill.Icon 
                  className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ color: skill.color }}
                />
              </div>
              <p className="font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;