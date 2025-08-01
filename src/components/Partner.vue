<script setup lang="ts">
import { defineProps, ref, defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import {  EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

interface Partner {
  name: string;
  image: string;
  description: string;
  industry: string;
}

const props = defineProps({
  partners: {
    type: Array as () => Partner[],
    default: () => [
      {
        name: "城市大屏",
        image: "/city.webp",
        description: "专注于城市数据可视化展示，为智慧城市建设提供专业的大屏解决方案。通过先进的数据分析技术，将复杂的城市数据转化为直观的可视化界面，助力城市管理者做出更明智的决策。",
        industry: "智慧城市"
      },
      {
        name: "2D大屏",
        image: "/bg.webp",
        description: "提供企业级数据大屏展示服务，支持多种数据源接入和实时数据更新。采用现代化的设计理念，为企业打造专业、美观的数据展示平台，提升数据传达效率。",
        industry: "企业服务"
      },
      {
        name: "核能技术",
        image: "/nuclear.webp",
        description: "在核能安全监控领域拥有丰富经验，为核电站提供先进的安全监测和数据分析系统。通过高精度的传感器网络和智能分析算法，确保核能设施的安全运行。",
        industry: "核能安全"
      },
      {
        name: "2D大屏",
        image: "/bg.webp",
        description: "提供企业级数据大屏展示服务，支持多种数据源接入和实时数据更新。采用现代化的设计理念，为企业打造专业、美观的数据展示平台，提升数据传达效率。",
        industry: "企业服务"
      },
      {
        name: "核能技术",
        image: "/nuclear.webp",
        description: "在核能安全监控领域拥有丰富经验，为核电站提供先进的安全监测和数据分析系统。通过高精度的传感器网络和智能分析算法，确保核能设施的安全运行。",
        industry: "核能安全"
      },      {
        name: "2D大屏",
        image: "/bg.webp",
        description: "提供企业级数据大屏展示服务，支持多种数据源接入和实时数据更新。采用现代化的设计理念，为企业打造专业、美观的数据展示平台，提升数据传达效率。",
        industry: "企业服务"
      },
      {
        name: "核能技术",
        image: "/nuclear.webp",
        description: "在核能安全监控领域拥有丰富经验，为核电站提供先进的安全监测和数据分析系统。通过高精度的传感器网络和智能分析算法，确保核能设施的安全运行。",
        industry: "核能安全"
      }

    ]
  },
  title: {
    type: String,
    default: '实训平台的演示'
  },
  subtitle: {
    type: String,
    default: '不是我喜欢的 flag,直接作弊'
  }
})

const swiperRef = ref();
const activeIndex = ref(0);

const handleSlideChange = (swiper: any) => {
  activeIndex.value = swiper.realIndex;
};
</script>

<template>
  <section class="py-16 bg-gradient-to-br from-blue-900 via-black to-blue-900">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl text-white mb-4">{{ props.title }}</h2>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">{{ props.subtitle }}</p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Swiper Section -->
        <div class="relative group">
          <Swiper
            ref="swiperRef"
            :modules="[EffectCards, Autoplay]"
            :loop="true"
            :loop-additional-slides="2"
            :effect="'cards'"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            @slideChange="handleSlideChange"
          >
            <SwiperSlide v-for="(partner, index) in props.partners" :key="index">
              <img
                :src="partner.image"
                :alt="partner.name"
                class="w-full h-auto md:h-80 object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        
        <!-- Description Section -->
        <div class="space-y-6">
          <div class="partner-info">
            <div class="flex items-center mb-3">
              <h3 class="text-2xl font-bold text-white mr-4">{{ props.partners[activeIndex]?.name }}</h3>
              <span class="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">{{ props.partners[activeIndex]?.industry }}</span>
            </div>
            <p class="text-gray-300 leading-relaxed">{{ props.partners[activeIndex]?.description }}</p>
          </div>
          
          <div class="pt-6">
            <a 
              href="/partners" 
              class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border-2 border-white hover:bg-white hover:text-gray-900 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
            >
              了解更多合作伙伴 →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .partner-info {
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
  
  .partner-info:hover {
    opacity: 1;
  }
</style>