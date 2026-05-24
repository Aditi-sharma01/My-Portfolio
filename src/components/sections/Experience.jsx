import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      position: 'Qualified for Regional Finals',
      company: 'Infosys Global Hackathon',
      duration: 'Jul 2025',
      description: [
        'Developed waste-to-value marketplace solution',
        'Implemented MobileNetV2 waste classifier for automated detection',
        'Created profit-sharing contributor model for stakeholder engagement',
        'Progressed to regional finals among top teams',
      ],
      icon: '🏆',
    },
    {
      position: 'Finalist',
      company: 'Young Innovators Meet',
      duration: 'May 2026',
      description: [
        'Showcased Smart Parking availability prediction prototype',
        'Achieved top 10 ranking among 200+ participants',
        'Integrated YOLO for vehicle detection and ANPR',
        'Utilized OCR and ESP32CAM for real-time processing',
      ],
      icon: '🥇',
    },
    {
      position: 'Participant',
      company: 'Hack<N>Pitch',
      duration: 'Nov 2024',
      description: [
        'Developed India\'s Legal Legacy educational platform',
        'Integrated Botpress AI chatbot for Constitution queries',
        'Built interactive modules for enhanced user engagement',
        'Demonstrated practical application of web technologies',
      ],
      icon: '💡',
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
    <section id="experience" className="py-20 md:py-32">
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
            <h2 className="section-title">Experience</h2>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-xl border border-white/10 hover:border-blue-600/50 transition-all duration-300 bg-white/2"
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 text-2xl">
                    {exp.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {exp.position}
                        </h3>
                        <p className="text-blue-600 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm text-gray-400 font-medium">
                        {exp.duration}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((point, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-300 text-sm">
                          <span className="text-blue-600 font-bold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience
