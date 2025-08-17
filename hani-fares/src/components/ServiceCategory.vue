<template>
  <Card class="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-opacity-50" :class="borderColorClass">
    <div class="flex flex-col" :class="reverse === 'true' ? 'md:flex-row-reverse' : 'md:flex-row'">
      <!-- Image -->
      <div class="relative w-full md:w-1/2 h-64 md:h-96 overflow-hidden">
        <img 
          :src="image" 
          :alt="title" 
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div class="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 group-hover:from-black/40 transition-all duration-500"></div>
        <!-- Floating badge -->
        <div class="absolute top-4 left-4">
          <span class="px-3 py-1 text-sm font-medium rounded-full backdrop-blur-sm text-white border border-white/20" :class="badgeColorClass">
            {{ color?.toUpperCase() }}
          </span>
        </div>
      </div>

      <!-- Content -->
      <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
        <div class="space-y-3">
          <h2 class="text-3xl md:text-4xl font-bold text-foreground group-hover:scale-105 transition-transform duration-300">
            {{ title }}
          </h2>
          <p class="text-lg font-medium" :class="colorClass">{{ subtitle }}</p>
          <Separator :class="separatorColorClass" />
        </div>

        <!-- Services List -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-foreground">What's Included:</h3>
          <div class="grid gap-3">
            <div 
              v-for="(service, index) in services" 
              :key="index"
              class="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200"
            >
              <div class="w-2 h-2 rounded-full mt-2 flex-shrink-0" :class="dotColorClass"></div>
              <div class="space-y-1">
                <h4 class="font-medium text-foreground float-left">{{ service.title }}</h4>
                <br>
                <p class="text-sm text-muted-foreground float-left">{{ service.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Features -->
        <div class="space-y-3" v-if="features">
          <h3 class="text-lg font-semibold text-foreground">Key Features:</h3>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="feature in features" 
              :key="feature"
              class="px-3 py-1 text-xs rounded-full border transition-colors hover:scale-105 duration-200"
              :class="featureTagClass"
            >
              {{ feature }}
            </span>
          </div>
        </div>

        <!-- Pricing -->
        <div class="pt-4" v-if="pricing">
          <div class="flex items-baseline gap-2">
            <span class="text-2xl font-bold" :class="colorClass">{{ pricing.starting }}</span>
            <span class="text-sm text-muted-foreground">{{ pricing.description }}</span>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="pt-2">
          <RouterLink to="/contact">
            <Button
                as="RouterLink"
                :variant="color === 'primary' ? 'default' : 'outline'"
                class="group/btn hover:scale-105 transition-transform duration-200"
            >
              Get Started
              <ArrowRightIcon class="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </RouterLink>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup>
import { computed } from 'vue'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowRightIcon } from 'lucide-vue-next'

const props = defineProps({
  title: String,
  subtitle: String,
  image: String,
  services: Array,
  features: Array,
  pricing: Object,
  color: {
    type: String,
    default: 'primary'
  },
  reverse: {
    type: String,
    default: 'false'
  }
})

const colorClass = computed(() => {
  const colors = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent'
  }
  return colors[props.color] || colors.primary
})

const borderColorClass = computed(() => {
  const colors = {
    primary: 'hover:border-primary/30',
    secondary: 'hover:border-secondary/30',
    accent: 'hover:border-accent/30'
  }
  return colors[props.color] || colors.primary
})

const badgeColorClass = computed(() => {
  const colors = {
    primary: 'bg-primary/20',
    secondary: 'bg-secondary/20',
    accent: 'bg-accent/20'
  }
  return colors[props.color] || colors.primary
})

const separatorColorClass = computed(() => {
  const colors = {
    primary: 'bg-primary/20',
    secondary: 'bg-secondary/20',
    accent: 'bg-accent/20'
  }
  return colors[props.color] || colors.primary
})

const dotColorClass = computed(() => {
  const colors = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent'
  }
  return colors[props.color] || colors.primary
})

const featureTagClass = computed(() => {
  const colors = {
    primary: 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20',
    secondary: 'bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20',
    accent: 'bg-accent/10 text-accent border-accent/20 hover:bg-accent/20'
  }
  return colors[props.color] || colors.primary
})
</script>

<style scoped>
/* Enhanced animations */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(var(--primary), 0.4); }
  50% { box-shadow: 0 0 0 10px rgba(var(--primary), 0); }
}

.group:hover .pulse-glow {
  animation: pulse-glow 2s infinite;
}
</style>