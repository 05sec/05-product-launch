  <template>
    <div id="infinite" class="w-full h-[100vh] relative overflow-hidden">
      <!-- 背景无限滚动 -->
      <div class="absolute inset-0 z-0">
        <img alt="dot-world-map-background" class="w-full h-full absolute opacity-10" src="/min_dot-world-map.webp">
        <div class="flex flex-nowrap h-[15vh] animate-scroll items-center absolute top-0">
          <img 
            v-for="logo in logos" 
            :key="`first-${logo.index}`"
            :src="logo.url" 
            :style="{ height: '10vh', width: logo.width + 'px' }"
            class="object-contain flex-shrink-0 mx-4 opacity-30"
          />
        </div>
        <div class="flex flex-nowrap h-[15vh] animate-reverse-scroll items-center absolute bottom-0 pb-6">
          <img
              v-for="logo in logos.slice().reverse()"
              :key="`third-${logo.index}`"
              :src="logo.url"
              :style="{ height: '10vh', width: logo.width + 'px' }"
              class="object-contain flex-shrink-0 mx-4 opacity-10"
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
      width: number;
    }

    const logos = ref<Logo[]>([]);

    // 预定义的 logo 文件列表 - 已转换为webp格式
    const logoFiles = [
      'logo-51cto.webp',
      'logo-antgroup.webp',
      'logo-antiddos-chinaunicom.webp',
      'logo-arthin.webp',
      'logo-bankgy.webp',
      'logo-byd.webp',
      'logo-bytedance.webp',
      'logo-caict.webp',
      'logo-casted.webp',
      'logo-cdyfy.webp',
      'logo-ceprei.webp',
      'logo-chengjiatech.webp',
      'logo-chaitin.webp',
      'logo-chinaaeri.webp',
      'logo-chinacom.webp',
      'logo-chinamobile.webp',
      'logo-chinaunicom.webp',
      'logo-chng.webp',
      'logo-cmdi.webp',
      'logo-cnetman.webp',
      'logo-coscoshipping.webp',
      'logo-csg.webp',
      'logo-cyberpeace.webp',
      'logo-dasecurity.webp',
      'logo-dbappsecurity.webp',
      'logo-digitalx.webp',
      'logo-dingxiang.webp',
      'logo-dptech.webp',
      'logo-fri.webp',
      'logo-future-sci-techcity.webp',
      'logo-geely.webp',
      'logo-h3c.webp',
      'logo-hcjyun.webp',
      'logo-hdu.webp',
      'logo-hebtu.webp',
      'logo-hilaicloud.webp',
      'logo-honda.webp',
      'logo-huawei.webp',
      'logo-icbc.webp',
      'logo-integritytech.webp',
      'logo-joynext.webp',
      'logo-kanxue.webp',
      'logo-lecangs.webp',
      'logo-lishui-big-data-development-administration-bureau.webp',
      'logo-most.gov.webp',
      'logo-mybank.webp',
      'logo-nbport.webp',
      'logo-ningbo-rail-transit.webp',
      'logo-ningbo.chinatax.webp',
      'logo-pingan.webp',
      'logo-qianxin.webp',
      'logo-qmxc.webp',
      'logo-sangfor.webp',
      'logo-sgcc.webp',
      'logo-smart-chip.webp',
      'logo-startcross.webp',
      'logo-tanovo.webp',
      'logo-tencent.webp',
      'logo-tesla.webp',
      'logo-tianfu-bank.webp',
      'logo-transfar.webp',
      'logo-wfph.webp',
      'logo-xiaopeng.webp',
      'logo-ynrcc.webp',
      'logo-yuan-info.webp',
      'logo-zdjy.webp',
      'logo-zeekr.webp',
      'logo-zj.cma.webp',
      'logo-zjenergy.webp',
      'logo-zpnsf.webp'
    ];

    // Calculate image width based on aspect ratio
    const calculateImageWidth = (imageUrl: string): Promise<number> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          // Fixed height is 10vh, calculate width based on aspect ratio
          const aspectRatio = img.width / img.height;
          const heightInPx = window.innerHeight * 0.1; // 10vh in pixels
          const widthInPx = heightInPx * aspectRatio;
          resolve(widthInPx);
        };
        img.onerror = () => {
          // Fallback width if image fails to load
          resolve(100);
        };
        img.src = imageUrl;
      });
    };

    onMounted(async () => {
      // Filter valid image files and generate logo data with calculated widths
      const logoPromises = logoFiles
        .filter(fileName => /\.(svg|webp)$/i.test(fileName))
        .map(async (fileName, index) => {
          const url = `/consumers/${fileName}`;
          const width = await calculateImageWidth(url);
          return {
            url,
            index: index + 1,
            width
          };
        });

      logos.value = await Promise.all(logoPromises);
    });
  </script>
<style scoped lang="scss">
@keyframes scroll {
  0% {
    transform: translateX(calc(-100% + 100vw));
  }
  100% {
    transform: translateX(-100vw);
  }
}

@keyframes reverse-scroll {
  0% {
    transform: translateX(-100vw);
  }
  100% {
    transform: translateX(calc(-100% + 100vw));
  }
}

.animate-scroll {
  animation: scroll 120s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
}

.animate-reverse-scroll {
  animation: reverse-scroll 120s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
}

</style>