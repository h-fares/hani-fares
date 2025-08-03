<template>
  <section class="space-y-16">

    <!-- Hero -->
    <div class="relative w-full h-[60vh] md:h-[75vh] overflow-hidden rounded-xl animate-zoom-in">
      <img
          src=""
          alt="Hani Fares Cover"
          class="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-3">
          Hi, I'm <span class="text-primary">Hani Fares</span>
        </h1>
        <p class="text-lg md:text-xl max-w-2xl text-muted text-white/80">
          Senior software engineer specializing in Laravel, Vue.js, and scalable architecture.
        </p>
        <Button as="RouterLink" to="/contact" size="lg" class="mt-6">
          Let’s Work Together
        </Button>
      </div>
    </div>

    <!-- About Me Card -->
    <Card class="max-w-4xl mx-auto shadow-md transition-all hover:shadow-xl animate-fade-in-up delay-500">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
        <CardDescription>Senior Developer | Release Manager | Architecture Lover</CardDescription>
      </CardHeader>
      <CardContent>
        <p class="leading-relaxed text-muted-foreground">
          I’m a 32-year-old software engineer based in Germany. My focus is on full-stack development using Laravel and Vue, building scalable products for fast-moving teams. I'm also responsible for release management, bridging PMs and devs, and continuously improving internal systems while delivering value to clients.
        </p>
      </CardContent>
    </Card>

    <!-- Technologies -->
    <div class="space-y-6">
      <h2 class="text-2xl font-semibold text-center">Tech I Work With</h2>
      <div class="grid gap-4 grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto">
        <TechBadge name="Laravel" />
        <TechBadge name="Vue.js" />
        <TechBadge name="Docker" />
        <TechBadge name="MySQL" />
        <TechBadge name="Tailwind CSS" />
        <TechBadge name="Kubernetes" />
        <TechBadge name="GitLab CI/CD" />
        <TechBadge name="Event Sourcing" />
      </div>
    </div>

    <!-- Final Call to Action -->
    <div class="text-center space-y-3 animate-fade-in-up delay-700">
      <p class="text-lg text-muted-foreground">Need a Laravel/Vue expert who delivers real results?</p>
      <Button as="RouterLink" to="/contact" size="lg" variant="outline">
        Contact Me
      </Button>
    </div>

  </section>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import TechBadge from '@/components/TechBadge.vue'
</script>

<style scoped>
/* Animations using Tailwind (or you can use @vueuse/motion for advanced) */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(12px);
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
.delay-500 { animation-delay: 500ms; }
.delay-700 { animation-delay: 700ms; }

@keyframes zoom-in {
  0% {
    transform: scale(1.1);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-zoom-in {
  animation: zoom-in 1.2s ease-out both;
}
</style>