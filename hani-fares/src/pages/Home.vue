<template>
  <section class="space-y-20">

    <!-- Hero Cover -->
    <div class="relative w-full h-[60vh] md:h-[75vh] overflow-hidden rounded-xl animate-zoom-in">
      <img
          src="../assets/images/pexels-semac-14011035.jpg"
          alt="Hani Fares Cover"
          class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/60" />
      <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-3">
          Hi, I'm <span class="text-primary">Hani Fares</span>
        </h1>
        <p class="text-lg md:text-xl max-w-2xl text-white/80">
          Senior software engineer specializing in Laravel, Vue.js, Docker, and scalable architecture.
        </p>
        <Button as="RouterLink" to="/contact" size="lg" class="mt-6">
          Let’s Work Together
        </Button>
      </div>
    </div>

    <!-- About Me -->
    <Card class="max-w-4xl mx-auto shadow-md transition-all hover:shadow-xl animate-fade-in-up delay-300">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
        <CardDescription>Full-Stack Developer | Release Manager |  Digital Solutions Expert</CardDescription>
      </CardHeader>
      <CardContent>
        <p class="leading-relaxed text-muted-foreground">
          I’m a software engineer based in Germany, specializing in full-stack development with Laravel, Vue, Docker, and Kubernetes. I thrive on architecting scalable, maintainable systems that solve real business challenges. As a release manager, I ensure smooth deployments and serve as the bridge between product managers and developers.
          <br><br>
          Beyond development, I offer a range of digital services — from building high-performance websites and landing pages to helping clients craft standout CVs and optimize their LinkedIn presence. Whether you’re a business needing a custom platform or an individual improving your career presence, I deliver clean design and robust technical solutions tailored to your goals.        </p>
      </CardContent>
    </Card>

    <!-- What I Offer (Services) -->
    <div class="max-w-5xl mx-auto px-4 animate-fade-in-up delay-500 space-y-8">
      <h2 class="text-3xl font-semibold text-center">What I Offer</h2>
      <div class="grid md:grid-cols-3 gap-6">

        <Card class="p-5 flex flex-col gap-2 shadow hover:shadow-md transition">
          <h3 class="text-xl font-semibold text-foreground">Web & Digital</h3>
          <p class="text-muted-foreground text-sm">
            I build custom websites — from landing pages to portfolios and full business platforms. I also handle hosting, SEO, and basic analytics.
          </p>
        </Card>

        <Card class="p-5 flex flex-col gap-2 shadow hover:shadow-md transition">
          <h3 class="text-xl font-semibold text-foreground">Design & Branding</h3>
          <p class="text-muted-foreground text-sm">
            From menus and business cards to CVs and social media templates — I bring clean, modern design to every visual detail.
          </p>
        </Card>

        <Card class="p-5 flex flex-col gap-2 shadow hover:shadow-md transition">
          <h3 class="text-xl font-semibold text-foreground">Career & Tech Coaching</h3>
          <p class="text-muted-foreground text-sm">
            Need help with your CV or LinkedIn? I assist professionals in standing out — plus I offer expert Laravel & Vue development.
          </p>
        </Card>

      </div>
    </div>

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

    <!-- CTA -->
    <div class="text-center space-y-3 animate-fade-in-up delay-700">
      <p class="text-lg text-muted-foreground">Need a reliable, full-stack Laravel/Vue expert?</p>
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
import { RouterLink } from 'vue-router'
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