<template>
  <header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
    <div class="container mx-auto">
      <nav class="flex h-16 items-center justify-between px-6 lg:px-8">
        <!-- Logo -->
        <RouterLink 
          to="/" 
          class="flex items-center gap-3 hover:opacity-80 transition-all duration-300 group"
        >
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            <img 
              :src="logoImage" 
              alt="Hani Fares Logo" 
              class="relative h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent group-hover:from-secondary group-hover:via-accent group-hover:to-primary transition-all duration-500">
              Hani Fares
            </span>
            <span class="text-xs text-muted-foreground font-medium -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Full-Stack Developer
            </span>
          </div>
        </RouterLink>

        <!-- Desktop Nav -->
        <ul class="hidden md:flex items-center gap-8">
          <li>
            <RouterLink 
              to="/" 
              class="nav-link group relative px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300"
              :class="{ 'nav-link-active': $route.path === '/' }"
            >
              <span class="relative z-10">Home</span>
              <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </RouterLink>
          </li>
          <li>
            <RouterLink 
              to="/services" 
              class="nav-link group relative px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300"
              :class="{ 'nav-link-active': $route.path === '/services' }"
            >
              <span class="relative z-10">Services</span>
              <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </RouterLink>
          </li>
          <li>
            <RouterLink 
              to="/portfolio" 
              class="nav-link group relative px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300"
              :class="{ 'nav-link-active': $route.path === '/portfolio' }"
            >
              <span class="relative z-10">Portfolio</span>
              <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </RouterLink>
          </li>
          <li>
            <RouterLink 
              to="/contact" 
              class="group relative px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              <span class="relative z-10">Contact</span>
              <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </RouterLink>
          </li>
        </ul>

        <!-- Mobile Menu -->
        <Popover>
          <PopoverTrigger class="md:hidden">
            <Button variant="ghost" size="icon" class="hover:bg-muted/50 hover:scale-105 transition-all duration-200">
              <MenuIcon class="w-5 h-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="bottom" align="end" class="w-56 mt-2 border border-border/50 bg-background/95 backdrop-blur-xl">
            <ul class="space-y-1 p-2">
              <li>
                <RouterLink 
                  to="/" 
                  class="mobile-nav-link flex items-center w-full px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted/50 transition-colors duration-200"
                  :class="{ 'bg-primary/10 text-primary': $route.path === '/' }"
                >
                  Home
                </RouterLink>
              </li>
              <li>
                <RouterLink 
                  to="/services" 
                  class="mobile-nav-link flex items-center w-full px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted/50 transition-colors duration-200"
                  :class="{ 'bg-primary/10 text-primary': $route.path === '/services' }"
                >
                  Services
                </RouterLink>
              </li>
              <li>
                <RouterLink 
                  to="/portfolio" 
                  class="mobile-nav-link flex items-center w-full px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted/50 transition-colors duration-200"
                  :class="{ 'bg-primary/10 text-primary': $route.path === '/portfolio' }"
                >
                  Portfolio
                </RouterLink>
              </li>
              <li class="pt-2 border-t border-border/50">
                <RouterLink 
                  to="/contact" 
                  class="flex items-center w-full px-3 py-2 text-sm font-medium bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-md transition-all duration-200"
                >
                  Contact
                </RouterLink>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { MenuIcon } from 'lucide-vue-next'
import logoImage from '@/assets/images/logo.png'
</script>

<style scoped>
.nav-link-active {

  position: relative;
}

.nav-link-active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)));
  border-radius: 50%;
  opacity: 1;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)));
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-link:hover::after {
  opacity: 0.6;
}

@supports (backdrop-filter: blur(20px)) {
  header {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
}
</style>