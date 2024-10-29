import style from "./style.module.css";
import { HashLink as Link } from "react-router-hash-link";

export const Nav = () => {
  return (
    <nav className={style.container}>
      <Link to="#CatalocSection" className={style.containerLink} smooth>
        Каталог
      </Link>
      <Link to="#AboutUsSection" className={style.containerLink} smooth>
        О нас
      </Link>
      <Link to="#SelectionSection" className={style.containerLink} smooth>
        Подбор товара
      </Link>
      <Link to="#ComandosSection" className={style.containerLink} smooth>
        Наша команда
      </Link>
      <Link to="#QuestionsSection" className={style.containerLink} smooth>
        Доставка и оплата
      </Link>
      <Link to="#ContactSection" className={style.containerLink} smooth>
        Контакты
      </Link>
    </nav>
  );
};

export default Nav;
