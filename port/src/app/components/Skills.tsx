'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  Smartphone, 
  Brain, 
  Server,
  Globe
} from 'lucide-react';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with modern frameworks",
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building scalable server-side applications and APIs",
      techs: ["Node.js", "Express", "Python", "REST APIs"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Designing and managing efficient database systems",
      techs: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications for iOS and Android",
      techs: ["React Native", "Flutter", "PWA", "Responsive Design"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Integration",
      description: "Implementing AI and machine learning solutions",
      techs: ["Python", "TensorFlow", "OpenAI", "Computer Vision"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Startup Consulting",
      description: "Strategic guidance for tech startups and digital transformation",
      techs: ["Strategy", "Product", "Team Building", "Innovation"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  const techStack = [
    { name: "React", level: 90, color: "bg-blue-500" },
    { name: "Next.js", level: 85, color: "bg-gray-700" },
    { name: "TypeScript", level: 80, color: "bg-blue-600" },
    { name: "Node.js", level: 85, color: "bg-green-500" },
    { name: "Python", level: 75, color: "bg-yellow-500" },
    { name: "MySQL", level: 80, color: "bg-orange-500" },
    { name: "MongoDB", level: 70, color: "bg-green-600" },
    { name: "AI/ML", level: 65, color: "bg-purple-500" }
  ];

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
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
            Skills & <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            Comprehensive solutions from concept to deployment, leveraging cutting-edge technologies
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-24"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="glass p-10 lg:p-12 rounded-2xl hover-glow group cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-6">{service.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">{service.description}</p>
              <div className="flex flex-wrap gap-3">
                {service.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-gray-300 border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text">
            Technical Proficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{tech.name}</span>
                  <span className="text-sm text-gray-400">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-700/30 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full ${tech.color}`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${tech.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Bring Your Ideas to Life?</h3>
            <p className="text-gray-400 mb-6">
              Let&apos;s collaborate and create something amazing together. From concept to deployment, 
              I&apos;ll help you build the perfect solution for your needs.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover-glow transition-all duration-300"
            >
              Let&apos;s Work Together
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
