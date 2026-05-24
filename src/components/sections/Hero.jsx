import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-20 md:pt-32 md:pb-32"
    >
      <div className="container-custom w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants}>
            <div className="flex justify-center mb-6">
              <img 
                src="/profile.jpeg" 
                alt="Aditi Sharma" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-blue-600"
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
              Welcome to my portfolio
            </p>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hi, I'm <span className="text-blue-600">Aditi Sharma</span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-2xl text-blue-400 font-semibold">
              B.Tech IT Student | Full Stack Developer | AI/ML Enthusiast
            </p>
          </motion.div>

          {/* Summary */}
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
              Passionate Information Technology student with hands-on experience in full-stack web development, 
              artificial intelligence, machine learning, and computer vision projects. Strong interest in building 
              scalable and practical technology solutions.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 btn-primary"
            >
              View My Work
              <HiArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 btn-secondary"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
