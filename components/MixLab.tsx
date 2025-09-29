'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { RotateCcw, Save, Sparkles } from 'lucide-react'
import { flavours, baseOptions, drizzleOptions, sprinkleOptions } from '@/data/flavours'

interface MixSelection {
  base: typeof baseOptions[0] | null
  scoop1: typeof flavours[0] | null
  scoop2: typeof flavours[0] | null
  drizzle: typeof drizzleOptions[0] | null
  sprinkles: typeof sprinkleOptions[0] | null
}

export function MixLab() {
  const [selection, setSelection] = useState<MixSelection>({
    base: null,
    scoop1: null,
    scoop2: null,
    drizzle: null,
    sprinkles: null
  })
  const [showConfetti, setShowConfetti] = useState(false)
  const [savedMixes, setSavedMixes] = useState<MixSelection[]>([])

  useEffect(() => {
    // Load saved mixes from localStorage
    const saved = localStorage.getItem('scoop-happiness-mixes')
    if (saved) {
      setSavedMixes(JSON.parse(saved))
    }
  }, [])

  const handleSave = () => {
    if (selection.base && (selection.scoop1 || selection.scoop2)) {
      const newMix = { ...selection }
      setSavedMixes(prev => [...prev, newMix])
      localStorage.setItem('scoop-happiness-mixes', JSON.stringify([...savedMixes, newMix]))
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 2000)
    }
  }

  const handleReset = () => {
    setSelection({
      base: null,
      scoop1: null,
      scoop2: null,
      drizzle: null,
      sprinkles: null
    })
  }

  const calculateTotal = () => {
    let total = 0
    if (selection.base) total += selection.base.price
    if (selection.scoop1) total += selection.scoop1.price
    if (selection.scoop2) total += selection.scoop2.price
    if (selection.drizzle) total += selection.drizzle.price
    if (selection.sprinkles) total += selection.sprinkles.price
    return total
  }

  return (
    <section className="py-20 bg-gradient-to-br from-mint/20 via-vanilla to-cream">
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
            Mix & Match Lab
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create your perfect ice cream combination. Choose your base, 
            pick your flavors, and customize with toppings.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Preview Area */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-8">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 min-h-[500px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {selection.base ? (
                    <motion.div
                      key="preview"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="relative w-64 h-80"
                    >
                      {/* Base */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                        <Image
                          src={selection.base.image}
                          alt={selection.base.name}
                          width={120}
                          height={120}
                          className="object-contain"
                        />
                      </div>

                      {/* Scoop 1 */}
                      {selection.scoop1 && (
                        <motion.div
                          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Image
                            src={selection.scoop1.image}
                            alt={selection.scoop1.name}
                            width={100}
                            height={100}
                            className="object-contain rounded-full"
                          />
                        </motion.div>
                      )}

                      {/* Scoop 2 */}
                      {selection.scoop2 && (
                        <motion.div
                          className="absolute bottom-32 left-1/2 transform -translate-x-1/2"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <Image
                            src={selection.scoop2.image}
                            alt={selection.scoop2.name}
                            width={100}
                            height={100}
                            className="object-contain rounded-full"
                          />
                        </motion.div>
                      )}

                      {/* Drizzle */}
                      {selection.drizzle && (
                        <motion.div
                          className="absolute top-8 left-1/2 transform -translate-x-1/2"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          <Image
                            src={selection.drizzle.image}
                            alt={selection.drizzle.name}
                            width={80}
                            height={80}
                            className="object-contain"
                          />
                        </motion.div>
                      )}

                      {/* Sprinkles */}
                      {selection.sprinkles && (
                        <motion.div
                          className="absolute top-4 left-1/2 transform -translate-x-1/2"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.8 }}
                        >
                          <Image
                            src={selection.sprinkles.image}
                            alt={selection.sprinkles.name}
                            width={60}
                            height={60}
                            className="object-contain"
                          />
                        </motion.div>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center text-gray-400"
                    >
                      <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg">Start building your mix!</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Confetti Effect */}
                {showConfetti && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary rounded-full"
                        initial={{
                          x: '50%',
                          y: '50%',
                          scale: 0
                        }}
                        animate={{
                          x: Math.random() * 400 - 200,
                          y: Math.random() * 400 - 200,
                          scale: [0, 1, 0],
                          rotate: Math.random() * 360
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.1
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Total Price */}
              {selection.base && (
                <motion.div
                  className="mt-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="bg-primary text-white px-6 py-3 rounded-2xl font-bold text-xl">
                    Total: ₹{calculateTotal().toFixed(2)}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Selection Area */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Base Selection */}
            <div>
              <h3 className="font-display text-xl font-bold mb-4">Choose Your Base</h3>
              <div className="grid grid-cols-3 gap-4">
                {baseOptions.map((base) => (
                  <motion.button
                    key={base.id}
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      selection.base?.id === base.id
                        ? 'border-primary bg-primary/10'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                    onClick={() => setSelection(prev => ({ ...prev, base }))}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-cursor="pointer"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-2" />
                      <p className="text-sm font-medium">{base.name}</p>
                      <p className="text-xs text-gray-500">₹{base.price}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Scoop Selection */}
            <div>
              <h3 className="font-display text-xl font-bold mb-4">Pick Your Scoops</h3>
              <div className="grid grid-cols-2 gap-4">
                {flavours.slice(0, 6).map((flavour) => (
                  <motion.button
                    key={flavour.slug}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      selection.scoop1?.slug === flavour.slug || selection.scoop2?.slug === flavour.slug
                        ? 'border-primary bg-primary/10'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                    onClick={() => {
                      if (!selection.scoop1) {
                        setSelection(prev => ({ ...prev, scoop1: flavour }))
                      } else if (!selection.scoop2 && selection.scoop1.slug !== flavour.slug) {
                        setSelection(prev => ({ ...prev, scoop2: flavour }))
                      }
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-cursor="pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full" />
                      <div className="text-left">
                        <p className="text-sm font-medium">{flavour.name}</p>
                        <p className="text-xs text-gray-500">₹{flavour.price}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Drizzle Selection */}
            <div>
              <h3 className="font-display text-xl font-bold mb-4">Add Drizzle</h3>
              <div className="grid grid-cols-3 gap-4">
                {drizzleOptions.map((drizzle) => (
                  <motion.button
                    key={drizzle.id}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      selection.drizzle?.id === drizzle.id
                        ? 'border-primary bg-primary/10'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                    onClick={() => setSelection(prev => ({ ...prev, drizzle }))}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-cursor="pointer"
                  >
                    <div className="text-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full mx-auto mb-2" />
                      <p className="text-sm font-medium">{drizzle.name}</p>
                      <p className="text-xs text-gray-500">₹{drizzle.price}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Sprinkles Selection */}
            <div>
              <h3 className="font-display text-xl font-bold mb-4">Finish with Sprinkles</h3>
              <div className="grid grid-cols-3 gap-4">
                {sprinkleOptions.map((sprinkle) => (
                  <motion.button
                    key={sprinkle.id}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      selection.sprinkles?.id === sprinkle.id
                        ? 'border-primary bg-primary/10'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                    onClick={() => setSelection(prev => ({ ...prev, sprinkles: sprinkle }))}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-cursor="pointer"
                  >
                    <div className="text-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full mx-auto mb-2" />
                      <p className="text-sm font-medium">{sprinkle.name}</p>
                      <p className="text-xs text-gray-500">₹{sprinkle.price}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <motion.button
                className="flex-1 bg-primary text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                onClick={handleSave}
                disabled={!selection.base || (!selection.scoop1 && !selection.scoop2)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-cursor="pointer"
              >
                <Save className="w-4 h-4" />
                Save Mix
              </motion.button>
              
              <motion.button
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
                onClick={handleReset}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-cursor="pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
