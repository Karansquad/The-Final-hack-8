'use client'

import { useEffect, useRef } from 'react'

interface SprinkleParticlesProps {
  trigger: boolean
  onComplete?: () => void
}

export function SprinkleParticles({ trigger, onComplete }: SprinkleParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!trigger) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Sprinkle particles
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
      color: string
      size: number
    }> = []

    const colors = ['#E51E2A', '#C6F6D5', '#FFF4EC', '#4A2C2A', '#FDF8F5']
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Create particles
    for (let i = 0; i < 50; i++) {
      const angle = (Math.PI * 2 * i) / 50
      const speed = 2 + Math.random() * 3
      particles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        life: 0,
        maxLife: 60 + Math.random() * 40,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 2 + Math.random() * 3
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.vy += 0.1 // gravity
        particle.life++

        const alpha = 1 - (particle.life / particle.maxLife)
        
        ctx.save()
        ctx.globalAlpha = alpha
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        // Remove dead particles
        if (particle.life >= particle.maxLife) {
          particles.splice(index, 1)
        }
      })

      if (particles.length > 0) {
        animationId = requestAnimationFrame(animate)
      } else {
        onComplete?.()
      }
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [trigger, onComplete])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ background: 'transparent' }}
    />
  )
}
