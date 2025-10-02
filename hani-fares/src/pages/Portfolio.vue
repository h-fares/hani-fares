<template>
  <section class="min-h-screen pb-20">
    <div class="space-y-20">
      <div class="text-center space-y-8 relative py-12">
        <div class="absolute inset-0 -z-10 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent"></div>
        </div>
        
        <div class="inline-block">
          <h1 class="text-6xl md:text-7xl font-black tracking-tight mb-4">
            <span class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-fade-in-up">
              Featured Work
            </span>
          </h1>
          <div class="h-1.5 bg-gradient-to-r from-accent via-primary to-secondary rounded-full"></div>
        </div>
        
        <p class="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
          Transforming ideas into exceptional digital experiences. Each project represents a unique challenge solved with precision and creativity.
        </p>
      </div>

      <div class="flex justify-center gap-3 flex-wrap">
        <Button 
          @click="activeFilter = 'all'" 
          :variant="activeFilter === 'all' ? 'default' : 'outline'" 
          class="rounded-full px-6 py-5 font-medium transition-all hover:scale-105"
          size="lg"
        >
          All Work
        </Button>
        <Button 
          @click="activeFilter = 'web'" 
          :variant="activeFilter === 'web' ? 'default' : 'outline'"
          class="rounded-full px-6 py-5 font-medium transition-all hover:scale-105"
          size="lg"
        >
          Web Development
        </Button>
        <Button 
          @click="activeFilter = 'design'" 
          :variant="activeFilter === 'design' ? 'default' : 'outline'"
          class="rounded-full px-6 py-5 font-medium transition-all hover:scale-105"
          size="lg"
        >
          Design & Branding
        </Button>
      </div>

      <div class="space-y-12">
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

      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white">
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div class="relative z-10">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold mb-3">Impact by Numbers</h2>
            <p class="text-slate-300">Delivering measurable results across all projects</p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center space-y-2 group">
              <div class="text-5xl font-black bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent transition-transform group-hover:scale-110">
                {{ stats.projectsCompleted }}+
              </div>
              <div class="text-sm text-slate-400 font-medium uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div class="text-center space-y-2 group">
              <div class="text-5xl font-black bg-gradient-to-br from-green-400 to-green-600 bg-clip-text text-transparent transition-transform group-hover:scale-110">
                {{ stats.clientsSatisfied }}+
              </div>
              <div class="text-sm text-slate-400 font-medium uppercase tracking-wider">Happy Clients</div>
            </div>
            <div class="text-center space-y-2 group">
              <div class="text-5xl font-black bg-gradient-to-br from-purple-400 to-purple-600 bg-clip-text text-transparent transition-transform group-hover:scale-110">
                {{ stats.technologiesUsed }}+
              </div>
              <div class="text-sm text-slate-400 font-medium uppercase tracking-wider">Technologies</div>
            </div>
            <div class="text-center space-y-2 group">
              <div class="text-5xl font-black bg-gradient-to-br from-pink-400 to-pink-600 bg-clip-text text-transparent transition-transform group-hover:scale-110">
                {{ stats.yearsExperience }}+
              </div>
              <div class="text-sm text-slate-400 font-medium uppercase tracking-wider">Years Experience</div>
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
import syrresImage from '../assets/images/syr-res.png'
import hausinternationalImage from '../assets/images/hausinternational.jpg'
import menusImage from '../assets/images/menus.jpg'
import menuImage from '../assets/images/menu.jpg'
import eventImage from '../assets/images/event-management.jpg'
import careerImage from '../assets/images/career-support.jpg'

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
    title: 'Syrian Researchers Website',
    description: 'A comprehensive platform for Syrian researchers featuring advanced search capabilities and user management.',
    longDescription: 'Built a modern, responsive website for the Syrian Researchers community with Vue.js and Laravel backend. Features include researcher profiles, publication management, and collaborative tools.',
    image: syrresImage,
    category: 'web',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Docker', 'Tailwind CSS'],
    features: ['Responsive Design', 'User Authentication', 'Advanced Search', 'Content Management'],
    link: 'https://syrian-researchers.com/',
    github: '#',
    year: '2024',
    client: 'Syrian Researchers Community'
  },
  {
    id: 2,
    title: 'Hausinternational Webpage',
    description: 'Professional website showcasing accommodation services with calendar integration.',
    longDescription: 'Developed a website for Hausinternational Kempten with integrated calendar system, property management, and multilingual content support.',
    image: hausinternationalImage,
    category: 'web',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    features: ['Multilingual Support', 'Booking System', 'Property Management', 'SEO Optimized'],
    link: 'https://hausinternationa-1e2vvth38n.live-website.com/',
    github: '#',
    year: '2023',
    client: 'Hausinternational Kempten'
  },
  {
    id: 3,
    title: 'Rebranding & Menu Design',
    description: 'Complete brand identity and menu design system for multiple restaurant chains.',
    longDescription: 'Created comprehensive menu designs and brand identity packages for various restaurants, including digital and print versions with QR code integration. The project encompassed menu layouts, business cards, promotional materials, and complete visual identity systems.',
    image: menusImage,
    category: 'design',
    technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    features: ['Brand Identity', 'Print Design', 'Digital Menus', 'QR Code Integration'],
    link: '#',
    year: '2023-2024',
    client: 'Multiple Restaurant Chains',
    gallery: [
      { src: menusImage, title: 'Menu Design Collection', type: 'menu' },
      { src: menuImage, title: 'Restaurant Menu Layout', type: 'menu' }
    ]
  },
  {
    id: 4,
    title: 'Event Management Platform',
    description: 'Full-featured event management system with booking, payments, and vendor coordination.',
    longDescription: 'Developed a comprehensive event management platform for wedding and event coordinators with client portals, vendor management, and payment processing.',
    image: eventImage,
    category: 'web',
    technologies: ['Laravel', 'Vue.js', 'Stripe API', 'Docker'],
    features: ['Event Planning', 'Vendor Management', 'Payment Processing', 'Client Portal'],
    link: '#',
    github: '#',
    year: '2023',
    client: 'Event Coordination Agency'
  },
  {
    id: 5,
    title: 'Career Enhancement Services',
    description: 'Complete career development package including CV design, LinkedIn optimization, and interview coaching.',
    longDescription: 'As a member in Imagine Foundation and Mentory SY Provided comprehensive career support services including modern CV designs, LinkedIn profile optimization, and personal branding strategies.',
    image: careerImage,
    category: 'design',
    technologies: ['Adobe Creative Suite', 'LinkedIn Analytics'],
    features: ['CV Design', 'LinkedIn Optimization', 'Personal Branding', 'Interview Coaching'],
    link: 'https://www.linkedin.com/in/hani-fares-072bb5a4/',
    year: '2022-2024',
    client: 'Imagine Foundation & Mentory SY'
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