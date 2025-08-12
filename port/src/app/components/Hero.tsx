'use client';

import { motion } from 'framer-motion';
import { TypewriterEffect } from './TypewriterEffect';
import { ChevronDown, ExternalLink } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-medium text-blue-400 mb-4 tracking-wide uppercase"
            >
              Welcome to my world
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">Shivpujan Kumar</span>
            </motion.h1>

            <div className="h-16 mb-6">
              <TypewriterEffect
                words={[
                  'Developer',
                  'Founder',
                  'Problem Solver',
                  'Tech Enthusiast',
                  'Innovation Driver'
                ]}
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-400 mb-8 max-w-2xl"
            >
              I build powerful web & mobile apps that bring ideas to life. 
              Passionate about creating innovative solutions that solve real-world problems 
              through cutting-edge technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium hover-glow transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Hire Me
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('#projects')}
                className="glass border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                View My Work
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">4+</div>
                <div className="text-sm text-gray-400">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">2+</div>
                <div className="text-sm text-gray-400">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">1</div>
                <div className="text-sm text-gray-400">Startup Founded</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Avatar/Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Placeholder for professional photo */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full glass p-8 animate-float">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center border-2 border-white/20">
                  <div className="text-6xl font-bold gradient-text">SK</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-20 h-20 glass rounded-full flex items-center justify-center"
              >
                <span className="text-2xl">⚡</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-16 h-16 glass rounded-full flex items-center justify-center"
              >
                <span className="text-xl">🚀</span>
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -left-8 w-12 h-12 glass rounded-full flex items-center justify-center"
              >
                <span className="text-lg">💡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
}
