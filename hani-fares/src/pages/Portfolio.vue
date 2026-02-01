<template>
  <section class="min-h-screen pb-20">
    <div class="space-y-20">
      <div class="text-center space-y-8 relative py-12 animate-fade-in-up">
        <div class="absolute inset-0 -z-10 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent"></div>
        </div>
        
        <div class="inline-block">
          <h1 class="text-6xl md:text-7xl font-black tracking-tight mb-4">
            <span class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              {{ t('portfolio.title') }}
            </span>
          </h1>
          <div class="h-1.5 bg-gradient-to-r from-accent via-primary to-secondary rounded-full"></div>
        </div>
        
        <p class="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
          {{ t('portfolio.subtitle') }}
        </p>
      </div>

      <div class="flex justify-center gap-3 flex-wrap animate-fade-in-up delay-200">
        <Button 
          @click="activeFilter = 'all'" 
          :variant="activeFilter === 'all' ? 'default' : 'outline'" 
          class="rounded-full px-6 py-5 font-medium transition-all hover:scale-105"
          size="lg"
        >
          {{ t('portfolio.allWork') }}
        </Button>
        <Button 
          @click="activeFilter = 'web'" 
          :variant="activeFilter === 'web' ? 'default' : 'outline'"
          class="rounded-full px-6 py-5 font-medium transition-all hover:scale-105"
          size="lg"
        >
          {{ t('portfolio.webDevelopment') }}
        </Button>
        <Button 
          @click="activeFilter = 'design'" 
          :variant="activeFilter === 'design' ? 'default' : 'outline'"
          class="rounded-full px-6 py-5 font-medium transition-all hover:scale-105"
          size="lg"
        >
          {{ t('portfolio.designBranding') }}
        </Button>
      </div>

      <div class="space-y-12 animate-fade-in-up delay-400">
        <TransitionGroup name="project" tag="div" class="space-y-12">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="project-item"
          >
            <PortfolioCard v-bind="project" />
          </div>
        </TransitionGroup>
      </div>

       <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white animate-fade-in-up delay-600">
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div class="relative z-10">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold mb-3">{{ t('portfolio.impactByNumbers') }}</h2>
            <p class="text-slate-300">{{ t('portfolio.impactDescription') }}</p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center space-y-2 group">
              <div class="text-5xl font-black bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent transition-transform group-hover:scale-110">
                {{ stats.projectsCompleted }}+
              </div>
              <div class="text-sm text-slate-400 font-medium uppercase tracking-wider">{{ t('portfolio.projectsDelivered') }}</div>
            </div>
            <div class="text-center space-y-2 group">
              <div class="text-5xl font-black bg-gradient-to-br from-green-400 to-green-600 bg-clip-text text-transparent transition-transform group-hover:scale-110">
                {{ stats.clientsSatisfied }}+
              </div>
              <div class="text-sm text-slate-400 font-medium uppercase tracking-wider">{{ t('portfolio.happyClients') }}</div>
            </div>
            <div class="text-center space-y-2 group">
              <div class="text-5xl font-black bg-gradient-to-br from-purple-400 to-purple-600 bg-clip-text text-transparent transition-transform group-hover:scale-110">
                {{ stats.technologiesUsed }}+
              </div>
              <div class="text-sm text-slate-400 font-medium uppercase tracking-wider">{{ t('portfolio.technologies') }}</div>
            </div>
            <div class="text-center space-y-2 group">
              <div class="text-5xl font-black bg-gradient-to-br from-pink-400 to-pink-600 bg-clip-text text-transparent transition-transform group-hover:scale-110">
                {{ stats.yearsExperience }}+
              </div>
              <div class="text-sm text-slate-400 font-medium uppercase tracking-wider">{{ t('portfolio.yearsExperience') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Button } from '@/components/ui/button'
import PortfolioCard from '@/components/PortfolioCard.vue'
import { useLanguage } from '@/composables/useLanguage'
import syrresImage from '../assets/images/syr-res.png'
import hausinternationalImage from '../assets/images/hausinternational.jpg'
import ammarumariImage from '../assets/images/ammar-umari.webp'
import menusImage from '../assets/images/menus.jpg'
import menuImage from '../assets/images/menu.jpg'
import eventImage from '../assets/images/event-management.jpg'
import careerImage from '../assets/images/career-support.jpg'

const { t } = useLanguage()
const activeFilter = ref('all')

const stats = {
  projectsCompleted: 50,
  clientsSatisfied: 30,
  technologiesUsed: 15,
  yearsExperience: 5
}

const projects = [
  {
    id: 1,
    title: t('portfolio.project1_title'),
    description: t('portfolio.project1_description'),
    longDescription: t('portfolio.project1_longDescription'),
    image: syrresImage,
    category: 'web',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Docker', 'Tailwind CSS'],
    features: ['Responsive Design', 'User Authentication', 'Advanced Search', 'Content Management'],
    link: 'https://syrian-researchers.com/',
    github: '#',
    year: '2024',
    client: t('portfolio.project1_client')
  },
  {
    id: 2,
    title: t('portfolio.project2_title'),
    description: t('portfolio.project2_description'),
    longDescription: t('portfolio.project2_longDescription'),
    image: ammarumariImage,
    category: 'web',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    features: ['Booking System', 'Property Management', 'SEO Optimized'],
    link: 'https://zahnarztpraxis-umari.de/',
    github: '#',
    year: '2025',
    client: t('portfolio.project2_client')
  },
  {
    id: 3,
    title: t('portfolio.project3_title'),
    description: t('portfolio.project3_description'),
    longDescription: t('portfolio.project3_longDescription'),
    image: hausinternationalImage,
    category: 'web',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    features: ['Multilingual Support', 'Booking System', 'Property Management', 'SEO Optimized'],
    link: 'https://hausinternationa-1e2vvth38n.live-website.com/',
    github: '#',
    year: '2023',
    client: t('portfolio.project3_client')
  },
  {
    id: 4,
    title: t('portfolio.project4_title'),
    description: t('portfolio.project4_description'),
    longDescription: t('portfolio.project4_longDescription'),
    image: menusImage,
    category: 'design',
    technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    features: ['Brand Identity', 'Print Design', 'Digital Menus', 'QR Code Integration'],
    link: '#',
    year: '2023-2024',
    client: t('portfolio.project4_client'),
    gallery: [
      { src: menusImage, title: 'Menu Design Collection', type: 'menu' },
      { src: menuImage, title: 'Restaurant Menu Layout', type: 'menu' }
    ]
  },
  {
    id: 5,
    title: t('portfolio.project5_title'),
    description: t('portfolio.project5_description'),
    longDescription: t('portfolio.project5_longDescription'),
    image: careerImage,
    category: 'design',
    technologies: ['Adobe Creative Suite', 'LinkedIn Analytics'],
    features: ['CV Design', 'LinkedIn Optimization', 'Personal Branding', 'Interview Coaching'],
    link: 'https://www.linkedin.com/in/hani-fares-072bb5a4/',
    year: '2022-2024',
    client: t('portfolio.project5_client')
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects
  }
  return projects.filter(project => project.category === activeFilter.value)
})
</script>

<style scoped>
.bg-gradient-radial {
  background: radial-gradient(circle at center, var(--tw-gradient-stops));
}

.bg-grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}

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

.delay-200 { animation-delay: 200ms; }
.delay-400 { animation-delay: 400ms; }
.delay-600 { animation-delay: 600ms; }

.project-enter-active,
.project-leave-active {
  transition: all 0.5s ease;
}

.project-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.project-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.project-move {
  transition: transform 0.5s ease;
}
</style>