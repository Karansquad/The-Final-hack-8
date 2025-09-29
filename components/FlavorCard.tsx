'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, Plus, Star } from 'lucide-react'
import { Flavour } from '@/data/flavours'

interface FlavorCardProps {
  flavour: Flavour
  index: number
}

export function FlavorCard({ flavour, index }: FlavorCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <motion.div
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      data-cursor="pointer"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={flavour.image}
          alt={flavour.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Price Badge */}
        <motion.div
          className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full font-bold text-sm"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          ₹{flavour.price}
        </motion.div>

        {/* Like Button */}
        <motion.button
          className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation()
            setIsLiked(!isLiked)
          }}
        >
          <Heart 
            className={`w-5 h-5 transition-colors ${
              isLiked ? 'fill-primary text-primary' : 'text-gray-600'
            }`} 
          />
        </motion.button>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-primary/20 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {flavour.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full"
              style={{ 
                backgroundColor: flavour.colors.bg,
                color: flavour.colors.accent
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 + tagIndex * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
          {flavour.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {flavour.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">4.8</span>
          </div>
          <span className="text-sm text-gray-500">{flavour.kcal} kcal</span>
        </div>

        {/* Add Button */}
        <motion.button
          className="w-full bg-primary text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Plus className="w-4 h-4" />
          Add to Mix
        </motion.button>
      </div>

      {/* Glossy Highlight Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '100%' : '-100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12" />
      </motion.div>
    </motion.div>
  )
}
