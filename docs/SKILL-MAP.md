# Skill Map

## 技能落位（Phase A）

19 个协议要求技能均已在用户级目录找到且 `SKILL.md` 非空。system32 源目录存在，但不作为项目运行时发现路径；未删除任何 system32 内容。

| 技能 | 状态 | 用户级路径 |
|---|---|---|
| ui-ux-pro-max | OK | `C:\Users\xiang\.agents\skills\ui-ux-pro-max\SKILL.md` |
| frontend-design | OK | `C:\Users\xiang\.agents\skills\frontend-design\SKILL.md` |
| design-tokens | OK | `C:\Users\xiang\.agents\skills\design-tokens\SKILL.md` |
| design-taste-frontend | OK | `C:\Users\xiang\.agents\skills\design-taste-frontend\SKILL.md` |
| minimalist-ui | OK | `C:\Users\xiang\.agents\skills\minimalist-ui\SKILL.md` |
| high-end-visual-design | OK | `C:\Users\xiang\.agents\skills\high-end-visual-design\SKILL.md` |
| web-design-guidelines | OK | `C:\Users\xiang\.agents\skills\web-design-guidelines\SKILL.md` |
| ui-design | OK | `C:\Users\xiang\.agents\skills\ui-design\SKILL.md` |
| tdesign-miniprogram | OK | `C:\Users\xiang\.agents\skills\tdesign-miniprogram\SKILL.md` |
| miniprogram-development | OK | `C:\Users\xiang\.agents\skills\miniprogram-development\SKILL.md` |
| ai-model-wechat | OK | `C:\Users\xiang\.agents\skills\ai-model-wechat\SKILL.md` |
| cloudbase-document-database-in-wechat-miniprogram | OK | `C:\Users\xiang\.agents\skills\cloudbase-document-database-in-wechat-miniprogram\SKILL.md` |
| brainstorming | OK | `C:\Users\xiang\.agents\skills\brainstorming\SKILL.md` |
| writing-plans | OK | `C:\Users\xiang\.agents\skills\writing-plans\SKILL.md` |
| executing-plans | OK | `C:\Users\xiang\.agents\skills\executing-plans\SKILL.md` |
| test-driven-development | OK | `C:\Users\xiang\.agents\skills\test-driven-development\SKILL.md` |
| systematic-debugging | OK | `C:\Users\xiang\.agents\skills\systematic-debugging\SKILL.md` |
| verification-before-completion | OK | `C:\Users\xiang\.agents\skills\verification-before-completion\SKILL.md` |
| requesting-code-review | OK | `C:\Users\xiang\.agents\skills\requesting-code-review\SKILL.md` |

## taste-skill 容器核查

`C:\Users\xiang\.codex\skills\taste-skill\SKILL.md` 的 frontmatter：

- `name`: `design-taste-frontend`
- `description`: Anti-slop frontend skill for landing pages, portfolios, and redesigns...
- 判断：这是一个包含多个设计子技能/指导的容器，不是仅凭目录名命名的单一 `taste-skill`。
- `design-taste-frontend`、`minimalist-ui`、`high-end-visual-design` 三个独立目录均不存在；它们由用户级 `.agents` 目录提供。

## 阶段调用矩阵

| 阶段 | 技能 | 用途 |
|---|---|---|
| 需求澄清 | brainstorming | 已定/未定/需决策三清单 |
| 方案设计 | writing-plans | 可执行计划与验收 |
| 设计方向 | ui-ux-pro-max | 风格、配色、字体方向 |
| 视觉结构 | frontend-design | 页面层级与版式 |
| 品味校准 | design-taste-frontend | 去模板、去 AI 味 |
| 极简校准 | minimalist-ui | 留白与节奏 |
| 高端质感 | high-end-visual-design | 材质与精密感 |
| 设计系统 | design-tokens | primitive→semantic→component |
| 参考站提取 | extract-design-system | 仅授权 URL 的 extract-only |
| 无障碍 | web-design-guidelines | 语义、键盘、对比度、焦点 |
| 测试 | test-driven-development | 关键路径测试 |
| 调试 | systematic-debugging | 根因定位 |
| 评审 | requesting-code-review / receiving-code-review | 自审与回应 |
| 收尾 | finishing-a-development-branch | 合并前检查 |
| 完工 | verification-before-completion | 证据化 DoD |

