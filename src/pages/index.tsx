import type { NextPage } from "next";
import { PressureElement } from "../components/pressureElement/PressureElement";
import { SeoHead } from "../components/seo/Seo";
import { RemoteControll } from "../components/controllRemote/ControllRemote";

import { SectionFaq } from "../components/sections/faq/Faq";
import { SectionTitle } from "../components/sections/title/Title";
import { benefits, questions } from "../mock/index";
import { SectionBenefits } from "../components/sections/benefits/Benefits";
import { Footer } from "../components/footer/Footer";
const Home: NextPage = () => {
  return (
    <>
      <SeoHead
        title="Revenda TV"
        description="Melhor painel de IPTV do Brasil"
      />

      {/* Elements pressure fixed or absolute in top page */}
      <PressureElement fixed />

      {/* Title landing page and CTA */}
      <SectionTitle />

      <SectionBenefits benefits={benefits} />

      <SectionFaq questions={questions} />

      <RemoteControll />

      <Footer />
    </>
  );
};

export default Home;
