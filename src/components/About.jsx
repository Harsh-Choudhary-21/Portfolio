import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Code, Coffee, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { icon: Code, number: '50+', label: 'Projects Completed' },
    { icon: Users, number: '30+', label: 'Happy Clients' },
    { icon: Coffee, number: '1000+', label: 'Cups of Coffee' },
    { icon: Award, number: '5+', label: 'Years Experience' }
  ];

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get to know more about who I am and what I do
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative z-10"
              >
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="About Ishant"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-6">Who am I?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate frontend developer with over 5 years of experience creating 
              modern, responsive websites and web applications. I specialize in React, 
              JavaScript, and modern CSS frameworks.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              My approach combines technical expertise with an eye for design, ensuring 
              that the websites I build are not only functional but also visually 
              appealing and user-friendly.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { label: 'Name', value: 'Ishant Panwar' },
                { label: 'Email', value: 'panwarishant5626@gmail.com' },
                { label: 'Phone', value: '+91 9311689659' },
                { label: 'Location', value: 'Ghaziabad, UP' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <h4 className="font-semibold text-gray-800 mb-1">{item.label}</h4>
                  <p className="text-gray-600">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-white" size={24} />
              </div>
              <motion.h4
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-3xl font-bold gradient-text mb-2"
              >
                {stat.number}
              </motion.h4>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;