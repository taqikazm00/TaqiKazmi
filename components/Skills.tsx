"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Frameworks",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Angular", level: 85 },
        { name: "React Native", level: 80 },
      ]
    },
    {
      category: "Core Technologies",
      skills: [
        { name: "JavaScript", level: 88 },
        { name: "HTML/CSS", level: 92 },
        { name: "Web Development", level: 90 },
      ]
    },
    {
      category: "Backend & Integration",
      skills: [
        { name: "API Integrations", level: 85 },
        { name: "Java", level: 75 },
      ]
    }
  ];

  const techStack = [
    "React.js",
    "Angular",
    "React Native",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "API Integration",
    "RESTful APIs",
    "Java",
    "Git",
    "Responsive Design",
    "UI/UX"
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-40" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Technologies and tools I work with to build modern web and mobile applications
          </motion.p>

          <div className="max-w-5xl mx-auto">
            {/* Skill Bars */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {skillCategories.map((category, idx) => (
                <SkillCard key={idx} category={category} index={idx} />
              ))}
            </div>

            {/* Tech Stack Tags */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-xl relative overflow-hidden"
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: "200% 200%" }}
              />

              <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6 relative z-10">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-3 justify-center relative z-10">
                {techStack.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    whileHover={{ scale: 1.1, y: -5, rotate: 2 }}
                    transition={{ 
                      delay: idx * 0.05,
                      hover: { type: "spring", stiffness: 400 }
                    }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow font-medium border border-gray-200 dark:border-gray-700 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ category, index }: { category: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
    >
      <motion.h3
        className="text-xl font-bold text-gray-900 dark:text-white mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
      >
        {category.category}
      </motion.h3>
      <div className="space-y-4">
        {category.skills.map((skill: any, skillIdx: number) => (
          <div key={skillIdx}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {skill.name}
              </span>
              <motion.span
                className="text-blue-600 dark:text-blue-400 font-semibold"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + skillIdx * 0.1 + 0.3 }}
              >
                {skill.level}%
              </motion.span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 h-3 rounded-full relative"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{
                  duration: 1,
                  delay: index * 0.1 + skillIdx * 0.1 + 0.3,
                  ease: "easeOut"
                }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

