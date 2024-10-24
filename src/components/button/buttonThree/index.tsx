import { FC } from "react";
import style from "./style.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const buttonThree : FC<ButtonProps> = ({ text, onClick }) => {

    return (
      <button className={style.button} onClick={onClick}>
       { text }    
      </button>
    )
  };
  
  export default buttonThree;