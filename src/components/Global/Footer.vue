<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8">
    <div class="container">
      <div class="flex flex-col md:flex-row md:justify-between gap-8">
        <div class="md:w-1/2 flex flex-col gap-6">
          <div>
            <img src="/logo.webp" class="h-12 mb-4" alt="logo"/>
            <p class="text-gray-300 text-sm mb-2">凌武科技——让数据更安全，让安全更智能。</p>
          </div>
          <div class="flex gap-6 mt-2 flex-col">
            <div 
              v-for="link in socialLinks" 
              :key="link.name"
              class="flex items-center gap-2 hover:text-primary-400 transition-colors cursor-pointer"
            >
              <span class="w-6 h-6 flex items-center justify-center">
                <Icons :name="link.iconName" :size="24" />
              </span>
              <span class="text-xs">{{ link.info }}</span>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 flex flex-col gap-6">
          <div class="mt-4">
            <div class="flex flex-row justify-center items-center gap-8 flex-col">
              <div class="flex flex-col items-center">
                <img src="/wechat1.webp" alt="微信1二维码" class="w-24 h-24 rounded shadow" />
                <span class="text-xs text-gray-400 mt-2">关注凌武科技微信公众号，获取最新资讯</span>
              </div>
              <div class="flex flex-col items-center">
                <img src="/wechat2.webp" alt="微信2二维码" class="w-24 h-24 rounded shadow" />
                <span class="text-xs text-gray-400 mt-2">微信扫描二维码，联系我们</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400 text-sm relative">
        <p>&copy; {{year}} 凌武科技有限公司</p>
        <p class="mt-2">浙ICP备2022037215号</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Icons from '../UI/Icons.vue';

const now = new Date()
const year = now.getFullYear()

// Define social links data
const socialLinks = [
  { 
    name: "WeChat",
    info: "凌武科技",
    iconName: "wechat"
  },
  {
    name: "Email",
    info: "contact@lwsec.cn",
    iconName: "email"
  },
  {
    name: "Location",
    info: "浙江省杭州市上城区钱江路509号中国元谷·杭港科技大厦501室",
    iconName: "location"
  }
];
</script>

<style scoped>
/* Footer specific styles can be added here if needed */
</style> 