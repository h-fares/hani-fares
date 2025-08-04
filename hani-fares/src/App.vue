<template>
  <div class="min-h-screen flex flex-col bg-background text-foreground font-sans">
    <Header />

    <main class="flex-1 container mx-auto px-4 py-8">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Layout/Header.vue'
import Footer from '@/components/Layout/Footer.vue'
</script>

<style>

</style>