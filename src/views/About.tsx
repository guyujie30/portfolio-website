import { BadgeCheck, Code2, IdCard, Layers3, Rocket, Sparkles } from "lucide-react";
import BrutalCard from "../components/BrutalCard";
import Sticker from "../components/Sticker";
import { fallbackProfile } from "../data/fallback";

const skillGroups = [
  {
    title: "Java 工程基础",
    items: ["Java", "Spring Boot", "Spring Cloud", "MyBatis"],
  },
  {
    title: "研究方向",
    items: ["LLM 决策", "LangGraph", "AutoGen", "Multi-Agent"],
  },
  {
    title: "当前项目工具",
    items: ["Next.js", "Prisma", "Supabase", "PostgreSQL"],
  },
];

const timeline = [
  { year: "2026", title: "上海电力大学硕士研究生", text: "研究方向为 LLM 决策与多智能体系统，关注 Agent 在目标理解、状态维护、工具调用和结果校验中的决策过程。" },
  { year: "2025", title: "本科毕业设计:OCR 信息收集平台", text: "用 Vue、Spring Boot 和 EasyOCR 做证书信息识别与管理，完成从图像识别到系统集成的闭环。" },
  { year: "2024", title: "通过软件设计师中级", text: "补齐软件工程、系统设计和基础理论能力，也获得国家励志奖学金和校级三好学生。" },
  { year: "2023", title: "后端开发实习", text: "参与商城小程序后端系统，接触 Spring Cloud 微服务、Elasticsearch 搜索和 Minio 图片存储。" },
  { year: "2021", title: "湖南农业大学计算机科学与技术", text: "本科阶段系统学习计算机网络、组成原理、大数据开发等课程，建立工程基础。" },
];

type AboutProps = {
  profile: {
    name: string;
    title: string;
    intro: string;
    email?: string | null;
    githubUrl?: string | null;
  } | null;
};

export default function About({ profile = fallbackProfile }: Partial<AboutProps>) {
  return (
    <section className="page-section">
      <div className="page-title">
        <Sticker tone="yellow" tilt="left">
          ABOUT
        </Sticker>
        <h1>关于我</h1>
        <p>这里整理我的教育背景、工程经历、研究方向与阶段性成果。比起展开成完整简历，这一页更关注经历之间的脉络。</p>
      </div>

      <div className="about-layout">
        <BrutalCard tone="red" className="about-lead">
          <div className="card-title-row">
            <IdCard aria-hidden="true" />
            <h3>个人介绍</h3>
          </div>
          <div className="about-copy">
            <p>
              上海电力大学硕士研究生，拥有 Java 后端开发经验，熟练运用 Spring Cloud、Elasticsearch、Minio、EasyOCR 完成微服务、检索、分布式存储、图像识别类系统开发，熟悉从需求到上线的完整工程流程。
            </p>
            <p>
              系统掌握大模型基础理论与实验开发工具：使用 PyTorch 搭建深度学习实验，借助 HuggingFace 生态完成预训练模型调用与微调；运用 vLLM 实现高效推理服务，搭配 Z3 求解器完成约束规划相关实验，可基于 LangChain 搭建推理智能体，独立复现各类 LLM 决策相关学术方案。
            </p>
          </div>
        </BrutalCard>

        <div className="stacked-cards">
          <BrutalCard tone="white">
            <div className="card-title-row">
              <Code2 aria-hidden="true" />
              <h3>技术栈</h3>
            </div>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div key={group.title} className="skill-group">
                  <strong>{group.title}</strong>
                  <div className="tag-list">
                    {group.items.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </BrutalCard>

          <BrutalCard tone="violet" rotate="right">
            <div className="card-title-row">
              <Sparkles aria-hidden="true" />
              <h3>核心优势</h3>
            </div>
            <p>Java 后端工程基础较完整，具备微服务拆分、搜索能力接入、对象存储集成和 OCR 系统落地经验；研究方向覆盖 LLM 决策、多智能体协作与 Agent 工具调用，能够把工程实现与研究问题放在同一条线上理解。</p>
          </BrutalCard>

          <BrutalCard tone="yellow">
            <div className="card-title-row">
              <Layers3 aria-hidden="true" />
              <h3>关注方向</h3>
            </div>
            <p>LLM 决策、多智能体协作、Agent 工具调用、知识库系统、Java 后端工程与研究型项目复现。</p>
          </BrutalCard>
        </div>
      </div>

      <div className="timeline">
        {timeline.map((item) => (
          <BrutalCard key={item.title} tone="white" className="timeline-item">
            <span className="timeline-year">{item.year}</span>
            <div>
              <div className="card-title-row">
                {item.year === "2026" ? <Rocket aria-hidden="true" /> : <BadgeCheck aria-hidden="true" />}
                <h3>{item.title}</h3>
              </div>
              <p>{item.text}</p>
            </div>
          </BrutalCard>
        ))}
      </div>
    </section>
  );
}
