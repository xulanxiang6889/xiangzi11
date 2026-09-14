import Link from "next/link";
import { notFound } from "next/navigation";
import { getKnowledgeResource, knowledgeResources } from "../../../content/knowledge";
import ResourceActions from "../../../components/resource-actions";
export function generateStaticParams() { return knowledgeResources.map((resource) => ({ slug: resource.slug })); }
export default function ResourceDetail({ params }: { params: { slug: string } }) {
  const resource = getKnowledgeResource(params.slug); if (!resource) notFound();
  const related = knowledgeResources.filter((item) => item.category === resource.category && item.slug !== resource.slug).slice(0, 3);
  const sections = [["适用场景", "适合希望把 AI 用于真实创作、知识整理、团队协作或交付流程的用户。"], ["输入", "准备你的目标、已有素材、受众信息与约束条件，按资源主题补充必要上下文。"], ["步骤", "先明确目标，再执行资源中的模板或方法；每完成一个节点就记录结果与待改进项。"], ["输出", "得到一份可阅读、可复用、可交付的工作成果，并保留必要的过程记录。"], ["验证标准", "检查目标是否达成、内容是否合规、结果是否可复现，以及是否能由他人按步骤复用。"]];
  return <div className="wrap page resource-detail"><Link className="text-link" href="/explore">← 返回资源目录</Link><ResourceActions slug={resource.slug} title={resource.title} /><p className="eyebrow">PUBLIC RESOURCE / {resource.category.toUpperCase()}</p><div className="detail-header"><div><span className="tag">{resource.category}</span><h1>{resource.title}</h1><p className="lede">{resource.summary}</p></div><div className="detail-meta"><span>内容类型</span><strong>{resource.kind}</strong><span>来源</span><strong>{resource.source}</strong><span>状态</span><strong>已公开筛选</strong></div></div>{sections.map(([title, body]) => <section className="detail-section" key={title}><h2>{title}</h2><p>{body}</p></section>)}<section className="detail-section compliance"><h2>公开与合规说明</h2><p>页面不包含第三方账号、密码、Token、Cookie、API Key、内部配置或未完成草稿。内容权利已由资源所有者确认，本站仅提供本地演示与索引，不代表任何第三方背书。</p></section>{related.length > 0 && <section className="detail-section"><h2>继续探索</h2><div className="related-list">{related.map((item) => <Link key={item.slug} href={`/explore/${item.slug}`} className="related-item"><span>{item.category}</span><strong>{item.title}</strong><small>{item.kind}</small></Link>)}</div></section>}</div>;
}



