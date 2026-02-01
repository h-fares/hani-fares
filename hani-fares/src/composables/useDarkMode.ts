import { ref, watch } from 'vue'

type Theme = 'light' | 'dark'

const theme = ref<Theme>('dark')
const STORAGE_KEY = 'hani-fares-theme'

export function useDarkMode() {
  // Initialize theme from localStorage or system preference
  const initializeTheme = () => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
    
    if (stored) {
      theme.value = stored
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      theme.value = prefersDark ? 'dark' : 'light'
    }
    
    applyTheme(theme.value)
  }

  // Apply theme to document
  const applyTheme = (newTheme: Theme) => {
    const html = document.documentElement
    if (newTheme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }

  // Toggle theme
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  // Watch for changes and persist to localStorage
  watch(theme, (newTheme) => {
    localStorage.setItem(STORAGE_KEY, newTheme)
    applyTheme(newTheme)
  })

  // Initialize on first use
  if (typeof window !== 'undefined') {
    initializeTheme()
  }

  return {
    theme,
    toggleTheme,
    isDark: () => theme.value === 'dark'
  }
}
