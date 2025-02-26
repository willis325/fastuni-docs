# UI 组件库

## wot-design-uni

[`wot-design-uni`](https://wot-design-uni.pages.dev/) 组件库基于 `vue3` + `Typescript`构建，参照 `wot design` 的设计规范进行开发，提供 `70+高质量组件`，支持暗黑模式、国际化和自定义主题，旨在给开发者提供统一的 `UI` 交互，同时提高研发的开发效率。

:::warning 注意：
目前仅支持微信小程序、支付宝小程序、钉钉小程序、H5、APP平台
:::

```vue
<template>
  <view class="flex-col-center">
    <wd-img :width="180" :height="60" src="/static/logo-horizontal.svg" class="block" />
    <wd-text :text="desc" color="#64748b" class="text-base mt-4"></wd-text>
  </view>
  <wd-toast />
</<template>

<script setup>
const toast = useToast();

function showToast() {
  toast.show('Hello FastUni');
}
</script>
```

```ts
import Components from '@uni-helper/vite-plugin-uni-components';
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';

plugins: [
  Components({ 
    dirs: ['src/components'], 
    extensions: ['vue'], 
    deep: true, 
    dts: 'types/components.d.ts', 
    resolvers: [WotResolver()] 
  }),
  AutoImport({
    imports: ['vue', 'uni-app', 'pinia', { 'wot-design-uni': ['useToast'] }],
    dirs: ['src/hooks', 'src/store'],
    dts: 'types/auto-imports.d.ts',
    eslintrc: { enabled: true },
    vueTemplate: true,
    resolvers: [],
  }),
  Uni(),
]
```