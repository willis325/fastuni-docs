# 代码规范

## VS Code 配置

`VS Code` 配置文件 `.vscode/setting.json`

```json
{
  "npm.packageManager": "pnpm", // 指定 VS Code 默认使用 pnpm 作为包管理器
  "editor.formatOnSave": true, // 保存时自动格式化
  "editor.defaultFormatter": "esbenp.prettier-vscode", 
  // 保存时自动修复
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.fixAll.eslint": "explicit",
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // 识别为 JSONC 格式，支持注释
  "files.associations": {
    "pages.json": "jsonc", 
    "manifest.json": "jsonc",
    ".eslintrc": "jsonc",
    ".prettierrc": "jsonc"
  }
}
```

插件推荐管理配置 `.vscode/extensions.json` 
```json
{
  "recommendations": [
    "vue.volar",              // Vue 官方插件
    "esbenp.prettier-vscode", // Prettier 官方插件
    "dbaeumer.vscode-eslint", // ESLint 官方插件
    "antfu.unocss",           // UnoCSS 官方插件
    "evils.uniapp-vscode",    // UniApp 官方插件
    "mrmlnc.vscode-json5"     // JSON5 支持
  ]
}
```

## 快捷指令（代码块）
使用 `VSCode` 在 `vue` 文件中，输入 `vue3` 按 `Tab` 键，即可快速生成模板代码，如下图所示：


## ESLint 配置
```json
{
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es2021": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
    "plugin:import/recommended",
    "standard",
    "prettier",
    "plugin:prettier/recommended",
    "./.eslintrc-auto-import.json",
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module",
  },
  "plugins": ["@typescript-eslint", "vue", "prettier", "import"],
  "rules": {
    /* 错误级别 */
    "no-unused-vars": 1,           // 未使用变量警告（由 TS 规则接管）
    "prettier/prettier": 2,        // Prettier 格式问题报错

    /* 禁用规则 */
    "import/named": 0,             // 关闭「具名导入校验」（TS 已处理类型）
    "import/no-unresolved": 0,     // 关闭「模块路径校验」（需配合 TypeScript）
    "vue/multi-word-component-names": 0, // 允许单单词组件名（如 Home.vue）
    "vue/return-in-computed-property": 0, // 允许计算属性不返回

    /* TypeScript 规则调整 */
    "@typescript-eslint/no-explicit-any": 1,    // 使用 any 时警告
    "@typescript-eslint/no-unused-vars": 0,     // 关闭（由 ESLint 基础规则接管）
    "@typescript-eslint/no-unused-expressions": 0 // 允许独立表达式（如 Vue 模板中的函数调用）
  },
  // 全局变量声明
  "globals": {
    "uni": true,
    "UniApp": true,
    "__UNI_PLATFORM__": true,
  },
}

```

## Prettier 配置
```json
{
  "printWidth": 180,        // 超过180字符换行（适合大屏幕开发）
  "tabWidth": 2,            // 缩进2个空格
  "useTabs": false,         // 禁用制表符，用空格缩进
  "semi": true,             // 语句末尾添加分号
  "singleQuote": true,      // 优先使用单引号（如 'text'）
  "quoteProps": "as-needed",// 对象属性仅在必要时加引号（如 { a: 1, 'b-c': 2 }）
  "trailingComma": "all",   // 多行结构始终保留结尾逗号（优化git差异）
  "bracketSpacing": true,   // 对象括号间加空格（如 { a: 1 }）
  "arrowParens": "always",  // 箭头函数参数始终加括号（如 (x) => x）
  "bracketSameLine": false, // HTML/JSX标签 > 换行放置（例：</div> 单独一行）
  "requirePragma": false,   // 无需特定注释才格式化
  "insertPragma": false,    // 不自动插入格式化标记
  "proseWrap": "preserve",      // Markdown文本保持原样换行
  "htmlWhitespaceSensitivity": "ignore", // 忽略HTML空格敏感度
  "vueIndentScriptAndStyle": false, // 不缩进Vue文件的<script>和<style>内容
  "endOfLine": "auto"       // 自动检测系统换行符（CRLF/LF）
}

```

## 