'use client'

import { useEffect, useState } from 'react'
import { trackAnimationPerformance } from '@/lib/analytics'

interface PerformanceMetrics {
  fps: number
  memoryUsage: number
  renderTime: number
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memoryUsage: 0,
    renderTime: 0
  })

  useEffect(() => {
    let frameCount = 0
    let lastTime = performance.now()
    let animationId: number

    const measurePerformance = () => {
      const currentTime = performance.now()
      frameCount++

      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
        
        setMetrics(prev => ({
          ...prev,
          fps
        }))

        // Track performance issues
        if (fps < 30) {
          trackAnimationPerformance('low_fps', fps)
        }

        frameCount = 0
        lastTime = currentTime
      }

      animationId = requestAnimationFrame(measurePerformance)
    }

    // Start monitoring
    animationId = requestAnimationFrame(measurePerformance)

    // Monitor memory usage
    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({
          ...prev,
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024)
        }))
      }
    }

    const memoryInterval = setInterval(checkMemory, 5000)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      clearInterval(memoryInterval)
    }
  }, [])

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white text-xs p-2 rounded-lg font-mono z-50">
      <div>FPS: {metrics.fps}</div>
      <div>Memory: {metrics.memoryUsage}MB</div>
    </div>
  )
}
