<template>
  <section class="space-y-20">
    <!-- Header Section -->
    <div class="text-center space-y-6 relative">
      <div class="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 rounded-3xl -z-10"></div>
      <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-fade-in-up">
        Let's Connect
      </h1>
      <p class="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-150">
        Ready to bring your vision to life? Whether you need a full-stack application, stunning design, or career guidance — let's start the conversation.
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
              <h2 class="text-2xl md:text-3xl font-bold text-foreground">Send me a message</h2>
              <p class="text-muted-foreground">Fill out the form below and I'll get back to you within 24 hours.</p>
            </div>

            <form @submit.prevent="submit" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label class="text-sm font-medium text-foreground">Your Name</label>
                  <Input 
                    v-model="form.name" 
                    placeholder="John Doe" 
                    required 
                    class="transition-all duration-200 focus:ring-2 focus:ring-primary/20 hover:border-primary/30"
                  />
                </div>
                <div class="space-y-2">
                  <label class="text-sm font-medium text-foreground">Email Address</label>
                  <Input 
                    v-model="form.email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    class="transition-all duration-200 focus:ring-2 focus:ring-primary/20 hover:border-primary/30"
                  />
                </div>
              </div>
              
              <div class="space-y-2">
                <label class="text-sm font-medium text-foreground">Project Type</label>
                <select 
                  v-model="form.projectType" 
                  class="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground transition-all duration-200 focus:ring-2 focus:ring-primary/20 hover:border-primary/30"
                >
                  <option value="">Select a service...</option>
                  <option value="web-development">Web Development</option>
                  <option value="design">Design & Branding</option>
                  <option value="career-coaching">Career Coaching</option>
                  <option value="consultation">Technical Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div class="space-y-2">
                <label class="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  v-model="form.message" 
                  placeholder="Tell me about your project, goals, and how I can help..." 
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
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else>Sending...</span>
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
          <h2 class="text-2xl md:text-3xl font-bold text-foreground">Get in touch</h2>
          <p class="text-muted-foreground leading-relaxed">
            Prefer a more direct approach? Reach out through any of these channels and I'll respond as quickly as possible.
          </p>
          
          <div class="space-y-4">
            <!-- Email -->
            <Card class="group p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 hover:border-primary/20 cursor-pointer">
              <a href="mailto:info@hani-fares.de" class="flex items-center gap-4">
                <div class="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MailIcon class="w-6 h-6 text-white" />
                </div>
                <div class="space-y-1">
                  <h3 class="font-semibold text-foreground group-hover:text-primary transition-colors">Email</h3>
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
                  <h3 class="font-semibold text-foreground group-hover:text-secondary transition-colors">WhatsApp</h3>
                  <p class="text-sm text-muted-foreground">Quick chat or voice call</p>
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
                  <h3 class="font-semibold text-foreground group-hover:text-accent transition-colors">Schedule a Call</h3>
                  <p class="text-sm text-muted-foreground">Book a free 30-minute consultation</p>
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
                <h3 class="font-semibold text-foreground">Location</h3>
                <p class="text-sm text-muted-foreground">Based in Germany (CET timezone)</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <ClockIcon class="w-5 h-5 text-secondary" />
              <div>
                <h3 class="font-semibold text-foreground">Response Time</h3>
                <p class="text-sm text-muted-foreground">Usually within 24 hours</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <CheckCircleIcon class="w-5 h-5 text-accent" />
              <div>
                <h3 class="font-semibold text-foreground">Availability</h3>
                <p class="text-sm text-muted-foreground">Currently accepting new projects</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="text-center space-y-6 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12 animate-fade-in-up delay-700">
      <h2 class="text-3xl font-bold">Ready to get started?</h2>
      <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
        Every great project begins with a conversation. Let's discuss your vision and make it a reality.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button as="RouterLink" to="/portfolio" variant="outline" size="lg" class="transform hover:scale-105 transition-all duration-300">
          View My Work
        </Button>
        <Button as="RouterLink" to="/services" size="lg" class="transform hover:scale-105 transition-all duration-300">
          Explore Services
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
    
    alert('Thank you for your message! I\'ll get back to you within 24 hours.')
    
    // Reset form
    form.value = { 
      name: '', 
      email: '', 
      message: '', 
      projectType: '' 
    }
  } catch (error) {
    console.error('Form submission error:', error)
    alert('Sorry, there was an error sending your message. Please try again or contact me directly.')
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