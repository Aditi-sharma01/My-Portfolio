import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowUpRight } from 'react-icons/hi2'

const Projects = () => {
  const projects = [
    {
      title: 'Smart Parking Availability Prediction System',
      description: 'ML-powered system for real-time parking availability prediction with vehicle detection and automatic license plate recognition using advanced computer vision techniques.',
      highlights: [
        'Real-time parking availability prediction',
        'Vehicle detection and tracking',
        'Automated license plate recognition',
      ],
      technologies: ['Python', 'Machine Learning', 'LSTM', 'SVM', 'YOLO', 'OCR', 'CRNN'],
      link: '#',
      featured: true,
    },
    {
      title: 'PULSE.exe Departmental Event',
      description: 'Full-stack event management web application for organizing departmental activities. Automated room allotment system that successfully managed 170+ participants with 96% positive feedback.',
      highlights: [
        'React-based event management platform',
        'Automated room allotment system',
        '170+ participants managed',
        '96% positive feedback rating',
      ],
      technologies: ['HTML', 'CSS', 'React.js'],
      link: '#',
      featured: true,
    },
    {
      title: "India's Legal Legacy",
      description: 'Interactive educational platform for learning about the Indian Constitution. Features AI chatbot assistance and engaging modules for comprehensive understanding of constitutional framework.',
      highlights: [
        'Educational Constitution platform',
        'AI-powered chatbot for queries',
        'Interactive learning modules',
        'Responsive design',
      ],
      technologies: ['React.js', 'Tailwind CSS', 'Botpress', 'Node.js'],
      link: '#',
      featured: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="projects" className="py-20 md:py-32 bg-white/2">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants}>
            <h2 className="section-title">Featured Projects</h2>
          </motion.div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group p-6 md:p-8 rounded-xl border border-white/10 hover:border-blue-600/50 bg-white/5 hover:bg-white/8 transition-all duration-300 h-full flex flex-col"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <HiArrowUpRight
                    size={20}
                    className="text-gray-400 group-hover:text-blue-600 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300"
                  />
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-4 space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex gap-2 text-xs text-gray-400">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-blue-600/20 border border-blue-600/50 text-blue-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>

          {/* View All Link */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-500 transition-colors">
              View All Projects
              <HiArrowUpRight size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
