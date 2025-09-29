'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

interface SmoothScrollProviderProps {
  children: React.ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const html = document.documentElement
    html.classList.add('lenis')

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const shouldDisable = prefersReducedMotion.matches || isTouchDevice

    // Disable Lenis when reduced motion is preferred or on touch devices to avoid jitter
    if (shouldDisable) {
      html.classList.remove('lenis-smooth')
      return () => {
        html.classList.remove('lenis')
      }
    }

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 1.5,
      infinite: false,
    })
    lenisRef.current = lenis
    html.classList.add('lenis-smooth')

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // React to reduced motion changes dynamically
    const handleMotionChange = () => {
      if (prefersReducedMotion.matches) {
        lenis.stop()
        html.classList.remove('lenis-smooth')
      } else {
        lenis.start()
        html.classList.add('lenis-smooth')
      }
    }
    prefersReducedMotion.addEventListener('change', handleMotionChange)

    // Cleanup
    return () => {
      prefersReducedMotion.removeEventListener('change', handleMotionChange)
      if (rafId) cancelAnimationFrame(rafId)
      lenis.destroy()
      html.classList.remove('lenis-smooth')
      html.classList.remove('lenis')
    }
  }, [])

  return <>{children}</>
}
