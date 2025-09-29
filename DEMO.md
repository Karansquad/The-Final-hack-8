# 🍦 Kwality Walls - Demo Guide

## 🎯 Key Features to Test

### 1. Opening Animation
- **What to look for**: Cream wipe reveal, letter-by-letter headline animation
- **Duration**: 1.6 seconds total
- **Note**: Only plays once per user (checked via localStorage)

### 2. Custom Cursor (Desktop Only)
- **What to look for**: Red dot cursor with magnetic outline
- **Test**: Hover over buttons and interactive elements
- **Note**: Disabled on mobile devices

### 3. Hero Section
- **Features**: 
  - Letter-by-letter headline animation
  - Floating sprinkle particles
  - 3D product image with parallax
  - Magnetic CTA buttons

### 4. Flavor Carousel
- **Interactions**:
  - Drag to navigate
  - Click navigation arrows
  - Keyboard navigation (arrow keys)
  - Dot indicators
- **Features**: Smooth snap-to-card behavior

### 5. Mix & Match Lab
- **Interactive Builder**:
  - Choose base (cone/cup)
  - Select 2 scoops
  - Add drizzle
  - Add sprinkles
- **Features**:
  - Real-time preview updates
  - Price calculation
  - Save mix functionality
  - Confetti celebration on save

### 6. Scroll Timeline
- **Story Section**:
  - Sticky image panel
  - Scroll-triggered animations
  - Brand history progression
  - Smooth parallax effects

### 7. Sustainability Section
- **Animated Stats**:
  - Number counters
  - Card hover effects
  - Gradient backgrounds

### 8. Store Locator
- **Features**:
  - Search functionality
  - Store cards with details
  - Interactive hover states
  - Contact information

### 9. Call to Action
- **Animations**:
  - Floating particles
  - Badge animation
  - Button hover effects

### 10. Navigation
- **Features**:
  - Sticky header
  - Progress bar
  - Smooth scroll to sections
  - Mobile menu

## 🎨 Animation System

### Performance Optimizations
- GPU-friendly transforms
- Reduced motion support
- Lazy loading
- Code splitting

### Accessibility
- Focus states
- Keyboard navigation
- Screen reader support
- Color contrast compliance

## 🧪 Testing Checklist

- [ ] Opening animation plays once
- [ ] Custom cursor works on desktop
- [ ] All sections scroll smoothly
- [ ] Carousel drag/swipe works
- [ ] Mix lab saves combinations
- [ ] Mobile responsiveness
- [ ] Keyboard navigation
- [ ] Reduced motion support
- [ ] Performance (60fps)
- [ ] Accessibility features

## 🐛 Known Issues

1. **Window object**: Some components use fixed values instead of `window.innerWidth` for SSR compatibility
2. **Image placeholders**: All images use Unsplash placeholders
3. **Local storage**: Mix lab data persists across sessions

## 🚀 Performance Targets

- **Lighthouse Performance**: ≥ 90
- **Accessibility**: ≥ 95
- **Best Practices**: ≥ 95
- **SEO**: ≥ 95

## 📱 Device Testing

- **Mobile**: Touch interactions, reduced animations
- **Tablet**: Enhanced hover states
- **Desktop**: Full animation suite

---

**Happy Testing! 🍦**
