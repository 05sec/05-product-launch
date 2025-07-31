<template>
  <header 
    ref="headerRef"
    :class="[
      'fixed top-0 left-0 z-50 w-[100vw] transition-all duration-300',
      isIntersecting 
        ? 'bg-white shadow-md backdrop-blur-sm' 
        : 'bg-transparent shadow-none backdrop-blur-none hover:bg-white/10 hover:shadow-md hover:backdrop-blur-sm'
    ]"
  >
    <div class="container flex items-center justify-between h-20">
      <a 
        ref="logoRef"
        href="/" 
        class="text-2xl font-bold font-serif flex items-center" 
        :class="isIntersecting ? 'text-gray-900' : 'text-primary-800'"
      >
        <img :src="isIntersecting ? '/logo-normal.webp' : '/logo.webp'" class="h-16 w-auto mr-2" :class="isIntersecting ? 'opacity-100' : 'text-primary-600'"/>
      </a>
      
      <div ref="navRef">
        <Navigation :is-dark="isIntersecting" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Navigation from "./Navigation.vue";

const isIntersecting = ref(false);
let observer: IntersectionObserver | null = null;

const headerRef = ref<HTMLElement>();
const logoRef = ref<HTMLElement>();
const navRef = ref<HTMLElement>();

onMounted(async () => {
  // 确保所有元素都存在
  if (!headerRef.value || !logoRef.value || !navRef.value) {
    return;
  }

  // 动态导入 GSAP
  const { gsap } = await import('gsap');

  // Header 入场动画
  const tl = gsap.timeline();
  
  // 整个 header 从上方滑入
  tl.fromTo(headerRef.value,
    {
      y: -100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }
  );

  // Logo 从左侧滑入
  tl.fromTo(logoRef.value,
    {
      x: -50,
      opacity: 0,
      scale: 0.8
    },
    {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power2.out"
    },
    "-=0.4"
  );

  // 导航从右侧滑入
  // tl.fromTo(navRef.value,
  //   {
  //     x: 50,
  //     opacity: 0,
  //     scale: 0.8
  //   },
  //   {
  //     x: 0,
  //     opacity: 1,
  //     scale: 1,
  //     duration: 0.6,
  //     ease: "power2.out"
  //   },
  //   "-=0.4"
  // );

  // 创建 IntersectionObserver
  observer = new IntersectionObserver(
    async (entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          isIntersecting.value = true;
          
          // 当与 infiniteScroll 相交时的动画
          if (headerRef.value) {
            const { gsap } = await import('gsap');
            gsap.to(headerRef.value, {
              backgroundColor: 'rgba(255, 255, 255, 1)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              duration: 0.3,
              ease: "power2.out"
            });
          }
        } else {
          isIntersecting.value = false;
          
          // 当离开 infiniteScroll 时的动画
          if (headerRef.value) {
            const { gsap } = await import('gsap');
            gsap.to(headerRef.value, {
              backgroundColor: 'rgba(255, 255, 255, 0)',
              boxShadow: 'none',
              duration: 0.3,
              ease: "power2.out"
            });
          }
        }
      });
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