"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { knowledgeResources } from "../../content/knowledge";
const categories = ["全部", "内容创作", "知识管理", "AI 协作", "自动化交付"];
export default function Explore() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState("全部");
  const shown = useMemo(() => knowledgeResources.filter((x) => (cat === "全部" || x.category === cat) && [x.title, x.summary, x.category, x.kind].join("").toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return <div className="wrap page"><p className="eyebrow">EXPLORE / KNOWLEDGE</p><h1>从你的知识库中找到下一步。</h1><p className="lede">已筛选可公开的教程、方法、模板与工作流。内部配置、个人信息、凭据和草稿不会展示。</p><div className="toolbar"><label className="sr-only" htmlFor="search">搜索资源</label><input id="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="搜索资源"/><select value={cat} onChange={(e) => setCat(e.target.value)} aria-label="按类别筛选">{categories.map((x) => <option key={x}>{x}</option>)}</select></div><p className="result-count">共 {shown.length} 项公开资源</p><div className="resource-grid">{shown.map((x) => <Link href={`/explore/${x.slug}`} className="resource" key={x.slug}><span className="tag">{x.category}</span><h2>{x.title}</h2><p>{x.summary}</p><small>{x.kind} · {x.source}</small><span className="text-link resource-more">查看详情 →</span></Link>)}</div>{shown.length === 0 && <div className="empty">没有匹配内容，换个关键词试试。</div>}</div>;
}
