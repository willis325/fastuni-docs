# 常见问题

以下是在使用 `fastuni` 中遇到的一些常见问题，持续更新中

## 1、pages.json、manifest.json 修改不生效

本项目引入了 `@uni-helper/vite-plugin-uni-pages` 和 `@uni-helper/vite-plugin-uni-manifest`， `pages.json` 和 `manifest.json` 文件会自动生成，修改不生效。

如需修改全局配置，请前往 `pages.config.ts` 和 `manifest.config.ts` 文件。

如需修改页面配置，请直接修改页面上方 `route` 内容
```vue
<route lang="json5" type="home">
{
  style: { 
    navigationBarTitleText: 'FastUni',
    navigationBarBackgroundColor: '#F5F5F5',
    navigationBarTextStyle: 'black', 
    backgroundColor: '#FFFFFF',
    backgroundTextStyle: 'dark',
  }
}
</route>
```

::: warning ⚠️ 注意
`type="home"` 为首页路由，请确保项目里只有一个 `type="home"` 的路由，`type` 不指定默认为 `page`
:::