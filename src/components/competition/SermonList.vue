<script setup lang="ts">
  import { defineProps, ref, onMounted } from 'vue';

  interface Sermon {
    title: string;
    image: string;
    summary: string;
  }

  const props = defineProps({
    count: {
      type: Number,
      default: 3
    },
    showViewAll: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '深度定制'
    },
    subtitle: {
      type: String,
      default: '提供您想要的一切主题'
    },
    sermons: {
      type: Array as () => Sermon[],
      default: () => [
        {
          title: "3D大屏",
          image: "/cardinal/city.webp",
          summary: "炫酷的展示效果与视觉冲击,不一样的数据看板"
        },
        {
          title: "2D大屏",
          image: "/cardinal/bg.webp",
          summary: "支持主题色与背景切换,定制您的专属数据看板"
        },
        {
          title: "行业大屏",
          image: "/cardinal/nuclear.webp",
          summary: "多种行业主题,贴合任意竞赛需求"
        }
      ]
    }
  });

  const swiperContainerRef = ref<HTMLElement>();
  const currentSlide = ref(0);

  const scrollToSlide = (index: number) => {
    if (swiperContainerRef.value) {
      const cardWidth = 320; // w-80 = 320px
      const gap = 16; // gap-4 = 16px
      const totalWidth = cardWidth + gap;
      const scrollLeft = index * totalWidth;
      swiperContainerRef.value.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  };

  onMounted(() => {
    // 移动端滑动指示器
    if (swiperContainerRef.value) {
      swiperContainerRef.value.addEventListener('scroll', () => {
        const container = swiperContainerRef.value;
        if (container) {
          const scrollLeft = container.scrollLeft;
          const cardWidth = 320; // w-80 = 320px
          const gap = 16; // gap-4 = 16px
          const totalWidth = cardWidth + gap;
          currentSlide.value = Math.round(scrollLeft / totalWidth);
        }
      });
    }
  });
</script>

<template>
  <section class="py-16 bg-gradient-to-br from-blue-900 via-black to-blue-900">
    <div class="container">
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-4xl mb-4 text-white">{{ props.title }}</h1>
        <p class="text-xl text-white max-w-3xl mx-auto">
          {{ props.subtitle }}
        </p>
      </div>
      
      <!-- Desktop Grid Layout -->
      <div class="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(sermon, index) in props.sermons.slice(0, props.count)" 
          :key="sermon.title"
          class="bg-white rounded-lg shadow-2xl border-2 border-gray-200 hover:shadow-3xl hover:border-blue-300 transition-all duration-300 overflow-hidden transform hover:scale-105 hover:-translate-y-2 group"
        >
          <!-- Image at top -->
          <div class="relative h-48 overflow-hidden">
            <img 
              :src="sermon.image" 
              :alt="sermon.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <!-- Content below image -->
          <div class="p-6">
            <h3 class="text-xl font-bold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
              {{ sermon.title }}
            </h3>
            
            <p class="text-gray-700 mb-4">
              {{ sermon.summary }}
            </p>
          </div>
        </div>
      </div>

      <!-- Mobile Swiper Layout -->
      <div class="md:hidden">
        <div class="relative">
          <!-- Swiper Container -->
          <div ref="swiperContainerRef" class="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 pb-4">
            <div 
              v-for="(sermon, index) in props.sermons.slice(0, props.count)" 
              :key="sermon.title"
              class="bg-white rounded-lg shadow-2xl border-2 border-gray-200 hover:shadow-3xl hover:border-blue-300 transition-all duration-300 overflow-hidden transform hover:scale-105 hover:-translate-y-2 group flex-shrink-0 w-80 snap-center"
            >
              <!-- Image at top -->
              <div class="relative h-48 overflow-hidden">
                <img 
                  :src="sermon.image" 
                  :alt="sermon.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <!-- Content below image -->
              <div class="p-6">
                <h3 class="text-xl font-bold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                  {{ sermon.title }}
                </h3>
                
                <p class="text-gray-700 mb-4">
                  {{ sermon.summary }}
                </p>
              </div>
            </div>
          </div>
          
          <!-- Scroll Indicators -->
          <div class="flex justify-center mt-4 space-x-2">
            <div 
              v-for="(sermon, index) in props.sermons.slice(0, props.count)" 
              :key="`indicator-${index}`"
              class="w-2 h-2 rounded-full bg-gray-300 transition-colors duration-300 cursor-pointer"
              :class="{ 'bg-blue-600': index === currentSlide }"
              @click="scrollToSlide(index)"
            ></div>
          </div>
        </div>
      </div>

      <div v-if="props.showViewAll && props.sermons.length > 0" class="mt-12 text-center">
        <a
          href="/competition#contact"
          class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border-2 border-white hover:bg-white hover:text-gray-900 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
        >
          预约演示
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Hide scrollbar for mobile swiper */
.scrollbar-hide {
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Safari and Chrome */
}

/* Smooth scrolling for mobile */
.scrollbar-hide {
  scroll-behavior: smooth;
}

/* Snap scrolling */
.snap-x {
  scroll-snap-type: x mandatory;
}

.snap-center {
  scroll-snap-align: center;
}
</style> 