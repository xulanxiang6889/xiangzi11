import Link from "next/link";
const topics=[['账号安全','了解演示账户与真实服务接入边界。'],['购买与权益','查看订单意向、权益状态与支持流程。'],['隐私','了解我们如何处理演示数据。'],['联系支持','提交一个清晰、可追踪的咨询请求。']];
export default function Help(){return <div className="wrap page"><p className="eyebrow">HELP CENTER</p><h1>把疑问变成下一步。</h1><p className="lede narrow">先从常见问题开始；每篇指南都只解释必要的信息，不涉及第三方凭据或绕过认证。</p><div className="help-list">{topics.map(([t,d])=><Link href={`/help/${t}`} className="help-item" key={t}><div><h2>{t}</h2><p>{d}</p></div><span>→</span></Link>)}</div></div>}
