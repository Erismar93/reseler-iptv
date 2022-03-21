import { Benefit } from "../components/cardBenefits/CardBenefits";
import { BiNetworkChart } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { DiAndroid } from "react-icons/di";
import { Plan } from "../components/cardPlans/CardPlans";

export const questions = [
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

export const benefits: Benefit[] = [
  {
    title: "7 FORNECEDORES",
    description:
      "Somos o único servidor que possui 7 fornecedores distintos de canais. No que isso tem vantagem? A maioria das demais listas possuem 1 único fornecedor, se ele ficar OFF deixa todos os clientes daquela lista sem sinal de tv. No nosso casso fazemos um rápido backup e mudamos os LINKS que ficaram OFF e voltamos em minutos.",
    icon: <BiNetworkChart />,
  },
  {
    title: "APPS PRÓPRIOS",
    description:
      "Temos nossos próprios apps para atender com maior satisfação nossos clientes. Apps disponíveis apenas para smartphones ANDROID e TV BOX",
    icon: <DiAndroid />,
  },
  {
    title: "ROBÔ TELEGRAM",
    description:
      "Possuímos um ROBÔ no Telegram para gerenciar testes e edições de usuários e revendas. Após a criação do nosso ROBÔ conseguimos diminuir o tempo para gerenciar nossos usuários e as nossas revendas",
    icon: <FaTelegramPlane />,
  },
  {
    title: "SUPORTE",
    description:
      "Temos o melhor suporte de todos, contamos com suporte avançado e grupos para manter sempre a qualidade da nossa lista. Visto assim qualquer canal com possível problemas seremos reportado nos grupos do WhatsApp, e assim, resolvendo o problema o mais breve possível.",
    icon: <IoCallSharp />,
  },
];


export const plans: Plan[] = [

  { qtd: 10, price: "60,00", price_unit: "6,00", },
  { qtd: 20, price: "110,00", price_unit: "5,50" },
  { qtd: 30, price: "130,50", price_unit: "4,35" },
  { qtd: 40, price: "158,80", price_unit: "3,97" },
  { qtd: 50, price: "162,50", price_unit: "3,25" },
  { qtd: 100, price: "235,00", price_unit: "2,35" },
  { qtd: 150, price: "300,00", price_unit: "2,00" }

]

export const A = () => <div></div>

