import clsx from "clsx";
import { ButtonCta } from "../../buttonCta/ButtonCta";
import { WrapperSection } from "../../wrapperSection/WrapperSection";

export const SectionTitle = () => {
  return (
    <WrapperSection>
      <div
        style={{
          backgroundImage:
            "url(https://img2.gratispng.com/20180323/qhw/kisspng-brick-paper-wall-white-wallpaper-brick-5ab58fe4da6799.6849393915218482928946.jpg)",
        }}
        className={clsx("h-screen", "flex items-center justify-center shadow-lg px-10")}
      >
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
          <ButtonCta>EU QUERO</ButtonCta>
        </div>
      </div>
    </WrapperSection>
  );
};
