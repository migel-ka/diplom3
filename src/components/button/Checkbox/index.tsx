import { FC } from "react";
import style from "./style.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Checkbox : FC<ButtonProps> = ({ text, onClick }) => {

    return (
      <label htmlFor="">
        <span className={style.customCheckbox}></span>
      <input className={style.checkbox} type="checkbox" id="scales" name={text} onClick={onClick}/>
      {text} 
      </label>
    )
  };
  
  export default Checkbox;