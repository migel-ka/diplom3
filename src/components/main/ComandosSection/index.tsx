import style from "./style.module.css";
import FIGURE from "..//../images/main/Group.svg";
import ComandosCards from "../../Comandos/ComandosCards";
import { FC } from "react";

interface Props {
  filterValue: string; 
}

const ComandosSection: FC<Props> = () => { 
  return (
    <section id="ComandosSection" className={style.section}>
      <img className={style.figure} src={FIGURE} alt="figure" />
      <div className={style.container}>
        <h2>Наша команда</h2>
        <ComandosCards  /> 
      </div>
    </section>
  );
};

export default ComandosSection;
