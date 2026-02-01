import { onMounted, onUnmounted } from 'vue'

export function useAccessibility() {
  // Enhanced keyboard navigation
  const handleKeyboardNavigation = (e: KeyboardEvent) => {
    // Escape key to close any open modals/menus
    if (e.key === 'Escape') {
      const modals = document.querySelectorAll('[role="dialog"]')
      modals.forEach((modal) => {
        const closeButton = modal.querySelector('[aria-label*="close"], [data-close]')
        if (closeButton) {
          (closeButton as HTMLElement).click()
        }
      })
    }

    // Alt + H for home
    if (e.altKey && e.key === 'h') {
      e.preventDefault()
      window.location.href = '/'
    }

    // Alt + S for services
    if (e.altKey && e.key === 's') {
      e.preventDefault()
      window.location.href = '/services'
    }

    // Alt + P for portfolio
    if (e.altKey && e.key === 'p') {
      e.preventDefault()
      window.location.href = '/portfolio'
    }

    // Alt + C for contact
    if (e.altKey && e.key === 'c') {
      e.preventDefault()
      window.location.href = '/contact'
    }
  }

  // Set focus trap for modals
  const setFocusTrap = (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }

    element.addEventListener('keydown', handleKeyDown)
    return () => element.removeEventListener('keydown', handleKeyDown)
  }

  // Announce changes to screen readers
  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const ariaLiveRegion = document.getElementById('aria-live-region')
    if (ariaLiveRegion) {
      ariaLiveRegion.setAttribute('aria-live', priority)
      ariaLiveRegion.textContent = message
    }
  }

  onMounted(() => {
    document.addEventListener('keydown', handleKeyboardNavigation)

    // Create aria-live region if it doesn't exist
    if (!document.getElementById('aria-live-region')) {
      const region = document.createElement('div')
      region.id = 'aria-live-region'
      region.setAttribute('aria-live', 'polite')
      region.setAttribute('aria-atomic', 'true')
      region.className = 'sr-only'
      document.body.appendChild(region)
    }
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeyboardNavigation)
  })

  return {
    setFocusTrap,
    announce,
  }
}
