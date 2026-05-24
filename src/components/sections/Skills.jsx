import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['C', 'Java', 'Python', 'JavaScript'],
    },
    {
      category: 'Frontend',
      skills: ['HTML', 'CSS', 'ReactJS', 'TailwindCSS'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Flask', 'RESTful APIs'],
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'SQL'],
    },
    {
      category: 'AI/ML',
      skills: ['TensorFlow', 'Machine Learning', 'LSTM', 'SVM', 'YOLO', 'OCR', 'CRNN', 'MobileNetV2'],
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'Botpress', 'Postman', 'VS Code'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 md:py-32 bg-white/2">
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
            <h2 className="section-title">Skills & Expertise</h2>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-600/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4 text-blue-600">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-blue-600/20 border border-blue-600/50 text-blue-200 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-600/30 hover:border-blue-600"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Proficiency Note */}
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-400 text-sm"
          >
            Continuously learning and adapting to new technologies and industry trends
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
