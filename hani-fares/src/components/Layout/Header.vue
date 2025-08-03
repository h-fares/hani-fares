<template>
  <header class="sticky top-0 z-50 w-full border-b bg-background">
    <nav class="container mx-auto flex h-16 items-center justify-between px-4">
      <!-- Logo -->
      <RouterLink to="/" class="text-xl font-bold">Hani Fares</RouterLink>

      <!-- Desktop Nav -->
      <ul class="hidden md:flex gap-6 text-sm font-medium items-center">
        <li><RouterLink to="/" class="hover:text-primary transition">Home</RouterLink></li>
        <li><RouterLink to="/services" class="hover:text-primary transition">Services</RouterLink></li>
        <li><RouterLink to="/portfolio" class="hover:text-primary transition">Portfolio</RouterLink></li>
        <li><RouterLink to="/contact" class="hover:text-primary transition">Contact</RouterLink></li>
      </ul>

      <!-- Mobile Menu -->
      <Popover>
        <PopoverTrigger class="md:hidden">
          <Button variant="ghost" size="icon">
            <MenuIcon class="w-5 h-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent side="bottom" align="end" class="w-48 mt-2">
          <ul class="space-y-2">
            <li><RouterLink to="/" class="block w-full">Home</RouterLink></li>
            <li><RouterLink to="/services" class="block w-full">Services</RouterLink></li>
            <li><RouterLink to="/portfolio" class="block w-full">Portfolio</RouterLink></li>
            <li><RouterLink to="/contact" class="block w-full">Contact</RouterLink></li>
          </ul>
        </PopoverContent>
      </Popover>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { MenuIcon } from 'lucide-vue-next'
</script>