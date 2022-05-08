type SectionTitleProps = {
  title: string;
  subtitle: string;
};

export const SectionTitle = (props: SectionTitleProps) => {
  const { title, subtitle } = props;
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex items-center justify-center bg-gray-200">
        <div className="absolute text-5xl lg:text-6xl text-white font-bold">
          {title.toUpperCase()}
        </div>
      </div>

      <span className="mt-8 text-primary lg:text-xl">{subtitle}</span>
    </div>
  );
};
