import style from "./style.module.css";
import LOGO from "../images/logo.svg";
import Nav from "../Nav/index";
import { Link } from "react-router-dom";
import BasketButton from "../button/basketButton/index";
import ButtonOne from "../button/button";
import { useState } from "react";
import NavMobile from "../Nav/BurgerMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  
  const handleMenu = ()=> {
    setMenuOpen(!menuOpen)
  }
  const handleClick = () => {
    console.log("Кнопка нажата!");
  };
  
    return (
      <header className={style.container}>
        <div className={style.contenerNav}>
          <Link to="/">
          <img src={LOGO} alt="logo" />
          </Link>
          <div className={style.containerNav}>
          <button className={style.burgerBTN} onClick={handleMenu}>
            <div className={style.burger} >
                <div className={style.burgerLine}></div>
                <div className={style.burgerLine}></div>
                <div className={style.burgerLine}></div>
            </div>
            </button>
            {menuOpen && <NavMobile handleMenu = {handleMenu}/>}
             <Nav />
             <BasketButton />
          </div>
        </div>
        <div className={style.containerIntro}>
          <h1>Кроссовки известных брендов с доставкой по России и СНГ</h1>
          <p>Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по низким ценам</p>
          <ButtonOne text = "Перейти к покупкам" onClick={handleClick}/>
        </div>
      </header>
    )
  }
  
  export default Header
  