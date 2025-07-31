<template>
  <nav class="hidden lg:block">
    <ul class="flex items-center space-x-6">
      <li v-for="item in navItems" :key="item.href">
        <button
          type="button"
          @click="handleNavigation(item.href)"
          :class="[
            'text-base font-medium transition-colors hover:text-primary-600 cursor-pointer',
            isActive(item.href) 
              ? 'text-primary-600' 
              : isDark ? 'text-gray-700' : 'text-accent-50'
          ]"
          :aria-current="isActive(item.href) ? 'page' : undefined"
        >
          {{ item.text }}
        </button>
      </li>
    </ul>
  </nav>

  <button
    id="mobile-menu-button"
    :class="[
      'lg:hidden p-2 focus:outline-none transition-colors relative',
      isDark ? 'text-gray-900' : 'text-white'
    ]"
    aria-label="Toggle Menu"
    aria-expanded="false"
    @click="toggleMobileMenu"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>

  <!-- Mobile Menu Dropdown -->
  <div
    id="mobile-menu"
    :class="[
      'absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 transform origin-top transition-transform duration-200 ease-out lg:hidden z-50',
      isMenuOpen ? 'scale-y-100' : 'scale-y-0'
    ]"
    role="menu"
    aria-labelledby="mobile-menu-button"
  >
    <div class="px-4 py-6">
      <div class="grid grid-cols-2 gap-3">
        <button
          v-for="item in navItems"
          :key="item.href"
          type="button"
          @click="() => { handleNavigation(item.href); handleNavClick(); }"
          :class="[
            'block px-4 py-3 text-sm font-medium rounded-lg transition-colors text-center border cursor-pointer',
            isActive(item.href)
              ? 'bg-primary-50 text-primary-600 border-primary-200'
              : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600 border-transparent'
          ]"
          role="menuitem"
          :aria-current="isActive(item.href) ? 'page' : undefined"
        >
          {{ item.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

interface Props {
  isDark?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isDark: false
});

const navItems = [
  { text: "首页", href: "/" },
  { text: "凌云竞赛平台", href: "/#competition-platform" },
  { text: "实训平台", href: "/#training-platform" },
  { text: "联系我们", href: "/#partners" },
];

const isMenuOpen = ref(false);
const currentHash = ref('');
const isUserScrolling = ref(false);
const isClient = ref(false);

const isActive = (href: string) => {
  // 在服务端渲染或客户端未准备好时，默认不激活任何链接
  if (!isClient.value) return false;
  
  const currentPath = window.location.pathname;
  
  // 对于首页链接，当在首页且没有hash时激活
  if (href === '/') {
    return currentPath === '/' && currentHash.value === '';
  }
  
  // 对于首页的锚点链接
  if (href.startsWith('/#')) {
    return currentPath === '/' && currentHash.value === href.substring(1);
  }
  
  // 对于普通路径
  return currentPath === href || (href !== "/" && currentPath.startsWith(href));
};

const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  const button = document.getElementById('mobile-menu-button');
  if (button) {
    button.setAttribute('aria-expanded', isMenuOpen.value.toString());
  }
};

const handleNavigation = (href: string) => {
  // 标记为用户主动导航，避免滚动检测干扰
  isUserScrolling.value = true;
  
  // 如果是首页链接，滚动到顶部
  if (href === '/') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    currentHash.value = '';
    history.replaceState(null, '', '/');
    
    // 滚动完成后恢复检测
    setTimeout(() => {
      isUserScrolling.value = false;
    }, 1000);
    return;
  }
  
  // 如果是锚点链接，滚动到对应部分
  if (href.startsWith('/#')) {
    const targetId = href.substring(2); // 移除 '/#'
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80; // 固定头部高度
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      currentHash.value = `#${targetId}`;
      history.replaceState(null, '', href);
      
      // 滚动完成后恢复检测
      setTimeout(() => {
        isUserScrolling.value = false;
      }, 1000);
    }
    return;
  }
  
  // 对于其他页面，使用正常导航
  window.location.href = href;
};

const handleNavClick = () => {
  if (isMenuOpen.value) {
    setTimeout(() => {
      isMenuOpen.value = false;
      const button = document.getElementById('mobile-menu-button');
      if (button) {
        button.setAttribute('aria-expanded', 'false');
      }
    }, 100);
  }
};

const handleClickOutside = (e: Event) => {
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  
  if (isMenuOpen.value && 
      mobileMenu && 
      mobileMenuButton && 
      !mobileMenu.contains(e.target as Node) && 
      !mobileMenuButton.contains(e.target as Node)) {
    toggleMobileMenu();
  }
};

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isMenuOpen.value) {
    toggleMobileMenu();
  }
};

const handleResize = () => {
  if (window.innerWidth >= 1024 && isMenuOpen.value) {
    toggleMobileMenu();
  }
};

const updateHash = () => {
  currentHash.value = window.location.hash;
};

// 节流函数
const throttle = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  let lastExecTime = 0;
  return function (this: any, ...args: any[]) {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

// 监听滚动事件来更新 hash（当用户滚动到不同部分时）
const handleScroll = () => {
  // 如果用户正在主动导航，跳过检测
  if (isUserScrolling.value) {
    return;
  }
  
  const sections = ['competition-platform', 'training-platform', 'partners'];
  const headerHeight = 80; // 固定头部高度
  const offset = headerHeight + 20; // 额外偏移量
  
  // 检查是否在页面顶部
  if (window.scrollY < 200) {
    if (currentHash.value !== '') {
      currentHash.value = '';
      history.replaceState(null, '', '/');
    }
    return;
  }
  
  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      // 当元素顶部接近视口顶部时激活
      if (rect.top <= offset && rect.bottom >= offset) {
        if (currentHash.value !== `#${section}`) {
          currentHash.value = `#${section}`;
          history.replaceState(null, '', `/#${section}`);
        }
        break;
      }
    }
  }
};

onMounted(async () => {
  // 等待下一个 tick 确保 DOM 完全渲染
  await nextTick();
  
  // 标记客户端已准备好
  isClient.value = true;
  
  // 初始化当前 hash
  currentHash.value = window.location.hash;
  
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleKeydown);
  window.addEventListener('resize', handleResize);
  window.addEventListener('hashchange', updateHash);
  
  window.addEventListener('scroll', throttle(handleScroll, 100));
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleKeydown);
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('hashchange', updateHash);
  window.removeEventListener('scroll', throttle(handleScroll, 100));
});
</script>

<style scoped>
/* Mobile menu button animation */
#mobile-menu-button:hover svg {
  transform: scale(1.1);
}

#mobile-menu-button svg {
  transition: transform 0.2s ease;
}

/* Smooth hover effects */
#mobile-menu a {
  transition: all 0.15s ease;
}

/* Active state styling */
#mobile-menu a[aria-current="page"] {
  font-weight: 600;
}
</style> 