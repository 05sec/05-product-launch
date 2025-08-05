<template>
  <section id="features" class="py-16 bg-gradient-to-br from-black via-blue-900 to-black">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">特色功能</h2>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">
          凌云竞赛平台的核心功能与特色
        </p>
      </div>

      <!-- 功能特性列表 -->
      <div class="space-y-20">
        <!-- 第一个特性：全面覆盖风险类型 -->
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <!-- 图片区域 -->
          <div class="lg:w-1/2">
            <div class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg feature-card relative overflow-hidden">
              <img src="/bg.webp" alt="背景图片" class="absolute inset-0 w-full h-full object-cover opacity-40" />
              <div class="relative z-10">
                <div class="flex flex-col space-y-4">
                <!-- 左侧安全评估按钮 -->
                <div class="flex flex-col space-y-3">
                  <div class="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm">
                    <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center icon-animate">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <span class="text-sm font-medium text-gray-700">这是优点</span>
                  </div>
                  <div class="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm">
                    <div class="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center icon-animate">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                      </svg>
                    </div>
                    <span class="text-sm font-medium text-gray-700">这是优点</span>
                  </div>
                  <div class="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm">
                    <div class="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center icon-animate">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <span class="text-sm font-medium text-gray-700">这是优点</span>
                  </div>
                  <div class="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm">
                    <div class="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center icon-animate">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                    </div>
                    <span class="text-sm font-medium text-gray-700">这是优点</span>
                  </div>
                </div>
                
                <!-- 风险评测报告 -->
                <div class="bg-blue-100 rounded-lg p-4">
                  <h4 class="text-sm font-semibold text-blue-800 mb-2">风险评测报告</h4>
                  <div class="space-y-1 text-xs text-blue-700">
                    <div>注入风险: 20</div>
                    <div>幻觉风险: 12</div>
                    <div>RAG风险: 5</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          
          <!-- 文字区域 -->
          <div class="lg:w-1/2 lg:pl-8">
            <h3 class="text-2xl md:text-3xl font-bold text-blue-400 mb-4">全面覆盖风险类型</h3>
            <p class="text-gray-400 mb-6 text-lg">
              支持对生成式人工智能进行全方位多角度的风险评测
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0">✓</span>
                <span class="text-gray-300">提供模型输出内容安全评测</span>
              </li>
              <li class="flex items-start">
                <span class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0">✓</span>
                <span class="text-gray-300">支持对模型进行注入攻击评测</span>
              </li>
              <li class="flex items-start">
                <span class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0">✓</span>
                <span class="text-gray-300">提供模型隐私安全评测</span>
              </li>
              <li class="flex items-start">
                <span class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0">✓</span>
                <span class="text-gray-300">支持模型幻觉评测</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 第二个特性：严格遵循行业标准 -->
        <div class="flex flex-col lg:flex-row-reverse items-center gap-12">
          <!-- 图片区域 -->
          <div class="lg:w-1/2">
            <div class="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-lg feature-card relative overflow-hidden">
              <img src="/nuclear.webp" alt="核能背景图片" class="absolute inset-0 w-full h-full object-cover opacity-20" />
              <div class="relative z-10">
                <div class="flex items-center justify-center space-x-4">
                  <!-- 重叠的文档图标 -->
                  <div class="relative">
                    <div class="w-16 h-16 bg-white rounded-lg shadow-md border-2 border-gray-200 flex items-center justify-center transform rotate-12">
                      <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <div class="w-16 h-16 bg-white rounded-lg shadow-md border-2 border-gray-200 flex items-center justify-center transform -rotate-6 absolute top-2 left-2">
                      <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <div class="w-16 h-16 bg-white rounded-lg shadow-md border-2 border-blue-300 flex items-center justify-center transform rotate-3 absolute top-1 left-1">
                      <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                  </div>
                  
                  <!-- 行业标准列表 -->
                  <div class="bg-green-100 rounded-lg p-4">
                    <h4 class="text-sm font-semibold text-green-800 mb-3">展示优点</h4>
                    <div class="space-y-2">
                      <div class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <span class="text-sm text-green-700">这是优点</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <span class="text-sm text-green-700">这是优点</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <span class="text-sm text-green-700">这是优点</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <span class="text-sm text-green-700">这是优点</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 文字区域 -->
          <div class="lg:w-1/2 lg:pr-8">
            <h3 class="text-2xl md:text-3xl font-bold text-green-600 mb-4">严格遵循行业标准</h3>
            <p class="text-gray-400 mb-6 text-lg">
              严格依照相关法规标准开展评测，同时满足企业个性化标准设定需求
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0">✓</span>
                <span class="text-gray-300">符合《生成式人工智能服务安全基本要求》</span>
              </li>
              <li class="flex items-start">
                <span class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0">✓</span>
                <span class="text-gray-300">支持自定义标准配置</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

onMounted(() => {
  // 添加滚动动画
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }
  );

  const element = document.querySelector('#features');
  if (element) {
    observer.observe(element);
  }
});
</script>

<style scoped>
.feature-enter {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.feature-enter-active {
  opacity: 1;
  transform: translateY(0);
}

/* 添加悬停效果 */
.feature-card {
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* 图标动画 */
.icon-animate {
  transition: all 0.3s ease;
}

.icon-animate:hover {
  transform: scale(1.1);
}
</style> 