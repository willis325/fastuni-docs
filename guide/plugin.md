# Vite插件篇

## Uni Helper 相关

`FastUni` 借助 [Uni Helper](https://uni-helper.js.org/) 团队开发的优秀插件，让 `UniApp` 的开发更加简洁高效。在此向 `Uni Helper` 团队的卓越贡献致以诚挚的感谢！

### vite-plugin-uni-pages
得益于 [@uni-helper/vite-plugin-uni-pages](https://uni-helper.js.org/vite-plugin-uni-pages) 的约定式路由。在 `src/pages` 目录下创建的 `.vue` 文件代表着一个路由，无需手动配置路由，插件会自动生成对应的 `pages.json` 文件。

> 注意：请勿修改 `pages.json` 文件，如需修改全局配置，请前往 `pages.config.ts` 文件中修改。如需修改页面配置，请前往 `.vue` 文件修改 `route` 代码块配置。

配置示例，详细配置请前往 [@uni-helper/vite-plugin-uni-pages](https://uni-helper.js.org/vite-plugin-uni-pages) 查看。
```ts
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
得益于 [@uni-helper/vite-plugin-uni-pages](https://uni-helper.js.org/vite-plugin-uni-pages)，您可以使用 `TypeScript` 编写 `uni-app` 的 `manifest.json`


> 注意：请勿修改 `manifest.json` 文件，如需修改配置，请前往 `manifest.config.ts` 文件中修改。

`manifest.config.ts` 配置文件，详见 [uni-app官方文档](https://uniapp.dcloud.net.cn/collocation/manifest.html) 的 `manifest.json` 应用配置。


### vite-plugin-uni-layouts
### vite-plugin-uni-components

## Vite 相关

### unplugin-auto-import
### vite-plugin-restart