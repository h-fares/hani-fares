<template>
  <footer class="bg-background border-t pt-10 text-sm text-muted-foreground">
    <div class="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
      <!-- Left: Brand & Bio -->
      <div class="space-y-3">
        <h2 class="text-lg font-semibold text-foreground">Hani Fares</h2>
        <p class="leading-relaxed">
          Building efficient, modern apps with Vue, Laravel & Tailwind. Clean code. Real results.
        </p>
      </div>

      <!-- Right: Menu -->
      <div class="space-y-3 text-center">
<!--        <h2 class="text-lg font-semibold text-foreground">Menu</h2>-->
        <ul class="space-y-2">
          <li><RouterLink to="/" class="hover:text-foreground transition"> Home</RouterLink></li>
          <li><RouterLink to="/services" class="hover:text-foreground transition"> Services</RouterLink></li>
          <li><RouterLink to="/portfolio" class="hover:text-foreground transition"> Portfolio</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-foreground transition"> Contact</RouterLink></li>
        </ul>
      </div>
    </div>

<!--    <Separator class="my-8" />-->

    <!-- Bottom: Socials -->
    <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 pb-6">
      <p class="text-xs text-muted-foreground text-center md:text-left">
        © {{ new Date().getFullYear() }} Hani Fares. All rights reserved.
      </p>
      <div class="flex gap-4">
        <Button variant="ghost" size="icon" as="a" href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
          <Github class="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" as="a" href="https://linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn">
          <Linkedin class="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" as="a" href="mailto:you@example.com" aria-label="Email">
          <Mail class="w-5 h-5" />
        </Button>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Github, Linkedin, Mail } from 'lucide-vue-next'
</script>