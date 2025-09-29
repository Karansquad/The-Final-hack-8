'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const timelineData = [
  {
    year: "1920s",
    title: "The Beginning",
    description: "Our founder's grandmother started making ice cream in her kitchen, using only the finest local ingredients and traditional methods.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center",
    color: "#FFF4EC",
    textColor: "#111111"
  },
  {
    year: "1950s",
    title: "Growing Dreams",
    description: "The family business expanded to a small shop, where neighbors would gather for the weekly ice cream socials.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center",
    color: "#C6F6D5",
    textColor: "#111111"
  },
  {
    year: "1980s",
    title: "Modern Innovation",
    description: "We introduced our first sustainable packaging and began sourcing organic ingredients from local farms.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center",
    color: "#FDF8F5",
    textColor: "#111111"
  },
  {
    year: "2000s",
    title: "Digital Age",
    description: "We launched our first website and began offering online ordering, bringing joy to customers nationwide.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center",
    // Use a distinct yellow for contrast against page background
    color: "#FCD34D",
    textColor: "#111111"
  },
  {
    year: "Today",
    title: "Sustainable Future",
    description: "We're committed to carbon-neutral operations, zero-waste packaging, and supporting local communities.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center",
    color: "#4A2C2A",
    textColor: "#FFFFFF"
  }
]

export function ScrollTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  return (
    <section className="py-20 bg-gradient-to-b from-cream to-vanilla">
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
            Moments & Memories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to sustainable innovation, discover the story 
            behind our commitment to bringing happiness through every scoop.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          {/* Sticky Image Panel */}
          <div className="sticky top-1/2 -translate-y-1/2 h-screen flex items-center justify-center">
            <motion.div
              className="relative w-full max-w-2xl h-96 rounded-3xl overflow-hidden shadow-2xl"
              style={{ y }}
            >
              <Image
                src={timelineData[0].image}
                alt="Timeline"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{timelineData[0].title}</h3>
                <p className="text-lg opacity-90">{timelineData[0].description}</p>
              </div>
            </motion.div>
          </div>

          {/* Timeline Steps */}
          <div className="space-y-96">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`grid grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? '' : 'flex-row-reverse'
                }`}>
                  {/* Content */}
                  <motion.div
                    className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="p-8 rounded-3xl"
                      style={{ backgroundColor: item.color, color: item.textColor || '#FFFFFF' }}
                    >
                      <div className="text-6xl font-black mb-4 opacity-20">
                        {item.year}
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                      <p className="text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    className={`${index % 2 === 0 ? 'order-2' : 'order-1'}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Connecting Line */}
                {index < timelineData.length - 1 && (
                  <div className="absolute left-1/2 -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-primary to-primary/50 mt-12" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
