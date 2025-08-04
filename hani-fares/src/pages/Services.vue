<template>
  <section class="space-y-20">
    <!-- Header Section -->
    <div class="text-center space-y-6 relative">
      <div class="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 rounded-3xl -z-10"></div>
      <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent animate-fade-in-up">
        My Services
      </h1>
      <p class="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-150">
        From concept to deployment, I deliver comprehensive digital solutions that drive results and exceed expectations.
      </p>
    </div>

    <!-- Services Grid -->
    <div class="space-y-16">
      <!-- Web Development Services -->
      <div class="animate-fade-in-up delay-200">
        <ServiceCategory
          title="Web Development & Digital Solutions"
          subtitle="Full-Stack Development Excellence"
          :image="webImage"
          :services="webServices"
          :features="webFeatures"
          :pricing="webPricing"
          color="primary"
          reverse="false"
        />
      </div>

      <!-- Design Services -->
      <div class="animate-fade-in-up delay-400">
        <ServiceCategory
          title="Creative Design & Branding"
          subtitle="Visual Identity That Stands Out"
          :image="menuImage"
          :services="designServices"
          :features="designFeatures"
          :pricing="designPricing"
          color="secondary"
          reverse="true"
        />
      </div>

      <!-- Career & Consulting Services -->
      <div class="animate-fade-in-up delay-600">
        <ServiceCategory
          title="Career Development & Technical Consulting"
          subtitle="Professional Growth & Expertise"
          :image="cvImage"
          :services="careerServices"
          :features="careerFeatures"
          :pricing="careerPricing"
          color="accent"
          reverse="false"
        />
      </div>
    </div>

    <!-- Process Section -->
    <div class="bg-gradient-to-r from-muted/30 via-background to-muted/30 rounded-3xl p-8 md:p-12 animate-fade-in-up delay-800">
      <h2 class="text-3xl font-bold text-center mb-12">My Process</h2>
      <div class="grid md:grid-cols-4 gap-8">
        <div 
          v-for="(step, index) in processSteps" 
          :key="step.title"
          class="text-center group"
        >
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
            {{ index + 1 }}
          </div>
          <h3 class="font-semibold text-lg mb-2">{{ step.title }}</h3>
          <p class="text-sm text-muted-foreground">{{ step.description }}</p>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="text-center space-y-6 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12 animate-fade-in-up delay-1000">
      <h2 class="text-3xl font-bold">Ready to Start Your Project?</h2>
      <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
        Let's discuss how I can help bring your vision to life with cutting-edge technology and creative excellence.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button as="RouterLink" to="/contact" size="lg" class="group">
          Get Started Today
          <ArrowRightIcon class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button as="RouterLink" to="/portfolio" variant="outline" size="lg">
          View My Work
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import ServiceCategory from '@/components/ServiceCategory.vue'
import { ArrowRightIcon } from 'lucide-vue-next'
import webImage from '@/assets/images/web.jpg'
import menuImage from '@/assets/images/menu.jpg'
import cvImage from '@/assets/images/cv.jpg'

const webServices = [
  {
    title: 'Full-Stack Web Applications',
    description: 'Custom web applications built with Laravel, Vue.js, and modern technologies'
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Scalable online stores with payment integration and inventory management'
  },
  {
    title: 'API Development & Integration',
    description: 'RESTful APIs and third-party service integrations'
  },
  {
    title: 'DevOps & Deployment',
    description: 'Docker containerization, CI/CD pipelines, and cloud deployment'
  }
]

const webFeatures = [
  'Responsive Design',
  'SEO Optimized',
  'Performance Focused',
  'Security Best Practices',
  'Scalable Architecture',
  'Maintenance & Support'
]

const webPricing = {
  starting: '€1,500',
  description: 'Starting price for custom web applications'
}

const designServices = [
  {
    title: 'Brand Identity Design',
    description: 'Complete brand packages including logos, color schemes, and style guides'
  },
  {
    title: 'Print Design',
    description: 'Restaurant menus, business cards, brochures, and marketing materials'
  },
  {
    title: 'Digital Graphics',
    description: 'Social media templates, web graphics, and digital marketing assets'
  },
  {
    title: 'UI/UX Design',
    description: 'User interface and experience design for web and mobile applications'
  }
]

const designFeatures = [
  'Creative Concepts',
  'Brand Consistency',
  'Print-Ready Files',
  'Multiple Formats',
  'Unlimited Revisions',
  'Source Files Included'
]

const designPricing = {
  starting: '€250',
  description: 'Starting price for design projects'
}

const careerServices = [
  {
    title: 'CV & Resume Writing',
    description: 'Professional CV writing and design to make you stand out'
  },
  {
    title: 'LinkedIn Optimization',
    description: 'Profile optimization and content strategy for maximum visibility'
  },
  {
    title: 'Technical Mentoring',
    description: 'One-on-one coaching in Laravel, Vue.js, and software architecture'
  },
  {
    title: 'Interview Preparation',
    description: 'Technical interview coaching and portfolio review'
  }
]

const careerFeatures = [
  'ATS-Friendly Format',
  'Industry-Specific Content',
  'LinkedIn Strategy',
  'Personal Branding',
  'Technical Skills Assessment',
  'Ongoing Support'
]

const careerPricing = {
  starting: '€150',
  description: 'Starting price for career services'
}

const processSteps = [
  {
    title: 'Discovery',
    description: 'Understanding your requirements, goals, and target audience'
  },
  {
    title: 'Planning',
    description: 'Creating detailed project roadmap and technical specifications'
  },
  {
    title: 'Development',
    description: 'Building your solution with regular updates and feedback'
  },
  {
    title: 'Delivery',
    description: 'Testing, deployment, and knowledge transfer for ongoing success'
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
.delay-150 { animation-delay: 150ms; }
.delay-300 { animation-delay: 300ms; }
</style>