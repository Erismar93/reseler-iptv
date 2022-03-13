import clsx from "clsx";
import { PropsWithChildren, useCallback } from "react";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdArrowDropleft,
  IoMdArrowDropright,
  IoMdPower,
  IoMdHome,
} from "react-icons/io";
export const RemoteControll = () => {
  return (
    <div className="fixed right-4 bottom-0">
      <div className={clsx("bg-gray-700 shadow-xl rounded-t-md p-4")}>
        <div className="flex flex-col items-center justify-center w-32">
        <div className="flex">
            <WrapperButton rounded bgColor="bg-red-700">
              <IoMdPower />
            </WrapperButton>
            <WrapperButton tabIndex={-1}></WrapperButton>
            <WrapperButton rounded bgColor="bg-yellow-600" onClick={() => window.scrollTo({
              top: 0
            })}>
              <IoMdHome />
            </WrapperButton>
          </div>
          <div className="">
            <WrapperButton>
              <IoMdArrowDropup />
            </WrapperButton>
          </div>
          <div className="flex items-center  justify-between">
            <WrapperButton>
              <IoMdArrowDropleft />
            </WrapperButton>
            <WrapperButton tabIndex={-1}></WrapperButton>
            <WrapperButton>
              <IoMdArrowDropright />
            </WrapperButton>
          </div>
          <div>
            <WrapperButton>
              <IoMdArrowDropdown />
            </WrapperButton>
          </div>

          {/* <div>asd</div> */}
        </div>
      </div>
    </div>
  );
};

type WrapperButtonProps = PropsWithChildren<{
  onClick?(): void;
  tabIndex?: number;
  rounded?: boolean;
  bgColor?: string;
  textColor?: string 
}>;

const WrapperButton = (props: WrapperButtonProps) => {
  const { children, onClick, tabIndex, rounded,bgColor = "bg-gray-600",textColor = "text-white" } = props;

  const onPress = useCallback(() => {
    onClick && onClick();
  }, [onClick]);

  return (
    <a
      tabIndex={tabIndex}
      onClick={onPress}
      className={clsx(
        "w-10 h-10",
        "flex items-center justify-center",
        "shadow-md",
        rounded ? "rounded-full" : "rounded",
        children && `${bgColor} ${textColor}`,
      )}
    >
      {children && children}
    </a>
  );
};
