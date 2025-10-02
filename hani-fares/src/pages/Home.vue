<template>
  <section class="space-y-24">

    <!-- Enhanced Hero Section -->
    <div class="relative w-full h-[70vh] md:h-[85vh] overflow-hidden rounded-2xl animate-zoom-in group">
      <!-- Parallax Background -->
      <div class="absolute inset-0 transform group-hover:scale-105 transition-transform duration-[3000ms] ease-out">
        <img
            src="../assets/images/pexels-semac-14011035.jpg"
            alt="Hani Fares Cover"
            class="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      <!-- Dynamic Gradient Overlays -->
      <div class="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60" />
      <div class="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-secondary/10" />
      
      <!-- Floating Elements -->
      <div class="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div class="absolute bottom-32 right-16 w-16 h-16 bg-secondary/20 rounded-full blur-lg animate-float-delayed"></div>
      <div class="absolute top-1/3 right-1/4 w-12 h-12 bg-accent/20 rounded-full blur-lg animate-float-slow"></div>
      
      <!-- Main Content -->
      <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
        <div class="space-y-6 max-w-4xl">
          <!-- Animated Introduction -->
          <div class="animate-fade-in-up">
            <span class="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-4">
              👋 Welcome to my digital world
            </span>
          </div>
          
          <!-- Main Heading with Gradient Text -->
          <h1 class="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in-up delay-200">
            Hi, I'm 
            <span class="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift">
              Hani Fares
            </span>
          </h1>
          
          <!-- Subtitle with Typing Effect -->
          <div class="animate-fade-in-up delay-400">
            <p class="text-xl md:text-2xl max-w-3xl text-white/90 leading-relaxed">
              Senior Software Engineer & Digital Solutions Architect specializing in 
              <span class="text-primary font-semibold">Laravel</span>, 
              <span class="text-secondary font-semibold">Vue.js</span>, and 
              <span class="text-accent font-semibold">scalable architecture</span>
            </p>
          </div>
          
          <!-- Enhanced CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-600">
            <RouterLink to="/contact">
              <Button
                  as="RouterLink"
                  to="/contact"
                  size="lg"
                  class="group bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/25"
              >
                Let's Work Together
                <ArrowRightIcon class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"/>
              </Button>
            </RouterLink>
            <RouterLink to="/portfolio">
              <Button
                  as="RouterLink"
                  variant="outline"
                  size="lg"
                  class="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              >
                View My Work
              </Button>
            </RouterLink>
          </div>
          
          <!-- Scroll Indicator -->
          <div class="animate-bounce mt-12">
            <ChevronDownIcon class="w-6 h-6 text-white/60 mx-auto" />
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced About Me Section -->
    <div class="max-w-6xl mx-auto animate-fade-in-up delay-300">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="space-y-6">
          <div class="space-y-3">
            <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              About Me
            </h2>
            <p class="text-xl text-primary font-medium">
              Full-Stack Developer | Digital Solutions Expert | Mentor
            </p>
            <div class="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          
          <div class="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a software engineer based in <span class="text-foreground font-medium">Germany</span>, specializing in full-stack development with 
              <span class="text-primary font-medium">Laravel</span>, 
              <span class="text-secondary font-medium">Vue.js</span>, 
              <span class="text-accent font-medium">Docker</span>, and 
              <span class="text-primary font-medium">Kubernetes</span>. 
              I thrive on architecting scalable, maintainable systems that solve real business challenges.
            </p>
            <p>
              I empower small businesses to refresh their brand identity through professional website design, menu creation, and other digital assets.
            </p>
            <p>
              As a <span class="text-foreground font-medium">mentor</span>, I guide aspiring developers in building a strong foundation for their careers by helping them craft compelling CVs and professional LinkedIn profiles.
            </p>
          </div>
          
          <!-- Key Stats -->
          <div class="grid grid-cols-3 gap-4 pt-6">
            <div class="text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
              <div class="text-2xl font-bold text-primary">5+</div>
              <div class="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div class="text-center p-4 bg-secondary/5 rounded-xl border border-secondary/10">
              <div class="text-2xl font-bold text-secondary">50+</div>
              <div class="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div class="text-center p-4 bg-accent/5 rounded-xl border border-accent/10">
              <div class="text-2xl font-bold text-accent">30+</div>
              <div class="text-sm text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
        
        <!-- Image Content -->
        <div class="relative group">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <ProfileCard
              name="Hani Fares"
              title="Software Engineer"
              handle="hanifares"
              status="Online"
              contact-text="Contact Me"
              :avatar-url="avatar"
              :icon-url="pattern"
              :grain-url="grain"
              :show-user-info="false"
              :show-behind-gradient="true"
              :enable-tilt="true"
              @contact-click="handleContactClick"
              class="flex justify-center"
          />
<!--          <Card class="relative overflow-hidden border-2 border-primary/10 group-hover:border-primary/20 transition-all duration-500">-->
<!--            <div class="aspect-square relative">-->
<!--              <img -->
<!--                src="../assets/images/hani.jpg" -->
<!--                alt="Hani Fares" -->
<!--                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"-->
<!--              />-->
<!--              -->
<!--              <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500"></div>-->
<!--            </div>-->
<!--          </Card>-->
        </div>
      </div>
    </div>

    <!-- What I Offer (Services) -->
    <div class="max-w-6xl mx-auto animate-fade-in-up delay-500">
      <div class="text-center space-y-6 mb-16">
        <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
          What I Offer
        </h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive digital solutions designed to elevate your business and personal brand
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <Card class="group p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-primary/20 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative space-y-4 flex flex-col items-center">
            <div class="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <CodeIcon class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-foreground">High performed Software</h3>
            <p class="text-muted-foreground leading-relaxed">
              I build robust web and digital platforms using Laravel, Vue.js, Docker, and Kubernetes. My expertise covers the entire process, from architecture and development to hosting and SEO optimization.
            </p>
            <RouterLink to="/services">
              <Button variant="ghost" size="sm" class="group-hover:text-primary transition-colors">
                Learn More →
              </Button>
            </RouterLink>
          </div>
        </Card>

        <Card class="group p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-secondary/20 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative space-y-4 flex flex-col items-center">
            <div class="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <PaletteIcon class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-foreground">Design & Branding</h3>
            <p class="text-muted-foreground leading-relaxed">
              From restaurant menus and business cards to social media templates — modern design that captures your brand essence.
            </p>
            <RouterLink to="/portfolio">
              <Button variant="ghost" size="sm" class="group-hover:text-secondary transition-colors">
                View Portfolio →
              </Button>
            </RouterLink>
          </div>
        </Card>

        <Card class="group p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-accent/20 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative space-y-4 flex flex-col items-center">
            <div class="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <UserIcon class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-foreground">Career & Tech Coaching</h3>
            <p class="text-muted-foreground leading-relaxed">
              Professional CV writing, LinkedIn optimization, and expert Laravel & Vue.js mentoring to advance your career.
            </p>
            <RouterLink to="/contact">
              <Button variant="ghost" size="sm" class="group-hover:text-accent transition-colors">
                Get Started →
              </Button>
            </RouterLink>
          </div>
        </Card>
      </div>
    </div>

    <!-- Enhanced Technologies Section -->
    <div class="max-w-6xl mx-auto animate-fade-in-up delay-600 ">
      <div class="text-center space-y-6 mb-12">
        <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Tech Stack
        </h2>
        <p class="text-xl text-muted-foreground">
          Cutting-edge technologies I use to build exceptional solutions
        </p>
      </div>
      
      <div class="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-7 ">
        <TechBadge name="Laravel" color="primary" />
        <TechBadge name="Vue.js" color="secondary" />
        <TechBadge name="Docker" color="accent" />
        <TechBadge name="MySQL" color="primary" />
        <TechBadge name="Tailwind CSS" color="secondary" />
        <TechBadge name="Kubernetes" color="accent" />
        <TechBadge name="GitLab CI/CD" color="primary" />
      </div>
    </div>

    <!-- Enhanced CTA -->
    <div class="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up delay-700 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12">
      <div class="space-y-4">
        <h2 class="text-3xl md:text-4xl font-bold">Ready to Build Something Amazing?</h2>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
          Whether you need a full-stack application, stunning design, or career guidance — let's turn your vision into reality.
        </p>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink to="/contact" >
          <Button as="RouterLink" size="lg" class="group bg-gradient-to-r from-primary to-secondary hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Start Your Project
            <RocketIcon class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </RouterLink>
        <RouterLink to="/services">
          <Button as="RouterLink" variant="outline" size="lg" class="transform hover:scale-105 transition-all duration-300">
            Explore Services
          </Button>
        </RouterLink>
      </div>
    </div>

  </section>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import TechBadge from '@/components/TechBadge.vue'
import { 
  ArrowRightIcon, 
  ChevronDownIcon, 
  CodeIcon, 
  PaletteIcon, 
  UserIcon, 
  RocketIcon 
} from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import avatar from "@/assets/images/hani-without-bg.png";
import pattern from "@/assets/images/iconpattern.png";
import grain from "@/assets/images/grain.webp";
import ProfileCard from "@/components/ProfileCard.vue";
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
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }
.delay-600 { animation-delay: 600ms; }
.delay-700 { animation-delay: 700ms; }

/* Hero animations */
@keyframes zoom-in {
  0% {
    transform: scale(1.05);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-zoom-in {
  animation: zoom-in 1.5s ease-out both;
}

/* Floating elements */
@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg);
  }
  50% { 
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes float-delayed {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg);
  }
  50% { 
    transform: translateY(-25px) rotate(-5deg);
  }
}

@keyframes float-slow {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg);
  }
  50% { 
    transform: translateY(-15px) rotate(3deg);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 5s ease-in-out infinite;
  animation-delay: 1s;
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
  animation-delay: 2s;
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

/* Pulse glow effect */
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(var(--primary-rgb), 0.6), 0 0 60px rgba(var(--primary-rgb), 0.3);
  }
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Hover effects */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

/* Text reveal animation */
@keyframes text-reveal {
  0% {
    clip-path: inset(0 100% 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
}

.animate-text-reveal {
  animation: text-reveal 1s ease-out forwards;
}
</style>