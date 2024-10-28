import style from "./style.module.css";
import { HashLink as Link } from "react-router-hash-link";
import { FC } from "react";

interface Props {
  handleMenu: () => void;
}

const NavMobile: FC<Props> = ({ handleMenu }) => {
  return (
    <nav className={style.container}>
      <div className={style.menu}>
        <button onClick={handleMenu}>&times;</button>
        <Link to="#CatalocSection" className={style.containerLink}>
          {" "}
          Каталог{" "}
        </Link>
        <Link to="#AboutUsSection" className={style.containerLink}>
          {" "}
          О нас{" "}
        </Link>
        <Link to="#SelectionSection" className={style.containerLink}>
          {" "}
          Подбор товара{" "}
        </Link>
        <Link to="#ComandosSection" className={style.containerLink}>
          {" "}
          Наша команда{" "}
        </Link>
        <Link to="#QuestionsSection" className={style.containerLink}>
          {" "}
          Доставка и оплата{" "}
        </Link>
        <Link to="#ContactSection" className={style.containerLink}>
          {" "}
          Контакты{" "}
        </Link>
      </div>
    </nav>
  );
};

export default NavMobile;
