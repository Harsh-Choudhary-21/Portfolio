import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-red-500' },
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-orange-500' },
    { name: 'React', level: 88, color: 'from-blue-400 to-blue-600' },
    { name: 'Vue.js', level: 82, color: 'from-green-400 to-green-600' },
    { name: 'Node.js', level: 78, color: 'from-green-500 to-green-700' },
    { name: 'TypeScript', level: 85, color: 'from-blue-500 to-blue-700' }
  ];

  const tools = [
    { name: 'HTML5', icon: '🌐', color: 'bg-orange-100 text-orange-600' },
    { name: 'CSS3', icon: '🎨', color: 'bg-blue-100 text-blue-600' },
    { name: 'JavaScript', icon: '⚡', color: 'bg-yellow-100 text-yellow-600' },
    { name: 'React', icon: '⚛️', color: 'bg-blue-100 text-blue-600' },
    { name: 'Vue.js', icon: '💚', color: 'bg-green-100 text-green-600' },
    { name: 'Node.js', icon: '🟢', color: 'bg-green-100 text-green-600' },
    { name: 'Git', icon: '📝', color: 'bg-gray-100 text-gray-600' },
    { name: 'Figma', icon: '🎯', color: 'bg-purple-100 text-purple-600' }
  ];

  return (
    <section id="skills" className="section bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Progress */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute right-0 top-0 w-2 h-full bg-white/30 rounded-full"
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8">Tools & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className={`${tool.color} rounded-xl p-4 text-center transition-all duration-300 hover:shadow-lg`}
                >
                  <div className="text-2xl mb-2">{tool.icon}</div>
                  <div className="font-medium text-sm">{tool.name}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
            >
              <h4 className="font-bold text-gray-800 mb-2">Currently Learning</h4>
              <p className="text-gray-600">
                Always expanding my skillset with new technologies like Next.js, 
                Three.js, and advanced React patterns.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;