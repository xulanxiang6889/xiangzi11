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
