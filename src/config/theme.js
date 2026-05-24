// Theme Configuration
export const THEME = {
  colors: {
    navy: '#0F172A',
    white: '#FFFFFF',
    blue: '#2563EB',
    blueDark: '#1d4ed8',
    blueLighter: '#60a5fa',
    gray: '#9CA3AF',
    grayLight: '#E5E7EB',
  },
  typography: {
    fontFamily: {
      inter: "'Inter', sans-serif",
      poppins: "'Poppins', sans-serif",
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
  },
  spacing: {
    navHeight: '64px',
    sectionPadding: '5rem 0',
    containerPadding: '0 1rem',
  },
  transitions: {
    default: '0.3s ease-out',
    smooth: '0.5s ease-in-out',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
}

// Animation Configuration
export const ANIMATION_CONFIG = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  slideIn: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  hoverScale: {
    whileHover: { scale: 1.05 },
    transition: { duration: 0.3 },
  },
}
