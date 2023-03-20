import { FC, ReactNode } from "react"
import { classNames as cn } from "shared/lib/classNames/classNames"
import "./Tag.scss"

interface TagProps {
  className?: string;
  children: ReactNode;
}

export const Tag: FC<TagProps> = (props) => {
  const { className, children } = props

  return (
    <div className={cn("tag", {}, [className])}>
      {children}
    </div>
  )
}

// interface CompanyProps {
//   company: Company;
// }
//
// export const CompanyTag: FC<CompanyProps> = (props) => {
//   const { company } = props
//
//   return (
//     <Tag className={cn("company", {}, [className])}>
//       Company
//     </Tag>
//   )
// }