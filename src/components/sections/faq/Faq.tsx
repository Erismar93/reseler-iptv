import { BsWhatsapp } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import { createGenerateLinkWhats } from "../../../helpers/generateLinkWhats"
import { Button } from "../../button/Button"
import { Faq, QuestionProps } from "../../faq/Faq"
import { SectionTitle } from "../../sectionTitle/SectionTitle"
import { WrapperSection } from "../../wrapperSection/WrapperSection"

type SectionFaqProps = {
  questions: QuestionProps[]
}
export const SectionFaq = (props: SectionFaqProps) => {
  const { questions } = props
  const generateLinkWhats = createGenerateLinkWhats("5584996760901")

  return (
    <WrapperSection className="bg-gray-900">
      <div className=" space-y-10 py-10" id="faq">
  
        <SectionTitle
          title="Dúvidas"
          subtitle={"Confira aqui algumas dúvidas mais frequentes."}
        />
        <div className="flex justify-center">
          <Faq questions={questions} />
        </div>
        <div className="flex justify-center">
          <Button href={generateLinkWhats("Olá, venho do site e gostaria de conhecer mais sobre IPTV.")} theme="primary" rightIcon={<BsWhatsapp/>}>ENTRAR EM CONTATO</Button>
        </div>
        </div>

    </WrapperSection>
  )
}