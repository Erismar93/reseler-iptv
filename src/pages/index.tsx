import type { NextPage } from "next";
import { PressureElement } from "../components/pressureElement/PressureElement";
import { SeoHead } from "../components/seo/Seo";
import { RemoteControll } from "../components/controllRemote/ControllRemote";

import { SectionFaq } from "../components/sections/faq/Faq";
import { SectionTitle } from "../components/sections/title/Title";
import { benefits, plans, questions } from "../mock/index";
import { SectionBenefits } from "../components/sections/benefits/Benefits";
import { Footer } from "../components/footer/Footer";
import { SectionPlans } from "../components/sections/plans/Plans";
const Home: NextPage = () => {
  return (
    <>
      <SeoHead
        title="Revenda TV"
        description="Melhor painel de IPTV do Brasil"
      />

      {/* Elements pressure fixed or absolute in top page */}
      {/* <PressureElement fixed /> */}

      {/* Title landing page and CTA */}
      <SectionTitle />

      {/* Section Benefits */}
      <SectionBenefits benefits={benefits} />

      {/* Section Plans */}
      <SectionPlans plans={plans} />

      {/* Section FAQ */}
      <SectionFaq questions={questions} />

      {/* Section fixed bottom rigth */}
      {/* <RemoteControll /> */}


      <Footer />
    </>
  );
};

export default Home;
