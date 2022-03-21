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
      <div className="h-full py-10">
        <SectionTitle
          title="Ofertas"
          subtitle={"Aproveite os preços exclusivos do nosso site e escolha a melhor oferta para você!"}
        />
        <ul className="grid grid-cols-1 lg:grid-cols-4 gap-4 px-10 lg:px-40 p-16">
          {plans.map((plan, key) => {
            return <CardPlans key={key} plan={plan} />;
          })}
        </ul>
        <div className="flex justify-center">
          <ButtonCta theme="secondary">ENTRAR EM CONTATO</ButtonCta>
        </div>
      </div>
    </WrapperSection>
  );
};
