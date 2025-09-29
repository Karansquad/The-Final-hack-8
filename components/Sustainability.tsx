'use client'

import { motion } from 'framer-motion'
import { Leaf, Recycle, Truck, Heart } from 'lucide-react'
import { StatCounter } from './StatCounter'

const sustainabilityData = [
  {
    icon: Leaf,
    title: "Organic Ingredients",
    description: "We source 100% organic ingredients from local farms, ensuring the highest quality while supporting sustainable agriculture.",
    stat: 100,
    statSuffix: "%",
    statLabel: "Organic"
  },
  {
    icon: Recycle,
    title: "Zero Waste Packaging",
    description: "Our innovative packaging is made from recycled materials and is fully compostable, reducing our environmental footprint.",
    stat: 95,
    statSuffix: "%",
    statLabel: "Recycled"
  },
  {
    icon: Truck,
    title: "Carbon Neutral Delivery",
    description: "All our deliveries are carbon neutral through renewable energy and electric vehicles, making every scoop guilt-free.",
    stat: 0,
    statSuffix: "",
    statLabel: "Carbon Footprint"
  }
]

export function Sustainability() {
  return (
    <section className="py-20 bg-gradient-to-br from-mint/30 via-vanilla to-cream">
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
            Sustainably Sweet
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to making the world a better place, one scoop at a time. 
            Our sustainability initiatives ensure every treat is both delicious and responsible.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <StatCounter 
              end={100} 
              suffix="%" 
              className="block mb-2"
            />
            <p className="text-lg font-semibold text-gray-700">Organic Ingredients</p>
          </div>
          <div className="text-center">
            <StatCounter 
              end={95} 
              suffix="%" 
              className="block mb-2"
            />
            <p className="text-lg font-semibold text-gray-700">Recycled Packaging</p>
          </div>
          <div className="text-center">
            <StatCounter 
              end={0} 
              className="block mb-2"
            />
            <p className="text-lg font-semibold text-gray-700">Carbon Footprint</p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {sustainabilityData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              data-cursor="pointer"
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <item.icon className="w-8 h-8 text-primary" />
              </motion.div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Stat */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6">
                <div className="text-3xl font-black text-primary mb-2">
                  {item.stat}{item.statSuffix}
                </div>
                <div className="text-sm font-medium text-gray-600">
                  {item.statLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 text-white">
            <Heart className="w-12 h-12 mx-auto mb-4 fill-white" />
            <h3 className="font-display text-2xl font-bold mb-4">
              Join Our Mission
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Every purchase supports our commitment to sustainability. 
              Together, we can create a sweeter, greener future.
            </p>
            <motion.button
              className="bg-white text-primary px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-cursor="pointer"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
