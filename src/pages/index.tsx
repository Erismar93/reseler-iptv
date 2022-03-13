import type { NextPage } from "next";
import clsx from "clsx";
import { ButtonCta } from "../components/buttonCta/ButtonCta";
import { PressureElement } from "../components/pressureElement/PressureElement";
import { SeoHead } from "../components/seo/Seo";
import { WrapperSection } from "../components/wrapperSection/WrapperSection";
import { RemoteControll } from "../components/controllRemote/ControllRemote";
import { SectionTitle } from "../components/sectionTitle/SectionTitle";
import { MdOutlineSecurity } from "react-icons/md";
import { Faq } from "../components/faq/Faq";
const Home: NextPage = () => {
  return (
    <>
      <SeoHead
        title="Revenda TV"
        description="Melhor painel de IPTV do Brasil"
      />

      <PressureElement />

      {/* Title landing page and CTA */}
      <WrapperSection>
        <div
          style={{
            backgroundImage:
              "url(https://img2.gratispng.com/20180323/qhw/kisspng-brick-paper-wall-white-wallpaper-brick-5ab58fe4da6799.6849393915218482928946.jpg)",
          }}
          className={clsx(
            "h-full",
            "flex items-center justify-center shadow-lg"
          )}
        >
          <div className="flex flex-col items-center justify-center space-y-4 bg-gray-700 px-32 py-20 border-8 rounded border-gray-900">
            <h1 className="text-6xl font-bold text-white text-center">
              Seja um revendedor
              <br />
              do servidor mais
              <br />
              completo do país.
            </h1>
            <span className="text-white text-lg">
              Faça parte do melhor servidor do Brasil.
            </span>
            <ButtonCta>EU QUERO</ButtonCta>
          </div>
        </div>
      </WrapperSection>

      <WrapperSection>
        <div className=" h-full py-10">
          <SectionTitle
            title="Benefícios"
            subtitle={"Confira alguns benefícios que somente nós oferecemos."}
          />
          <ul className="grid grid-cols-4 gap-4 px-40 p-16">
            {benefits.map((b, k) => {
              return (
                <li
                  className="border rounded border-gray-500 space-y-4 p-10 flex flex-col items-center group hover:shadow-xl cursor-pointer hover:bg-gray-500"
                  key={k}
                >
                  <div className="text-6xl text-gray-500 group-hover:text-white">
                    <MdOutlineSecurity />
                  </div>
                  <h2 className="font-bold text-xl text-gray-500 group-hover:text-white">
                    {b.title}
                  </h2>
                  <span className="text-center text-gray-500 group-hover:text-white">
                    {b.description}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center">
            <ButtonCta theme="secondary">ENTRAR EM CONTATO</ButtonCta>
          </div>
        </div>
      </WrapperSection>

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

      <RemoteControll />
    </>
  );
};

export default Home;

const benefits = [
  {
    title: "7 FORNECEDORES",
    description:
      "Somos o único servidor que possui 7 fornecedores distintos de canais. No que isso tem vantagem? A maioria das demais listas possuem 1 único fornecedor, se ele ficar OFF deixa todos os clientes daquela lista sem sinal de tv. No nosso casso fazemos um rápido backup e mudamos os LINKS que ficaram OFF e voltamos em minutos.",
  },
  {
    title: "APPS PRÓPRIOS",
    description:
      "Temos nossos próprios apps para atender com maior satisfação nossos clientes. Apps disponíveis apenas para smartphones ANDROID e TV BOX",
  },
  {
    title: "ROBÔ TELEGRAM",
    description:
      "Possuímos um ROBÔ no Telegram para gerenciar testes e edições de usuários e revendas. Após a criação do nosso ROBÔ conseguimos diminuir o tempo para gerenciar nossos usuários e as nossas revendas",
  },
  {
    title: "SUPORTE",
    description:
      "Temos o melhor suporte de todos, contamos com suporte avançado e grupos para manter sempre a qualidade da nossa lista. Visto assim qualquer canal com possível problemas seremos reportado nos grupos do WhatsApp, e assim, resolvendo o problema o mais breve possível.",
  },
];

const questions = [
  {
    question: "O que é lista de IPTV?",
    response:
      "Essa tecnologia nada mais é do que a junção de um serviço de televisão com o de internet banda larga. Ao invés de receber seu sinal de televisão pela antena ou pelo cabo da sua operadora de TV, você a recebe via internet.",
  },
  {
    question: "Como e onde usar?",
    response:
      "Assista seus programas preferidos de uma maneira simples e prático. Com o seu celular, tablet, notebook, smartTV, TVbox e muito mais, é uma infinidade de dispositivos compatíveis. A transmissão é feita 100% via internet, com chuva ou sem chuva o seu entretenimento é garantido. Onde tiver banda larga de qualidade você estará conectado conosco. ",
  },
  {
    question: "Que tipos de canais são disponibilizados?",
    response:
      "Assinando um de nossos planos, nós disponibilizamos +38mil conteúdos, sem travamento e com resolução de imagem em SD, HD, Full HD e até 4K.       Em nossa lista de IPTV, temos diversos canais, incluindo esportes, infantis, 24 horas, canais adultos e etc. Também oferecemos a você uma variedade de filmes e séries, e atualizamos os conteúdos semanalmente.",
  },
  {
    question: "Como funciona nosso suporte?",
    response:
      "Possuímos um suporte de qualidade que irá lhe atender de forma imediata e irá tirar todas as suas dúvidas sobre o serviço. Qualquer dia e horário que você precisar, pode contar com a gente!",
  },
];
