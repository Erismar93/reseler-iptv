import clsx from "clsx";
import { BsFillMouse2Fill, BsFillMouseFill } from "react-icons/bs";
import { FiArrowDownRight, FiArrowRight, FiMousePointer } from "react-icons/fi";
import { createGenerateLinkWhats } from "../../../helpers/generateLinkWhats";
import { Button } from "../../button/Button";
import { WrapperSection } from "../../wrapperSection/WrapperSection";

export const SectionTitle = () => {
  return (
    <WrapperSection
      noPadding
      style={{
        backgroundImage: "url(bg/bg-main.jpg)",

        objectFit: "cover",
        height: "100vh",
      }}
      className="relative"
    >
      <div
        className={clsx(
          "h-full",
          "flex items-center justify-center bg-black bg-opacity-80 rounded"
        )}
      >
        <TV />
        <div className="text-primary text-2xl animate-bounce absolute bottom-8 flex w-full justify-center">
          <BsFillMouseFill />
        </div>
      </div>
    </WrapperSection>
  );
};

const TV = () => {
  const generateLinkWhats = createGenerateLinkWhats("5584996760901")
  return (
    <div className=" flex flex-col items-start lg:items-center text-start lg:text-center justify-center  space-y-4 px-10 lg:px-32 py-8 lg:py-20 ">
      <h1 className="text-2xl lg:text-6xl font-bold text-white ">
        Seja um revendedor
        <br />
        do servidor mais
        <br />
        completo do país.
      </h1>
      <span className="text-primary text-lg ">
        Faça parte do melhor servidor do Brasil.
      </span>
      <Button href={generateLinkWhats("Olá, venho do site e gostaria de conhecer mais sobre IPTV.")} theme="primary" rightIcon={ <FiArrowRight/>}>QUERO CONHECER</Button>
    </div>
  );
};

const TV1 = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 bg-gray-700 px-10 lg:px-32 py-8 lg:py-20 border-8 rounded border-gray-900">
      <h1 className="text-2xl lg:text-6xl font-bold text-white text-center">
        Seja um revendedor
        <br />
        do servidor mais
        <br />
        completo do país.
      </h1>
      <span className="text-white text-lg text-center">
        Faça parte do melhor servidor do Brasil.
      </span>
      <Button href="">EU QUERO</Button>
    </div>
  );
};
