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
        name: "练习列表",
        image: "/train/练习列表.png",
        description: "分为理论基础和实操演练两种题型,覆盖多方向网络安全理论知识与各个安全方向的题型，题量丰富，攻防兼备，为用户提供沉浸式、全方位的训练体验",
        industry: "实战"
      },
      {
        name: "练习管理",
        image: "/train/练习详情.png",
        description: "灵活手动编辑相关练习题目，适应任何场景下的练习需求,满足不同学员的学习需求",
        industry: "管理"
      },
      {
        name: "课程中心",
        image: "/train/课程中心.png",
        description: "为学员提供海量培训课程，涵盖网络安全法规、Web安全、逆向分析等多个方向的课程体系，为用户提供全面的网络安全知识培训",
        industry: "理论"
      },
      {
        name: "题库",
        image: "/train/题库.png",
        description: "管理员可以在题库中新建或导入题目，供练习组卷时选择使用,支持题目管理、更新、补充等操作，同时支持批量导入功能，科学管理题库资源",
        industry: "管理"
      },
      {
        name: "考核",
        image: "/train/练习考核.png",
        description: "练习可以进行混合组卷，从题库中选取理论题和实操题，对学员进行考核，通过考核可以检验学习成果，并配套评卷机制、成绩管理，便于学员掌握自身学习情况",
        industry: "实战"
      },
      {
        name: "实操场景",
        image: "/train/实操场景.png",
        description: "实操场景是实操题配套的场景资源，可以进行场景的新建、编辑、删除。列表展示场景版本和更新时间，便于教员管理场景资源。可以进入场景编辑器，进行镜像管理、虚拟网络管理、靶机配置、图形化编辑等操作，便于教员统一配置、快速构建复杂的实操环境",
        industry: "实战"
      },
    ]
  },
  title: {
    type: String,
    default: '功能演示'
  },
  subtitle: {
    type: String,
    default: '集理论,实操,管理于一体,功能强大,体验优秀'
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
      
      <div class="flex flex-col gap-12 items-center">
        <!-- Swiper Section -->
        <div class="relative group w-full max-w-2xl">
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
        <div class="space-y-6 text-center max-w-4xl">
          <div class="partner-info">
            <div class="flex items-center justify-center mb-3">
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