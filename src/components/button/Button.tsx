import { PropsWithChildren, ReactNode } from "react";
import clsx from "clsx";
type ButtonCtaProps = PropsWithChildren<{
  theme?: "primary" | "primary";
  rightIcon?: ReactNode;

  href: string;
}>;

export const Button = (props: ButtonCtaProps) => {
  const { children, theme = "primary", rightIcon, href } = props;
  return (
    <div>
      <a
        href={href}
        className={clsx(
          "border-2  rounded",
          theme === "primary" && "border-primary  bg-primary text-white",
          // theme === "primary" &&
          //   "border-primary bg-primary text-white",
          "font-bold",
          "px-8 py-2",
          "flex items-center space-x-4"
        )}
        target={"_blank"}
        rel="noreferrer"
        
      >
        {children && <div>{children}</div>}
        {rightIcon && <div>{rightIcon}</div>}
      </a>
    </div>
  );
};
