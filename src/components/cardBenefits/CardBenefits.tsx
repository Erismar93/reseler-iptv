import { ReactNode } from "react";
import { MdOutlineSecurity } from "react-icons/md";

export type Benefit = {
  title: string;
  description: string;
  icon: ReactNode;
};
type CardBenefitsProps = {
  benefit: Benefit;
};

export const CardBenefits = (props: CardBenefitsProps) => {
  const { benefit } = props;
  return (
    <li className="border rounded border-gray-500 space-y-4 p-10 flex flex-col items-center group hover:shadow-xl cursor-pointer hover:bg-gray-500 ">
      <div className="text-6xl text-gray-500 group-hover:text-white">
        {benefit.icon}
      </div>
      <h2 className="font-bold text-xl text-gray-500 group-hover:text-white">
        {benefit.title}
      </h2>
      <span className="text-center text-gray-500 group-hover:text-white">
        {benefit.description}
      </span>
    </li>
  );
};
