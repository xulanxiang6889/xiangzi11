import "../styles/tokens.css";
import "../styles/globals.css";
import "../styles/motion.css";
import Link from "next/link";

export const metadata = { title: "Lumen Hub", description: "把 AI 工具、方法与服务整理成可直接使用的系统" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="zh-CN"><body><header className="site-header"><Link className="brand" href="/">Lumen Hub</Link><nav aria-label="主导航"><Link href="/explore">探索资源</Link><Link href="/help">帮助中心</Link><Link href="/account">我的空间</Link></nav><Link className="button button-small" href="/requests">预约咨询</Link></header><main>{children}</main><footer className="site-footer"><span>© 2026 Lumen Hub · 演示环境</span><span><Link href="/privacy">隐私</Link> · <Link href="/terms">条款</Link> · <Link href="/content-policy">内容政策</Link></span></footer></body></html>;
}
