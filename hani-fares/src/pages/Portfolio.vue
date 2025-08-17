<template>
  <section class="space-y-16">
    <!-- Header Section -->
    <div class="text-center space-y-6 relative">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl -z-10"></div>
      <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in-up">
        My Portfolio
      </h1>
      <p class="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-150">
        Showcasing innovative digital solutions that drive results. From full-stack applications to brand identity design, 
        each project reflects my commitment to excellence and user-centered approach.
      </p>
      <div class="flex justify-center gap-4 animate-fade-in-up delay-300">
        <Button @click="filterProjects('all')" :variant="activeFilter === 'all' ? 'default' : 'outline'" size="sm">
          All Projects
        </Button>
        <Button @click="filterProjects('web')" :variant="activeFilter === 'web' ? 'default' : 'outline'" size="sm">
          Web Development
        </Button>
        <Button @click="filterProjects('design')" :variant="activeFilter === 'design' ? 'default' : 'outline'" size="sm">
          Design
        </Button>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div 
        v-for="(project, index) in filteredProjects" 
        :key="project.id"
        class="group animate-fade-in-up"
        :style="{ animationDelay: `${index * 150}ms` }"
      >
        <PortfolioCard v-bind="project" />
      </div>
    </div>

    <!-- Stats Section -->
    <div class="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 animate-fade-in-up delay-500">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div class="space-y-2">
          <div class="text-3xl font-bold text-primary">{{ stats.projectsCompleted }}+</div>
          <div class="text-sm text-muted-foreground">Projects Completed</div>
        </div>
        <div class="space-y-2">
          <div class="text-3xl font-bold text-secondary">{{ stats.clientsSatisfied }}+</div>
          <div class="text-sm text-muted-foreground">Satisfied Clients</div>
        </div>
        <div class="space-y-2">
          <div class="text-3xl font-bold text-accent">{{ stats.technologiesUsed }}+</div>
          <div class="text-sm text-muted-foreground">Technologies</div>
        </div>
        <div class="space-y-2">
          <div class="text-3xl font-bold text-primary">{{ stats.yearsExperience }}+</div>
          <div class="text-sm text-muted-foreground">Years Experience</div>
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
    github: '#'
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
    github: '#'
  },
  {
    id: 3,
    title: 'Restaurant Menu Design Suite',
    description: 'Complete brand identity and menu design system for multiple restaurant chains.',
    longDescription: 'Created comprehensive menu designs and brand identity packages for various restaurants, including digital and print versions with QR code integration.',
    image: menusImage,
    category: 'design',
    technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    features: ['Brand Identity', 'Print Design', 'Digital Menus', 'QR Code Integration'],
    link: '#'
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
    github: '#'
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
    link: 'https://www.linkedin.com/in/hani-fares-072bb5a4/'
  },
  // {
  //   id: 6,
  //   title: 'E-Commerce Platform',
  //   description: 'Scalable e-commerce solution with advanced inventory management and analytics.',
  //   longDescription: 'Built a comprehensive e-commerce platform with inventory management, order processing, payment integration, and detailed analytics dashboard.',
  //   image: '/images/ecommerce.jpg',
  //   category: 'web',
  //   technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'Docker'],
  //   features: ['Inventory Management', 'Payment Processing', 'Analytics Dashboard', 'Multi-vendor Support'],
  //   link: '#',
  //   github: '#'
  // }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects
  }
  return projects.filter(project => project.category === activeFilter.value)
})

const filterProjects = (filter) => {
  activeFilter.value = filter
}
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