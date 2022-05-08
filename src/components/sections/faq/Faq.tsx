import { BsWhatsapp } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import { Button } from "../../button/Button"
import { Faq, QuestionProps } from "../../faq/Faq"
import { SectionTitle } from "../../sectionTitle/SectionTitle"
import { WrapperSection } from "../../wrapperSection/WrapperSection"

type SectionFaqProps = {
  questions: QuestionProps[]
}
export const SectionFaq = (props: SectionFaqProps) => {
  const { questions } = props
  return (
    <WrapperSection className="bg-gray-900">
      <div className=" space-y-10 py-10">
  
        <SectionTitle
          title="Dúvidas"
          subtitle={"Confira aqui algumas dúvidas mais frequentes."}
        />
        <div className="flex justify-center">
          <Faq questions={questions} />
        </div>
        <div className="flex justify-center">
          <Button theme="primary" rightIcon={<BsWhatsapp/>}>ENTRAR EM CONTATO</Button>
        </div>
        </div>

    </WrapperSection>
  )
}