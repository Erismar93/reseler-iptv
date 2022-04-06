import { MdOutlineSecurity } from "react-icons/md";
import { ButtonCta } from "../../buttonCta/ButtonCta";
import { Benefit, CardBenefits } from "../../cardBenefits/CardBenefits";
import { CardPlans, Plan } from "../../cardPlans/CardPlans";
import { SectionTitle } from "../../sectionTitle/SectionTitle";
import { WrapperSection } from "../../wrapperSection/WrapperSection";

type SectionPlansProps = {
  plans: Plan[];
};
export const SectionPlans = (props: SectionPlansProps) => {
  const { plans } = props;
  return (
    <WrapperSection>
      <div className="h-full space-y-10 py-10">
        <SectionTitle
          title="Ofertas"
          subtitle={"Aproveite os preços exclusivos do nosso site e escolha a melhor oferta para você!"}
        />
        <div className="">
          <ul className="grid grid-cols-1 lg:grid-cols-4 gap-4  bg-white">
            {plans.map((plan, key) => {
              return <CardPlans key={key} plan={plan} />;
            })}
          </ul>
        </div>

        <div className="flex justify-center">
          <ButtonCta theme="secondary">ENTRAR EM CONTATO</ButtonCta>
        </div>
      </div>
    </WrapperSection>
  );
};
