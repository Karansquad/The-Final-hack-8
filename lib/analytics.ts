// Analytics and performance monitoring utilities

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // In a real application, you would integrate with Google Analytics, Mixpanel, etc.
  console.log('Analytics Event:', eventName, properties)
  
  // Example: Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, properties)
  }
}

export const trackPageView = (pageName: string) => {
  trackEvent('page_view', { page_name: pageName })
}

export const trackMixLabInteraction = (action: string, mixData?: any) => {
  trackEvent('mix_lab_interaction', {
    action,
    mix_data: mixData
  })
}

export const trackFlavorSelection = (flavorName: string, action: string) => {
  trackEvent('flavor_selection', {
    flavor_name: flavorName,
    action
  })
}

export const trackStoreSearch = (searchTerm: string, resultsCount: number) => {
  trackEvent('store_search', {
    search_term: searchTerm,
    results_count: resultsCount
  })
}

export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', { depth })
}

export const trackAnimationPerformance = (animationName: string, duration: number) => {
  trackEvent('animation_performance', {
    animation_name: animationName,
    duration
  })
}
