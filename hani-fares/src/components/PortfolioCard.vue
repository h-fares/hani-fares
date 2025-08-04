<template>
  <Dialog>
    <DialogTrigger as-child>
      <Card class="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer group bg-gradient-to-br from-card via-card to-card/50 border-2 hover:border-primary/20">
        <div class="relative overflow-hidden">
          <img 
            :src="image" 
            :alt="title" 
            class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <Button size="sm" variant="secondary" class="backdrop-blur-sm bg-white/20">
              <EyeIcon class="w-4 h-4" />
            </Button>
          </div>
          <!-- Category Badge -->
          <div class="absolute top-3 left-3">
            <span class="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 backdrop-blur-sm text-primary border border-primary/30">
              {{ category?.toUpperCase() }}
            </span>
          </div>
        </div>
        <div class="p-6 space-y-3">
          <h3 class="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
            {{ title }}
          </h3>
          <p class="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {{ description }}
          </p>
          <!-- Technologies -->
          <div class="flex flex-wrap gap-1 pt-2" v-if="technologies">
            <span 
              v-for="tech in technologies.slice(0, 3)" 
              :key="tech"
              class="px-2 py-1 text-xs bg-secondary/20 text-secondary rounded-full"
            >
              {{ tech }}
            </span>
            <span v-if="technologies.length > 3" class="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full">
              +{{ technologies.length - 3 }}
            </span>
          </div>
        </div>
      </Card>
    </DialogTrigger>

    <DialogContent class="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
      <div class="relative">
        <img 
          :src="image" 
          :alt="title" 
          class="w-full h-64 md:h-80 object-cover" 
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div class="absolute bottom-4 left-6 text-white">
          <h3 class="text-2xl md:text-3xl font-bold mb-2">{{ title }}</h3>
          <div class="flex gap-2">
            <span class="px-3 py-1 text-sm bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
              {{ category?.toUpperCase() }}
            </span>
          </div>
        </div>
      </div>
      
      <div class="p-6 space-y-6">
        <!-- Description -->
        <div class="space-y-3">
          <h4 class="text-lg font-semibold text-foreground">Project Overview</h4>
          <p class="text-muted-foreground leading-relaxed">
            {{ longDescription || description }}
          </p>
        </div>

        <!-- Technologies -->
        <div class="space-y-3" v-if="technologies">
          <h4 class="text-lg font-semibold text-foreground">Technologies Used</h4>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tech in technologies" 
              :key="tech"
              class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Features -->
        <div class="space-y-3" v-if="features">
          <h4 class="text-lg font-semibold text-foreground">Key Features</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div 
              v-for="feature in features" 
              :key="feature"
              class="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <CheckIcon class="w-4 h-4 text-green-500 flex-shrink-0" />
              {{ feature }}
            </div>
          </div>
        </div>

        <!-- Links -->
        <div class="flex gap-3 pt-4" v-if="link || github">
          <Button 
            v-if="link && link !== '#'" 
            as="a" 
            :href="link" 
            target="_blank" 
            class="flex items-center gap-2"
          >
            <ExternalLinkIcon class="w-4 h-4" />
            View Live
          </Button>
          <Button 
            v-if="github && github !== '#'" 
            as="a" 
            :href="github" 
            target="_blank" 
            variant="outline"
            class="flex items-center gap-2"
          >
            <GithubIcon class="w-4 h-4" />
            Source Code
          </Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'
import { EyeIcon, ExternalLinkIcon, GithubIcon, CheckIcon } from 'lucide-vue-next'

defineProps({
  title: String,
  description: String,
  longDescription: String,
  image: String,
  category: String,
  technologies: Array,
  features: Array,
  link: String,
  github: String
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Enhanced hover animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

.group:hover {
  animation: float 3s ease-in-out infinite;
}
</style>