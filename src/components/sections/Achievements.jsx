import React from 'react'
import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi2'

const Achievements = () => {
  const achievements = [
    {
      title: 'MCKVIE Research Symposium 2026',
      description: 'Presented research findings on AI and ML applications',
      icon: '🔬',
      link: 'https://drive.google.com/file/d/1HGna9jCpdcBHFQ2BFgnD4m3MNuyQG4JE/view?usp=sharing',
    },
    {
      title: 'NPTEL OOP Certification',
      description: 'Object-Oriented Programming by IIT Bombay',
      icon: '📜',
      link: 'https://drive.google.com/file/d/1wnZTF44_RXf8S3__ANoPZo6btLOGNUDK/view?usp=sharing',
    },
    {
      title: 'Integrated Personality Development',
      description: 'Professional development and communication skills',
      icon: '⭐',
      link: 'https://drive.google.com/file/d/1Iopha1Ve3Ije66_AGbdOr8kHMF8LFdRJ/view?usp=sharing',
    },
    {
      title: 'GeeksforGeeks Java Skill Up',
      description: 'Advanced Java programming and best practices',
      icon: '☕',
      link: 'https://drive.google.com/file/d/1oa2gCSRweR_dgugAdGPna6I5RRfSxGTC/view?usp=sharing',
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
    <section id="achievements" className="py-20 md:py-32 bg-white/2">
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
            <h2 className="section-title">Achievements & Highlights</h2>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.a
                key={index}
                href={achievement.link}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl border border-white/10 hover:border-blue-600/50 bg-white/5 transition-all duration-300 text-center group cursor-pointer"
              >
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {achievement.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-600 transition-colors">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {achievement.description}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Additional Note */}
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-400 text-sm max-w-2xl mx-auto"
          >
            Passionate about continuous learning, contributing to the developer community,
            and building meaningful projects that make an impact.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
