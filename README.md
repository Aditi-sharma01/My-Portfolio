# Aditi Sharma - Professional Portfolio

A clean, minimal, and professional personal portfolio website built with React, Vite, and Tailwind CSS.

## ✨ Features

- **Responsive Design**: Fully responsive and optimized for all screen sizes
- **Modern Tech Stack**: React 18 + Vite + Tailwind CSS
- **Smooth Navigation**: Scroll-based navigation with smooth transitions
- **Premium Design**: Professional, minimal aesthetic with no flashy effects
- **Recruiter Friendly**: Clean layout showcasing skills, projects, and experience
- **Performant**: Optimized for fast loading and smooth interactions
- **Subtle Animations**: Framer Motion for elegant, non-distracting animations

## 🎨 Design System

### Color Palette
- **Deep Navy**: `#0F172A` - Primary background
- **Professional Blue**: `#2563EB` - Accent color
- **White**: `#FFFFFF` - Text and highlights

### Typography
- **Font Family**: Inter (body), Poppins (headings)
- **Design Philosophy**: Minimal, clean, recruiter-focused

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 4.4.5
- **Styling**: Tailwind CSS 3.3.3
- **Animations**: Framer Motion 10.16.4
- **Icons**: React Icons 4.11.0
- **Smooth Scrolling**: React Scroll 1.8.10

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Education.jsx
│       ├── Projects.jsx
│       ├── Experience.jsx
│       ├── Achievements.jsx
│       └── Contact.jsx
├── config/
│   └── theme.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd aditi-sharma-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

The website will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

The optimized build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🔧 Configuration

### Tailwind CSS
Customize colors, fonts, and spacing in `tailwind.config.js`

### Theme Configuration
Global theme variables are in `src/config/theme.js`

### Smooth Scrolling
Configured globally in `src/index.css` with React Scroll integration

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

## 🎯 Sections

1. **Hero**: Eye-catching introduction
2. **About**: Personal summary and statistics
3. **Skills**: Technical skills organized by category
4. **Education**: Academic background
5. **Projects**: Featured portfolio projects
6. **Experience**: Professional experience timeline
7. **Achievements**: Highlights and milestones
8. **Contact**: Contact form and social links

## ✍️ Customization Guide

### Update Personal Information

Edit these files to add your information:

- **Navbar**: `src/components/Navbar.jsx`
- **Hero**: `src/components/sections/Hero.jsx`
- **About**: `src/components/sections/About.jsx`
- **Skills**: `src/components/sections/Skills.jsx`
- **Education**: `src/components/sections/Education.jsx`
- **Projects**: `src/components/sections/Projects.jsx`
- **Experience**: `src/components/sections/Experience.jsx`
- **Achievements**: `src/components/sections/Achievements.jsx`
- **Contact**: `src/components/sections/Contact.jsx`

### Update Social Links

In `src/components/sections/Contact.jsx`, update the `socialLinks` array:

```javascript
const socialLinks = [
  {
    icon: FaLinkedin,
    link: 'https://linkedin.com/in/yourprofile',
    label: 'LinkedIn',
  },
  // ... add more social links
]
```

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  navy: {
    950: '#0F172A', // Change this
  },
  blue: {
    600: '#2563EB', // Change this
  },
}
```

## 🎬 Animation Customization

All animations are configured in `src/config/theme.js` in the `ANIMATION_CONFIG` object. Modify these values to adjust animation timings and effects.

## 📧 Contact Form Setup

The contact form is currently a frontend-only implementation. To make it functional, integrate with:

- **Email Service**: Nodemailer, SendGrid, Mailgun
- **Backend**: Node.js, Express, or serverless functions
- **Alternative**: Formspree, Basin, or similar services

## 🔒 Best Practices

- Keep the design clean and professional
- Use meaningful project descriptions
- Update content regularly
- Test responsiveness across devices
- Optimize images for web
- Maintain consistent spacing and typography

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this repository and customize it for your portfolio!

## 📞 Support

For questions or issues, please open an issue or contact directly.

---

**Made with ❤️ by Aditi Sharma**
