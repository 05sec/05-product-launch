<script setup lang="ts">
  import { defineProps, ref, defineComponent, onMounted } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import 'swiper/css/effect-fade';

  const props = defineProps({
    title: {
      type: String,
      default: '凌云竞赛平台',
    },
    description: {
      type: String,
      default: '凌云竞赛平台是集夺旗解题赛、AWD攻防赛、知识竞赛等多类型赛事为一体的专业化安全竞赛平台。可满足单位对培养、选拔网络安全人才、组织实操演练、举办网络安全大赛等多方面需求',
    },
    images: {
      type: Array as () => string[],
      default: () => ['/city.png', '/bg.png', '/nuclear.png']
    },
    buttonText: {
      type: String,
      default: '查看演示',
    },
    buttonLink: {
      type: String,
      default: '/about-us',
    },
    layout: {
      type: String as () => 'left' | 'right',
      default: 'left'
    }
  });

  const sectionRef = ref<HTMLElement>();
  const imageRef = ref<HTMLElement>();
  const contentRef = ref<HTMLElement>();
  const titleRef = ref<HTMLElement>();
  const descriptionRef = ref<HTMLElement>();
  const buttonRef = ref<HTMLElement>();

  onMounted(async () => {
    if (!sectionRef.value || !imageRef.value || !contentRef.value) return;

    // 动态导入 GSAP
    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    
    // 注册 ScrollTrigger 插件
    gsap.registerPlugin(ScrollTrigger);

    // 创建时间轴
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // 根据布局决定动画方向
    const isRightLayout = props.layout === 'right';
    
    // 图片动画 - 从右侧或左侧滑入
    tl.fromTo(imageRef.value,
      {
        x: isRightLayout ? -100 : 100,
        opacity: 0,
        scale: 0.8
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
      }
    );

    // 内容区域动画 - 从相反方向滑入
    tl.fromTo(contentRef.value,
      {
        x: isRightLayout ? 100 : -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      },
      "-=0.5"
    );

    // 标题动画 - 从下方滑入
    if (titleRef.value) {
      tl.fromTo(titleRef.value,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out"
        },
        "-=0.3"
      );
    }

    // 描述动画 - 从下方滑入
    if (descriptionRef.value) {
      tl.fromTo(descriptionRef.value,
        {
          y: 20,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out"
        },
        "-=0.2"
      );
    }

    // 按钮动画 - 从下方滑入并添加弹性效果
    if (buttonRef.value) {
      tl.fromTo(buttonRef.value,
        {
          y: 20,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)"
        },
        "-=0.2"
      );
    }
  });
</script>

<template>
  <section ref="sectionRef" class="bg-gradient-to-br from-black via-blue-900 to-black">
    <div class="container min-h-[100vh] flex items-center">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        <div ref="imageRef" class="relative group" :class="{ 'md:order-2': layout === 'right' }">
          <Swiper
            :modules="[Autoplay, Pagination, Navigation, EffectFade]"
            :slides-per-view="1"
            :space-between="0"
            :loop="true"
            :effect="'fade'"
            :fade-effect="{
              crossFade: true
            }"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :pagination="{
              clickable: true,
            }"
            :navigation="true"
            class="rounded-lg shadow-lg overflow-hidden"
          >
            <SwiperSlide v-for="(image, index) in props.images" :key="index">
              <img 
                :src="image"
                :alt="`${props.title} - 图片 ${index + 1}`"
                class="w-full h-auto md:h-96 object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        
        <!-- Content Section -->
        <div ref="contentRef" :class="{ 'md:order-1': layout === 'right' }">
          <h2 ref="titleRef" class="text-3xl md:text-4xl font-bold mb-6 text-white">{{ props.title }}</h2>
          <p ref="descriptionRef" class="text-gray-300 mb-6 text-lg">
            {{ props.description }}
          </p>
          <a ref="buttonRef" :href="props.buttonLink" class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md shadow-sm transition-colors">
            {{ props.buttonText }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .group:hover :deep(.swiper-button-next),
  .group:hover :deep(.swiper-button-prev) {
    opacity: 1;
  }
</style>