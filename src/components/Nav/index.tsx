//import { Link } from "react-router-dom";
import style from "./style.module.css";
import { HashLink as Link } from 'react-router-hash-link';

function Nav() {
  
    return (
      <nav className={style.container}>
       <Link to="#CatalocSection" className={style.containerLink}> Каталог </Link>
       <Link to="#AboutUsSection" className={style.containerLink}> О нас </Link>
       <Link to="#SelectionSection" className={style.containerLink}> Подбор товара </Link>
       <Link to="#ComandosSection" className={style.containerLink}> Наша команда </Link>
       <Link to="#QuestionsSection" className={style.containerLink}> Доставка и оплата </Link>
       <Link to="#ContactSection" className={style.containerLink}> Контакты </Link>
      </nav>
    )
  }
  
  export default Nav;
  