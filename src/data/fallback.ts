export const fallbackProfile = {
  name: "路飞",
  title: "上海电力大学硕士研究生 / LLM 决策与多智能体系统",
  intro:
    "本科毕业于湖南农业大学计算机科学与技术专业，具备 Java 后端、微服务、搜索与 OCR 系统实践经历；现就读于上海电力大学，研究方向为 LLM 决策与多智能体系统。这个网站用于整理个人介绍、研究笔记与项目记录。",
  email: null,
  githubUrl: "https://github.com/guyujie30",
};

export const fallbackProjects = [
  {
    title: "Portfolio Website",
    type: "个人网站",
    description:
      "一个用于整理个人介绍、研究笔记和项目记录的网站。页面包含首页、关于、项目和笔记四个部分，内容围绕个人背景、研究方向、项目实践和技术复盘展开。",
    tags: ["React", "Next.js", "Prisma"],
    demoUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    title: "LangGraph 决策流复现计划",
    type: "研究复现",
    description:
      "围绕 LangGraph 的状态图、节点、边和 checkpoint 机制，整理可解释的 LLM 决策流程，关注 Agent 的状态流转、工具调用和结果校验。",
    tags: ["LangGraph", "Agent", "Decision"],
    demoUrl: "#",
    repoUrl: "https://github.com/langchain-ai/langgraph",
    featured: true,
  },
  {
    title: "AutoGen 多智能体协作实验",
    type: "学习实验",
    description:
      "参考 AutoGen 的多 Agent 对话模式，实验 planner、executor、reviewer 之间如何分工，以及任务拆解、工具调用和结果校验如何闭环。",
    tags: ["AutoGen", "Multi-Agent", "Workflow"],
    demoUrl: "#",
    repoUrl: "https://github.com/microsoft/autogen",
    featured: true,
  },
  {
    title: "CrewAI 角色型 Agent 调研",
    type: "开源调研",
    description:
      "从 CrewAI 的 role / goal / task 设计入手，整理角色型 Agent 的适用边界：什么时候多角色有价值，什么时候只是增加复杂度。",
    tags: ["CrewAI", "Roles", "Research"],
    demoUrl: "#",
    repoUrl: "https://github.com/crewAIInc/crewAI",
    featured: false,
  },
];

export const fallbackNotes = [
  {
    title: "LLM Agent 到底在决策什么",
    slug: "what-does-an-llm-agent-decide",
    category: "项目复盘",
    date: new Date("2026-06-24"),
    excerpt: "把 Agent 决策拆成目标理解、状态判断、工具选择、结果校验四个环节，先建立研究问题的地图。",
    content:
      "LLM Agent 不只是“模型调用工具”。更关键的问题是：它在每一步依据什么做选择。\n\n一个 Agent 通常包含目标理解、状态判断、工具选择和结果校验等环节。系统失效往往不是单点能力不足，而是状态维护不清晰、工具选择缺少约束、结果校验没有闭环。\n\n把输入、状态、动作和观察结果记录下来，才能让 Agent 的决策过程具备可追踪性，也更便于比较不同框架和流程设计的差异。",
  },
  {
    title: "LangGraph 为什么适合做决策流复现",
    slug: "why-langgraph-for-decision-flow",
    category: "技术复盘",
    date: new Date("2026-05-16"),
    excerpt: "状态图让 Agent 的每一步选择更容易被追踪，适合作为研0阶段理解 LLM 决策的第一个工程入口。",
    content:
      "LangGraph 对我最有吸引力的地方，是它把 Agent 流程拆成了节点、边和状态。节点负责一次推理或工具调用，边决定下一步怎么走，状态保存整个过程里的上下文。\n\n这和“LLM 决策”这个方向很契合：如果流程是黑盒，就只能看最后答案；如果流程是图，就能观察模型在哪个节点犹豫、在哪个条件下走错、哪些状态会影响后续选择。\n\n它未必是最终研究框架，但很适合作为第一个复现入口。先把流程跑起来，再谈评估、对照实验和改进策略。",
  },
  {
    title: "多智能体协作不是越多越好",
    slug: "multi-agent-is-not-always-better",
    category: "学习笔记",
    date: new Date("2026-04-20"),
    excerpt: "Planner、Executor、Reviewer 的拆分能降低复杂度，也可能制造沟通成本。关键是任务边界是否真的清楚。",
    content:
      "多 Agent 系统看起来很强，但我现在会先问一个问题：拆角色真的降低了问题复杂度吗？\n\nPlanner、Executor、Reviewer 这种分工在任务边界清楚时很有价值。Planner 负责计划，Executor 负责执行，Reviewer 负责检查，系统更容易形成闭环。但如果任务本身含糊，角色越多，沟通成本越高，错误也可能在角色之间传递。\n\n所以我更想关注“什么时候需要多 Agent”。不是为了堆概念，而是看角色拆分是否让决策更清晰、过程更可控、结果更容易验证。",
  },
  {
    title: "从个人网站开始搭研究工作台",
    slug: "portfolio-as-research-workbench",
    category: "踩坑记录",
    date: new Date("2026-03-28"),
    excerpt: "先把展示、笔记、项目和后台 CRUD 搭起来，再把研究过程一点点沉淀成可检索、可复盘的材料。",
    content:
      "个人网站不仅是展示入口，也可以作为研究资料和项目记录的索引。\n\n项目页用于整理实践内容，笔记页用于保存技术复盘，关于页用于呈现个人背景。接入 Supabase 和 Prisma 后，内容不再依赖静态代码维护，后续可以通过数据库持续更新。\n\n这个网站的意义在于把个人背景、研究方向和项目材料放在同一个结构里，便于长期整理和回看。",
  },
];
