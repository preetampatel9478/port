'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold gradient-text mb-2">Shivpujan Kumar</h3>
            <p className="text-gray-400 text-sm">
              Developer, Founder & Problem Solver
            </p>
          </motion.div>

          {/* Center - Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <p className="text-gray-400 text-sm flex items-center justify-center space-x-1">
              <span>© {currentYear} Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by Shivpujan Kumar</span>
            </p>
          </motion.div>

          {/* Right - Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <button
              onClick={scrollToTop}
              className="glass p-3 rounded-full hover-glow transition-all duration-300 group"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-500 text-xs">
            Designed and developed with modern technologies. Always learning, always building.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
