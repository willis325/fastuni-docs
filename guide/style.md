# 样式篇

## UnoCSS

`UnoCSS` 是一款即时按需的原子化 `CSS` 引擎，以高性能、灵活性和可扩展性为核心设计理念。它通过动态生成仅被使用的 `CSS` 规则，显著减少最终样式体积，同时支持自定义规则、预设和插件系统，适用于 Web、小程序、移动端等多场景开发。

```html
<view class="flex-col-center">
  <wd-img :width="180" :height="60" src="/static/logo-horizontal.svg" class="block" />
  <wd-text text="FastUni" color="#64748b" class="text-base mt-4"></wd-text>
</view>
```

```css
.flex-col-center{ display:flex; flex-direction:column; align-items:center; justify-content:center; }
.block{ display:block; }
.text-base{ font-size: 1rem;line-height: 1.5rem; }
.mt-4{ margin-top: 1rem; }
```


## unocss-applet

`unocss-applet` 通过预设转换、语法适配、单位兼容和生成优化，全面解决了小程序环境下 `UnoCSS` 的原子化样式兼容性问题，开发者可以专注于高效编写跨端样式，无需手动处理平台差异。

- `unocss-applet` - 主包，包含所有预设和插件。
- `@unocss-applet/preset-applet` - 默认预设（等同于@unocss/preset-uno）。
- `@unocss-applet/preset-rem-rpx` - 转换rem <=> rpx的工具。
- `@unocss-applet/transformer-attributify` - 为小程序启用 Attributify 模式。
- `@unocss-applet/reset` - CSS 样式重置集合。

## UnoCSS 配置

`vite.config.ts`
```ts
import Uni from '@dcloudio/vite-plugin-uni';
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [Uni(), UnoCSS()]
})
```

`main.ts`
```ts
import 'virtual:uno.css';
```

`uno.config.ts`
```ts
import { defineConfig, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss';
import { presetApplet, presetRemRpx, transformerAttributify } from 'unocss-applet';
import { presetLegacyCompat } from '@unocss/preset-legacy-compat';

const presets = process.env?.UNI_PLATFORM?.startsWith('mp') ? [presetApplet(), presetRemRpx()] : [presetUno()];

export default defineConfig({
  theme: {
    colors: {},
  },
  presets: [...presets, presetLegacyCompat({ commaStyleColorFunction: true })],
  transformers: [transformerDirectives(), transformerVariantGroup(), transformerAttributify({ prefixedOnly: true, prefix: 'uni' })],
  shortcuts: {
    'flex-row-middle': 'flex flex-row items-center',
    'flex-row-between': 'flex flex-row items-center justify-between',
    'flex-row-center': 'flex flex-row items-center justify-center',
    'flex-col-middle': 'flex flex-col justify-center',
    'flex-col-center': 'flex flex-col items-center justify-center',
  },
  rules: [
    ['p-safe', { padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)' }],
    ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
    ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
  ],
});
```