import style from "./style.module.css";
import "swiper/css";
import INST from "..//..//images/end/Inst_logo.png";
import PIC from "..//..//images/end/GroupPic.png";
import FormQuestion from "..//..//Review/formQestion/index";

const EndSection = () => {
  return (
    <section className={style.container}>
      <div className={style.containerBlock}>
        <div className={style.containerBlockForm}>
          <FormQuestion />
        </div>
        <div className={style.containerBlockInstagram}>
          <div className={style.logo}>
            <img src={INST} alt="Instagram" />
          </div>
          <div className={style.foto}>
            <img src={PIC} alt="pictures" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndSection;
