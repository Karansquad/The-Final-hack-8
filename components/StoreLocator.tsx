'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Search } from 'lucide-react'
import { stores } from '@/data/stores'

export function StoreLocator() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStore, setSelectedStore] = useState<string | null>(null)

  const filteredStores = stores.filter(store =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    store.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    store.address.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="py-20 bg-gradient-to-br from-vanilla to-cream">
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
            Find a Store
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit us at one of our locations and experience the joy of 
            premium ice cream in person.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by city, address, or store name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
            />
          </div>
        </motion.div>

        {/* Stores Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStores.map((store, index) => (
            <motion.div
              key={store.id}
              className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer ${
                selectedStore === store.id ? 'ring-2 ring-primary' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedStore(selectedStore === store.id ? null : store.id)}
              data-cursor="pointer"
            >
              {/* Store Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{store.name}</h3>
                  <p className="text-sm opacity-90">{store.city}, {store.state}</p>
                </div>
              </div>

              {/* Store Details */}
              <div className="p-6">
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">{store.address}</p>
                      <p className="text-sm text-gray-600">{store.city}, {store.state} {store.zipCode}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-sm text-gray-600">{store.phone}</p>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Hours</p>
                      <p className="text-sm text-gray-600">Mon-Fri: {store.hours.monday}</p>
                      <p className="text-sm text-gray-600">Weekend: {store.hours.saturday}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {store.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <motion.button
                    className="flex-1 bg-primary text-white py-2 px-4 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-cursor="pointer"
                  >
                    Get Directions
                  </motion.button>
                  <motion.button
                    className="flex-1 border-2 border-primary text-primary py-2 px-4 rounded-xl font-semibold text-sm hover:bg-primary hover:text-white transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-cursor="pointer"
                  >
                    Call Store
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredStores.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-gray-400 mb-4">
              <MapPin className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No stores found</h3>
            <p className="text-gray-500">Try searching with a different term or check back later for new locations.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
