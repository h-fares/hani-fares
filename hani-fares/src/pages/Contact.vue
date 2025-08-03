<template>
  <section class="max-w-2xl mx-auto space-y-10 animate-fade-in-up">
    <!-- Heading -->
    <div class="text-center space-y-4">
      <h1 class="text-4xl font-bold">Let's Connect</h1>
      <p class="text-muted-foreground text-lg">
        Whether you want to build a project, ask for help, or just say hi — I’d love to hear from you.
      </p>
    </div>

    <!-- Contact Form -->
    <form @submit.prevent="submit" class="space-y-4">
      <div class="grid md:grid-cols-2 gap-4">
        <Input v-model="form.name" placeholder="Your Name" required />
        <Input v-model="form.email" type="email" placeholder="Your Email" required />
      </div>
      <Textarea v-model="form.message" placeholder="Your Message..." rows="5" required />
      <Button type="submit" class="w-full md:w-auto">Send Message</Button>
    </form>

    <!-- Links Section -->
    <div class="border-t pt-6 space-y-2 text-sm text-muted-foreground text-center">
      <p><a href="https://wa.me/49123456789" target="_blank" class="hover:text-foreground transition">📱 WhatsApp Me</a></p>
      <p><a href="mailto:you@example.com" class="hover:text-foreground transition">✉️ Email Me</a></p>
      <p><a href="https://calendly.com/yourname" target="_blank" class="hover:text-foreground transition">📅 Book a Call</a></p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const form = ref({
  name: '',
  email: '',
  message: '',
})

function submit() {
  // Placeholder for now — integrate with Formspree, EmailJS, or backend
  console.log('Form submitted:', form.value)
  alert('Message sent! (this is a mock)')
  form.value = { name: '', email: '', message: '' }
}
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
</style>