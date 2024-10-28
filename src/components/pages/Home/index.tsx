import { FC } from "react";
import AboutUsSection from "../../main/AboutUsSection";
import CatalocSection from "../../main/CatalocSection";
import ComandosSection from "../../main/ComandosSection";
import ContactSection from "../../main/ContactSection";
import EndSection from "../../main/EndSection";
import QuestionsSection from "../../main/QuestionsSection";
import SelectionSection from "../../main/SelectionSection";

const Home: FC = () => {
  const filterValue = "someFilterValue";

  return (
    <>
      <CatalocSection filterValue={filterValue} />
      <AboutUsSection />
      <SelectionSection />
      <ComandosSection filterValue={filterValue} />
      <QuestionsSection />
      <ContactSection />
      <EndSection />
    </>
  );
};

export default Home;
