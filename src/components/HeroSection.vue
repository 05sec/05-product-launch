<script setup lang="ts">
  import { defineProps, onMounted, ref } from 'vue';

  const props = defineProps({
    title: {
      type: String,
      default: '凌云竞赛平台 Cardinal',
    },
    subTitle: {
      type: String,
      default: '多类型赛事平台，助力人才培养',
    },
    url: {
      type: String,
      default: '../../public/bg.vue',
    }
  });

  const titleRef = ref<HTMLElement>();
  const subtitleRef = ref<HTMLElement>();
  const backgroundRef = ref<HTMLElement>();
  const statsRef = ref<HTMLElement>();

  // 统计数据
  const stats = [
    { value: '50+', label: '协办比赛' },
    { value: '1000+', label: '使用人数' },
    { value: '100+', label: '使用单位' }
  ];

  onMounted(async () => {
    // 确保所有元素都存在
    if (!backgroundRef.value || !titleRef.value || !subtitleRef.value || !statsRef.value) {
      return;
    }

    // 动态导入 GSAP
    const { gsap } = await import('gsap');

    // 创建时间轴
    const tl = gsap.timeline();

    // 背景图片动画
    tl.fromTo(backgroundRef.value, 
      {
        scale: 1.2,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out"
      }
    );

    // 标题动画
    tl.fromTo(titleRef.value,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      },
      "-=0.5" // 稍微提前开始
    );

    // 副标题动画
    tl.fromTo(subtitleRef.value,
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      },
      "-=0.3" // 稍微提前开始
    );

    // 添加一些微妙的浮动动画
    gsap.to(titleRef.value, {
      y: -5,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2
    });

    gsap.to(subtitleRef.value, {
      y: -3,
      duration: 2.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2.5
    });

    // 统计数据动画
    tl.fromTo(statsRef.value,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      },
      "-=0.2"
    );

    // 为每个统计项添加交错动画
    const statItems = statsRef.value?.querySelectorAll('.stat-item');
    if (statItems && statItems.length > 0) {
      gsap.fromTo(Array.from(statItems),
        {
          scale: 0.8,
          opacity: 0,
          y: 20
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.2,
          delay: 1.5
        }
      );
    }
  });
</script>

<template>
  <div
    class="relative min-h-[100vh] flex items-center bg-cover pt-30"
  >
    <img 
      ref="backgroundRef"
      :src="props.url" 
      class="absolute w-full h-full -z-10 blur-sm"
      alt="凌云竞赛平台"
    />
    <div class="container">
      <div class="max-w-3xl text-white">
        <h1 
          ref="titleRef"
          class="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-tr from-slate-50 to-blue-500 bg-clip-text text-transparent"
        >
          {{props.title}}
        </h1>
        <p 
          ref="subtitleRef"
          class="text-xl md:text-2xl mb-8 bg-gradient-to-tr from-blue-300 to-slate-100 bg-clip-text text-transparent"
        >
          {{props.subTitle}}
        </p>
        
        <!-- 数据统计展示 -->
        <div ref="statsRef" class="mt-12">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl">
            <div 
              v-for="(stat, index) in stats" 
              :key="index"
              class="stat-item text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div class="text-2xl md:text-3xl font-bold text-white mb-1">{{ stat.value }}</div>
              <div class="text-base text-gray-200">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>