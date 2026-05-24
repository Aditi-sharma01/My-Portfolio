import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('Ao2dyCupmxiJ9FFhH') // EmailJS public key
  }, [])

  const contactInfo = [
    {
      icon: HiEnvelope,
      label: 'Email',
      value: 'aditisharma5299@gmail.com',
      link: 'mailto:aditisharma5299@gmail.com',
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+91 9007194983',
      link: 'tel:+919007194983',
    },
    {
      icon: HiMapPin,
      label: 'Location',
      value: 'India',
      link: '#',
    },
  ]

  const socialLinks = [
    {
      icon: FaLinkedin,
      link: 'https://www.linkedin.com/in/aditi-sharma01/',
      label: 'LinkedIn',
    },
    {
      icon: FaGithub,
      link: 'https://github.com/Aditi-sharma01',
      label: 'GitHub',
    },
    {
      icon: FaInstagram,
      link: 'https://www.instagram.com/boundlezz._/',
      label: 'Instagram',
    },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'aditisharma5299@gmail.com', // Your email
    }

    emailjs
      .send(
        'service_3ay9clb', // EmailJS service ID
        'template_jgo1z5j', // EmailJS template ID
        templateParams
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response)
          setSubmitted(true)
          setFormData({ name: '', email: '', subject: '', message: '' })
          setIsLoading(false)
          setTimeout(() => setSubmitted(false), 3000)
        },
        (error) => {
          console.error('Failed to send email:', error)
          setError('Failed to send message. Please try again.')
          setIsLoading(false)
        }
      )
  }

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
    <section id="contact" className="py-20 md:py-32">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="section-title">Get In Touch</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Let's connect! Whether it's a collaboration, an opportunity, or just to chat about technology and innovation.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-white">
              Connect With Me
            </motion.h3>
            <p className="text-gray-400 text-sm">
              Have a question or want to collaborate? I'd love to hear from you!
            </p>
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      variants={itemVariants}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <Icon size={24} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-400">
                          {info.label}
                        </p>
                        <p className="text-white font-semibold">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="pt-6 border-t border-white/10">
                <p className="text-sm font-medium text-gray-400 mb-4">
                  Connect with me
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-600/50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                      >
                        <Icon size={20} />
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="lg:col-span-2 p-8 rounded-xl border border-white/10 bg-white/5"
            >
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="How can I help?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-4 rounded-lg bg-red-600/20 border border-red-600/50 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="w-full btn-primary text-center font-semibold disabled:opacity-50"
                >
                  {isLoading ? 'Sending...' : submitted ? '✓ Message Sent!' : 'Send Message'}
                </motion.button>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
