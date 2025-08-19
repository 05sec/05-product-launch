<template>
  <section :class="gradientClass" class="py-8 h-[80vh]">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 ref="titleRef" class="text-3xl md:text-4xl font-bold text-white mb-4 opacity-0">立刻开始</h2>
        <p ref="subtitleRef" class="text-xl text-gray-300 max-w-3xl mx-auto opacity-0">
          在专业团队的帮助下开始您的网络安全之旅
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div ref="phoneCardRef" class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group opacity-0 transform translate-y-20">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span class="text-white text-2xl font-bold">📞</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">电话咨询</h3>
            <p class="text-gray-300 mb-4">专业客服为您解答问题</p>
<!--            换成公司电话号码-->
            <a 
              href="tel:+86-15925678603"
              class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              +86 15925678603
            </a>
          </div>
        </div>

        <!-- 微信联系 -->
        <div ref="wechatCardRef" class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group opacity-0 transform translate-y-20">
          <div class="text-center">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span class="text-white text-2xl font-bold">💬</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">微信咨询</h3>
            <div class="flex justify-center space-x-4">
              <img src="/wechat2.webp" alt="微信二维码2" class="w-20 h-20 rounded-lg border-2 border-white/30">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps, computed, ref, onMounted } from "vue";
import { gsap } from "gsap";

// Define props
interface Props {
  gradientType?: string;
}

const props = withDefaults(defineProps<Props>(), {
  gradientType: 'left'
});

// 引用DOM元素
const titleRef = ref<HTMLElement>();
const subtitleRef = ref<HTMLElement>();
const phoneCardRef = ref<HTMLElement>();
const wechatCardRef = ref<HTMLElement>();

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
  if (!titleRef.value || !subtitleRef.value || !phoneCardRef.value || !wechatCardRef.value) {
    return;
  }

  // 创建时间轴
  const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)" } });

  // 标题动画 - 旋转进入
  tl.fromTo(titleRef.value, 
    { opacity: 0, rotation: -180, scale: 0.5 },
    { opacity: 1, rotation: 0, scale: 1, duration: 1.2 }
  )
  // 副标题动画 - 弹跳进入
  .fromTo(subtitleRef.value,
    { opacity: 0, y: -100, scale: 0.8 },
    { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "bounce.out" },
    "-=0.6"
  )
  // 电话卡片动画 - 从左侧滑入并旋转
  .fromTo(phoneCardRef.value,
    { opacity: 0, x: -200, rotation: -45, scale: 0.7 },
    { opacity: 1, x: 0, rotation: 0, scale: 1, duration: 1.0 },
    "-=0.4"
  )
  // 微信卡片动画 - 从右侧滑入并旋转
  .fromTo(wechatCardRef.value,
    { opacity: 0, x: 200, rotation: 45, scale: 0.7 },
    { opacity: 1, x: 0, rotation: 0, scale: 1, duration: 1.0 },
    "-=0.8"
  );

  // 添加悬停动画 - 3D 倾斜效果
  const cards = [phoneCardRef.value, wechatCardRef.value];
  cards.forEach(card => {
    if (card) {
      // 鼠标悬停时 3D 倾斜和缩放
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { 
          rotationY: 15,
          rotationX: -5,
          scale: 1.05, 
          duration: 0.4, 
          ease: "power3.out" 
        });
      });
      
      // 鼠标离开时恢复
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { 
          rotationY: 0,
          rotationX: 0,
          scale: 1, 
          duration: 0.4, 
          ease: "power3.out" 
        });
      });
    }
  });

  // 为图标添加波浪动画
  const icons = document.querySelectorAll('.w-16.h-16');
  icons.forEach((icon, index) => {
    // 每个图标有不同的延迟，创造波浪效果
    gsap.to(icon, {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: index * 0.3 + 2
    });
  });

  // 为按钮添加脉冲光效
  const buttons = document.querySelectorAll('a, button');
  buttons.forEach(button => {
    gsap.to(button, {
      boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 3
    });
  });
});
</script>

<style scoped>
/* 添加一些微妙的动画效果 */
.group:hover .bg-white\/10 {
  background-color: rgba(255, 255, 255, 0.2);
}

/* 确保图片在暗色背景下清晰可见 */
img {
  filter: brightness(1.1) contrast(1.1);
}
</style> 