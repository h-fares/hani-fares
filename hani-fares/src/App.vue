<template>
  <div class="min-h-screen flex flex-col bg-background text-foreground font-sans transition-opacity duration-300" :key="getLanguage.value">
    <!-- Skip to main content link for accessibility -->
    <a 
      href="#main-content" 
      class="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
    >
      Skip to main content
    </a>

    <Header />

    <main id="main-content" class="flex-1 container mx-auto px-4 py-8" role="main">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { watch, onMounted } from 'vue'
import Header from '@/components/Layout/Header.vue'
import Footer from '@/components/Layout/Footer.vue'
import { useLanguage } from '@/composables/useLanguage'

const { getLanguage } = useLanguage()

// Watch for language changes and update HTML lang attribute
watch(getLanguage, (newLang) => {
  document.documentElement.lang = newLang
  document.documentElement.setAttribute('lang', newLang)
}, { immediate: true })

// Set lang attribute on mount
onMounted(() => {
  document.documentElement.lang = getLanguage.value
  document.documentElement.setAttribute('lang', getLanguage.value)
})
</script>

<style>
/* Accessibility - screen reader only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.focus\:not-sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
</style>