# Baseline

## 2026-09-12

### 依赖恢复

命令：`pnpm install --ignore-scripts --reporter append-only`

结果：未通过。依赖解析已复用本地 store，但下载 `@next/swc-win32-x64-msvc` 时发生 `ECONNRESET` / `fetch failed`。因此 `node_modules/.bin` 尚未生成，Next、TypeScript、ESLint 不能执行。

### 基线三连

- `npm run lint`：未执行，前置可执行文件缺失。
- `npm run typecheck`：未执行，前置可执行文件缺失。
- `npm run build`：未执行，前置可执行文件缺失。

状态：`BLOCKED`，不是基线通过。恢复依赖后必须重新执行三连。

### Next 安全评估

当前 `package.json` 为 `next@14.2.15`。工具提示该版本存在安全更新风险；未执行大版本升级。后续恢复网络后，应查询最新 14.2.x 补丁并在同一大版本内评估升级。

