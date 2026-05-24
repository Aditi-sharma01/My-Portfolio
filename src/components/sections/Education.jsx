import React from 'react'
import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi2'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'MCKV Institute of Engineering',
      year: 'Sep 2023 - Jun 2027',
      details: 'CGPA: 7.62/10',
      coursework: ['OOP', 'Databases', 'DSA', 'Operating Systems', 'Machine Learning', 'Discrete Mathematics'],
      icon: '🎓',
    },
    {
      degree: 'Higher Secondary',
      institution: 'Sunrise English Medium School',
      year: 'Completed 2023',
      details: 'Percentage: 71%',
      coursework: [],
      icon: '📚',
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="education" className="py-20 md:py-32">
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
            <h2 className="section-title">Education</h2>
          </motion.div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-xl border border-white/10 hover:border-blue-600/50 transition-all duration-300 bg-white/2"
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 text-2xl pt-1">
                    {edu.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-xl font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <span className="text-sm text-blue-600 font-medium">
                        {edu.year}
                      </span>
                    </div>

                    <p className="text-gray-300 font-medium">
                      {edu.institution}
                    </p>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {edu.details}
                    </p>

                    {/* Coursework */}
                    {edu.coursework.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <p className="text-xs font-semibold text-gray-300 mb-2">Relevant Coursework</p>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.coursework.map((course, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-blue-600/15 border border-blue-600/30 text-blue-300 rounded text-xs font-medium"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
