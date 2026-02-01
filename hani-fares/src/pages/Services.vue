<template>
  <section class="space-y-20">
     <!-- Header Section -->
     <div class="text-center space-y-6 relative">
       <div class="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 rounded-3xl -z-10"></div>
       <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent animate-fade-in-up">
         {{ t('services.title') }}
       </h1>
       <p class="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-150">
         {{ t('services.subtitle') }}
       </p>
     </div>

    <!-- Services Grid -->
    <div class="space-y-16">
       <!-- Web Development Services -->
       <div class="animate-fade-in-up delay-200">
         <ServiceCategory
           :title="t('services.webDevelopment')"
           :subtitle="t('services.webSubtitle')"
           :image="webImage"
           :services="webServices"
           :features="webFeatures"
           color="primary"
           reverse="false"
         />
       </div>

       <!-- Design Services -->
       <div class="animate-fade-in-up delay-400">
         <ServiceCategory
           :title="t('services.design')"
           :subtitle="t('services.designSubtitle')"
           :image="menuImage"
           :services="designServices"
           :features="designFeatures"
           color="secondary"
           reverse="true"
         />
       </div>

       <!-- Career & Consulting Services -->
       <div class="animate-fade-in-up delay-600">
         <ServiceCategory
           :title="t('services.career')"
           :subtitle="t('services.careerSubtitle')"
           :image="cvImage"
           :services="careerServices"
           :features="careerFeatures"
           color="accent"
           reverse="false"
         />
       </div>
    </div>

     <!-- Process Section -->
     <div class="bg-gradient-to-r from-muted/30 via-background to-muted/30 rounded-3xl p-8 md:p-12 animate-fade-in-up delay-800">
       <h2 class="text-3xl font-bold text-center mb-12">{{ t('services.process') }}</h2>
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
       <h2 class="text-3xl font-bold">{{ t('services.ctaReady') }}</h2>
       <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
         {{ t('services.ctaReadyDescription') }}
       </p>
       <div class="flex flex-col sm:flex-row gap-4 justify-center">
         <RouterLink to="/contact">
           <Button as="RouterLink"  size="lg" class="group">
             {{ t('services.ctaGetStarted') }}
             <ArrowRightIcon class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
           </Button>
         </RouterLink>
        <RouterLink to="/portfolio">
          <Button as="RouterLink"  variant="outline" size="lg">
            {{ t('nav.portfolio') }}
          </Button>
        </RouterLink>
       </div>
     </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { Button } from '@/components/ui/button'
import ServiceCategory from '@/components/ServiceCategory.vue'
import { ArrowRightIcon } from 'lucide-vue-next'
import { useLanguage } from '@/composables/useLanguage'
import webImage from '@/assets/images/web.jpg'
import menuImage from '@/assets/images/menu.jpg'
import cvImage from '@/assets/images/cv.jpg'

const { t } = useLanguage()

const webServices = computed(() => [
  {
    title: t('services.webServices.0.title'),
    description: t('services.webServices.0.description')
  },
  {
    title: t('services.webServices.1.title'),
    description: t('services.webServices.1.description')
  },
  {
    title: t('services.webServices.2.title'),
    description: t('services.webServices.2.description')
  },
  {
    title: t('services.webServices.3.title'),
    description: t('services.webServices.3.description')
  }
])

const webFeatures = computed(() => [
  t('services.webFeatures.0'),
  t('services.webFeatures.1'),
  t('services.webFeatures.2'),
  t('services.webFeatures.3'),
  t('services.webFeatures.4'),
  t('services.webFeatures.5')
])

const webPricing = {
  starting: '€1,500',
  description: 'Starting price for custom web applications'
}

const designServices = computed(() => [
  {
    title: t('services.designServices.0.title'),
    description: t('services.designServices.0.description')
  },
  {
    title: t('services.designServices.1.title'),
    description: t('services.designServices.1.description')
  },
  {
    title: t('services.designServices.2.title'),
    description: t('services.designServices.2.description')
  },
  {
    title: t('services.designServices.3.title'),
    description: t('services.designServices.3.description')
  }
])

const designFeatures = computed(() => [
  t('services.designFeatures.0'),
  t('services.designFeatures.1'),
  t('services.designFeatures.2'),
  t('services.designFeatures.3'),
  t('services.designFeatures.4'),
  t('services.designFeatures.5')
])

const designPricing = {
  starting: '€250',
  description: 'Starting price for design projects'
}

const careerServices = computed(() => [
  {
    title: t('services.careerServices.0.title'),
    description: t('services.careerServices.0.description')
  },
  {
    title: t('services.careerServices.1.title'),
    description: t('services.careerServices.1.description')
  },
  {
    title: t('services.careerServices.2.title'),
    description: t('services.careerServices.2.description')
  }
])

const careerFeatures = computed(() => [
  t('services.careerFeatures.0'),
  t('services.careerFeatures.1'),
  t('services.careerFeatures.2'),
  t('services.careerFeatures.3'),
  t('services.careerFeatures.4'),
  t('services.careerFeatures.5')
])

const careerPricing = {
  starting: '€150',
  description: 'Starting price for career services'
}

const processSteps = computed(() => [
  {
    title: t('services.processSteps.0.title'),
    description: t('services.processSteps.0.description')
  },
  {
    title: t('services.processSteps.1.title'),
    description: t('services.processSteps.1.description')
  },
  {
    title: t('services.processSteps.2.title'),
    description: t('services.processSteps.2.description')
  },
  {
    title: t('services.processSteps.3.title'),
    description: t('services.processSteps.3.description')
  }
])
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