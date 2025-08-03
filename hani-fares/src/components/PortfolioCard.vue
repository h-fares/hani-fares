<template>
  <Dialog>
    <DialogTrigger as-child>
      <Card class="overflow-hidden animate-fade-in-up transition hover:shadow-xl cursor-pointer">
        <img :src="image" alt="" class="w-full h-48 object-cover" />
        <div class="p-4 space-y-2">
          <h3 class="text-lg font-semibold text-foreground">{{ title }}</h3>
          <p class="text-sm text-muted-foreground">{{ description }}</p>
        </div>
      </Card>
    </DialogTrigger>

    <DialogContent class="max-w-3xl p-0 overflow-hidden">
      <img :src="image" alt="Full view of {{ title }}" class="w-full h-auto object-contain" />
      <div class="p-4 space-y-1">
        <h3 class="text-lg font-semibold text-foreground">{{ title }}</h3>
        <p class="text-sm text-muted-foreground">{{ description }}</p>
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { Card } from '@/components/ui/card'
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'

defineProps({
  title: String,
  description: String,
  image: String
})
</script>