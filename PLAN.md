# Lumen Hub · Phase 1 Plan

## 范围

构建一个原创的个人 AI 资源与知识服务中心 MVP，覆盖首页、资源探索、帮助中心、账户演示、订单意向/咨询请求、法律页面和演示管理页。当前阶段只建立项目边界、设计系统与合规基线，不接入真实支付、认证、数据库、邮件、域名或部署。

## 信息架构

- `/`：价值主张、精选资源、工作流、会员权益、可信说明与 CTA
- `/explore`：分类、关键词搜索、排序、分页、卡片/列表视图
- `/help`：帮助分类、搜索、分页、教程详情与反馈入口
- `/account`：mock session、资料、权益/订单、收藏与阅读历史
- `/checkout`、`/requests`：本地订单意向与咨询请求状态机
- `/privacy`、`/terms`、`/content-policy`：可编辑法律与内容政策模板
- `/admin`：仅本地 mock 数据的演示管理界面

## 技术选型

默认采用 Next.js App Router + TypeScript + Tailwind CSS；数据先使用 type-safe local fixtures/repository，预留 Auth、Prisma/Supabase adapter interface。表单按需采用 Zod + React Hook Form；图标采用单一图标体系。测试目标为 Vitest + Playwright。安装依赖前必须重新审计 package.json，本阶段不安装依赖。

## 假设

- `BRAND_NAME`：Lumen Hub
- `BRAND_TAGLINE`：把 AI 工具、方法与服务整理成可直接使用的系统
- `SITE_OWNER`：AIspace
- `PRIMARY_AUDIENCE`：中文独立创作者与小团队
- `PRIMARY_GOAL`：浏览合法资源并产生订单意向或咨询请求
- `CONTENT_LANGUAGE`：zh-CN
- `DEPLOY_TARGET`：none
- `CUSTOM_DOMAIN`：留空
- `DEPLOY_APPROVED`：false
- 无本地品牌素材时，使用排版、CSS 几何图形和原创 SVG；不使用远程占位图。

## 风险

- mock session 不能当作生产级认证；页面必须明确标注演示环境。
- 内容必须排除账号、密码、Token、2FA、Cookie、绕过认证和未授权访问服务。
- 参考 Apple 只抽象借鉴留白、层级和材质感，不复制品牌资产、文案、页面结构或代码。
- 第三方服务与支付保持断开，避免凭据与外部写入风险。

## 验收清单

- [ ] 计划、原创性与内容合规文档完成
- [ ] tokens 集中于 `src/styles/tokens.css` 与 `tokens.json`
- [ ] 核心路由、mock 数据、筛选/搜索/分页可运行
- [ ] 键盘焦点、语义 HTML、WCAG 2.2 AA 基础支持
- [ ] reduced-motion 与 reduced-transparency 回退存在
- [ ] lint、typecheck、unit、build、Playwright 通过
- [ ] 无远程占位素材、Secrets、凭据或 Apple 受保护内容

## 部署与回滚

当前不部署。未来只有在 `DEPLOY_APPROVED=true` 且用户对仓库、分支、目标平台和环境变量名完成人工确认后，才生成并执行部署动作。回滚优先使用上一稳定 Git commit 或平台上一构建版本；域名与第三方集成单独人工确认。

