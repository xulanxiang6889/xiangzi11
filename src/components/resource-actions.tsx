"use client";
import { useEffect, useState } from "react";
export default function ResourceActions({ slug, title }: { slug: string; title: string }) {
  const [saved, setSaved] = useState(false);
  useEffect(() => setSaved(localStorage.getItem(`favorite:${slug}`) === "1"), [slug]);
  function toggleFavorite() { const next = !saved; setSaved(next); localStorage.setItem(`favorite:${slug}`, next ? "1" : "0"); }
  function download() { const body = `资源：${title}\n\n适用场景\n输入\n步骤\n输出\n验证标准\n`; const blob = new Blob([body], { type: "text/plain;charset=utf-8" }); const url = URL.createObjectURL(blob); const anchor = document.createElement("a"); anchor.href = url; anchor.download = `${title}-工作流清单.txt`; anchor.click(); URL.revokeObjectURL(url); }
  return <div className="resource-actions"><button className="button button-small" type="button" onClick={download}>下载工作流清单</button><button className="text-link action-button" type="button" onClick={toggleFavorite}>{saved ? "已收藏" : "收藏资源"}</button><a className="text-link" href={`/requests?resource=${slug}`}>预约咨询 →</a></div>;
}
