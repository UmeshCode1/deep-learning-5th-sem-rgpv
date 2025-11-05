// Initialize scroll animations
export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '50px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        // Optionally unobserve after animation
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all elements with scroll animation classes
  const animatedElements = document.querySelectorAll(
    '.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale-up'
  )

  animatedElements.forEach(el => observer.observe(el))

  return () => {
    animatedElements.forEach(el => observer.unobserve(el))
  }
}

// Initialize on DOM ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations)
  } else {
    initScrollAnimations()
  }
}
