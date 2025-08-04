<template>
  <section class="space-y-12">
    <div class="text-center space-y-4">
      <h1 class="text-4xl font-bold animate-fade-in-up">My Work</h1>
      <p class="text-muted-foreground text-lg animate-fade-in-up delay-150">
        A few projects I’ve proudly built, designed, or supported.
      </p>
    </div>

    <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <PortfolioCard
          v-for="project in projects"
          :key="project.title"
          v-bind="project"
      />
    </div>
  </section>
</template>

<script setup>
import PortfolioCard from '@/components/PortfolioCard.vue'
import syrresImage from '../assets/images/syr-res.png'

const projects = [
  {
    title: 'Syrian Researchers Website',
    description: 'I developed a structured and modern frontend for Syrian Researchers, optimized for clarity and responsiveness.',
    image: syrresImage
  },
  {
    title: 'Hausinternational Webpage',
    description: 'Built a professional multilingual site for Hausinternational, showcasing their services and accommodation.',
    image: '/images/hausinternational.jpg'
  },
  {
    title: 'Restaurant Menu Designs',
    description: 'Designed printable and digital menus for local restaurants, focusing on brand identity and clarity.',
    image: '/images/menus.jpg'
  },
  {
    title: 'Event Management Platform',
    description: 'Created an elegant, event-focused landing page for a wedding and events coordination business.',
    image: '/images/event-management.jpg'
  },
  {
    title: 'Career Support & LinkedIn',
    description: 'Helped professionals write better CVs and build strong LinkedIn profiles to stand out.',
    image: '/images/career-support.jpg'
  }
]
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out both;
}
.delay-150 {
  animation-delay: 150ms;
}
</style>