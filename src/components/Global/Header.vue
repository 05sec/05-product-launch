<template>
  <header 
    :class="[
      'fixed top-0 left-0 z-50 w-[100vw] transition-all duration-300 hover:bg-white/10 hover:shadow-md hover:backdrop-blur-sm',
      isIntersecting 
        ? 'bg-white shadow-md backdrop-blur-sm' 
        : 'bg-transparent shadow-none backdrop-blur-none'
    ]"
  >
    <div class="container flex items-center justify-between h-20">
      <a 
        href="/"
        class="text-2xl flex items-center"
        :class="isIntersecting ? 'text-gray-900' : 'text-primary-800'"
      >
        <img :src="isIntersecting ? '/logo-normal.webp' : '/logo.webp'" class="h-16 w-auto mr-2" :class="isIntersecting ? 'opacity-100' : 'text-primary-600'"/>
      </a>
        <Navigation :is-dark="isIntersecting" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import Navigation from "./Navigation.vue";

const props = defineProps({
  forceIntersecting: {
    type: Boolean,
    default: false
  }
})

const isIntersecting = ref(false);
let observer: IntersectionObserver | null = null;

watch(() => props.forceIntersecting, (newValue) => {
  if (newValue) {
    isIntersecting.value = true;
  }
}, { immediate: true });

onMounted(async () => {
  if (props.forceIntersecting) {
    isIntersecting.value = true;
    return;
  }

  observer = new IntersectionObserver(
    async (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          isIntersecting.value = true;
        } else {
          isIntersecting.value = false;
        }
      }
    },
    {
      threshold: 0.3,
      rootMargin: '500px 0px 0px 0px' // todo 移动端适配
    }
  );

  // 观察 infiniteScroll 元素
  const infiniteScrollElement = document.getElementById('infinite');
  if (infiniteScrollElement) {
    observer.observe(infiniteScrollElement);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
header:not(.bg-white):hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
  backdrop-filter: blur(8px) !important;
}
</style> 