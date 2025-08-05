<script setup lang="ts">
import {defineProps, ref} from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

  interface Competition {
    title: string;
    image: string;
    summary: string;
  }

  const props = defineProps({
    title: {
      type: String,
      default: '承办的比赛',
    },
    subtitle: {
      type: String,
      default: '滚动展示,左右带蒙版效果',
    },
    competitions: {
      type: Array as () => Competition[],
      default: () => [
        {
          title: "梦想·凌武杯",
          image: "/competition/梦想凌武杯.webp",
          summary: "网络安全技能竞赛，培养和选拔优秀的安全人才"
        },
        {
          title: "陕西省职业技能竞赛",
          image: "/competition/陕西省职业技能竞赛.webp",
          summary: "省级职业技能大赛，提升行业技能水平"
        },
        {
          title: "软件供应链安全竞赛",
          image: "/competition/软件供应链安全竞赛.webp",
          summary: "专注于软件供应链安全，保障软件生态安全"
        },
        {
          title: "AntCTF",
          image: "/competition/AntCTF.webp",
          summary: "CTF夺旗赛，考验参赛者的安全技能和团队协作"
        },
        {
          title: "CCB网络安全竞赛",
          image: "/competition/ccb.webp",
          summary: "银行系统网络安全竞赛，保障金融安全"
        },
        {
          title: "天一永安杯",
          image: "/competition/天一永安杯.webp",
          summary: "企业级安全竞赛，推动行业安全发展"
        },
        {
          title: "振兴杯",
          image: "/competition/振兴杯.webp",
          summary: "青年技能竞赛，激发青年创新活力"
        },
        {
          title: "东安商密杯",
          image: "/competition/东安商密杯.webp",
          summary: "商用密码应用竞赛，推广密码技术应用"
        },
        {
          title: "全国行业职业技能竞赛",
          image: "/competition/全国行业职业技能竞赛.webp",
          summary: "国家级职业技能大赛，引领行业发展"
        },
        {
          title: "GeekCon",
          image: "/competition/GeekCon.webp",
          summary: "极客大会，汇聚技术精英，分享前沿技术"
        },
        {
          title: "矩阵杯",
          image: "/competition/矩阵杯.webp",
          summary: "矩阵式安全竞赛，多维度考验安全能力"
        }
      ]
    },
    showViewAll: {
      type: Boolean,
      default: true
    }
  });
</script>

<template>
  <section class="py-16 bg-gradient-to-br from-blue-900 via-black to-blue-900">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">{{ props.title }}</h2>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">
          {{ props.subtitle }}
        </p>
      </div>
      
      <div>
        <Swiper
          ref="swiperRef"
          :modules="[EffectCoverflow, Navigation, Autoplay]"
          :effect="'coverflow'"
          :grab-cursor="true"
          :centered-slides="true"
          :slides-per-view="3"
          :loop="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :coverflow-effect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }"
          :navigation="true"
          class="w-full"
        >
        <SwiperSlide
          v-for="competition in props.competitions"
          :key="competition.title"
          class="w-80"
        >
          <div class="rounded-lg overflow-hidden relative h-64">
            <img 
              :src="competition.image" 
              :alt="competition.title"
              class="absolute inset-0 w-full h-full object-cover -z-10"
            />
            <!-- 蒙版遮罩 -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent -z-5"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h3 class="text-xl font-bold mb-3 text-white">{{ competition.title }}</h3>
              <p class="text-gray-300 text-sm">
                {{ competition.summary }}
              </p>
            </div>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>
      
      <div v-if="props.showViewAll" class="mt-12 text-center">
        <a href="/ministries" class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-white hover:bg-white hover:text-gray-900 rounded-md shadow-sm transition-colors">
          查看更多
        </a>
      </div>
    </div>
  </section>
</template>
