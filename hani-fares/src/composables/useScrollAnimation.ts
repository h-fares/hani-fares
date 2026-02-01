import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const animateOnScroll = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class
          entry.target.classList.add('animate-in')
          
          // Optional: Stop observing after animation triggers
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    })

    // Observe all elements with data-animate attribute
    const elementsToAnimate = document.querySelectorAll('[data-animate]')
    elementsToAnimate.forEach((el) => observer.observe(el))

    return observer
  }

  const smoothScroll = (target: string, behavior: ScrollBehavior = 'smooth') => {
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior })
    }
  }

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = animateOnScroll()
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    smoothScroll,
    animateOnScroll,
  }
}

export function useParallaxScroll() {
  const handleParallax = () => {
    const parallaxElements = document.querySelectorAll('[data-parallax]')
    
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-parallax') || '0.5'
        const yPos = scrollY * parseFloat(speed)
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    })
  }

  onMounted(() => {
    handleParallax()
  })

  return {
    handleParallax,
  }
}
