import { PropsWithChildren } from "react";
import clsx from "clsx";
type ButtonCtaProps = PropsWithChildren<{
  theme?: "primary" | "secondary";
}>;

export const ButtonCta = (props: ButtonCtaProps) => {
  const { children, theme = "primary" } = props;
  return (
    <div className="pt-10">
      <button
        className={clsx(
          "border-2  rounded-full",
          theme === "primary" &&
            "border-white text-white hover:bg-white hover:text-gray-900",
          theme === "secondary" &&
            "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
          " font-bold",
          "px-8 py-4",
          "animate animate-bounce",
          " hover:animate-none"
        )}
      >
        {children && children}
      </button>
    </div>
  );
};
