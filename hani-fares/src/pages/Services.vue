<template>
  <section class="space-y-16">
    <div class="text-center space-y-4">
      <h1 class="text-4xl font-bold animate-fade-in-up">My Services</h1>
      <p class="text-muted-foreground text-lg animate-fade-in-up delay-150">
        Helping you build beautiful brands, products, and careers.
      </p>
    </div>

    <!-- Service Category: Web & Digital -->
    <ServiceCategory
        title="Web & Digital"
        image="/images/web.jpg"
        :services="[
        'Website design & development (Landing pages, Portfolios, Business sites)',
        'Hosting setup, SEO basics'
      ]"
        animation="animate-fade-in-up"
    />

    <!-- Service Category: Design -->
    <ServiceCategory
        title="Design"
        image="/images/design.jpg"
        :services="[
        'Restaurant menu design',
        'Business cards, CV layouts, social media templates'
      ]"
        animation="animate-fade-in-up delay-150"
    />

    <!-- Service Category: Career & Software Services -->
    <ServiceCategory
        title="Career & Software Services"
        image="/images/career.jpg"
        :services="[
        'CV writing help',
        'LinkedIn optimization',
        'Advanced software development (Laravel, Vue, Docker, etc.)'
      ]"
        animation="animate-fade-in-up delay-300"
    />
  </section>
</template>

<script setup>
import ServiceCategory from '@/components/ServiceCategory.vue'
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