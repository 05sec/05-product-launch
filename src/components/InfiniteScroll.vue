  <template>
    <div id="infinite" class="w-full h-[100vh] relative overflow-hidden">
      <!-- 背景无限滚动 -->
      <div class="absolute inset-0 z-0">
        <img alt="dot-world-map-background" class="w-full h-full absolute opacity-10" src="/min_dot-world-map.png">
        <div class="flex flex-nowrap w-[30vh] animate-scroll items-center absolute top-0">
          <img 
            v-for="logo in logos" 
            :key="`first-${logo.index}`"
            :src="logo.url" 
            class="h-full w-auto object-contain flex-shrink-0 mx-4 opacity-30"
          />
        </div>
        <div class="flex flex-nowrap w-[30vh] animate-reverse-scroll items-center absolute bottom-0">
          <img
              v-for="logo in logos.slice().reverse()"
              :key="`third-${logo.index}`"
              :src="logo.url"
              class="h-full w-auto object-contain flex-shrink-0 mx-4 opacity-10"
          />
        </div>
      </div>
      
      <!-- 蒙版遮罩 -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 z-10"></div>
      
      <!-- 主要内容 -->
      <div class="relative z-20 h-full flex flex-col justify-center items-center px-4">
        <!-- 标题 -->
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 mt-8">合作伙伴</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            合作共赢，安全同行
          </p>
        </div>
        
        <!-- 数据统计 -->
        <div class="flex justify-between mb-8 max-w-4xl mx-auto w-1/2">
          <div class="text-center">
            <div class="text-gray-800 text-sm md:text-base mb-2">服务客户</div>
            <div class="text-2xl md:text-3xl font-bold text-gray-900">100+</div>
          </div>
          <div class="text-center">
            <div class="text-gray-800 text-sm md:text-base mb-2">安全认证</div>
            <div class="text-2xl md:text-3xl font-bold text-gray-900">5+项</div>
          </div>
          <div class="text-center">
            <div class="text-gray-800 text-sm md:text-base mb-2">客户好评率</div>
            <div class="text-2xl md:text-3xl font-bold text-gray-900">99.9%</div>
          </div>
        </div>
        
        <!-- 文案内容 -->
        <div class="text-center max-w-4xl mx-auto">
          <p class="text-lg md:text-xl text-gray-900 leading-relaxed">
            我们与各行业领军企业合作，共同应对智联网时代的安全挑战。凌武科技坚持合作共赢理念，为客户提供领先的安全技术与解决方案，打造坚实的安全生态。
          </p>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
    import { ref, onMounted } from 'vue';

    interface Logo {
      url: string;
      index: number;
    }

    const logos = ref<Logo[]>([]);

    // 预定义的 logo 文件列表
    const logoFiles = [
      'logo-huawei.png',
      'logo-tencent.png',
      'logo-byd.png',
      'logo-tesla.png',
      'logo-geely.png',
      'logo-xiaopeng.png',
      'logo-zeekr.png',
      'logo-honda.png',
      'logo-icbc.png',
      'logo-pingan.png',
      'logo-mybank.png',
      'logo-chinamobile.png',
      'logo-chinaunicom.png',
      'logo-chinacom.png',
      'logo-sgcc.png',
      'logo-qianxin.png',
      'logo-sangfor.png',
      'logo-bytedance.png',
      'logo-antgroup.png',
      'logo-joynext.png',
      'logo-h3c.png',
      'logo-hdu.png',
      'logo-kanxue.png',
      'logo-chaitin.png',
      'logo-casted.png',
      'logo-caict.png',
      'logo-cgnpc.jpg',
      'logo-coscoshipping.png',
      'logo-csg.png',
      'logo-cyberpeace.jpg',
      'logo-dasecurity.jpg',
      'logo-dbappsecurity.png',
      'logo-dingxiang.png',
      'logo-dptech.jpg',
      'logo-eken.svg',
      'logo-fri.png',
      'logo-future-sci-techcity.png',
      'logo-geely.png',
      'logo-hcjyun.png',
      'logo-hebtu.png',
      'logo-hilaicloud.webp',
      'logo-integritytech.png',
      'logo-lecangs.png',
      'logo-lishui-big-data-development-administration-bureau.png',
      'logo-most.gov.png',
      'logo-mybank.png',
      'logo-nbport.png',
      'logo-ningbo-rail-transit.png',
      'logo-ningbo.chinatax.png',
      'logo-pingan.png',
      'logo-qmxc.png',
      'logo-sangfor.png',
      'logo-sgcc.png',
      'logo-smart.svg',
      'logo-smart-chip.jpg',
      'logo-startcross.png',
      'logo-style3d.svg',
      'logo-tanovo.png',
      'logo-tesla.png',
      'logo-tianfu-bank.jpg',
      'logo-transfar.png',
      'logo-wfph.png',
      'logo-xiaopeng.png',
      'logo-ynrcc.jpg',
      'logo-zdjy.png',
      'logo-zeekr.png',
      'logo-zj.cma.png',
      'logo-zjenergy.png',
      'logo-zpnsf.png'
    ];

    onMounted(() => {
      // 过滤有效的图片文件并生成 logo 数据
      logos.value = logoFiles
        .filter(fileName => /\.(png|jpg|jpeg|svg|webp)$/i.test(fileName))
        .map((fileName, index) => ({
          url: `/consumers/${fileName}`,
          index: index + 1
        }));
    });
  </script>
<style scoped lang="scss">
@keyframes scroll {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes reverse-scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-scroll {
  animation: scroll 20s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
}

.animate-reverse-scroll {
  animation: reverse-scroll 20s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
}

</style>