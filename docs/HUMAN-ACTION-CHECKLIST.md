# Lumen Hub 一次性人工完成清单

状态：尚未执行。完成本清单不代表已经部署；部署仍需你在平台确认卡中逐项批准。

## A. 必须人工完成：部署授权与平台连接

1. 选择唯一部署目标：Vercel 或 Cloudflare Pages；不要同时配置两个生产目标。
2. 在 Codex/ChatGPT 的 Plugin 或 App 管理页面确认 GitHub 与选定部署平台显示为 `Connected`。
3. 创建或选择一个空的 GitHub 仓库；仓库名建议 `lumen-hub`，默认分支为 `main`。
4. 在所选平台导入该 GitHub 仓库，框架选择 Next.js，构建命令填写 `pnpm build`，安装命令填写 `pnpm install --frozen-lockfile`。
5. 此阶段不要填写任何真实支付、OAuth、邮件、短信或数据库密钥。当前 MVP 不需要环境变量。
6. 仅当第 1-5 项完成，并且确认发布公开 demo 不含真实账户/支付后，提供以下一次性授权文本：

```text
部署授权：DEPLOY_APPROVED=true。
部署目标：<Vercel 或 Cloudflare Pages>。
GitHub 仓库：<owner/repository>。
生产分支：main。
允许创建首次预览部署；生产部署、push、域名绑定仍逐项向我确认。
```

## B. 必须人工完成：域名与公开合规

仅在首次预览验证通过后执行：

1. 提供你有权管理的域名；不要在聊天中粘贴 DNS 密钥、Token、Cookie 或完整截图。
2. 在平台域名页面按其界面生成 DNS 记录；只在你的域名服务商后台填写记录值。
3. 准备并确认以下公开信息后再开放订单/咨询入口：网站运营主体称呼、支持邮箱、退款规则、隐私联系方式。
4. 确认页面中的 mock session、admin demo、订单意向均保留“演示环境”标识，且不连接真实收款。

## C. 人工验收：浏览器与内容

在本地运行 `pnpm dev` 后，用浏览器依次确认：

1. 首页、探索、帮助、账户、咨询、法律页面和随机不存在路径均可打开。
2. 探索页搜索“模板”，再选择类别，确认结果与空状态可见。
3. 帮助中心任意点击一篇文章，确认可返回帮助列表。
4. 咨询页提交虚构测试文本，确认提示为“本地演示状态”，且没有真实邮件发送。
5. 在 375px、768px、1024px、1440px 宽度下检查：导航、标题、按钮、表单和页脚无重叠或溢出。
6. 使用 Tab 键从地址栏进入页面，确认可见焦点能依次抵达导航、按钮、表单和页脚链接。

验收反馈请只提供：通过/失败项、页面 URL、可公开的截图和复现步骤；不要提交账户、Cookie、Token、密码或平台密钥。

### 自动化测试一次性补跑

当前已加入 `@playwright/test`、`playwright.config.ts` 与 `tests/e2e/core.spec.ts`。请在网络可稳定下载约 196MB 浏览器包时，在项目目录一次性执行：

```powershell
pnpm exec playwright install chromium
pnpm test:e2e
```

通过标准：7 条用例通过，`test-results/home-375.png`、`home-768.png`、`home-1024.png`、`home-1440.png` 均生成。当前尝试失败证据为 Playwright CDN `server closed connection`；不是测试用例失败。

## D. 当前不能人工跳过的风险

| 风险 | 当前处理 | 关闭条件 |
| --- | --- | --- |
| Next `14.2.15` 安全提示 | 尝试升级至 `14.2.35`，因 SWC 下载超时未更改项目 | 网络稳定后完成同大版本升级并重跑 lint/typecheck/build |
| E2E/截图未自动化 | `@playwright/test` 安装未完成，浏览器运行时也未发现 | 安装完成后执行自动化并保存四档截图 |
| 生产能力未接入 | 维持 mock，禁止伪装为真实认证/支付 | 经设计与人工授权后分别接入正规服务 |
