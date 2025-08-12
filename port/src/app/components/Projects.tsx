'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye } from 'lucide-react';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "Stock Connect",
      description: "A comprehensive stock market analysis platform with real-time data, advanced analytics, and portfolio management features.",
      image: "/api/placeholder/400/250",
      techs: ["React", "Node.js", "MongoDB", "Chart.js", "Real-time APIs"],
      category: "Web Application",
      status: "Completed",
      features: ["Real-time stock data", "Portfolio tracking", "Advanced analytics", "Market insights"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Fasal Seva",
      description: "Agricultural service platform connecting farmers with resources, weather data, and market information to improve crop yields.",
      image: "/api/placeholder/400/250",
      techs: ["React Native", "Firebase", "Weather API", "Machine Learning"],
      category: "Mobile Application",
      status: "Completed",
      features: ["Weather forecasting", "Crop recommendations", "Market prices", "Expert consultation"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Number Plate Recognition System",
      description: "AI-powered automatic number plate recognition system using computer vision and machine learning for traffic management.",
      image: "/api/placeholder/400/250",
      techs: ["Python", "OpenCV", "TensorFlow", "YOLO", "Flask"],
      category: "AI/ML Project",
      status: "Completed",
      features: ["Real-time detection", "High accuracy", "Multiple formats", "Database integration"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "HeyApnaGhr",
      description: "Modern real estate platform with advanced search filters, virtual tours, and seamless property management for buyers and sellers.",
      image: "/api/placeholder/400/250",
      techs: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
      category: "Web Platform",
      status: "In Development",
      features: ["Advanced search", "Virtual tours", "Property management", "Secure payments"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            A showcase of my work spanning web applications, mobile apps, and AI-powered solutions
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="glass rounded-2xl overflow-hidden group hover-glow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-30">🚀</div>
                </div>
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <span className="text-xs text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/5 rounded-md text-xs font-medium text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={() => window.open(project.demoUrl, '_blank')}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Demo</span>
                  </button>
                  <button
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="flex-1 glass border border-white/20 text-white py-3 px-4 rounded-lg font-medium hover:border-white/40 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in More Projects?</h3>
            <p className="text-gray-400 mb-6">
              These are just a few highlights from my portfolio. I&apos;m constantly working on new projects 
              and experimenting with cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://github.com/preetampatel9478', '_blank')}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium hover-glow transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="glass border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:border-white/40 transition-all duration-300"
              >
                Discuss Your Project
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
