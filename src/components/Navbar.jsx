import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { HiMenu, HiX } from 'react-icons/hi'
import { THEME } from '../config/theme'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Education', to: 'education' },
    { label: 'Projects', to: 'projects' },
    { label: 'Experience', to: 'experience' },
    { label: 'Achievements', to: 'achievements' },
    { label: 'Contact', to: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-navy-950/95 shadow-lg shadow-blue-600/10 backdrop-blur-sm' 
            : 'bg-navy-950/90 backdrop-blur-sm'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-white"
            >
              Aditi <span className="text-blue-600">Sharma</span>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex items-center space-x-1"
            >
              {navItems.map((item, index) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-64}
                  className="px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:text-blue-600 cursor-pointer rounded-md hover:bg-blue-600/10 active:text-blue-500"
                >
                  {item.label}
                </ScrollLink>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-blue-600 transition-colors"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-16 left-0 right-0 bg-navy-950/95 md:hidden z-40 overflow-hidden backdrop-blur-sm"
      >
        <div className="container-custom py-4 flex flex-col space-y-2">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-64}
              className="px-4 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:text-blue-600 hover:bg-blue-600/10 rounded-md cursor-pointer block"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>
      </motion.div>

      {/* Navbar Spacer */}
      <div className="h-16" />
    </>
  )
}

export default Navbar
