import { FC, ReactNode } from "react"
import { classNames as cn } from "shared/lib/classNames"

// компонент для текста

type BlockTextProps = {
  children: ReactNode;
};

export const BlockText: FC<BlockTextProps> = ({ children }) => (
  <div className={cn("block-text")}>{children}</div>
)
