'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface CursorProviderProps {
  children: React.ReactNode
}

export function CursorProvider({ children }: CursorProviderProps) {
  const [isDesktop, setIsDesktop] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorOutlineRef = useRef<HTMLDivElement>(null)
  const trailCanvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth > 768 && !('ontouchstart' in window))
    }
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMq = () => setReducedMotion(mq.matches)

    checkDevice()
    onMq()
    window.addEventListener('resize', checkDevice)
    mq.addEventListener('change', onMq)

    return () => {
      window.removeEventListener('resize', checkDevice)
      mq.removeEventListener('change', onMq)
    }
  }, [])

  useEffect(() => {
    if (!isDesktop || reducedMotion) return

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [data-cursor="pointer"]')
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [isDesktop, reducedMotion])

  // Lightweight sprinkle trail
  useEffect(() => {
    if (!isDesktop || reducedMotion) return
    const canvas = trailCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId = 0
    const DPR = Math.min(2, window.devicePixelRatio || 1)

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * DPR)
      canvas.height = Math.floor(window.innerHeight * DPR)
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.scale(DPR, DPR)
    }
    resize()
    window.addEventListener('resize', resize)

    type Particle = { x: number; y: number; vx: number; vy: number; life: number; max: number; color: string }
    const particles: Particle[] = []
    const colors = ['#E51E2A', '#C6F6D5', '#FFF4EC', '#4A2C2A']

    const spawn = (x: number, y: number) => {
      for (let i = 0; i < 2; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          life: 0,
          max: 40 + Math.random() * 20,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
    }

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      spawn(mousePosition.x, mousePosition.y)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.02
        p.life++
        const alpha = Math.max(0, 1 - p.life / p.max)
        ctx.globalAlpha = alpha
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2)
        ctx.fill()
        if (p.life >= p.max) particles.splice(i, 1)
      }
      ctx.globalAlpha = 1
      animationId = requestAnimationFrame(loop)
    }
    animationId = requestAnimationFrame(loop)

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [isDesktop, reducedMotion, mousePosition.x, mousePosition.y])

  if (!isDesktop || reducedMotion) {
    return <>{children}</>
  }

  return (
    <>
      {children}
      <motion.div
        ref={cursorRef}
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      <motion.div
        ref={cursorOutlineRef}
        className={`cursor-outline ${isHovering ? 'hover' : ''}`}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      />
      <canvas ref={trailCanvasRef} className="fixed inset-0 pointer-events-none z-[9997]" />
    </>
  )
}
