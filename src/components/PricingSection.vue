<template>
  <section :class="gradientClass" class="py-16 h-screen">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 ref="titleRef" class="text-3xl md:text-4xl font-bold text-white mb-4 opacity-0">{{props.title}}</h2>
        <p ref="subtitleRef" class="text-xl text-gray-400 max-w-3xl mx-auto opacity-0">{{props.subTitle}}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div ref="card1Ref" class="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-500 transition-all duration-300 opacity-0 transform translate-y-20">
          <div class="p-8">
            <div class="text-center mb-6">
              <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span class="text-gray-600 font-bold text-lg">F</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Free</h3>
              <p class="text-gray-600 text-sm">核心功能免费试用</p>
            </div>
            <div class="text-center mb-8">
              <div class="text-4xl font-bold text-gray-900 mb-2">免费</div>
              <div class="text-gray-600">永久免费使用</div>
            </div>
            <div class="mb-8">
              <button class="w-full py-3 px-6 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200">
                立刻开始
              </button>
             </div>
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0 font-bold">✓</span>
                <span class="text-gray-700">基本的数据展示功能</span>
              </li>
              <li class="flex items-start">
                <span class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0 font-bold">✓</span>
                <span class="text-gray-700">一个团队空间</span>
              </li>
              <li class="flex items-start">
                <span class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0 font-bold">✓</span>
                <span class="text-gray-700">一名团队成员</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Professional 方案 -->
        <div ref="card2Ref" class="bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden hover:shadow-2xl hover:border-blue-500 transition-all duration-300 relative opacity-0 transform translate-y-20">
          <div class="p-8">
            <!-- 图标和标题 -->
            <div class="text-center mb-6">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span class="text-blue-600 font-bold text-lg">A</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Advanced</h3>
              <p class="text-gray-600 text-sm">中小型赛事</p>
            </div>

            <!-- 价格 -->
            <div class="text-center mb-8">
              <div class="text-4xl font-bold text-gray-900 mb-2">¥114</div>
              <div class="text-gray-600">每个工作空间/月</div>
            </div>

            <!-- 按钮 -->
            <div class="mb-8">
              <button class="w-full py-3 px-6 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-200">
                立即开始
              </button>
            </div>

            <!-- 功能列表 -->
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0 font-bold">✓</span>
                <span class="text-gray-700">数据可定制化</span>
              </li>
              <li class="flex items-start">
                <span class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0 font-bold">✓</span>
                <span class="text-gray-700">1个团队空间</span>
              </li>
              <li class="flex items-start">
                <span class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0 font-bold">✓</span>
                <span class="text-gray-700">3名团队成员</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Team 方案 -->
        <div ref="card3Ref" class="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-500 transition-all duration-300 opacity-0 transform translate-y-20">
          <div class="p-8">
            <!-- 图标和标题 -->
            <div class="text-center mb-6">
              <div class="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span class="text-white font-bold text-lg">P</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
              <p class="text-gray-600 text-sm">大型赛事</p>
            </div>

            <!-- 价格 -->
            <div class="text-center mb-8">
              <div class="text-4xl font-bold text-gray-900 mb-2">¥514</div>
              <div class="text-gray-600">每个工作空间/月</div>
            </div>

            <!-- 按钮 -->
            <div class="mb-8">
              <button class="w-full py-3 px-6 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200">
                立即使用
              </button>
            </div>

            <!-- 功能列表 -->
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0 font-bold">✓</span>
                <span class="text-gray-700">高度定制化的背景与组件</span>
              </li>
              <li class="flex items-start">
                <span class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0 font-bold">✓</span>
                <span class="text-gray-700">1个团队空间</span>
              </li>
              <li class="flex items-start">
                <span class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0 font-bold">✓</span>
                <span class="text-gray-700">提供金羊帅照</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps, computed, ref, onMounted } from "vue";
import { gsap } from "gsap";

const props = defineProps({
  title: {
    type: String,
  },
  subTitle: {
    type: String,
  },
  gradientType: {
    type: String,
  },
});

// 引用DOM元素
const titleRef = ref<HTMLElement>();
const subtitleRef = ref<HTMLElement>();
const card1Ref = ref<HTMLElement>();
const card2Ref = ref<HTMLElement>();
const card3Ref = ref<HTMLElement>();

// 根据gradientType计算背景渐变类
const gradientClass = computed(() => {
  const gradients = {
    left: 'bg-gradient-to-br from-blue-900 via-black to-blue-900',
    right: 'bg-gradient-to-br from-black via-blue-900 to-black',
  };
  
  return gradients[props.gradientType as keyof typeof gradients] || gradients.left;
});

// GSAP 动画
onMounted(() => {
  // 检查所有元素是否存在
  if (!titleRef.value || !subtitleRef.value || !card1Ref.value || !card2Ref.value || !card3Ref.value) {
    return;
  }

  // 创建时间轴
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  // 标题动画
  tl.fromTo(titleRef.value, 
    { opacity: 0, y: -30 },
    { opacity: 1, y: 0, duration: 0.8 }
  )
  // 副标题动画
  .fromTo(subtitleRef.value,
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.6 },
    "-=0.4"
  )
  // 价格卡片动画 - 依次出现
  .fromTo(card1Ref.value,
    { opacity: 0, y: 50, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 0.8 },
    "-=0.2"
  )
  .fromTo(card2Ref.value,
    { opacity: 0, y: 50, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 0.8 },
    "-=0.6"
  )
  .fromTo(card3Ref.value,
    { opacity: 0, y: 50, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 0.8 },
    "-=0.6"
  );

  // 添加悬停动画
  const cards = [card1Ref.value, card2Ref.value, card3Ref.value];
  cards.forEach(card => {
    if (card) {
      // 鼠标悬停时轻微上浮
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -10, duration: 0.3, ease: "power2.out" });
      });
      
      // 鼠标离开时恢复
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
      });
    }
  });
});
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style> 