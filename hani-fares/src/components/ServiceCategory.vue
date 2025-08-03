<template>
  <Card :class="animation + ' overflow-hidden'">
    <div class="grid md:grid-cols-2">
      <!-- Image -->
      <AspectRatio ratio="16/9" class="md:rounded-l-xl overflow-hidden">
        <img :src="image" alt="" class="w-full h-full object-cover" />
      </AspectRatio>

      <!-- Content -->
      <div class="p-6 flex flex-col justify-center gap-4">
        <h2 class="text-xl font-semibold text-foreground">{{ title }}</h2>
        <Separator />
        <ul class="list-disc list-inside space-y-1 text-muted-foreground">
          <li v-for="(item, index) in services" :key="index">{{ item }}</li>
        </ul>
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