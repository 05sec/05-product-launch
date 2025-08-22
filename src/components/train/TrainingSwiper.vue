<template>
  <section ref="sectionRef" class="py-16 bg-gradient-to-br from-black via-blue-900 to-black">
    <swiper
        :speed="600"
        :parallax="true"
        :pagination="{
      clickable: true,
    }"
        :navigation="true"
        :modules="modules"
        class="h-[80vh] w-4/5 mt-10"
    >
      <div
          slot="container-start"
          class="absolute left-0 top-0 w-[130%] h-full bg-cover bg-center"
          :style="{
        'background-image': 'url(/train/课程中心.webp)',
      }"
          data-swiper-parallax="-23%"
      ></div>
      <swiper-slide>
        <div class="flex flex-col justify-center items-center text-center px-[10%] text-white relative z-10">
          <div class="text-5xl font-bold mb-4 text-shadow-lg pt-6" data-swiper-parallax="-300">
            网络安全基础培训
          </div>
          <div class="text-2xl mb-8 text-shadow-md" data-swiper-parallax="-200">
            基础理论课程
          </div>
          <div class="text-lg leading-relaxed max-w-4xl text-shadow-md" data-swiper-parallax="-100">
            <p>
              提供全面的网络安全基础知识培训，涵盖网络协议、加密技术、安全架构等核心理论内容。
              通过系统化的课程设置，帮助学员建立扎实的网络安全理论基础，为后续的实战训练奠定基础。
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex flex-col justify-center items-center text-center px-[10%] text-white relative z-10">
          <div class="text-5xl font-bold mb-4 text-shadow-lg pt-6" data-swiper-parallax="-300">
            实战技能训练
          </div>
          <div class="text-2xl mb-8 text-shadow-md" data-swiper-parallax="-200">
            攻防演练
          </div>
          <div class="text-lg leading-relaxed max-w-4xl text-shadow-md" data-swiper-parallax="-100">
            <p>
              基于真实场景的网络安全攻防演练，包括渗透测试、漏洞挖掘、应急响应等实战技能训练。
              通过模拟真实攻击环境，让学员在安全可控的条件下进行实战练习，提升攻防实战能力。
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex flex-col justify-center items-center text-center px-[10%] text-white relative z-10">
          <div class="text-5xl font-bold mb-4 text-shadow-lg pt-6" data-swiper-parallax="-300">
            技能考核认证
          </div>
          <div class="text-2xl mb-8 text-shadow-md" data-swiper-parallax="-200">
            能力评估
          </div>
          <div class="text-lg leading-relaxed max-w-4xl text-shadow-md" data-swiper-parallax="-100">
            <p>
              提供专业的技能考核和认证体系，通过理论考试和实操考核相结合的方式，
              全面评估学员的网络安全技能水平，颁发相应的能力认证证书。
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Parallax, Pagination, Navigation } from 'swiper/modules';

  const modules = [Parallax, Pagination, Navigation];
</script>

<style scoped>
/* 添加渐变遮罩 */
.swiper-slide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%);
  z-index: -1;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .swiper-slide > div > div:first-child {
    @apply text-3xl;
  }
  
  .swiper-slide > div > div:nth-child(2) {
    @apply text-xl;
  }
  
  .swiper-slide > div > div:last-child {
    @apply text-base;
  }
  
  .swiper-slide > div {
    @apply px-[5%];
  }
}
</style> 