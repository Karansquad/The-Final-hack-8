'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function SectionReveal({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up'
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 }
  }

  const animateVariants = {
    up: { y: 0, opacity: 1 },
    down: { y: 0, opacity: 1 },
    left: { x: 0, opacity: 1 },
    right: { x: 0, opacity: 1 }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={directionVariants[direction]}
      animate={isInView ? animateVariants[direction] : directionVariants[direction]}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  )
}
