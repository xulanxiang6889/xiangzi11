export type KnowledgeResource = {
  title: string;
  summary: string;
  category: string;
  kind: string;
  source: string;
};

export const knowledgeResources: KnowledgeResource[] = [
  { title: "第一原理思维系统", summary: "用解构、质询、重构三阶段拆解复杂问题，并落到一个可执行的第一步。", category: "方法", kind: "教程", source: "Obsidian · 提示词与模板" },
  { title: "Skill 使用教程", summary: "按任务类型选择 brainstorming、create-plan、debugging 等能力，避免重复试错。", category: "方法", kind: "指南", source: "Obsidian · 提示词与模板" },
  { title: "知识库四层架构", summary: "把原始素材、提炼笔记、主题知识与可复用资产分层管理。", category: "知识管理", kind: "方法", source: "Obsidian · 规则模板" },
  { title: "B 层知识提炼标准", summary: "将长素材压缩为一句话总结、关键事实、行动建议和关联链接。", category: "知识管理", kind: "模板", source: "Obsidian · 规则模板" },
  { title: "提示词资源站导航", summary: "整理提示词学习、灵感检索和图像生成参考的公开入口。", category: "提示词", kind: "资源", source: "Obsidian · 提示词与模板" },
  { title: "提示工程协作协议", summary: "先确认目标、角色和参考来源，再生成可反馈、可复用的结构化 Prompt。", category: "提示词", kind: "模板", source: "Obsidian · 提示词与模板" },
  { title: "超级提示结构化模板", summary: "将角色、目标、约束、输出格式和验证标准组织成清晰指令。", category: "提示词", kind: "模板", source: "Obsidian · 提示词与模板" },
  { title: "人工智能提示生成器", summary: "通过主体、环境、氛围和执行风格组合，生成有差异的图像 Prompt。", category: "提示词", kind: "模板", source: "Obsidian · 提示词与模板" },
  { title: "AI Agent 调度矩阵", summary: "根据任务风险、复杂度和验证方式，为不同工作分配合适的执行者。", category: "方法", kind: "指南", source: "Obsidian · AIOS" },
  { title: "Executor 与 Validator 分离", summary: "执行者负责产出，验证者独立检查文件、结构、合规与真实结果。", category: "方法", kind: "方法", source: "Obsidian · AIOS" },
  { title: "证据优先的质量验收", summary: "把完成定义为可复核证据，而不是配置存在、进程运行或口头声明。", category: "方法", kind: "清单", source: "Obsidian · AIOS" },
  { title: "内容工作台 SOP", summary: "从一句话灵感到选题卡、脚本、发布素材和复盘的连续工作流。", category: "内容工作流", kind: "SOP", source: "Obsidian · AIOS" },
  { title: "视频文案故事化模板", summary: "以事件为核心组织口播内容，在注意力、信息密度和个人表达间取得平衡。", category: "内容工作流", kind: "模板", source: "Obsidian · 视频口播工作流" },
  { title: "剪辑配音字幕提示词", summary: "为口播视频规划配音、字幕、背景音乐和成片检查项。", category: "内容工作流", kind: "模板", source: "Obsidian · 视频口播工作流" },
  { title: "口播视频分镜方法", summary: "将主题拆成镜头、旁白、节奏和画面提示，方便后续制作与复用。", category: "内容工作流", kind: "教程", source: "Obsidian · 视频口播工作流" },
  { title: "内容复盘框架", summary: "从目标、过程、结果、问题和下一次实验五个维度沉淀经验。", category: "内容工作流", kind: "方法", source: "Obsidian · 内容系统" },
  { title: "选题卡模板", summary: "记录受众、问题、证据、标题方向和交付形式，让灵感可以继续推进。", category: "内容工作流", kind: "模板", source: "Obsidian · Templates" },
  { title: "持续学习闭环", summary: "把一次任务中的好方法和踩坑转化为 SOP、Skill 与自动化方向。", category: "知识管理", kind: "方法", source: "Obsidian · 全局复利" },
  { title: "复利经验总索引", summary: "按系统、Agent、Prompt、安全、项目管理等主题浏览可复用经验。", category: "知识管理", kind: "资源", source: "Obsidian · 全局复利" },
  { title: "搜索优先工作流", summary: "编码或搭建前先查现有工具、库和模式，减少重复建设与无效依赖。", category: "工程", kind: "方法", source: "Obsidian · Codex Skills" },
  { title: "代码审查检查表", summary: "从正确性、可维护性、边界条件和验证证据审查一次变更。", category: "工程", kind: "清单", source: "Obsidian · Codex Skills" },
  { title: "系统化 Debug 方法", summary: "先复现、缩小范围、定位根因，再做最小修复和回归验证。", category: "工程", kind: "教程", source: "Obsidian · Codex Skills" },
  { title: "回归测试策略", summary: "为 AI 辅助开发建立可重复的行为检查，避免修复引入新问题。", category: "工程", kind: "指南", source: "Obsidian · Codex Skills" },
  { title: "部署模式与健康检查", summary: "用构建、状态码、核心路由和 404 smoke test 判断发布是否真正可用。", category: "工程", kind: "清单", source: "Obsidian · Codex Skills" },
  { title: "无障碍基础清单", summary: "覆盖语义 HTML、键盘焦点、对比度、减少动态效果和移动端体验。", category: "工程", kind: "清单", source: "Obsidian · Codex Skills" },
  { title: "品牌语气工作表", summary: "从受众、场景、价值主张和禁用表达建立一致的内容语气。", category: "内容工作流", kind: "模板", source: "Obsidian · Codex Skills" },
  { title: "文章结构化写作", summary: "将主题组织成标题、摘要、论据、示例、行动建议和相关链接。", category: "内容工作流", kind: "教程", source: "Obsidian · Codex Skills" },
  { title: "小红书内容 SOP", summary: "用选题、标题、正文、封面和复盘组成可迭代的内容生产流程。", category: "内容工作流", kind: "SOP", source: "Obsidian · 提示词与模板" },
  { title: "工作流地图", summary: "把模糊需求拆成输入、决策、执行、验证和交付节点。", category: "方法", kind: "模板", source: "Obsidian · AIOS" },
  { title: "上下文预算方法", summary: "长任务采用增量读取、摘要和边界控制，降低噪音与重复成本。", category: "方法", kind: "方法", source: "Obsidian · 提示词与模板" },
  { title: "公开资源合规清单", summary: "发布前检查版权、隐私、凭据、外链素材和误导性安全声明。", category: "安全", kind: "清单", source: "Obsidian · AIOS" },
];
