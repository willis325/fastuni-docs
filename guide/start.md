# 快速开始

## 前置准备

- __Node.js__ `>=18.0.0`
- __pnpm__ `>=8.0.0`
- 代码编辑器推荐 [__VSCode__](https://code.visualstudio.com/)
- __VSCode__ 插件安装
  - `FastUni` 内置了插件安装配置文件，使用 `VSCode` 打开项目文件夹，点击右下角的 `安装插件` 即可自动安装

## 创建项目

通过下面的命令可以快速创建 `FastUni` 项目，`willis-cli create <项目名称> --template fastuni`

> 更多 `willis-cli` 相关内容，请查看 [willis-cli](https://github.com/willis325/willis-cli)

```bash
# 全局安装脚手架工具
npm install -g willis-cli
```
```bash
# 创建 FastUni 项目
willis-cli create my-uniapp --template fastuni
```

## 运行项目
```bash
# 进入项目目录
cd my-uniapp

# 安装依赖
pnpm i

# 运行项目
## 运行 H5
pnpm run dev:h5

## 运行 微信小程序
pnpm run dev:mp-weixin

## 其他端运行，请自行查看 package.json 的 scripts 
```


