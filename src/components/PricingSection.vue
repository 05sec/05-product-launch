<template>
  <section class="py-16 bg-gradient-to-br from-blue-900 via-black to-blue-900">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">选择适合您的方案</h2>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">为不同规模的团队提供灵活的价格方案，助力您的业务发展</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div class="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-500 transition-all duration-300">
          <div class="p-8">
            <div class="text-center mb-6">
              <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span class="text-gray-600 font-bold text-lg">C</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Sandbox</h3>
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
        <div class="bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden hover:shadow-2xl hover:border-blue-500 transition-all duration-300 relative">
          <div class="p-8">
            <!-- 图标和标题 -->
            <div class="text-center mb-6">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span class="text-blue-600 font-bold text-lg">C</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
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
        <div class="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-500 transition-all duration-300">
          <div class="p-8">
            <!-- 图标和标题 -->
            <div class="text-center mb-6">
              <div class="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span class="text-white font-bold text-lg">B</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Team</h3>
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
</script>

<style scoped>
/* 自定义样式 */
.container {
  max-width: 1200px;
}

/* 悬停效果 */
.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style> 