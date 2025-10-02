<template>
  <footer class="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-primary/5 border-t">
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-2xl"></div>
      <div class="absolute top-20 left-1/3 w-40 h-40 bg-accent/5 rounded-full blur-xl"></div>
    </div>
    
    <div class="relative">
      <!-- Main Footer Content -->
      <div class="container mx-auto px-4 pt-16 pb-8">
        <div class="grid md:grid-cols-3 gap-12 mb-12">
          <!-- Brand Section -->
          <div class="space-y-6">
            <div class="space-y-4">
              <div class="flex items-center gap-3 group">
                <img 
                  src="@/assets/images/logo.png" 
                  alt="Hani Fares Logo" 
                  class="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <h2 class="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Hani Fares
                </h2>
              </div>
              <p class="text-muted-foreground leading-relaxed">
                Building efficient, modern applications with Laravel, Vue.js & cutting-edge technologies. 
                <span class="text-foreground font-medium">Clean code. Real results.</span>
              </p>
            </div>
            
            <!-- Quick Stats -->
            <div class="flex gap-4 text-sm">
              <div class="text-center">
                <div class="font-bold text-primary">5+</div>
                <div class="text-muted-foreground">Years</div>
              </div>
              <div class="text-center">
                <div class="font-bold text-secondary">50+</div>
                <div class="text-muted-foreground">Projects</div>
              </div>
              <div class="text-center">
                <div class="font-bold text-accent">30+</div>
                <div class="text-muted-foreground">Clients</div>
              </div>
            </div>
          </div>

          <!-- Quick Navigation -->
          <div class="space-y-6">
            <h3 class="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul class="space-y-3">
              <li>
                <RouterLink 
                  to="/" 
                  class="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <ArrowRightIcon class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Home
                </RouterLink>
              </li>
              <li>
                <RouterLink 
                  to="/services" 
                  class="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <ArrowRightIcon class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Services
                </RouterLink>
              </li>
              <li>
                <RouterLink 
                  to="/portfolio" 
                  class="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <ArrowRightIcon class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Portfolio
                </RouterLink>
              </li>
              <li>
                <RouterLink 
                  to="/contact" 
                  class="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <ArrowRightIcon class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Contact
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- Contact & Social -->
          <div class="space-y-6">
            <h3 class="text-lg font-semibold text-foreground">Let's Connect</h3>
            <div class="space-y-4">
              <p class="text-muted-foreground">
                Ready to bring your digital vision to life? Let's start a conversation.
              </p>
              
              <!-- CTA Button -->
              <Button 
                as="RouterLink" 
                to="/contact" 
                class="bg-gradient-to-r from-primary cursor-pointer to-secondary hover:from-primary/80 hover:to-secondary/80 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25"
              >
                Get In Touch
                <ArrowRightIcon class="w-4 h-4 ml-2" />
              </Button>
              
              <!-- Social Links -->
              <div class="flex justify-center gap-3">
                <Button 
                  variant="outline" 
                  size="icon" 
                  as="a" 
                  href="https://github.com/h-fares"
                  target="_blank" 
                  aria-label="GitHub"
                  class="hover:bg-primary/10 hover:border-primary/30 hover:scale-110 transition-all duration-300"
                >
                  <Github class="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  as="a" 
                  href="https://www.linkedin.com/in/hani-fares-072bb5a4/"
                  target="_blank" 
                  aria-label="LinkedIn"
                  class="hover:bg-secondary/10 hover:border-secondary/30 hover:scale-110 transition-all duration-300"
                >
                  <Linkedin class="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  as="a" 
                  href="mailto:info@hani-fares.de"
                  aria-label="Email"
                  class="hover:bg-accent/10 hover:border-accent/30 hover:scale-110 transition-all duration-300"
                >
                  <Mail class="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <!-- Separator -->
        <div class="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

        <!-- Bottom Section -->
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p class="text-muted-foreground text-center md:text-left">
            © {{ new Date().getFullYear() }} Hani Fares. Crafted with 
            <span class="text-red-500 animate-pulse">♥</span> 
            in Germany. All rights reserved.
          </p>
          
          <!-- Tech Stack Icons -->
          <div class="flex gap-2 text-muted-foreground">
            <span class="text-xs">Built with:</span>
            <div class="flex gap-1">
              <span class="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">Vue</span>
              <span class="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium">Laravel</span>
              <span class="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, ArrowRightIcon } from 'lucide-vue-next'
</script>