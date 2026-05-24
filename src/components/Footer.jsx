import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 border-t border-white/10 py-8">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="text-gray-400 text-sm">
            Crafted with precision and care
          </p>
          <p className="text-gray-500 text-xs">
            © {currentYear} Aditi Sharma. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
