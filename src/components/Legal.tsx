import type { ReactNode } from "react";
export function Legal({title,children}:{title:string;children:ReactNode}){return <div className="wrap page legal"><p className="eyebrow">LEGAL</p><h1>{title}</h1><p className="lede narrow">{children}</p></div>}
