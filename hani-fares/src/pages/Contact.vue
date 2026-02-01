<template>
  <section class="space-y-20">
    <!-- Header Section -->
    <div class="text-center space-y-6 relative">
      <div class="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 rounded-3xl -z-10"></div>
      <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-fade-in-up">
        {{ t('contact.title') }}
      </h1>
      <p class="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-150">
        {{ t('contact.subtitle') }}
      </p>
    </div>

    <!-- Main Content Grid -->
    <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
      <!-- Contact Form -->
      <div class="animate-fade-in-up delay-300">
        <Card class="p-8 hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
           <div class="relative space-y-6">
             <div class="space-y-3">
               <h2 class="text-2xl md:text-3xl font-bold text-foreground">{{ t('contact.form.title') }}</h2>
               <p class="text-muted-foreground">{{ t('contact.form.description') }}</p>
             </div>

            <form @submit.prevent="submit" class="space-y-6">
               <div class="grid md:grid-cols-2 gap-4">
                 <div class="space-y-2">
                   <label class="text-sm font-medium text-foreground">{{ t('contact.form.name') }}</label>
                   <Input 
                     v-model="form.name" 
                     :placeholder="t('contact.form.namePlaceholder')" 
                     required 
                     class="transition-all duration-200 focus:ring-2 focus:ring-primary/20 hover:border-primary/30"
                   />
                 </div>
                 <div class="space-y-2">
                   <label class="text-sm font-medium text-foreground">{{ t('contact.form.email') }}</label>
                   <Input 
                     v-model="form.email" 
                     type="email" 
                     :placeholder="t('contact.form.emailPlaceholder')" 
                     required 
                     class="transition-all duration-200 focus:ring-2 focus:ring-primary/20 hover:border-primary/30"
                   />
                 </div>
               </div>
              
               <div class="space-y-2">
                 <label class="text-sm font-medium text-foreground">{{ t('contact.form.projectType') }}</label>
                 <select 
                   v-model="form.projectType" 
                   class="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground transition-all duration-200 focus:ring-2 focus:ring-primary/20 hover:border-primary/30"
                 >
                   <option value="">{{ t('contact.form.selectService') }}</option>
                   <option value="web-development">{{ t('contact.form.webDevelopment') }}</option>
                   <option value="design">{{ t('contact.form.designBranding') }}</option>
                   <option value="career-coaching">{{ t('contact.form.careerCoaching') }}</option>
                   <option value="consultation">{{ t('contact.form.technicalConsultation') }}</option>
                   <option value="other">{{ t('contact.form.other') }}</option>
                 </select>
               </div>
              
               <div class="space-y-2">
                 <label class="text-sm font-medium text-foreground">{{ t('contact.form.message') }}</label>
                 <Textarea 
                   v-model="form.message" 
                   :placeholder="t('contact.form.messagePlaceholder')" 
                   rows="5" 
                   required 
                   class="transition-all duration-200 focus:ring-2 focus:ring-primary/20 hover:border-primary/30"
                 />
               </div>
              
               <Button 
                 type="submit" 
                 size="lg" 
                 class="w-full group bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                 :disabled="isSubmitting"
               >
                 <span v-if="!isSubmitting">{{ t('contact.form.send') }}</span>
                 <span v-else>{{ t('contact.form.sending') }}</span>
                 <SendIcon class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
               </Button>
            </form>
          </div>
        </Card>
      </div>

      <!-- Contact Information & Quick Actions -->
      <div class="space-y-8 animate-fade-in-up delay-500">
         <!-- Contact Methods -->
         <div class="space-y-6">
           <h2 class="text-2xl md:text-3xl font-bold text-foreground">{{ t('contact.getInTouch') }}</h2>
           <p class="text-muted-foreground leading-relaxed">
             {{ t('contact.directApproach') }}
           </p>
          
          <div class="space-y-4">
             <!-- Email -->
             <Card class="group p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 hover:border-primary/20 cursor-pointer">
               <a href="mailto:info@hani-fares.de" class="flex items-center gap-4">
                 <div class="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                   <MailIcon class="w-6 h-6 text-white" />
                 </div>
                 <div class="space-y-1">
                   <h3 class="font-semibold text-foreground group-hover:text-primary transition-colors">{{ t('contact.email') }}</h3>
                   <p class="text-sm text-muted-foreground">info@hani-fares.de</p>
                 </div>
                 <ExternalLinkIcon class="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
               </a>
             </Card>

             <!-- WhatsApp -->
             <Card class="group p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 hover:border-secondary/20 cursor-pointer">
               <a href="https://wa.me/4917634581486" target="_blank" class="flex items-center gap-4">
                 <div class="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                   <MessageCircleIcon class="w-6 h-6 text-white" />
                 </div>
                 <div class="space-y-1">
                   <h3 class="font-semibold text-foreground group-hover:text-secondary transition-colors">{{ t('contact.whatsapp') }}</h3>
                   <p class="text-sm text-muted-foreground">{{ t('contact.quickChat') }}</p>
                 </div>
                 <ExternalLinkIcon class="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors ml-auto" />
               </a>
             </Card>

             <!-- Calendar -->
             <Card class="group p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 hover:border-accent/20 cursor-pointer">
               <a href="https://calendly.com/hanifares" target="_blank" class="flex items-center gap-4">
                 <div class="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                   <CalendarIcon class="w-6 h-6 text-white" />
                 </div>
                 <div class="space-y-1">
                   <h3 class="font-semibold text-foreground group-hover:text-accent transition-colors">{{ t('contact.scheduleCall') }}</h3>
                   <p class="text-sm text-muted-foreground">{{ t('contact.freeConsultation') }}</p>
                 </div>
                 <ExternalLinkIcon class="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors ml-auto" />
               </a>
             </Card>
          </div>
        </div>

         <!-- Location & Availability -->
         <Card class="p-6 bg-gradient-to-br from-muted/50 via-background to-muted/30 border-2">
           <div class="space-y-4">
             <div class="flex items-center gap-3">
               <MapPinIcon class="w-5 h-5 text-primary" />
               <div>
                 <h3 class="font-semibold text-foreground">{{ t('contact.location') }}</h3>
                 <p class="text-sm text-muted-foreground">{{ t('contact.locationDetails') }}</p>
               </div>
             </div>
             <div class="flex items-center gap-3">
               <ClockIcon class="w-5 h-5 text-secondary" />
               <div>
                 <h3 class="font-semibold text-foreground">{{ t('contact.responseTime') }}</h3>
                 <p class="text-sm text-muted-foreground">{{ t('contact.responseTimeDetails') }}</p>
               </div>
             </div>
             <div class="flex items-center gap-3">
               <CheckCircleIcon class="w-5 h-5 text-accent" />
               <div>
                 <h3 class="font-semibold text-foreground">{{ t('contact.availability') }}</h3>
                 <p class="text-sm text-muted-foreground">{{ t('contact.availabilityDetails') }}</p>
               </div>
             </div>
           </div>
         </Card>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="text-center space-y-6 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12 animate-fade-in-up delay-700">
      <h2 class="text-3xl font-bold">{{ t('contact.readyToStart') }}</h2>
      <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
        {{ t('contact.ctaDescription') }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button as="RouterLink" to="/portfolio" variant="outline" size="lg" class="transform hover:scale-105 transition-all duration-300">
          {{ t('nav.portfolio') }}
        </Button>
        <Button as="RouterLink" to="/services" size="lg" class="transform hover:scale-105 transition-all duration-300">
          {{ t('nav.services') }}
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/composables/useLanguage'
import { 
  SendIcon, 
  MailIcon, 
  MessageCircleIcon, 
  CalendarIcon, 
  ExternalLinkIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon
} from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import emailjs from '@emailjs/browser'

const { t } = useLanguage()

const form = ref({
  name: '',
  email: '',
  message: '',
  projectType: ''
})

const isSubmitting = ref(false)

async function submit() {
   isSubmitting.value = true
   
   try {
     const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
     const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
     const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
     
     if (!serviceId || !templateId || !publicKey) {
       throw new Error('EmailJS configuration missing. Please check your environment variables.')
     }

     const templateParams = {
       from_name: form.value.name,
       from_email: form.value.email,
       project_type: form.value.projectType,
       message: form.value.message,
       to_email: 'hani.fares.dev@gmail.com'
     }

     await emailjs.send(serviceId, templateId, templateParams, publicKey)
     
     alert(t('contact.form.successMessage'))
     
     // Reset form
     form.value = { 
       name: '', 
       email: '', 
       message: '', 
       projectType: '' 
     }
   } catch (error) {
     console.error('Form submission error:', error)
     alert(t('contact.form.errorMessage'))
   } finally {
     isSubmitting.value = false
   }
 }
</script>

<style scoped>
/* Base animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out both;
}

/* Animation delays */
.delay-150 { animation-delay: 150ms; }
.delay-300 { animation-delay: 300ms; }
.delay-500 { animation-delay: 500ms; }
.delay-700 { animation-delay: 700ms; }

/* Form input focus animations */
.form-input:focus {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Gradient text animation */
@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-shift {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

/* Card hover effects */
.contact-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Button loading state */
.btn-loading {
  position: relative;
  color: transparent;
}

.btn-loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>