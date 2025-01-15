import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FastUni - 快速开发 uni-app 模板项目",
  description: "最快速、最实用、最全能的uniapp开发脚手架",
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'author', content: 'willis<793207918@qq.com>' }],
    ['meta', { name: 'keywords', content: 'uni-app, fastuni, FastUni, vue3, vite, vitepress' }],
    ['link', { rel: 'icon',  href: '/favicon.ico' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo-horizontal.svg",
    nav: [
      { text: "指南", link: "/guide" },
      {
        text: "相关链接",
        items: [
          { text: "uni-app", link: "https://uniapp.dcloud.io", target: "_blank", rel: "noreferrer" },
          { text: "uni-app vue3", link: "https://uniapp.dcloud.net.cn/tutorial/vue3-basics.html", target: "_blank", rel: "noreferrer" },
          { text: "Vue", link: "https://cn.vuejs.org/", target: "_blank", rel: "noreferrer" },
          { text: "Vite", link: "https://cn.vitejs.dev/", target: "_blank", rel: "noreferrer" },
          { text: "Pinia", link: "https://pinia.vuejs.org/zh/", target: "_blank", rel: "noreferrer" },
          { text: "VueUse", link: "https://vueuse.org/", target: "_blank", rel: "noreferrer" },
          { text: "UnoCSS", link: "https://unocss.dev/", target: "_blank", rel: "noreferrer" },
          { text: "Day.js", link: "https://day.js.org/zh-CN/", target: "_blank", rel: "noreferrer" },
          { text: "VitePress", link: "https://vitepress.dev/zh/", target: "_blank", rel: "noreferrer" },
        ],
      }
    ],
    sidebar: [
      {
        text: "开发指南",
        items: [
          { text: "关于我FastUni", link: "/guide" },
          { text: "快速开始", link: "/guide/started" },
          { text: "cli工具", link: "" },
          { text: "项目结构", link: "" },
          { text: "更新日志", link: "" },
          { text: "常见问题", link: "" },
        ],
      },
      {
        text: "设计指南",
        items: [
          { text: "UI组件库", link: "" },
          { text: "UnoCSS", link: "" },
          { text: "主题配置", link: "" },
          { text: "暗黑模式", link: "" },
        ],
      },
      {
        text: "Hooks",
        items: [
          { text: "useRequest", link: "" },
          { text: "useDebounce", link: "" },
          { text: "useThrottle", link: "" },
        ],
      },
      {
        text: "工具类库",
        items: [
          { text: "DayJs", link: "" },
          { text: "Util", link: "" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/willis325/fastuni" },
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © ${new Date().getFullYear()}  willis<793207918@qq.com>`,
    },
  }
})

