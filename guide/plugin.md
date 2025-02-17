# 插件篇

## Uni Helper 相关

`FastUni` 借助 [Uni Helper](https://uni-helper.js.org/) 团队开发的优秀插件，让 `UniApp` 的开发更加简洁高效。在此向 `Uni Helper` 团队的卓越贡献致以诚挚的感谢！

### vite-plugin-uni-pages
[@uni-helper/vite-plugin-uni-pages](https://uni-helper.js.org/vite-plugin-uni-pages) 基于文件系统的约定式路由。在 `src/pages` 目录下创建的 `.vue` 文件代表着一个路由，无需手动配置路由，插件会自动生成对应的 `pages.json` 文件。

> 注意：请勿直接修改 `pages.json` 文件，该文件会自动生成，如需修改全局配置，请前往 `pages.config.ts` 文件中修改。如需修改页面配置，请前往 `.vue` 文件修改 `route` 代码块配置。

配置示例，详细配置请前往 [@uni-helper/vite-plugin-uni-pages](https://uni-helper.js.org/vite-plugin-uni-pages) 查看。
```ts
import UniPages from '@uni-helper/vite-plugin-uni-pages';

plugins: [
  UniPages({ 
    dts: 'types/uni-pages.d.ts', 
    exclude: ['**/components/**/**.*'], 
    routeBlockLang: 'json5',          // 自定义块语言，默认值 'json5'
    homePage: 'pages/index/index',    // 默认路由入口， 默认值 'pages/index' || 'pages/index/index'
    dir: 'src/pages',                 // 主包，默认值 'src/pages'
    subPackages: ['src/pages-sub']    // 分包
  }),
  Uni()
]
```
```vue
<!-- 使用 type="home" 属性设置首页，其他页面默认为 page -->
<route lang="json5" type="home">
{
  style: { 
    navigationBarTitleText: 'FastUni', 
    navigationStyle: 'custom'
  },
}
</route>

<template>
  <view class="flex-col-center h-100vh">
    <FastUni desc="快速开发 uni-app 模板框架" />
  </view>
</template>

```
```vue
<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '我的',
  },
}
</route>

<template>
  <view class=""></view>
</template>

```

__pages.config.ts__ 详细配置可参考 [uni-app官方文档](https://uniapp.dcloud.net.cn/collocation/pages.html)。
```ts
import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages';

export default defineUniPages({
  globalStyle: {
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'FastUni',
    navigationBarBackgroundColor: '#F8F8F8',
    backgroundColor: '#F8F8F8',
  },
});
``` 
---

### vite-plugin-uni-manifest
[@uni-helper/vite-plugin-uni-manifest](https://uni-helper.js.org/vite-plugin-uni-manifest) 使用 `TypeScript` 编写 `uni-app` 的 `manifest.json`

> 注意：请勿直接修改 `manifest.json` 文件，该文件会自动生成，如需修改配置，请前往 `manifest.config.ts` 文件中修改。

`manifest.config.ts` 配置文件，详见 `uni-app` 官方文档的 [manifest.json 应用配置](https://uniapp.dcloud.net.cn/collocation/manifest.html)。


### vite-plugin-uni-layouts
[@uni-helper/vite-plugin-uni-layouts](https://uni-helper.js.org/vite-plugin-uni-layouts) 可定制的布局框架，在 `src/layouts` 文件夹下，所有的 `.vue` 文件都会自动被视为布局文件。默认的布局文件名为 `default`，路径为 `src/layouts/default.vue`。

如果你需要使用其他布局，可以在 .vue 文件中通过 route 代码块来指定所需的布局。例如，以下示例展示了如何使用名为 empty 的布局：

```vue
<!-- layout: empty 指定 src/layouts/empty.vue 作为布局模板，默认为 default -->
<route lang="json5">
{
  layout: 'empty',
}
</route>
```

```vue
<!-- src/layouts/empty.vue-->
<template>
  <view>
    <slot />
  </view>
</template>
```


### vite-plugin-uni-components
[@uni-helper/vite-plugin-uni-components](https://uni-helper.js.org/vite-plugin-uni-components) 自动扫描并导入 `src/components` 目录下的 `.vue` 组件，无需手动 `import` 导入。

```ts
import Components from '@uni-helper/vite-plugin-uni-components';
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers';

plugins: [
  Components({ 
    dirs: ['src/components'], 
    extensions: ['vue'], 
    deep: true, 
    dts: 'types/components.d.ts', 
    resolvers: [WotResolver()] 
  }),
  Uni(),
]
```


## Vite 相关

### unplugin-auto-import
[unplugin-auto-import/vite](https://github.com/unplugin/unplugin-auto-import) 自动导入 `Vue`、`uni-app`、`pinia`、`src/hooks`、`src/store` 等常用模块或工具库，减少手动导入的重复代码，提高开发效率。

```ts
import AutoImport from 'unplugin-auto-import/vite'

plugins: [
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

```vue
<script setup lang="ts">
const toast = useToast();
const logo = ref("fastuni");

onLaunch(() => {
  console.log('Fastuni Launch');
});
</script>
```

### vite-plugin-restart
[vite-plugin-restart](https://github.com/antfu/vite-plugin-restart) 在特定文件发生变化时，自动重启 Vite 开发服务器，提高开发效率。

```ts
import ViteRestart from 'vite-plugin-restart';

plugins: [
  ViteRestart({
    restart: [
      'vite.config.js',
      '.env',
    ],
  }),
],
```