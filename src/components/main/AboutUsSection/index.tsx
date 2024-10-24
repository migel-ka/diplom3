import style from "./style.module.css";
import IMAGE from "..//..//images/main/pexels-budgeron-bach.png";
import FIGURE from "..//../images/main/figure.png";

function AboutUsSection() {
  
    return (
      <section className={style.section}>
        <img className={style.figure} src={FIGURE} alt="figure" />
        <div className={style.container}>
          <div className={style.sectionText}>
            <h2>Пара слов о нас</h2>
            <p className={style.sectionTextP}>Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед. </p>
            <span className={style.sectionTextSpan}>
              &mdash;SneakMax
            </span>
          </div>
          <img src={IMAGE} alt="about as" />
        </div>
      </section>
    )
  }
  
  export default AboutUsSection;
  