<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-900 via-black to-blue-900">
    <!-- Hero Section -->
    <section class="py-20 px-4">
      <div class="container mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          网络安全实训平台
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
          集课程培训、练习训练、技能考核等功能于一体的网络安全实战培训系统
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            开始学习
          </button>
          <button class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors">
            查看课程
          </button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 px-4">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          核心功能
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">课程培训</h3>
            <p class="text-gray-300">丰富的体系化训练内容，涵盖多方面的理论基础教学</p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">练习训练</h3>
            <p class="text-gray-300">实操演练，提升网络空间攻防实战能力</p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">技能考核</h3>
            <p class="text-gray-300">支持定制化的课程设置、考试模拟</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 px-4">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          准备开始您的网络安全之旅？
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          立即注册，获得专业的网络安全培训体验
        </p>
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
          立即注册
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>

<style scoped>
/* Custom styles here */
</style>