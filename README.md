# Kwality Walls - Premium Ice Cream Experience (Educational Re‑imagining)

A premium, highly animated ice cream website built with Next.js 14, featuring smooth animations, interactive components, and a modern design inspired by bold student projects. This is an educational re‑imagining.

## 🚀 Features

- **Premium Animations**: Framer Motion + GSAP ScrollTrigger for buttery smooth interactions
- **Custom Cursor**: Magnetic hover effects and trailing particles
- **Interactive Mix Lab**: Build your perfect ice cream combination
- **Smooth Scrolling**: Lenis-powered smooth scroll experience
- **Responsive Design**: Mobile-first approach with elegant desktop enhancements
- **Performance Optimized**: Lazy loading, code splitting, and GPU-friendly transforms
- **Accessibility**: WCAG compliant with reduced motion support

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router, TypeScript, SSR/ISR)
- **Styling**: Tailwind CSS with custom design system
- **Components**: shadcn/ui + custom components
- **Animations**: Framer Motion + GSAP ScrollTrigger
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Images**: Next.js Image optimization

## 🎨 Design System

### Colors
- **Primary**: #E51E2A (Strawberry Red)
- **Cream**: #FFF4EC
- **Vanilla**: #FDF8F5
- **Chocolate**: #4A2C2A
- **Mint**: #C6F6D5

### Typography
- **Display**: Clash Display (headings)
- **Body**: Inter (body text)
- **Scale**: Responsive clamp() functions

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   ```
   http://localhost:3000
   ```

## ⚠️ Important Notes

- The project uses **Lenis** for smooth scrolling (updated from @studio-freight/lenis)
- All animations are optimized for 60fps performance
- The opening animation only plays once per user (stored in localStorage)
- Custom cursor effects are disabled on mobile devices
- All images use placeholder URLs from Unsplash

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── AnimatedCursor.tsx
│   ├── Hero.tsx
│   ├── FlavorCarousel.tsx
│   ├── MixLab.tsx
│   └── ...
├── data/                 # Sample data
│   ├── flavours.ts
│   └── stores.ts
├── lib/                  # Utilities
│   └── utils.ts
└── public/               # Static assets
```

## 🎯 Key Components

### Hero Section
- Letter-by-letter headline animation
- 3D product preview with parallax
- Floating sprinkle particles
- Magnetic CTA buttons

### Flavor Carousel
- Drag and snap functionality
- Keyboard navigation
- Smooth transitions
- Accessibility features

### Mix Lab
- Interactive ice cream builder
- Real-time preview updates
- Local storage persistence
- Confetti celebrations

### Scroll Timeline
- Sticky image panel
- Scroll-triggered animations
- Brand story progression
- Smooth parallax effects

## 🎨 Animation System

### Opening Animation (1.6s)
1. Cream wipe reveal
2. Letter-by-letter headline rise
3. Product image scale + rotation
4. Floating sprinkle particles

### Micro-interactions
- Hover wobble on product cards
- Glossy highlight sweeps
- Springy button toggles
- Magnetic cursor effects

### Scroll Effects
- Section parallax
- Image reveals with clip-path
- Number counters
- Card tilt animations

## 📱 Responsive Design

- **Mobile**: Touch-optimized interactions
- **Tablet**: Enhanced hover states
- **Desktop**: Full animation suite
- **Reduced Motion**: Respects user preferences

## ♿ Accessibility

- **Focus States**: Visible keyboard navigation
- **Reduced Motion**: Disables heavy animations
- **Color Contrast**: WCAG AA compliant
- **Semantic HTML**: Proper landmarks and structure
- **Screen Readers**: Alt text and ARIA labels

## 🚀 Performance

- **Lighthouse Targets**:
  - Performance: ≥ 90
  - Accessibility: ≥ 95
  - Best Practices: ≥ 95
  - SEO: ≥ 95

- **Optimizations**:
  - Image lazy loading
  - Code splitting
  - GPU-friendly transforms
  - Optimized animations

## 🛠 Development

### Adding New Flavors

Edit `data/flavours.ts`:

```typescript
{
  slug: "new-flavor",
  name: "New Flavor",
  image: "https://example.com/image.jpg",
  tags: ["Tag1", "Tag2"],
  kcal: 200,
  price: 5.99,
  colors: {
    bg: "#FFF4EC",
    accent: "#E51E2A"
  },
  description: "Flavor description",
  ingredients: ["Ingredient1", "Ingredient2"],
  allergens: ["Dairy", "Eggs"]
}
```

### Customizing Animations

Edit animation presets in `lib/motion-presets.ts`:

```typescript
export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}
```

## 📄 License

This project is created for educational purposes. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: hello@kwalitywalls.com
- Phone: (555) 123-SCOOP

---

**Made with ❤️ and lots of ice cream**
