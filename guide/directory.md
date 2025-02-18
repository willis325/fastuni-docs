# 目录结构

> 合理的项目目录结构，保证项目的可扩展性

```shell
├─ .husky                     # husky
├─ .vscode                    # vscode 配置文件
├─ dist                       # 打包后的文件
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
│   └─ manifest.json          # 插件自动生成，如需调整请修改 manifest.config.ts
│   └─ pages.json             # 插件自动生成，如需调整请修改 pages.config.ts
└── .commitlintrc             # commitlint 配置文件
└── .env                      # 环境配置
└── .eslintignore             # eslint 忽略文件
└── .eslintrc                 # eslint 配置文件
└── .gitignore                # git 忽略文件
└── .prettierignore           # prettier 忽略文件
└── .prettierrc               # prettier 配置
└── favicon.ico               # favicon 图标
└── index.html                # html 模板
└── manifest.config.ts        # manifest 配置文件
└── package.json              # package.json
└── pages.config.ts           # pages 配置文件
└── tsconfig.json             # typescript 配置文件
└── uno.config.js             # UnoCSS 配置文件
└── vite.config.js            # vite 配置文件
```


