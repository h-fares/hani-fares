import { ref, computed } from 'vue'
import { de } from '@/locales/de'
import { en } from '@/locales/en'

type Language = 'de' | 'en'

const currentLanguage = ref<Language>('de')
const messages = {
  de,
  en,
}

const LANGUAGE_STORAGE_KEY = 'hani-fares-language'

export function useLanguage() {
  // Initialize language from localStorage or system preference
  const initializeLanguage = () => {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null
    
    if (stored && (stored === 'de' || stored === 'en')) {
      currentLanguage.value = stored
    } else {
      // Check system preference
      const browserLanguage = navigator.language.toLowerCase()
      if (browserLanguage.startsWith('de')) {
        currentLanguage.value = 'de'
      } else {
        currentLanguage.value = 'en'
      }
    }
  }

  // Get current language messages
  const t = (key: string, fallback: string = ''): string => {
    const keys = key.split('.')
    let current: any = messages[currentLanguage.value]

    for (const k of keys) {
      current = current?.[k]
    }

    return current || fallback || key
  }

  // Change language
  const changeLanguage = (lang: Language) => {
    if (lang === 'de' || lang === 'en') {
      currentLanguage.value = lang
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
      // Update HTML lang attribute
      document.documentElement.lang = lang
    }
  }

  // Get all messages for current language
  const getMessages = computed(() => messages[currentLanguage.value])

  // Get current language
  const getLanguage = computed(() => currentLanguage.value)

  // Get available languages
  const availableLanguages = computed(() => [
    { code: 'de', name: 'Deutsch' },
    { code: 'en', name: 'English' }
  ])

  // Toggle language
  const toggleLanguage = () => {
    changeLanguage(currentLanguage.value === 'de' ? 'en' : 'de')
  }

  // Initialize on first use
  if (typeof window !== 'undefined') {
    initializeLanguage()
  }

  return {
    t,
    changeLanguage,
    toggleLanguage,
    getMessages,
    getLanguage,
    availableLanguages,
    currentLanguage: currentLanguage,
  }
}
