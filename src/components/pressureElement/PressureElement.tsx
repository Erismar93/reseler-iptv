import dayjs from "dayjs";
import Image from "next/image";

export const PressureElement = () => {
  return (
    <header className="absolute top-0 w-full flex items-center justify-center shadow-sm bg-white py-4 px-20">
      <div className="text-xl text-center text-gray-600">
        <b>Atenção: </b>
        As promoções contidas nesse site são válidas apenas para o dia de hoje:{" "}
        <b>Domingo, {today()}.</b>
      </div>
    </header>
  );
};

const today = () => dayjs().format("DD/MM/YYYY");
