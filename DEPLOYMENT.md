# Deployment

当前部署门禁为 `DEPLOY_APPROVED=false`，未执行 push、部署、域名绑定或外部环境变量写入。

上线前需先配置正规商家/认证服务，并人工确认目标平台、仓库、分支和环境变量名称。部署失败时回滚到最近一次通过 build 与 smoke test 的 commit。
