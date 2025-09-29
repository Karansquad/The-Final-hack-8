import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export const createScrollTrigger = (element: string | Element, options: any) => {
  return ScrollTrigger.create({
    trigger: element,
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    ...options
  })
}

export const createParallaxEffect = (element: string | Element, speed: number = 0.5) => {
  return gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  })
}

export const createRevealAnimation = (element: string | Element, direction: 'up' | 'down' | 'left' | 'right' = 'up') => {
  const directions = {
    up: { y: 100, opacity: 0 },
    down: { y: -100, opacity: 0 },
    left: { x: 100, opacity: 0 },
    right: { x: -100, opacity: 0 }
  }

  gsap.fromTo(element, directions[direction], {
    y: 0,
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  })
}

export const createCounterAnimation = (element: string | Element, endValue: number, duration: number = 2) => {
  return gsap.to(element, {
    innerHTML: endValue,
    duration: duration,
    ease: "power2.out",
    snap: { innerHTML: 1 },
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  })
}

export const createStaggerAnimation = (elements: string | Element, stagger: number = 0.1) => {
  return gsap.fromTo(elements, 
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elements,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    }
  )
}
