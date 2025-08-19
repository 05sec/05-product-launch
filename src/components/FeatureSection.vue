<template>
  <section id="features" ref="sectionRef" class="py-16 bg-gradient-to-br from-black via-blue-900 to-black">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 ref="titleRef" class="text-3xl md:text-4xl font-bold text-white mb-4">凌云的优势</h2>
        <p ref="subtitleRef" class="text-xl text-gray-400 max-w-3xl mx-auto">
          专业全面、技术先进、实战驱动、稳定可靠、广泛落地
        </p>
      </div>

      <!-- 功能特性列表 -->
      <div class="space-y-20">
        <!-- 第一个特性：全面覆盖风险类型 -->
        <div ref="feature1Ref" class="flex flex-col lg:flex-row items-center gap-12">
          <!-- 图片区域 -->
          <div class="lg:w-1/2">
            <div ref="card1Ref" class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg feature-card relative overflow-hidden">
              <img src="/cardinal/bg.webp" alt="背景图片" class="absolute inset-0 w-full h-full object-cover opacity-40" />
              <div class="relative z-10">
                <div class="flex flex-col space-y-4">
                <!-- 左侧安全评估按钮 -->
                <div ref="buttons1Ref" class="flex flex-col space-y-3">
                  <div ref="button1Ref" class="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm">
                    <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center icon-animate">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    </div>
                    <span class="text-sm font-medium text-gray-700">CTF夺旗赛</span>
                  </div>
                  <div ref="button2Ref" class="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm">
                    <div class="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center icon-animate">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <span class="text-sm font-medium text-gray-700">AWD攻防赛</span>
                  </div>
                  <div ref="button3Ref" class="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm">
                    <div class="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center icon-animate">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                    </div>
                    <span class="text-sm font-medium text-gray-700">知识竞赛</span>
                  </div>
                  <div ref="button4Ref" class="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm">
                    <div class="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center icon-animate">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <span class="text-sm font-medium text-gray-700">实战演练</span>
                  </div>
                </div>
                
                <!-- 竞赛类型统计 -->
                <div ref="report1Ref" class="bg-blue-100 rounded-lg p-4">
                  <h4 class="text-sm font-semibold text-blue-800 mb-2">竞赛类型统计</h4>
                  <div class="space-y-1 text-xs text-blue-700">
                    <div>CTF夺旗赛: 45%</div>
                    <div>AWD攻防赛: 30%</div>
                    <div>知识竞赛: 25%</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          
          <!-- 文字区域 -->
          <div ref="text1Ref" class="lg:w-1/2 lg:pl-8">
            <h3 ref="title1Ref" class="text-2xl md:text-3xl font-bold text-blue-400 mb-4">实战验证，规模化运行稳定</h3>
            <p ref="desc1Ref" class="text-gray-400 mb-6 text-lg">
              经历多次赛事,充分验证平台在大规模实战环境中的稳定性与性能
            </p>
            <ul ref="list1Ref" class="space-y-3">
              <li ref="item1Ref" class="flex items-start">
                <span class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0">✓</span>
                <span class="text-gray-300">允许1400+支队伍参赛，5000+动态靶机实例部署</span>
              </li>
              <li ref="item2Ref" class="flex items-start">
                <span class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0">✓</span>
                <span class="text-gray-300">1100万+次攻击动作处理，1万+次题目附件下载</span>
              </li>
            </ul>
          </div>
        </div>

        <div ref="feature2Ref" class="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div class="lg:w-1/2">
            <div ref="card2Ref" class="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-lg feature-card relative overflow-hidden">
              <img src="/cardinal/nuclear.webp" alt="核能背景图片" class="absolute inset-0 w-full h-full object-cover opacity-20" />
              <div class="relative z-10">
                <div ref="icons2Ref" class="flex items-center justify-center space-x-4">
                  <div ref="docIconsRef" class="relative">
                    <div ref="doc1Ref" class="w-16 h-16 bg-white rounded-lg shadow-md border-2 border-gray-200 flex items-center justify-center transform rotate-12">
                      <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <div ref="doc2Ref" class="w-16 h-16 bg-white rounded-lg shadow-md border-2 border-gray-200 flex items-center justify-center transform -rotate-6 absolute top-2 left-2">
                      <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <div ref="doc3Ref" class="w-16 h-16 bg-white rounded-lg shadow-md border-2 border-blue-300 flex items-center justify-center transform rotate-3 absolute top-1 left-1">
                      <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                  </div>
                  
                  <div ref="report2Ref" class="bg-green-100 rounded-lg p-4">
                    <h4 class="text-sm font-semibold text-green-800 mb-3">技术优势</h4>
                    <div ref="standardsListRef" class="space-y-2">
                      <div ref="standard1Ref" class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <span class="text-sm text-green-700">弹性伸缩部署</span>
                      </div>
                      <div ref="standard2Ref" class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <span class="text-sm text-green-700">自动计分机制</span>
                      </div>
                      <div ref="standard3Ref" class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <span class="text-sm text-green-700">防作弊机制</span>
                      </div>
                      <div ref="standard4Ref" class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <span class="text-sm text-green-700">动态调度靶机</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div ref="text2Ref" class="lg:w-1/2 lg:pr-8">
            <h3 ref="title2Ref" class="text-2xl md:text-3xl font-bold text-green-600 mb-4">技术先进，平台智能化程度高</h3>
            <p ref="desc2Ref" class="text-gray-400 mb-6 text-lg">
              高效、自动、贴近实战的网络对抗环境
            </p>
            <ul ref="list2Ref" class="space-y-3">
              <li ref="item5Ref" class="flex items-start">
                <span class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0">✓</span>
                <span class="text-gray-300">智能化弹性伸缩部署，自动根据用户需求分配资源</span>
              </li>
              <li ref="item6Ref" class="flex items-start">
                <span class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0">✓</span>
                <span class="text-gray-300">自动计分机制，无需人工干预，实时评分</span>
              </li>
              <li ref="item7Ref" class="flex items-start">
                <span class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0">✓</span>
                <span class="text-gray-300">业务仿真技术，模拟真实业务场景</span>
              </li>
              <li ref="item8Ref" class="flex items-start">
                <span class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0">✓</span>
                <span class="text-gray-300">动态靶机分发调度</span>
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

const sectionRef = ref<HTMLElement>();
const titleRef = ref<HTMLElement>();
const subtitleRef = ref<HTMLElement>();

const feature1Ref = ref<HTMLElement>();
const card1Ref = ref<HTMLElement>();
const buttons1Ref = ref<HTMLElement>();
const button1Ref = ref<HTMLElement>();
const button2Ref = ref<HTMLElement>();
const button3Ref = ref<HTMLElement>();
const button4Ref = ref<HTMLElement>();
const report1Ref = ref<HTMLElement>();
const text1Ref = ref<HTMLElement>();
const title1Ref = ref<HTMLElement>();
const desc1Ref = ref<HTMLElement>();
const list1Ref = ref<HTMLElement>();
const item1Ref = ref<HTMLElement>();
const item2Ref = ref<HTMLElement>();
const item3Ref = ref<HTMLElement>();
const item4Ref = ref<HTMLElement>();

const feature2Ref = ref<HTMLElement>();
const card2Ref = ref<HTMLElement>();
const icons2Ref = ref<HTMLElement>();
const docIconsRef = ref<HTMLElement>();
const doc1Ref = ref<HTMLElement>();
const doc2Ref = ref<HTMLElement>();
const doc3Ref = ref<HTMLElement>();
const report2Ref = ref<HTMLElement>();
const standardsListRef = ref<HTMLElement>();
const standard1Ref = ref<HTMLElement>();
const standard2Ref = ref<HTMLElement>();
const standard3Ref = ref<HTMLElement>();
const standard4Ref = ref<HTMLElement>();
const text2Ref = ref<HTMLElement>();
const title2Ref = ref<HTMLElement>();
const desc2Ref = ref<HTMLElement>();
const list2Ref = ref<HTMLElement>();
const item5Ref = ref<HTMLElement>();
const item6Ref = ref<HTMLElement>();

onMounted(async () => {
  if (!sectionRef.value) return;

  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  
  // 注册 ScrollTrigger 插件
  gsap.registerPlugin(ScrollTrigger);

  // 主标题动画
  if (titleRef.value) {
    gsap.fromTo(titleRef.value,
      {
        y: -50,
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.value,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }

  // 副标题动画
  if (subtitleRef.value) {
    gsap.fromTo(subtitleRef.value,
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.value,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }

  // 第一个特性动画
  if (feature1Ref.value) {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: feature1Ref.value,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // 卡片动画
    if (card1Ref.value) {
      tl1.fromTo(card1Ref.value,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotationY: 15
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          ease: "back.out(1.7)"
        }
      );
    }

    // 按钮交错动画
    const buttons = [button1Ref.value, button2Ref.value, button3Ref.value, button4Ref.value];
    buttons.forEach((button, index) => {
      if (button) {
        tl1.fromTo(button,
          {
            x: -50,
            opacity: 0,
            scale: 0.8
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)"
          },
          `-=${0.4 - index * 0.1}`
        );
      }
    });

    // 报告动画
    if (report1Ref.value) {
      tl1.fromTo(report1Ref.value,
        {
          y: 30,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out"
        },
        "-=0.3"
      );
    }

    // 文字区域动画
    if (text1Ref.value) {
      tl1.fromTo(text1Ref.value,
        {
          x: 50,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        },
        "-=0.6"
      );
    }

    // 标题和描述动画
    if (title1Ref.value) {
      tl1.fromTo(title1Ref.value,
        {
          y: -30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out"
        },
        "-=0.8"
      );
    }

    if (desc1Ref.value) {
      tl1.fromTo(desc1Ref.value,
        {
          y: 20,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out"
        },
        "-=0.6"
      );
    }

    // 列表项交错动画
    const items = [item1Ref.value, item2Ref.value, item3Ref.value, item4Ref.value];
    items.forEach((item, index) => {
      if (item) {
        tl1.fromTo(item,
          {
            x: 30,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
          },
          `-=${0.4 - index * 0.1}`
        );
      }
    });
  }

  // 第二个特性动画
  if (feature2Ref.value) {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: feature2Ref.value,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // 卡片动画
    if (card2Ref.value) {
      tl2.fromTo(card2Ref.value,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotationY: -15
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          ease: "back.out(1.7)"
        }
      );
    }

    // 文档图标动画
    const docs = [doc1Ref.value, doc2Ref.value, doc3Ref.value];
    docs.forEach((doc, index) => {
      if (doc) {
        tl2.fromTo(doc,
          {
            y: -50,
            opacity: 0,
            scale: 0.5,
            rotation: index * 30
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: index === 0 ? 12 : index === 1 ? -6 : 3,
            duration: 0.6,
            ease: "back.out(1.7)"
          },
          `-=${0.5 - index * 0.1}`
        );
      }
    });

    // 标准列表动画
    if (report2Ref.value) {
      tl2.fromTo(report2Ref.value,
        {
          y: 30,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out"
        },
        "-=0.4"
      );
    }

    // 标准项交错动画
    const standards = [standard1Ref.value, standard2Ref.value, standard3Ref.value, standard4Ref.value];
    standards.forEach((standard, index) => {
      if (standard) {
        tl2.fromTo(standard,
          {
            x: 30,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
          },
          `-=${0.4 - index * 0.1}`
        );
      }
    });

    // 文字区域动画
    if (text2Ref.value) {
      tl2.fromTo(text2Ref.value,
        {
          x: -50,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        },
        "-=0.6"
      );
    }

    // 标题和描述动画
    if (title2Ref.value) {
      tl2.fromTo(title2Ref.value,
        {
          y: -30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out"
        },
        "-=0.8"
      );
    }

    if (desc2Ref.value) {
      tl2.fromTo(desc2Ref.value,
        {
          y: 20,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out"
        },
        "-=0.6"
      );
    }

    // 列表项动画
    const items2 = [item5Ref.value, item6Ref.value];
    items2.forEach((item, index) => {
      if (item) {
        tl2.fromTo(item,
          {
            x: -30,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
          },
          `-=${0.3 - index * 0.1}`
        );
      }
    });
  }
});
</script>

<style scoped>
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