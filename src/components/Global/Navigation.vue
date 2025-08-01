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
  { text: "凌云竞赛平台", href: "/competition" },
  { text: "实训平台", href: "/training" },
  { text: "测试页面", href: "/train" },
  { text: "定价方案", href: "/price" },
];

const isMenuOpen = ref(false);
const isClient = ref(false);

const isActive = (href: string) => {
  // 在服务端渲染或客户端未准备好时，默认不激活任何链接
  if (!isClient.value) return false;
  
  const currentPath = window.location.pathname;
  
  // 对于首页链接
  if (href === '/') {
    return currentPath === '/';
  }
  
  // 对于普通路径，使用精确匹配
  return currentPath === href;
};

const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  const button = document.getElementById('mobile-menu-button');
  if (button) {
    button.setAttribute('aria-expanded', isMenuOpen.value.toString());
  }
};

const handleNavigation = (href: string) => {
  // 对于所有页面，使用正常导航
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



onMounted(async () => {
  // 等待下一个 tick 确保 DOM 完全渲染
  await nextTick();
  
  // 标记客户端已准备好
  isClient.value = true;
  
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleKeydown);
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleKeydown);
  window.removeEventListener('resize', handleResize);
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