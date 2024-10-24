import { FC } from "react";
import style from "./style.module.css";

interface Props {
  text: string;
  onClick: () => void;
}

const ButtonOne : FC<Props> = ({ text, onClick }) => {

    return (
      <button className={style.button} onClick={onClick}>
       { text }    
      </button>
    )
  };
  
  export default ButtonOne;