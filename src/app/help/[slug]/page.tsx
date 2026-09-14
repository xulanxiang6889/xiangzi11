import Link from "next/link";

const guides: Record<string, { title: string; body: string }> = {
  "账号安全": { title: "账号安全", body: "Lumen Hub 不索取第三方账号或凭据。请使用独立密码、启用官方提供的多因素认证，并仅通过服务商官方入口处理安全设置。" },
  "购买与权益": { title: "购买与权益", body: "当前站点只演示订单意向，不会扣款。正式购买前请核对内容范围、交付方式、支持渠道与退款条款。" },
  "隐私与数据": { title: "隐私与数据", body: "演示环境只保留页面交互所需的临时状态，不连接外部数据库、邮件或支付系统。" },
  "联系支持": { title: "联系支持", body: "你可以通过咨询请求描述目标、背景和期望结果。请不要提交密码、Token、Cookie 或其他敏感凭据。" }
};

export function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

export default function HelpDetail({ params }: { params: { slug: string } }) {
  const guide = guides[decodeURIComponent(params.slug)];
  if (!guide) return <div className="wrap page"><p className="eyebrow">HELP CENTER</p><h1>找不到这篇指南。</h1><Link className="text-link" href="/help">返回帮助中心 →</Link></div>;
  return <article className="wrap page narrow-page"><p className="eyebrow">HELP CENTER / GUIDE</p><h1>{guide.title}</h1><p className="lede">{guide.body}</p><Link className="text-link" href="/help">返回帮助中心 →</Link></article>;
}
