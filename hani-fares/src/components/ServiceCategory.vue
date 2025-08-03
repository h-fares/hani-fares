<template>
  <Card :class="animation + ' overflow-hidden'">
    <div class="flex flex-col md:grid md:grid-cols-2">
      <!-- Image -->
      <div class="w-full h-52 md:h-auto">
        <img :src="image" alt="" class="w-full h-full object-cover" />
      </div>

      <!-- Content -->
      <div class="p-6 flex flex-col justify-center gap-4">
        <h2 class="text-2xl font-bold text-foreground">{{ title }}</h2>
        <Separator />
        <div class="space-y-2 text-sm text-muted-foreground leading-relaxed">
          <p v-for="(item, index) in services" :key="index">
            • {{ item }}
          </p>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup>
import { Card } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Separator } from '@/components/ui/separator'

defineProps({
  title: String,
  image: String,
  services: Array,
  animation: String
})
</script>