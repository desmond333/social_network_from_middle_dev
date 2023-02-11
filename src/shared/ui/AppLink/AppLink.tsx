import cn from "shared/lib/classNames/classNames";
import "./AppLink.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary"
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const mainClass = "app-link";

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    children,
    className,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      className={cn(mainClass, {}, [className, `${mainClass}--${theme}`])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};