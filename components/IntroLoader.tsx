'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return reduced
}

export function IntroLoader() {
  const [show, setShow] = useState(false)
  const [phase, setPhase] = useState<'intro' | 'wipe' | 'done'>('intro')
  const reduced = usePrefersReducedMotion()
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    // Play only once per user
    const seen = localStorage.getItem('scoop-happiness-animation-seen')
    if (seen) return

    setShow(true)

    // Prevent scroll during intro
    const html = document.documentElement
    html.classList.add('lenis-stopped')

    // Timed sequence
    // 0.0s–1.4s: cone + scoops animate
    // 1.4s–1.8s: creamy wipe
    // 1.8s+: finish
    timeoutRef.current = window.setTimeout(() => setPhase('wipe'), reduced ? 400 : 1400)

    const finalize = window.setTimeout(() => {
      setPhase('done')
      setShow(false)
      localStorage.setItem('scoop-happiness-animation-seen', 'true')
      html.classList.remove('lenis-stopped')
    }, reduced ? 700 : 1800)

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
      window.clearTimeout(finalize)
      html.classList.remove('lenis-stopped')
    }
  }, [reduced])

  if (!show) return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[60] bg-cream flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Ice cream loader scene */}
          {phase === 'intro' && (
            <motion.div
              className="relative w-[220px] h-[260px]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: reduced ? 0.2 : 0.5, ease: 'easeOut' }}
            >
              {/* Cone */}
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                initial={{ y: 40, opacity: 0, rotate: -5 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: reduced ? 0.2 : 0.5, delay: reduced ? 0 : 0.1 }}
              >
                <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 140L10 20H110L60 140Z" fill="#E0B083"/>
                  <path d="M25 35H95M20 50H100M25 65H95M30 80H90M35 95H85M45 110H75" stroke="#C7956D" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </motion.div>

              {/* Scoops */}
              <motion.div
                className="absolute bottom-[92px] left-1/2 -translate-x-1/2"
                initial={{ y: 30, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: reduced ? 0.2 : 0.45, delay: reduced ? 0 : 0.25 }}
              >
                <div className="relative w-[150px] h-[150px]">
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[130px] h-[130px] bg-[#FDF8F5] rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.08)]"/>
                  <motion.div
                    className="absolute left-[10px] bottom-[40px] w-[110px] h-[110px] rounded-full"
                    style={{ backgroundColor: '#C6F6D5' }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: reduced ? 0.2 : 0.4, delay: reduced ? 0 : 0.35 }}
                  />
                  <motion.div
                    className="absolute right-[10px] bottom-[40px] w-[110px] h-[110px] rounded-full"
                    style={{ backgroundColor: '#FFF4EC' }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: reduced ? 0.2 : 0.4, delay: reduced ? 0 : 0.45 }}
                  />
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 bottom-[90px] w-[120px] h-[120px] rounded-full"
                    style={{ backgroundColor: '#E51E2A' }}
                    initial={{ scale: 0.8, opacity: 0, rotate: -6 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 240, damping: 20, delay: reduced ? 0 : 0.55 }}
                  />
                </div>
              </motion.div>

              {/* Sprinkle drift */}
              {!reduced && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(16)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor: ['#E51E2A', '#C6F6D5', '#4A2C2A', '#FDF8F5'][i % 4]
                      }}
                      initial={{ x: Math.random() * 220 - 110, y: 260 + Math.random() * 60, opacity: 0 }}
                      animate={{ y: -40 - Math.random() * 40, opacity: [0, 1, 0] }}
                      transition={{ duration: 1.2 + Math.random() * 0.6, delay: i * 0.03, ease: 'easeInOut' }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* Creamy wipe */}
          {phase === 'wipe' && (
            <motion.div
              className="fixed inset-0 bg-cream"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: reduced ? 0.15 : 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ transformOrigin: 'top' }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}


