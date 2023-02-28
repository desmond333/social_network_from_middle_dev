import { FC } from "react"
import { classNames as cn } from "shared/lib/classNames/classNames"
import "./Loader.scss"

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = (props) => {
  const { className } = props

  return (
    <div className={cn("loader", {}, [className])}>
      <div />
      <div />
    </div>
  )
}