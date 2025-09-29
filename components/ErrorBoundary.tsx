'use client'

import { Component, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, RefreshCw } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <motion.div
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream to-vanilla"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center max-w-md mx-auto px-4">
            <motion.div
              className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <AlertTriangle className="w-8 h-8 text-primary" />
            </motion.div>
            
            <h1 className="font-display text-2xl font-bold text-gray-900 mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            
            <motion.button
              className="bg-primary text-white px-6 py-3 rounded-2xl font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2 mx-auto"
              onClick={() => window.location.reload()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RefreshCw className="w-4 h-4" />
              Refresh Page
            </motion.button>
          </div>
        </motion.div>
      )
    }

    return this.props.children
  }
}
