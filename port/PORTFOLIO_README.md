# Shivpujan Kumar - Portfolio Website

A modern, professional, and visually engaging portfolio website showcasing skills as a full-stack developer and startup founder.

## ✨ Features

- **Modern Design**: Clean, minimalistic design with blue and purple gradient theme
- **Responsive**: Fully responsive design that works on desktop, tablet, and mobile
- **Interactive Animations**: Smooth animations using Framer Motion
- **Glassmorphism UI**: Modern glass-effect components with subtle transparency
- **Typewriter Effect**: Dynamic typing animation in the hero section
- **Smooth Scrolling**: Seamless navigation between sections
- **Contact Form**: Functional contact form (ready for backend integration)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Geist Sans & Geist Mono

## 📱 Sections

1. **Hero Section**: Introduction with typewriter effect and call-to-action buttons
2. **About Me**: Personal journey, education timeline, and core values
3. **Skills & Services**: Technical skills, service offerings, and proficiency levels
4. **Projects**: Featured projects with tech stacks and demo links
5. **Contact**: Contact form and social media links
6. **Footer**: Professional footer with back-to-top functionality

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/app/layout.tsx` - Meta information
- `src/app/components/Hero.tsx` - Name, title, and introduction
- `src/app/components/About.tsx` - Personal story and timeline
- `src/app/components/Projects.tsx` - Your projects and links
- `src/app/components/Contact.tsx` - Contact information

### Styling
- Colors and themes are defined in `src/app/globals.css`
- Component-specific styles use Tailwind classes
- Custom animations are defined in the CSS file

### Contact Form
The contact form is ready for backend integration. Update the `handleSubmit` function in `Contact.tsx` to connect with your preferred email service (SendGrid, Resend, etc.).

## 📞 Contact Integration

To make the contact form functional:

1. Choose an email service (SendGrid, Resend, EmailJS, etc.)
2. Update `src/lib/sendEmail.ts` with your API integration
3. Add environment variables for API keys
4. Update the form submission handler in `Contact.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS
- Digital Ocean
- Railway

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ by Shivpujan Kumar
