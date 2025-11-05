// Performance-optimized scroll reveal animations
export function initRevealAnimations() {
  // Check if Intersection Observer is supported
  if (!('IntersectionObserver' in window)) {
    console.log('Intersection Observer not supported')
    return
  }

  // Optimized observer with lower threshold for mobile
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px', // Trigger 100px before element enters viewport
    threshold: 0.1 // 10% visibility
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add active class with slight delay for stagger effect
        setTimeout(() => {
          entry.target.classList.add('active')
        }, 50)
        
        // Stop observing once animated (performance boost)
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all elements with 'reveal' class
  const revealElements = document.querySelectorAll('.reveal')
  revealElements.forEach((element) => {
    observer.observe(element)
  })

  // Cleanup function
  return () => {
    revealElements.forEach((element) => {
      observer.unobserve(element)
    })
  }
}

// Smooth scroll with offset for fixed header
export function smoothScrollTo(targetId: string, offset: number = 80) {
  const element = document.getElementById(targetId)
  if (!element) return

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  })
}

// Debounce function for performance
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }
    
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }
}

// Throttle function for scroll events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

// Detect mobile device for performance optimizations
export function isMobileDevice(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth < 768
}

// Preload images for better UX
export function preloadImages(imageUrls: string[]): Promise<void[]> {
  const promises = imageUrls.map((url) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve()
      img.onerror = () => reject()
      img.src = url
    })
  })
  
  return Promise.all(promises)
}

// Performance: Request Idle Callback wrapper
export function runWhenIdle(callback: () => void) {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback)
  } else {
    setTimeout(callback, 1)
  }
}
