# CI/CD 调试Skill测试Demo

这个项目用来测试CI/CD调试Skill的功能，包含故意写的错误，让GitHub Actions运行失败。

## 项目里的错误
1. `src/utils.js` 第8行多了一个右括号，会导致语法错误
2. `test/index.test.js` 第12行测试用例写错了，期望10但实际计算是6，测试会失败
3. ESLint配置要求结尾必须有分号，但是代码里没加，lint会报错

## 使用步骤
1. 在GitHub上创建一个新的空仓库
2. 把这个目录下的所有文件推到你的GitHub仓库main分支
3. 推送后GitHub Actions会自动运行，肯定会失败
4. 复制失败的Actions运行页面URL，格式类似 `https://github.com/你的用户名/你的仓库名/actions/runs/xxxxxx`
5. 在OpenClaw中执行命令测试：
   ```
   /ci-debug 你复制的Actions URL
   ```
6. 查看skill的分析结果，看是否能正确识别错误类型和给出修复建议

## 预期的分析结果
应该识别到3个错误：
- 语法错误（多余的右括号）
- Lint错误（缺少分号）
- 测试失败（测试用例期望错误）
