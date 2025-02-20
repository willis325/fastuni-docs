# Git提交规范

代码提交遵循 `@commitlint/config-conventional` 规范，具体请查看 [commitlint](https://github.com/conventional-changelog/commitlint) 文档

更多配置，请修改项目 `.commitlintrc` 配置文件

```json
{
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [0],
    'footer-leading-blank': [0],
    'type-enum': [2, 'always', ['feat', 'bug', 'fix', 'ui', 'docs', 'style', 'perf', 'release', 'deploy', 'refactor', 'test', 'chore', 'revert', 'merge', 'build', 'day']],
  },
}
```

## 提交内容格式
```bash
<type>(<scope>): <subject>
<空行>
<body>
<空行>
<footer>
```
示例：

`feat(login): 增加短信验证码登录功能`

`feat: 增加微信扫码登录`


## 提交类型说明

| 类型          | 描述                                | 示例场景                                    |
| -------------|------------------------------------|--------------------------------------------|
| **标准类型**   |
| `feat`       | 新增功能                             | 新增支付模块、增加文件上传功能                    |
| `fix`        | 修复 bug                            | 解决页面白屏问题、修复表单提交失败问题             |
| `docs`       | 文档更新                             | 更新 API 文档、修改 README 说明                 |
| `style`      | 样式/格式改动（不影响代码逻辑）          | 调整代码缩进、修改 CSS 颜色变量                   |
| `refactor`   | 代码重构（非功能修改）                 | 抽离公共工具函数、优化组件结构                       |
| `perf`       | 性能优化                             | 减少首屏加载时间、优化图片压缩策略                |
| `test`       | 测试相关                             | 增加单元测试用例、补充 E2E 测试脚本               |
| `chore`      | 构建/工具链改动                       | 更新 webpack 配置、修改 CI/CD 流程              |
| `revert`     | 回滚提交                             | `revert: 撤销某次错误提交`                     |
| **自定义类型**   |
| `ui`         | 界面样式调整                          | 修改按钮圆角、调整表格间距                    |
| `build`      | 构建系统调整                          | 升级依赖版本、修改 Dockerfile 配置           |
| `ci`         | CI 配置变更                          | 调整 GitHub Actions 流程                  |
| `merge`      | 分支合并                             | `merge: 合并 feature/login 分支`           |
| `release`    | 版本发布                             | `release: 发布 v1.2.0 版本`               |
| `day`        | 日常代码提交                          |                                          |