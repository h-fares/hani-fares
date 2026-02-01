import { ref, onMounted } from 'vue'

export function useLazyLoad(options?: IntersectionObserverInit) {
  const elements = ref<HTMLElement[]>([])
  const observer = ref<IntersectionObserver | null>(null)

  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '50px',
    ...options,
  }

  const observe = (el: HTMLElement, callback?: () => void) => {
    if (!observer.value) {
      observer.value = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.removeAttribute('data-src')
              img.classList.add('lazy-loaded')
              observer.value?.unobserve(entry.target)
            }
            if (callback) {
              callback()
            }
          }
        })
      }, defaultOptions)
    }

    observer.value.observe(el)
    elements.value.push(el)
  }

  const unobserveAll = () => {
    if (observer.value) {
      elements.value.forEach((el) => observer.value?.unobserve(el))
      observer.value.disconnect()
      observer.value = null
      elements.value = []
    }
  }

  onMounted(() => {
    return () => unobserveAll()
  })

  return {
    observe,
    unobserveAll,
  }
}
