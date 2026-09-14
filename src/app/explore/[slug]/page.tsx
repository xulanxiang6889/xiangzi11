import Link from "next/link";
import { notFound } from "next/navigation";
import { getKnowledgeResource, knowledgeResources } from "../../../content/knowledge";
export function generateStaticParams() { return knowledgeResources.map((resource) => ({ slug: resource.slug })); }
export default function ResourceDetail({ params }: { params: { slug: string } }) {
  const resource = getKnowledgeResource(params.slug); if (!resource) notFound();
  const related = knowledgeResources.filter((item) => item.category === resource.category && item.slug !== resource.slug).slice(0, 3);
  return <div className="wrap page resource-detail"><Link className="text-link" href="/explore">← 返回资源目录</Link><p className="eyebrow">PUBLIC RESOURCE / {resource.category.toUpperCase()}</p><div className="detail-header"><div><span className="tag">{resource.category}</span><h1>{resource.title}</h1><p className="lede">{resource.summary}</p></div><div className="detail-meta"><span>内容类型</span><strong>{resource.kind}</strong><span>来源</span><strong>{resource.source}</strong><span>状态</span><strong>已公开筛选</strong></div></div><section className="detail-section"><h2>这份资源包含什么</h2><p>这是从个人知识库中整理的可公开学习材料，适合在合法、授权的场景下用于学习、规划与工作流实践。请结合你的具体目标阅读，并在实际使用前自行核验适用范围。</p></section><section className="detail-section compliance"><h2>公开与合规说明</h2><p>页面不包含第三方账号、密码、Token、Cookie、API Key、内部配置或未完成草稿。内容权利已由资源所有者确认，本站仅提供本地演示与索引，不代表任何第三方背书。</p></section>{related.length > 0 && <section className="detail-section"><h2>继续探索</h2><div className="related-list">{related.map((item) => <Link key={item.slug} href={`/explore/${item.slug}`} className="related-item"><span>{item.category}</span><strong>{item.title}</strong><small>{item.kind}</small></Link>)}</div></section>}</div>;
}
