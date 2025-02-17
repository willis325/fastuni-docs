# 介绍

<div class="md-center" style="margin-top: 20px;">

[![GitHub Repo stars](https://img.shields.io/github/stars/willis325/fastuni?style=flat&logo=github)](https://github.com/willis325/fastuni)
![node version](https://img.shields.io/badge/node-%3E%3D18-green)
![pnpm version](https://img.shields.io/badge/pnpm-%3E%3D8-green)
![GitHub License](https://img.shields.io/github/license/willis325/fastuni)

</div>

`FastUni` 是一个基于 `uni-app` 的快速开发框架，旨在帮助开发者 __快速__ 构建高性能、高可用的 `uni-app` 应用。

`FastUni` 由 `uni-app` + `vue3` + `Ts` + `Vite5` + `UnoCSS` + `Uni Helper` 等主流技术栈组成，集成了 `Eslint` + `Prettier` + `Husky` + `Commitlint` + `Lint-staged` 等构建工具开发规范，为开发者提供了一套完整的 `uni-app` 的开发解决方案。

## ✨ 特性

- 使用 [Vue3](https://cn.vuejs.org)、[Vite5](https://vite.dev)、[Ts](https://www.typescriptlang.org/docs/)、[pnpm](https://pnpm.io) 等主流技术栈，提高开发体验

- 引入 [Uni Helper](https://uni-helper.js.org) 插件，[pages](https://uni-helper.js.org/vite-plugin-uni-pages)、[manifest](https://uni-helper.js.org/vite-plugin-uni-manifest)、[layouts](https://uni-helper.js.org/vite-plugin-uni-layouts)、[components](https://uni-helper.js.org/vite-plugin-uni-components)，大大提升了开发效率

- 采用 [UnoCSS](https://unocss.dev)、[unocss-applet](https://github.com/unocss-applet/unocss-applet/), 高性能、可定制的原子 CSS 引擎，支持 `uni-app`

- 支持全端适配的状态管理库 [Pinia](https://pinia.vuejs.org/zh/)、[Pinia Plugin Persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/zh/)

- [Eslint](https://zh-hans.eslint.org/docs/latest/)、[Prettier](https://prettier.io/docs/en/)、[Husky](https://typicode.github.io/husky/)、[Commitlint](https://commitlint.js.org/)，定义开发规范，保证代码质量

- `请求封装`、`路由拦截`、`useRequest`等，基础封装，支持扩展，快捷高效

- 公共`components`自动导入、`路由`自动注册、常用工具类、多环境配置，开箱即用


## 🗂️ 目录结构

> 合理的项目目录结构，保证项目的可扩展性

```shell
├─ .husky                     # husky
├─ .vscode                    # vscode 配置文件
├─ src                        # 项目源代码
│   ├─ apis                   # 接口请求
│   ├─ components             # 公共组件
│   ├─ config                 # 配置、常量、枚举
│   ├─ hooks                  # hook
│   ├─ interceptors           # 请求拦截、路由拦截   
│   ├─ layouts                # 布局组件
│   ├─ pages                  # 主包页面
│   ├─ pages-sub              # 副包页面
│   ├─ static                 # 资源文件
│   ├─ store                  # 全局 store 管理
│   ├─ styles                 # 全局样式
│   ├─ types                  # 全局类型定义
│   ├─ utils                  # 全局工具类库
│   ├─ App.vue                # 入口页面
│   └─ main.ts                # 源码入口
└── .commitlintrc             # commitlint 配置文件
└── .env                      # 环境配置
└── .eslintignore             # eslint 忽略文件
└── .eslintrc                 # eslint 配置文件
└── .prettierignore           # prettier 忽略文件
└── .prettierrc               # prettier 配置
└── favicon.ico               # favicon 图标
└── index.html                # html 模板
└── manifest.config.ts        # manifest 配置文件
└── package.json              # package.json
└── pages.config.ts           # pages 配置文件
└── tsconfig.json             # typescript 配置文件
└── uno.config.js             # UnoCSS 配置文件
└── vite.config.js            # vite 打包配置
```

