import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
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

  const stats = [
    { label: 'CGPA', value: '7.62' },
    { label: 'Projects Built', value: '10+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Hackathons', value: '5+' },
  ]

  return (
    <section id="about" className="py-20 md:py-32">
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
            <h2 className="section-title">About Me</h2>
          </motion.div>

          {/* About Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <p className="text-blue-600 font-semibold mb-2">🎓 Education</p>
                <h3 className="text-2xl font-bold text-white mb-1">B.Tech IT</h3>
                <p className="text-gray-300 font-medium">MCKV Institute of Engineering</p>
                <p className="text-gray-400 text-sm">September 2023 – June 2027</p>
              </div>

              <div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm a passionate IT student with a strong focus on full-stack web development and emerging technologies 
                  like AI and machine learning. My hands-on experience spans building web applications, working with neural networks, 
                  and exploring computer vision solutions.
                </p>
              </div>

              <div>
                <p className="text-blue-600 font-semibold mb-3">Key Interests</p>
                <div className="flex flex-wrap gap-2">
                  {['AI/ML', 'Computer Vision', 'Full Stack Dev', 'Product Building', 'Hackathons'].map((interest, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-600/20 border border-blue-600/50 text-blue-200 rounded-full text-sm font-medium">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-600/50 transition-all duration-300"
                >
                  <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm md:text-base text-gray-400 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
