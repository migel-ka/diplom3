import style from "./style.module.css";
import VK from "..//..//images/main/VK.svg";
import INSTAGRAM from "..//..//images/main//Instagram.svg";
import YandexMap from "./YandexMap/YandexMap";
;


function ContactSection() {
  
    return (
      <section className={style.section}>
        <div className={style.container}>
         <div className={style.sectionText}>
          <h2>Контакты</h2>
          <p>ГЛАВНЫЙ ОФИС</p>
          <a href="tel:+78007898989">+7 800 789 89 89</a>
          <p>г. Санкт-Петербург, Комсомольская, 43 к1</p>
          <p>ОТДЕЛ ПРОДАЖ</p>
          <a href="tel:+78007898989">+7 800 789 89 89</a>
          <p>г. Санкт-Петербург, Комсомольская, 43 к1</p>
            <div className={style.messeger}>
              <img src={VK}alt="VK" />
              <img src={INSTAGRAM} alt="INSTAGRAM" />
            </div>
         </div>
         <div>
         <YandexMap />
         </div>
        </div>
      </section>
    )
  }
  
  export default ContactSection;
  