import { MdOutlineSecurity } from "react-icons/md";
import { ButtonCta } from "../../buttonCta/ButtonCta";
import { Benefit, CardBenefits } from "../../cardBenefits/CardBenefits";
import { SectionTitle } from "../../sectionTitle/SectionTitle";
import { WrapperSection } from "../../wrapperSection/WrapperSection";

type SectionBenefitsProps = {
  benefits: Benefit[];
};
export const SectionBenefits = (props: SectionBenefitsProps) => {
  const { benefits } = props;
  return (
    <WrapperSection>
      <div className="h-full py-10">
        <SectionTitle
          title="Benefícios"
          subtitle={"Confira alguns benefícios que somente nós oferecemos."}
        />
        <ul className="grid grid-cols-2 gap-4 px-40 p-16">
          {benefits.map((benefit, key) => {
            return <CardBenefits key={key} benefit={benefit} />;
          })}
        </ul>
        <div className="flex justify-center">
          <ButtonCta theme="secondary">ENTRAR EM CONTATO</ButtonCta>
        </div>
      </div>
    </WrapperSection>
  );
};
