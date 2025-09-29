'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Heart, Menu, X } from 'lucide-react'
import { Magnetic } from './Magnetic'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  const progress = useTransform(scrollY, [0, 1000], [0, 100])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Flavours', href: '#flavours' },
    { name: 'Mix Lab', href: '#mix-lab' },
    { name: 'Story', href: '#story' },
    { name: 'Stores', href: '#stores' }
  ]

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX: progress, transformOrigin: '0%' }}
      />

      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              data-cursor="pointer"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="font-display text-xl font-bold text-gray-900">
                Kwality Walls
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                  whileHover={{ y: -2 }}
                  data-cursor="pointer"
                >
                  {item.name}
                </motion.a>
              ))}
              <Magnetic>
                <motion.button
                  className="bg-primary text-white px-6 py-2 rounded-2xl font-semibold hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor="pointer"
                >
                  Order Now
                </motion.button>
              </Magnetic>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-cursor="pointer"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden bg-white border-t border-gray-200"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? 'auto' : 0, 
            opacity: isOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-primary font-medium transition-colors py-2"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 8 }}
                data-cursor="pointer"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="w-full bg-primary text-white py-3 rounded-2xl font-semibold hover:bg-primary/90 transition-colors mt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-cursor="pointer"
            >
              Order Now
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>
    </>
  )
}
