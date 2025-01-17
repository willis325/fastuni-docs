# 快速开始

## 前置准备

- __Node.js__ `>=18.0.0`
- __pnpm__ `>=8.0.0`
- 代码编辑器推荐 [__VSCode__](https://code.visualstudio.com/)
- __VSCode__ 插件安装
  - `FastUni` 内置了插件安装配置文件，使用 `VSCode` 打开项目文件夹，点击右下角的 `安装插件` 即可自动安装

## 创建项目
通过下面的命令可以快速创建 `FastUni` 项目，`willis-cli create <项目名称> --template fastuni`
```bash
# 全局安装脚手架工具
npm install -g willis-cli

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
pnpm dev:h5

## 运行 微信小程序
pnpm dev:mp-weixin

## 其他端运行，请自行查看 package.json 的 scripts 
```

## 快捷指令
使用 `VSCode` 在 `vue` 文件中，输入 `vue3` 按 `Tab` 键，即可快速生成模板代码，如下图所示：

## 代码提交
代码提交遵循 `@commitlint/config-conventional` 规范，具体请查看 [commitlint](https://github.com/conventional-changelog/commitlint)

更多配置，请修改项目 `.commitlintrc` 配置文件

- `feat`:     新增功能
- `bug`:      BUG 修复
- `fix`:      功能优化
- `ui`:       UI 更新
- `docs`:     更新文档
- `style`:    样式修改，不影响代码运行的变动
- `perf`:     优化相关，比如性能优化、体验优化、UE 优化
- `release`:  发布版本
- `deploy`:   部署相关
- `refactor`: 重构，即不是新增功能，也不是修改bug的代码变动
- `test`:     增加测试
- `chore`:    构建过程或辅助工具的变动
- `revert`:   回滚到上一个版本
- `merge`:    分支合并
- `build`:    打包
- `day`:      日常提交
