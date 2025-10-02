<template>
  <Dialog v-model:open="isOpen">
    <DialogTrigger as-child>
      <div class="group cursor-pointer">
        <div class="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
          <div class="grid md:grid-cols-2 gap-0">
            <div class="relative overflow-hidden h-80 md:h-auto">
              <img 
                :src="image" 
                :alt="title" 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div class="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              <div class="absolute top-4 left-4 flex gap-2">
                <span class="px-3 py-1 text-xs font-bold rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 uppercase tracking-wider">
                  {{ category }}
                </span>
                <span v-if="year" class="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20">
                  {{ year }}
                </span>
              </div>

              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <EyeIcon class="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            <div class="p-8 flex flex-col justify-between">
              <div class="space-y-4">
                <div>
                  <h3 class="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {{ title }}
                  </h3>
                  <p v-if="client" class="text-sm text-muted-foreground font-medium">
                    {{ client }}
                  </p>
                </div>
                
                <p class="text-muted-foreground leading-relaxed line-clamp-3">
                  {{ description }}
                </p>

                <div class="flex flex-wrap gap-2" v-if="technologies">
                  <span 
                    v-for="tech in technologies.slice(0, 4)" 
                    :key="tech"
                    class="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md border border-primary/20"
                  >
                    {{ tech }}
                  </span>
                  <span v-if="technologies.length > 4" class="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md">
                    +{{ technologies.length - 4 }} more
                  </span>
                </div>
              </div>

              <div class="flex items-center gap-3 mt-6 pt-6 border-t border-border">
                <Button variant="ghost" size="sm" class="text-primary hover:text-primary hover:bg-primary/10 font-semibold">
                  View Details
                  <ArrowRightIcon class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div class="flex gap-2 ml-auto">
                  <Button 
                    v-if="link && link !== '#'" 
                    as="a" 
                    :href="link" 
                    target="_blank" 
                    size="icon"
                    variant="ghost"
                    @click.stop
                    class="rounded-full hover:bg-primary/10 hover:text-primary"
                  >
                    <ExternalLinkIcon class="w-4 h-4" />
                  </Button>
                  <Button 
                    v-if="github && github !== '#'" 
                    as="a" 
                    :href="github" 
                    target="_blank" 
                    size="icon"
                    variant="ghost"
                    @click.stop
                    class="rounded-full hover:bg-primary/10 hover:text-primary"
                  >
                    <GithubIcon class="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DialogTrigger>

    <DialogScrollContent class="max-w-[95vw] w-[95vw] md:max-w-[95vw] md:w-[95vw] max-h-[95vh] p-0 gap-0 !my-4">
      <div class="flex flex-col">
        <div class="relative h-[40vh] md:h-[60vh] flex-shrink-0">
          <div class="absolute inset-0 bg-black">
            <img 
              :src="selectedImage" 
              :alt="title" 
              class="w-full h-full object-contain" 
            />
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          
          <div class="absolute bottom-0 left-0 right-0 p-4 md:p-12 text-white">
            <div class="max-w-7xl mx-auto">
              <div class="flex items-center gap-2 md:gap-4 mb-3 md:mb-6 flex-wrap">
                <span class="px-3 py-1.5 md:px-5 md:py-2.5 text-xs md:text-base font-bold rounded-full bg-white/20 backdrop-blur-md border border-white/30 uppercase tracking-wider">
                  {{ category }}
                </span>
                <span v-if="year" class="px-3 py-1.5 md:px-5 md:py-2.5 text-xs md:text-base font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  {{ year }}
                </span>
              </div>
              <h2 class="text-3xl md:text-6xl lg:text-7xl font-black mb-2 md:mb-4 tracking-tight">{{ title }}</h2>
              <p v-if="client" class="text-sm md:text-2xl text-white/90 font-medium">{{ client }}</p>
            </div>
          </div>
        </div>

        <div class="bg-background">
          <div class="max-w-7xl mx-auto p-6 md:p-12 lg:p-16 space-y-10 md:space-y-16">
            <div v-if="gallery && gallery.length > 0" class="space-y-4 md:space-y-8">
              <div class="flex items-center justify-between gap-3">
                <h3 class="text-2xl md:text-4xl font-bold text-foreground">Design Gallery</h3>
                <div class="flex items-center gap-2 md:gap-4">
                  <p class="text-xs md:text-base text-muted-foreground font-medium hidden sm:block">{{ gallery.length }} items</p>
                  <Button 
                    v-if="selectedImage !== image"
                    @click="selectedImage = image"
                    variant="outline"
                    :size="isMobile ? 'sm' : 'lg'"
                    class="gap-2"
                  >
                    <ImageIcon class="w-4 h-4 md:w-5 md:h-5" />
                    <span class="hidden sm:inline">View Main</span>
                  </Button>
                </div>
              </div>
              
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                <div 
                  v-for="(item, index) in gallery" 
                  :key="index"
                  @click="selectedImage = item.src"
                  class="group relative aspect-square overflow-hidden rounded-xl md:rounded-2xl cursor-pointer border-2 md:border-4 transition-all duration-300 hover:scale-105"
                  :class="selectedImage === item.src ? 'border-primary shadow-xl md:shadow-2xl shadow-primary/40 scale-105' : 'border-border hover:border-primary/50'"
                >
                  <img 
                    :src="item.src" 
                    :alt="item.title" 
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-2 md:p-4">
                      <p class="text-white text-xs md:text-sm font-semibold">{{ item.title }}</p>
                    </div>
                  </div>
                  <div 
                    v-if="selectedImage === item.src"
                    class="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px]"
                  >
                    <div class="bg-primary text-primary-foreground rounded-full p-2 md:p-3 shadow-2xl">
                      <CheckIcon class="w-5 h-5 md:w-8 md:h-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Separator v-if="gallery && gallery.length > 0" class="my-8 md:my-12" />

            <div class="grid lg:grid-cols-3 gap-8 md:gap-16">
              <div class="lg:col-span-2 space-y-6 md:space-y-10">
                <div class="bg-gradient-to-br from-accent/30 via-accent/10 to-transparent rounded-2xl md:rounded-3xl p-6 md:p-10 border border-border">
                  <h3 class="text-xl md:text-3xl font-bold text-foreground mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                    <div class="w-1.5 md:w-2 h-7 md:h-10 bg-gradient-to-b from-primary to-purple-500 rounded-full"></div>
                    Project Overview
                  </h3>
                  <p class="text-muted-foreground leading-relaxed text-base md:text-xl">
                    {{ longDescription || description }}
                  </p>
                </div>

                <div v-if="features" class="space-y-4 md:space-y-6">
                  <h3 class="text-xl md:text-3xl font-bold text-foreground flex items-center gap-2 md:gap-3">
                    <div class="w-1.5 md:w-2 h-7 md:h-10 bg-gradient-to-b from-primary to-purple-500 rounded-full"></div>
                    Key Features
                  </h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
                    <div 
                      v-for="feature in features" 
                      :key="feature"
                      class="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl md:rounded-2xl bg-accent/20 hover:bg-accent/40 border border-border hover:border-primary/30 transition-all duration-200"
                    >
                      <div class="mt-0.5 md:mt-1 rounded-full bg-green-500/20 p-1.5 md:p-2">
                        <CheckIcon class="w-4 h-4 md:w-5 md:h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <span class="text-sm md:text-lg text-foreground font-medium leading-relaxed">{{ feature }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="space-y-6 md:space-y-8">
                <div v-if="technologies" class="bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent rounded-2xl md:rounded-3xl p-6 md:p-10 border border-border">
                  <h3 class="text-lg md:text-2xl font-bold text-foreground mb-5 md:mb-8 flex items-center gap-2 md:gap-3">
                    <div class="w-1.5 md:w-2 h-6 md:h-9 bg-gradient-to-b from-primary to-purple-500 rounded-full"></div>
                    Tech Stack
                  </h3>
                  <div class="flex flex-wrap gap-2 md:gap-3">
                    <span 
                      v-for="tech in technologies" 
                      :key="tech"
                      class="px-3 py-2 md:px-5 md:py-3 text-sm md:text-base font-bold bg-background text-primary rounded-lg md:rounded-xl border-2 border-primary/30 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 hover:scale-105"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <div class="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl md:rounded-3xl p-6 md:p-10 border border-slate-700 text-white shadow-2xl">
                  <h3 class="text-lg md:text-2xl font-bold mb-5 md:mb-8">Project Links</h3>
                  <div class="flex flex-col gap-3 md:gap-5">
                    <Button 
                      v-if="link && link !== '#'" 
                      as="a" 
                      :href="link" 
                      target="_blank" 
                      class="w-full justify-between group h-12 md:h-16 text-sm md:text-lg font-semibold"
                      size="lg"
                    >
                      <span class="flex items-center gap-2 md:gap-3">
                        <ExternalLinkIcon class="w-4 h-4 md:w-6 md:h-6" />
                        <span class="truncate">View Live Project</span>
                      </span>
                      <ArrowRightIcon class="w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform flex-shrink-0" />
                    </Button>
                    <Button 
                      v-if="github && github !== '#'" 
                      as="a" 
                      :href="github" 
                      target="_blank" 
                      variant="outline"
                      class="w-full justify-between group h-12 md:h-16 text-sm md:text-lg font-semibold bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/40"
                      size="lg"
                    >
                      <span class="flex items-center gap-2 md:gap-3">
                        <GithubIcon class="w-4 h-4 md:w-6 md:h-6" />
                        <span class="truncate">Source Code</span>
                      </span>
                      <ArrowRightIcon class="w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform flex-shrink-0" />
                    </Button>
                  </div>
                </div>

                <div v-if="client" class="p-5 md:p-8 rounded-xl md:rounded-2xl bg-accent/30 border border-border">
                  <p class="text-xs md:text-sm uppercase tracking-wider text-muted-foreground font-bold mb-2 md:mb-3">Client</p>
                  <p class="text-base md:text-xl font-bold text-foreground">{{ client }}</p>
                  <Separator class="my-4 md:my-5" />
                  <p class="text-xs md:text-sm uppercase tracking-wider text-muted-foreground font-bold mb-2 md:mb-3">Timeline</p>
                  <p class="text-base md:text-xl font-bold text-foreground">{{ year }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DialogScrollContent>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger, DialogScrollContent } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { EyeIcon, ExternalLinkIcon, GithubIcon, CheckIcon, ArrowRightIcon, ImageIcon } from 'lucide-vue-next'

const props = defineProps({
  title: String,
  description: String,
  longDescription: String,
  image: String,
  category: String,
  technologies: Array,
  features: Array,
  link: String,
  github: String,
  year: String,
  client: String,
  gallery: Array
})

const isOpen = ref(false)
const selectedImage = ref(props.image)
const isMobile = ref(false)

if (typeof window !== 'undefined') {
  isMobile.value = window.innerWidth < 768
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768
  })
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>