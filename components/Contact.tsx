"use client";

import { Mail, Linkedin, Github, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'c16cad3e-5b9a-4080-9fcd-5de951a5db4d',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: 'taqikazmi48@gmail.com',
          subject: `Portfolio Contact: Message from ${formData.name}`
        })
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" />
      
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
            Get In Touch
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </motion.p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden"
            >
              {/* Animated background circles */}
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-8 text-blue-100">
                Feel free to reach out to me for collaborations, job opportunities, or just a friendly chat!
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:taqikazmi48@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                      taqikazmi48@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+923204966411" className="text-blue-100 hover:text-white transition-colors">
                      +92 320 4966411
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Linkedin className="mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/taqi-kazmi-828075213/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-100 hover:text-white transition-colors break-all"
                    >
                      linkedin.com/in/taqi-kazmi-828075213
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Github className="mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/syedtaqi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      github.com/syedtaqi
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-blue-100">Pakistan - Available for remote opportunities</p>
                  </div>
                </div>
              </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white resize-none transition-all"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold shadow-lg transition-all flex items-center justify-center gap-2 ${
                    formStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  whileHover={formStatus !== 'sending' ? { scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" } : {}}
                  whileTap={formStatus !== 'sending' ? { scale: 0.98 } : {}}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Success Message */}
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg text-green-700 dark:text-green-400 text-center"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {/* Error Message */}
                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-lg text-red-700 dark:text-red-400 text-center"
                  >
                    ✗ Failed to send message. Please try again or email me directly.
                  </motion.div>
                )}
              </form>

              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                Or email me directly at{' '}
                <a href="mailto:taqikazmi48@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  taqikazmi48@gmail.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}

