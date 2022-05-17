import clsx from "clsx";
import { ReactNode } from "react";
import { FiArrowRight } from "react-icons/fi";
import { MdOutlineSecurity } from "react-icons/md";
import { createGenerateLinkWhats } from "../../helpers/generateLinkWhats";
import { Button } from "../button/Button";

export type Plan = {
  qtd: number;
  price: string;
  price_unit: string;
};
type CardPlansProps = {
  plan: Plan;
};

export const CardPlans = (props: CardPlansProps) => {
  const { plan } = props;
  const generateLinkWhats = createGenerateLinkWhats("5584996760901")
  return (
    <li className={clsx(
      "rounded",
      "bg-gray-700",
      "p-4 space-y-4 flex flex-col items-center justify-center",
      "group hover:shadow-xl cursor-pointer",
      "text-white"
    )} >
      <div className="w-full text-center border-b pb-4">
        <h2 className="text-3xl font-bold">{plan.qtd} Créditos</h2>
      </div>
      <div className="pt-2">
        <span className="bg-gray-600 shadow px-16 py-2 rounded  text-lg font-bold">R$ {plan.price}</span>
      </div>

      <div className="py-4">
        <span className="text-6xl font-bold">{plan.price_unit}</span>
        <span className="">/cada</span>
      </div>

      <div>
        <span className="text-center">Liberação do painel é imediata.</span>
      </div>
      
      <Button href={generateLinkWhats(`Olá, venho do site e gostaria de assinar o plano de ${plan.qtd} créditos por R$ ${plan.price}.`)} rightIcon={<FiArrowRight/>}>QUERO ESSE</Button>
    </li >
  );
};
