import Head from "next/head";

type SeoHeadProps = {
  title: string;
  description: string;
};
export const SeoHead = (props: SeoHeadProps) => {
  const { title, description } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
