import { PropsWithChildren, ReactNode } from "react";
import clsx from "clsx";
type ButtonCtaProps = PropsWithChildren<{
  theme?: "primary" | "primary";
  rightIcon?: ReactNode;
  outline?: boolean
}>;

export const Button = (props: ButtonCtaProps) => {
  const { children, theme = "primary", rightIcon, outline = true } = props;
  return (
    <div>
      <button
        className={clsx(
          "border-2  rounded",
          theme === "primary" &&
            "border-primary  bg-primary text-white",
          // theme === "primary" &&
          //   "border-primary bg-primary text-white",
          "font-bold",
          "px-8 py-2",
          "flex items-center space-x-4"
        )}
      >
        {children && <div>{children}</div>}
        {rightIcon && <div>{rightIcon}</div>}
      </button>
    </div>
  );
};
