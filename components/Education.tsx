"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Education() {
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Government College University Lahore",
      location: "Lahore, Pakistan",
      period: "2020 - 2024",
      icon: "🎓",
      color: "from-blue-600 to-indigo-600"
    },
    {
      degree: "Intermediate",
      institution: "Government College University Lahore",
      location: "Lahore, Pakistan",
      period: "2018 - 2020",
      icon: "📚",
      color: "from-indigo-600 to-purple-600"
    },
    {
      degree: "Matriculation",
      institution: "St. Anthony's High School",
      location: "Lahore, Pakistan",
      period: "2016 - 2018",
      icon: "📖",
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-4">
              <GraduationCap className="text-blue-600 dark:text-blue-400" size={20} />
              <span className="text-blue-600 dark:text-blue-400 font-medium">Academic Background</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My academic journey in computer science and technology
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 hidden md:block" />

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="relative"
                  >
                    <div className="flex items-start gap-6">
                      {/* Timeline Dot */}
                      <motion.div
                        className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-lg flex-shrink-0 relative z-10"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className="text-3xl">{edu.icon}</span>
                      </motion.div>

                      {/* Content Card */}
                      <motion.div
                        className="flex-1 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 dark:border-gray-600"
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
                            {edu.degree}
                          </h3>
                          <motion.span
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r ${edu.color} text-white text-sm font-medium`}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Calendar size={14} />
                            {edu.period}
                          </motion.span>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                            <GraduationCap size={18} className="text-blue-600 dark:text-blue-400" />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <MapPin size={18} className="text-purple-600 dark:text-purple-400" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg">
              <GraduationCap size={20} />
              <span className="font-semibold">Computer Science Graduate • GCU Lahore</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

