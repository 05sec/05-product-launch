<template>
  <!-- WeChat Icon Component -->
  <svg v-if="name === 'wechat'" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size">
    <path d="M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z" fill="currentColor"/>
  </svg>

  <!-- Email Icon Component -->
  <svg v-else-if="name === 'email'" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size">
    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM40 200V194l356.2 178.1L40 550.6V200zm0 568V568.6l356.2-178.5L928 568.6V768H40zm40-32h848V194L512 410.1 80 194v542z" fill="currentColor"/>
  </svg>

  <!-- Location Icon Component -->
  <svg v-else-if="name === 'location'" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size">
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" fill="currentColor"/>
    <path d="M512 336c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" fill="currentColor"/>
  </svg>

  <!-- Menu Icon Component (Hamburger) -->
  <svg v-else-if="name === 'menu'" class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" :width="size" :height="size" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>

  <!-- Lock Icon Component -->
  <svg v-else-if="name === 'lock'" class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" :width="size" :height="size">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
  </svg>

  <!-- Shield Check Icon Component -->
  <svg v-else-if="name === 'shield-check'" class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" :width="size" :height="size">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
  </svg>

  <!-- Book Open Icon Component -->
  <svg v-else-if="name === 'book-open'" class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" :width="size" :height="size">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
  </svg>

  <!-- Lightning Bolt Icon Component -->
  <svg v-else-if="name === 'lightning'" class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" :width="size" :height="size">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>

  <!-- Document Text Icon Component -->
  <svg v-else-if="name === 'document'" class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" :width="size" :height="size">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
  </svg>

  <!-- Check Icon Component -->
  <svg v-else-if="name === 'check'" class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" :width="size" :height="size">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
  </svg>
</template>

<script setup lang="ts">
// Define props for the icon component
defineProps({
  name: {
    type: String,
    required: true,
    validator: (value: string) => ['wechat', 'email', 'location', 'menu', 'lock', 'shield-check', 'book-open', 'lightning', 'document', 'check'].includes(value)
  },
  size: {
    type: [String, Number],
    default: 24
  }
});
</script>

<style scoped>
.icon {
  display: inline-block;
  vertical-align: middle;
}
</style> 