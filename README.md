# 🚀 Portfolio Website - Syed Muhammad Taqi Kazmi

A modern, animated portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

### 🎨 **Beautiful Animations**
- **Scroll progress indicator** with gradient bar
- **Staggered entrance animations** for all sections
- **Interactive hover effects** on buttons, cards, and links
- **Animated skill bars** with shine effects
- **Floating gradient backgrounds** throughout
- **Smooth page transitions** and scroll behavior
- **Custom animated scrollbar** with gradient colors

### 📱 **Fully Responsive**
- Mobile-first design approach
- Responsive navigation with mobile menu
- Optimized layouts for all screen sizes
- Touch-friendly interactive elements

### 🌙 **Dark Mode Ready**
- Automatic dark mode detection
- Smooth color transitions
- Optimized for both light and dark themes

### ⚡ **Performance Optimized**
- GPU-accelerated animations
- Lazy-loaded animations on scroll
- Optimized images and assets
- Fast page load times

## 📁 Project Structure

```
Portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page with all sections
│   └── globals.css        # Global styles & animations
├── components/            # React components
│   ├── Header.tsx        # Responsive navigation
│   ├── Hero.tsx          # Animated hero section
│   ├── About.tsx         # About me section
│   ├── Projects.tsx      # Project showcase
│   ├── Skills.tsx        # Animated skills display
│   ├── Contact.tsx       # Contact form & info
│   ├── Footer.tsx        # Footer with links
│   └── ScrollProgress.tsx # Scroll progress indicator
├── lib/                  # Utility functions
│   └── animations.ts     # Framer Motion variants
├── types/                # TypeScript definitions
│   └── index.ts          # Type definitions
├── public/               # Static assets
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 🛠️ Built With

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Advanced animations
- **[Lucide React](https://lucide.dev/)** - Beautiful icons

## 🎨 Animation Features

### Custom Animation Variants
- `fadeInUp` - Fade in from bottom
- `fadeInDown` - Fade in from top
- `fadeInLeft` - Slide in from left
- `fadeInRight` - Slide in from right
- `scaleIn` - Scale animation
- `staggerContainer` - Stagger children animations

### Interactive Elements
- **Buttons**: Scale and shadow on hover/tap
- **Cards**: Lift effect on hover
- **Icons**: Rotate and scale animations
- **Skill Bars**: Animated fill with shine effect
- **Tech Tags**: Pop-in and lift on hover

## 📝 Customization

### Update Personal Information
1. Edit `app/layout.tsx` - Update site metadata
2. Edit `components/Hero.tsx` - Change name and social links
3. Edit `components/About.tsx` - Update bio and experience
4. Edit `components/Projects.tsx` - Add your projects
5. Edit `components/Skills.tsx` - Update skills and tech stack
6. Edit `components/Contact.tsx` - Update contact information

### Modify Colors
- Edit `tailwind.config.ts` for theme colors
- Edit `app/globals.css` for custom CSS variables

### Add More Projects
Edit the `projects` array in `components/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Your Project",
    description: "Project description...",
    technologies: ["React", "Node.js"],
    link: "https://yourproject.com",
    highlights: [
      "Feature 1",
      "Feature 2"
    ]
  }
];
```

## 🎯 Sections

1. **Hero** - Eye-catching introduction with animated gradients
2. **About** - Professional bio and experience
3. **Projects** - Live project showcase (LearnUp AI)
4. **Skills** - Interactive skill bars and tech stack
5. **Contact** - Contact form and social links

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Connect

- **GitHub**: [github.com/syedtaqi](https://github.com/syedtaqi)
- **LinkedIn**: [linkedin.com/in/syedtaqi](https://linkedin.com/in/syedtaqi)
- **Email**: syedtaqi@example.com

---

**Built with ❤️ by Syed Muhammad Taqi Kazmi**
# TaqiKazmi
