type SectionTitleProps = {
  title: string;
  subtitle: string;
};

export const SectionTitle = (props: SectionTitleProps) => {
  const { title, subtitle } = props;
  return (
    <div className="flex flex-col items-center justify-center w-full px-8 pt-20">
      <div className="relative flex items-center justify-center bg-gray-200">
        <div className="absolute text-5xl lg:text-8xl text-gray-200 font-bold">
          {title.toUpperCase()}
        </div>
        <h1 className="absolute font-bold text-xl lg:text-2xl text-gray-800">{title.toUpperCase()}</h1>
      </div>

      <span className="mt-10 text-gray-800 lg:text-xl">{subtitle}</span>
    </div>
  );
};
