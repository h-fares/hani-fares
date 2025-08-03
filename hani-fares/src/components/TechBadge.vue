<template>
  <div
      class="bg-muted text-foreground text-sm font-medium px-4 py-2 rounded-full shadow-sm transition hover:scale-105 hover:bg-primary hover:text-white text-center"
  >
    {{ name }}
  </div>
</template>

<script setup>
defineProps({ name: String })
</script>