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
    <li className="bg-gray-800 rounded  space-y-4 p-10 flex flex-col items-center group hover:shadow-xl cursor-pointer ">
      <div className="text-6xl text-primary ">
        {benefit.icon}
      </div>
      <h2 className="font-bold text-xl text-white">
        {benefit.title}
      </h2>
      <span className="text-center text-white">
        {benefit.description}
      </span>
    </li>
  );
};
