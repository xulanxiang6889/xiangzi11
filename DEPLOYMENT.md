# Deployment

当前部署门禁为 `DEPLOY_APPROVED=false`，未执行 push、部署、域名绑定或外部环境变量写入。

上线前需先配置正规商家/认证服务，并人工确认目标平台、仓库、分支和环境变量名称。部署失败时回滚到最近一次通过 build 与 smoke test 的 commit。

## 2026-09-14 部署推进复核

- `pnpm lint`：PASS（0 warnings/errors）
- `pnpm typecheck`：PASS
- `pnpm build`：PASS（15 routes）
- 本地 production HTTP smoke：PASS（核心路由 200，未知路由 404）
- `vercel` / `wrangler` CLI：NOT_FOUND；Git remote：未配置
- 结论：本地可发布包已验证；外部部署为 `BLOCKED`，原因是 `DEPLOY_APPROVED=false`、无远程仓库和无平台连接证据。

## 2026-09-14 GitHub 推送复核

- 已配置目标 remote：`https://github.com/xulanxiang902-glitch/xiangzi.git`
- 远程仓库可读，默认分支为 `main`；本地提交已生成。
- `git push -u origin main`：BLOCKED，GitHub 返回 `403 Permission denied`；当前 CLI 登录账号为 `xulanxiang6889`，目标仓库 owner 为 `xulanxiang902-glitch`。
- 未执行强制推送、仓库覆盖或绕过权限操作；远程仓库内容未被修改。

## 2026-09-14 新仓库推送结果

- 目标仓库：`https://github.com/xulanxiang6889/xiangzi11.git`
- `git push -u origin main`：PASS
- 远程 `main` HEAD：`c3d5657273e1524f458370912adb0b84032078fe`
- Vercel CLI：可通过 `pnpm dlx vercel` 使用（版本 `59.16.0`），但部署命令返回 `No existing credentials found`。
- 外部 Vercel 部署：BLOCKED，待在本机执行 `vercel login` 完成账号授权后再部署。
