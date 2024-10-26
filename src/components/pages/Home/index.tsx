import AboutUsSection from "../../main/AboutUsSection";
import CatalocSection from "../../main/CatalocSection";
import ComandosSection from "../../main/ComandosSection";
import ContactSection from "../../main/ContactSection";
import EndSection from "../../main/EndSection";
import QuestionsSection from "../../main/QuestionsSection";
import SelectionSection from "../../main/SelectionSection";

const Home = () => {
    return (
        <>
        <CatalocSection />
        <AboutUsSection />
        <SelectionSection />
        <ComandosSection />
        <QuestionsSection />
        <ContactSection />
        <EndSection />
        </>
    );
};

export default Home;