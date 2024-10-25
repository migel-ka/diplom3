import { FC } from "react";
import style from "./style.module.css";
import { Comandos } from "../../type/comandos.ts";

type Props = {
  data: Comandos;
};

const ComandosCard: FC<Props> = ({ data }) => {
  return (
    <div className={style.container}>
        <img className={style.containerImg} src={data.imgUrl} alt={data.name} />
        <h3> {data.name} {data.semame} </h3>
        <p>{data.role}</p>
    </div>
  );
};

export default ComandosCard;
