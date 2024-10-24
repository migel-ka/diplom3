import style from "./style.module.css";
import LOGO from "..//images/logo.svg";
import Nav from "../Nav";

function Footer() {
  
    return (
      <footer className={style.container}>
        <img src={LOGO} alt="logo" />
        <Nav />
      </footer>
    )
  }
  
  export default Footer
  