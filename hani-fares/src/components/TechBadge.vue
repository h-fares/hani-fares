<template>
  <div
    class="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
    :class="badgeClasses"
  >
    <!-- Background glow effect -->
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" :class="glowClass"></div>
    
    <!-- Content -->
    <div class="relative bg-gradient-to-br border backdrop-blur-sm px-4 py-3 rounded-xl transition-all duration-300" :class="contentClasses">
      <div class="text-sm font-semibold text-center">{{ name }}</div>
    </div>
    
    <!-- Shine effect on hover -->
    <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ 
  name: String,
  color: {
    type: String,
    default: 'primary'
  }
})

const badgeClasses = computed(() => {
  const colors = {
    primary: 'hover:shadow-primary/25',
    secondary: 'hover:shadow-secondary/25',
    accent: 'hover:shadow-accent/25'
  }
  return colors[props.color] || colors.primary
})

const contentClasses = computed(() => {
  const colors = {
    primary: 'from-primary/10 to-primary/5 border-primary/20 text-primary group-hover:from-primary/20 group-hover:to-primary/10 group-hover:border-primary/30 group-hover:text-primary',
    secondary: 'from-secondary/10 to-secondary/5 border-secondary/20 text-secondary group-hover:from-secondary/20 group-hover:to-secondary/10 group-hover:border-secondary/30 group-hover:text-secondary',
    accent: 'from-accent/10 to-accent/5 border-accent/20 text-accent group-hover:from-accent/20 group-hover:to-accent/10 group-hover:border-accent/30 group-hover:text-accent'
  }
  return colors[props.color] || colors.primary
})

const glowClass = computed(() => {
  const colors = {
    primary: 'bg-primary/20',
    secondary: 'bg-secondary/20',
    accent: 'bg-accent/20'
  }
  return colors[props.color] || colors.primary
})
</script>

<style scoped>
/* Additional tech badge animations */
@keyframes pulse-tech {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.tech-pulse {
  animation: pulse-tech 2s ease-in-out infinite;
}
</style>