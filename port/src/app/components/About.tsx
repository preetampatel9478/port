'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Code, Rocket, Heart } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20 lg:mb-24"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            Passionate about transforming ideas into reality through code and innovation
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass p-10 lg:p-12 rounded-2xl">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 gradient-text">My Journey</h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg lg:text-xl">
                  As a passionate fresher student and self-taught developer, I&apos;ve embarked on an 
                  exciting journey in the world of technology. My curiosity and drive led me to 
                  not just learn coding, but to found my own startup, combining technical expertise 
                  with entrepreneurial vision.
                </p>
                <p className="text-lg lg:text-xl">
                  I believe in the power of technology to solve real-world problems and create 
                  meaningful impact. Whether it&apos;s developing innovative web applications or 
                  building AI-powered solutions, I&apos;m always excited to take on new challenges 
                  and push the boundaries of what&apos;s possible.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-8 rounded-xl text-center hover-glow">
                <User className="w-10 h-10 mx-auto mb-4 text-blue-400" />
                <h4 className="font-semibold text-lg mb-3">Leadership</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Leading teams and driving innovation</p>
              </div>
              <div className="glass p-8 rounded-xl text-center hover-glow">
                <Code className="w-10 h-10 mx-auto mb-4 text-purple-400" />
                <h4 className="font-semibold text-lg mb-3">Development</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Full-stack web & mobile apps</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8 gradient-text">Education & Milestones</h3>
            
            <div className="space-y-6">
              {/* Timeline Item 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="glass p-6 rounded-xl flex-1">
                  <h4 className="font-semibold text-lg mb-2">Startup Founder</h4>
                  <p className="text-blue-400 text-sm mb-2">2024 - Present</p>
                  <p className="text-gray-300 text-sm">
                    Founded and leading a tech startup focused on innovative solutions 
                    for modern problems.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="glass p-6 rounded-xl flex-1">
                  <h4 className="font-semibold text-lg mb-2">Full-Stack Developer</h4>
                  <p className="text-purple-400 text-sm mb-2">2023 - Present</p>
                  <p className="text-gray-300 text-sm">
                    Self-taught full-stack development with focus on React, Node.js, 
                    and modern web technologies.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="glass p-6 rounded-xl flex-1">
                  <h4 className="font-semibold text-lg mb-2">Student & Learner</h4>
                  <p className="text-green-400 text-sm mb-2">Ongoing</p>
                  <p className="text-gray-300 text-sm">
                    Continuously learning and staying updated with the latest 
                    technologies and industry trends.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text">
            What Drives Me
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-2xl text-center hover-glow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">Innovation</h4>
              <p className="text-gray-400">
                Always looking for creative ways to solve problems and push technological boundaries.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl text-center hover-glow">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">Problem Solving</h4>
              <p className="text-gray-400">
                Passionate about identifying challenges and creating effective, scalable solutions.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl text-center hover-glow">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌟</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">Impact</h4>
              <p className="text-gray-400">
                Focused on creating technology that makes a meaningful difference in people&apos;s lives.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
