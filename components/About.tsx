"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function About() {
  const cards = [
    {
      icon: "🔹",
      title: "Core Skills",
      description: "React.js, JavaScript, HTML, CSS, API Integration, React Native"
    },
    {
      icon: "🔹",
      title: "Experience",
      description: "Developed small-scale websites as an intern, gaining real-world exposure to front-end development"
    },
    {
      icon: "🔹",
      title: "Passionate About",
      description: "Creating seamless user experiences, optimizing performance, and learning new technologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            About Me
          </motion.h2>
          
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden"
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
              >
                ✨ <strong>Passionate Front-End Developer</strong> with 7+ months of experience specializing in 
                <motion.span
                  className="text-blue-600 dark:text-blue-400 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  style={{ display: "inline-block" }}
                > React.js</motion.span> and 
                <motion.span
                  className="text-red-600 dark:text-red-400 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  style={{ display: "inline-block" }}
                > Angular</motion.span>. 
                Skilled in API integration, I have developed responsive and user-friendly websites during my internship, 
                sharpening my ability to build modern web applications.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
              >
                I also have hands-on experience with <motion.span
                  className="text-blue-600 dark:text-blue-400 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  style={{ display: "inline-block" }}
                >React Native</motion.span>, 
                contributing to the development of responsive and interactive mobile applications. My focus is on writing 
                clean, efficient, and scalable code, while continuously exploring modern technologies to improve workflows 
                and enhance user experiences.
              </motion.p>

              <div className="grid md:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                  >
                    <motion.h3
                      className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      {card.icon} {card.title}
                    </motion.h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

