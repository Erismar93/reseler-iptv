import clsx from "clsx";
import dayjs from "dayjs";
import Image from "next/image";

type PressureElementProps = {
  fixed?: boolean;
};
export const PressureElement = (props: PressureElementProps) => {
  const { fixed = false } = props;
  return (
    <header
      className={clsx(
        "top-0 z-50",
        "w-full py-4 px-20",
        "flex items-center justify-center",
        "shadow-sm bg-white ",
        fixed ? "fixed" : "absolute"
      )}
    >
      <div className="text-xl text-center text-gray-600">
        <b>Atenção: </b>
        As promoções contidas nesse site são válidas apenas para o dia de hoje:{" "}
        <b>Domingo, {today()}.</b>
      </div>
    </header>
  );
};

const today = () => dayjs().format("DD/MM/YYYY");
