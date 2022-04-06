import { ButtonCta } from "../../buttonCta/ButtonCta"
import { Faq, QuestionProps } from "../../faq/Faq"
import { SectionTitle } from "../../sectionTitle/SectionTitle"
import { WrapperSection } from "../../wrapperSection/WrapperSection"

type SectionFaqProps = {
  questions: QuestionProps[]
}
export const SectionFaq = (props: SectionFaqProps) => {
  const { questions } = props
  return (
    <WrapperSection className="bg-gray-100">
      <div className=" space-y-10 py-10">
  
        <SectionTitle
          title="Dúvidas"
          subtitle={"Confira aqui algumas dúvidas mais frequentes."}
        />
        <div className="flex justify-center">
          <Faq questions={questions} />
        </div>
        <div className="flex justify-center">
          <ButtonCta theme="secondary">ENTRAR EM CONTATO</ButtonCta>
        </div>
        </div>

    </WrapperSection>
  )
}