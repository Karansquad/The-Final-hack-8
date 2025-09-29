'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useTransform, useDragControls } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FlavorCard } from './FlavorCard'
import { flavours } from '@/data/flavours'

export function FlavorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const dragControls = useDragControls()

  const x = useMotionValue(0)
  const xInput = [-100, 0, 100]
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #E51E2A 0%, #B91C1C 100%)",
    "linear-gradient(180deg, #FFF4EC 0%, #FDF8F5 100%)",
    "linear-gradient(180deg, #C6F6D5 0%, #A7F3D0 100%)"
  ])

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50
    if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else if (info.offset.x < -threshold && currentIndex < flavours.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
    setIsDragging(false)
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < flavours.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      handlePrev()
    } else if (event.key === 'ArrowRight') {
      handleNext()
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-vanilla to-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-section font-black text-gray-900 mb-6">
            Signature Flavours
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handcrafted with premium ingredients and sustainable practices. 
            Each flavor tells a story of quality and care.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors disabled:opacity-50"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor="pointer"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </motion.button>

          <motion.button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors disabled:opacity-50"
            onClick={handleNext}
            disabled={currentIndex === flavours.length - 1}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor="pointer"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </motion.button>

          {/* Carousel */}
          <motion.div
            ref={carouselRef}
            className="overflow-hidden"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label="Flavor carousel"
          >
            <motion.div
              className="flex gap-8"
              style={{ x }}
              drag="x"
              dragControls={dragControls}
              dragConstraints={{ left: 0, right: 0 }}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              animate={{ x: -currentIndex * (320 + 32) }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {flavours.map((flavour, index) => (
                <motion.div
                  key={flavour.slug}
                  className="flex-shrink-0 w-80"
                  whileHover={{ scale: isDragging ? 1 : 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <FlavorCard flavour={flavour} index={index} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {flavours.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                data-cursor="pointer"
              />
            ))}
          </div>
        </div>

        {/* Background Animation */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-3xl"
          style={{ background }}
        />
      </div>
    </section>
  )
}
