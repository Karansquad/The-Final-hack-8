'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown, MapPin, Sparkles } from 'lucide-react'
import { Magnetic } from './Magnetic'

export function Hero() {
  const [showParticles, setShowParticles] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(heroRef, { once: true })

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowParticles(true), 800)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  const headline = "Kwality Walls"
  const letters = headline.split('')

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-vanilla to-mint/20">
      {/* Background Elements */}
      <div className="absolute inset-0 sprinkle-pattern opacity-5" />
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Main Headline */}
        <div className="mb-8">
          <motion.h1 
            className="font-display text-hero font-black text-gradient mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.03,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="inline-block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Discover our signature flavors, create your perfect mix, and experience 
            the joy of premium ice cream crafted with love and sustainability.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Magnetic>
            <motion.button
              className="group relative px-8 py-4 bg-primary text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-cursor="pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Explore Flavours
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </Magnetic>
          
          <Magnetic>
            <motion.button
              className="group px-8 py-4 border-2 border-primary text-primary rounded-2xl font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-cursor="pointer"
            >
              <MapPin className="w-5 h-5" />
              Find a Store
            </motion.button>
          </Magnetic>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ scale: 0.92, rotateZ: -1, opacity: 0 }}
          animate={{ scale: 1, rotateZ: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 1.8,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop&crop=center"
              alt="Premium Ice Cream Cone"
              width={800}
              height={600}
              className="rounded-3xl shadow-2xl"
              priority
            />
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-mint/30 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-600"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Sprinkle Particles */}
      {showParticles && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/60 rounded-full"
              initial={{
                x: Math.random() * 1200,
                y: 800,
                rotate: Math.random() * 360
              }}
              animate={{
                y: -20,
                x: Math.random() * 1200,
                rotate: Math.random() * 360
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 2 + 's'
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}
