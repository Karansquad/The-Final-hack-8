'use client'

import { useRef, useEffect, ReactNode } from 'react'

interface MagneticProps {
  strength?: number
  radius?: number
  className?: string
  children: ReactNode
}

export function Magnetic({ strength = 0.3, radius = 120, className = '', children }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let rafId: number | null = null

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const elX = rect.left + rect.width / 2
      const elY = rect.top + rect.height / 2
      const dx = e.clientX - elX
      const dy = e.clientY - elY
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < radius) {
        const force = (1 - dist / radius) * strength
        const translateX = dx * force
        const translateY = dy * force
        if (rafId) cancelAnimationFrame(rafId)
        rafId = requestAnimationFrame(() => {
          el.style.transform = `translate(${translateX}px, ${translateY}px)`
        })
      } else {
        if (rafId) cancelAnimationFrame(rafId)
        rafId = requestAnimationFrame(() => {
          el.style.transform = 'translate(0px, 0px)'
        })
      }
    }

    const handleMouseLeave = () => {
      if (rafId) cancelAnimationFrame(rafId)
      el.style.transform = 'translate(0px, 0px)'
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [strength, radius])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}


