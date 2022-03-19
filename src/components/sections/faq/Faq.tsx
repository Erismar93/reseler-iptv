import { ButtonCta } from "../../buttonCta/ButtonCta"
import { Faq, QuestionProps } from "../../faq/Faq"
import { SectionTitle } from "../../sectionTitle/SectionTitle"
import { WrapperSection } from "../../wrapperSection/WrapperSection"

type SectionFaqProps = {
    questions: QuestionProps[]
}
export const SectionFaq = (props: SectionFaqProps) => {
    const {questions} = props
    return (
        <WrapperSection>
        <div className="bg-gray-100 h-full py-10">
          <SectionTitle
            title="Dúvidas"
            subtitle={"Confira aqui algumas dúvidas mais frequentes."}
          />
          <div className="flex justify-center py-10">
            <Faq questions={questions} />
          </div>
          <div className="flex justify-center">
            <ButtonCta theme="secondary">ENTRAR EM CONTATO</ButtonCta>
          </div>
        </div>
      </WrapperSection>
    )
}