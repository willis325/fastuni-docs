<script setup>
 import DefaultTheme from 'vitepress/theme';
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-bottom>
      <div class="busuanzi-container">
        <span id="busuanzi_container_site_pv"> 访问量<span id="busuanzi_value_site_pv"></span>次 </span>
        <span id="busuanzi_container_site_uv"> 访客数<span id="busuanzi_value_site_uv"></span>人 </span>
        <span id="busuanzi_container_page_pv"> 阅读量<span id="busuanzi_value_page_pv"></span>次 </span>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped>
  .busuanzi-container {
    max-width: 1152px;
    margin: 0 auto;
    font-size: 14px;
    position: relative;
    top: -30px;
    z-index: 10;
    color: var(--vp-c-text-2);
    #busuanzi_container_site_uv {
      margin: 0 8px;
    }
  }
</style>