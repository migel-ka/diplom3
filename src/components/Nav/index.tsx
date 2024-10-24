import { Link } from "react-router-dom";
import style from "./style.module.css";

function Nav() {
  
    return (
      <nav className={style.container}>
       <Link to="catalog" className={style.containerLink}> Каталог </Link>
       <Link to="Home" className={style.containerLink}> О нас </Link>
       <Link to="Home" className={style.containerLink}> Подбор товара </Link>
       <Link to="Home" className={style.containerLink}> Наша команда </Link>
       <Link to="Home" className={style.containerLink}> Доставка и оплата </Link>
       <Link to="Home" className={style.containerLink}> Контакты </Link>
      </nav>
    )
  }
  
  export default Nav;
  