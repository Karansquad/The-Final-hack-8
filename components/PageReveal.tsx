'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function PageReveal() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Check if user has seen the animation before
    const hasSeenAnimation = localStorage.getItem('scoop-happiness-animation-seen')
    
    if (hasSeenAnimation) {
      setIsVisible(false)
      return
    }

    // Hide animation after completion
    const timer = setTimeout(() => {
      setIsVisible(false)
      localStorage.setItem('scoop-happiness-animation-seen', 'true')
    }, 1600)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{
        duration: 1.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2
      }}
      style={{
        transformOrigin: 'top',
      }}
      className="fixed inset-0 z-50 bg-cream"
    />
  )
}
