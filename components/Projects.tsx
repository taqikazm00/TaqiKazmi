"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "LearnUp AI",
      description: "AI-Powered Workplace Training Platform - Built the entire frontend UI and integrated complex APIs for course creation, analytics, and LMS functionality. Created responsive interfaces for AI-driven learning paths, quiz generation, and real-time progress tracking.",
      technologies: ["React.js", "API Integration", "Responsive Design", "Dashboard UI"],
      link: "https://www.learnupai.com/",
      image: "https://framerusercontent.com/images/AEdk4g0ReL0UyBLoHxbHcKm48.png",
      icon: "🎓",
      highlights: [
        "Complete UI/Frontend Development",
        "API Integration for AI Features",
        "Real-time Analytics Dashboard",
        "SCORM Export Functionality"
      ]
    },
    {
      title: "Cercles",
      description: "Curated Home Sharing Community App - Developed the mobile application UI for a members-only home-sharing platform. Built responsive interfaces for browsing homes, booking experiences, member profiles, and community events. Implemented secure authentication and payment integration.",
      technologies: ["React Native", "Mobile Development", "API Integration", "iOS/Android"],
      link: "https://apps.apple.com/pl/app/cercles/id6476060173",
      image: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/6d/a7/44/6da74403-ea49-6c9d-414f-5fb9aa612c43/c01a7e49-4c24-40a5-b7f0-1e8c50ae33e3_Simulator_Screenshot_-_iPhone_15_Pro_-_2024-09-18_at_21.04.53.png/460x0w.webp",
      icon: "🏡",
      highlights: [
        "Mobile App UI Development",
        "Member Authentication System",
        "Home Booking Interface",
        "Community Features Integration"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" />
      
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
            Featured Projects
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Showcasing live projects where I created the complete UI/Frontend and integrated APIs
          </motion.p>

          <div className="max-w-6xl mx-auto grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden group"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Project Image/Preview */}
                  <motion.div
                    className="relative overflow-hidden group/image"
                    style={{
                      background: index === 0 
                        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                        : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }} />
                    </div>
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover/image:from-black/50" />
                    
                    {/* Content Overlay */}
                    <div className="relative z-10 p-12 flex flex-col items-center justify-center min-h-[400px] text-white">
                      <motion.div
                        className="text-7xl mb-6 drop-shadow-2xl"
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {project.icon}
                      </motion.div>
                      <h3 className="text-3xl font-bold mb-3 text-white drop-shadow-lg">
                        {project.title}
                      </h3>
                      <p className="text-white/90 text-sm mb-6 max-w-xs text-center">
                        {project.title === "LearnUp AI" ? "AI-Powered Training Platform" : "Home Sharing Community"}
                      </p>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-6 py-3 rounded-full font-medium border border-white/40 shadow-xl"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.35)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Visit Live Site
                        <ExternalLink size={18} />
                      </motion.a>
                    </div>

                    {/* Animated Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8 }}
                    />

                    {/* Floating Elements */}
                    <motion.div
                      className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
                      animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                      animate={{
                        y: [0, 20, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  {/* Project Details */}
                  <div className="p-8">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                      My Contribution
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                      className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
                    >
                      {project.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                      className="mb-6"
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                          >
                            <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                      className="mb-6"
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            transition={{ delay: 0.7 + idx * 0.05 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      View Live Project
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

