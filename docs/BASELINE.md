# Baseline

## 2026-09-12

### 依赖恢复

命令：`pnpm install --ignore-scripts --no-optional --fetch-timeout 300000 --reporter append-only`

结果：主体依赖与 `node_modules/.bin` 已恢复；native optional SWC 下载仍因 registry socket 中断失败。

### 基线三连

- `node_modules\\.bin\\eslint.cmd .`：通过。
- `node_modules\\.bin\\tsc.cmd --noEmit`：通过。
- `node_modules\\.bin\\next.cmd build`：失败，自动下载 SWC 时 `UND_ERR_SOCKET`。

状态：`PARTIAL`；静态检查通过，生产 build 仍 `BLOCKED`。恢复 SWC 下载后必须重跑 build。

### Next 安全评估

当前 `package.json` 为 `next@14.2.15`。工具提示该版本存在安全更新风险；未执行大版本升级。后续恢复网络后，应查询最新 14.2.x 补丁并在同一大版本内评估升级。
