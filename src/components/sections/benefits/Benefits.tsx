import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { Button } from "../../button/Button";
import { Benefit, CardBenefits } from "../../cardBenefits/CardBenefits";
import { SectionTitle } from "../../sectionTitle/SectionTitle";
import { WrapperSection } from "../../wrapperSection/WrapperSection";

type SectionBenefitsProps = {
  benefits: Benefit[];
};
export const SectionBenefits = (props: SectionBenefitsProps) => {
  const { benefits } = props;
  return (
    <WrapperSection className="bg-gray-900">
      <div className="h-full space-y-10 py-10">
        <SectionTitle
          title="Benefícios"
          subtitle={"Confira alguns benefícios que somente nós oferecemos."}
        />
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {benefits.map((benefit, key) => {
            return <CardBenefits key={key} benefit={benefit} />;
          })}
        </ul>
        <div className="flex justify-center">
          <Button theme="primary" rightIcon={<BsWhatsapp/>}>ENTRAR EM CONTATO</Button>
        </div>
      </div>
    </WrapperSection>
  );
};
