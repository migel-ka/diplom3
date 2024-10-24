import Nouislider from "nouislider-react";
import { FC } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { IFormData } from "../FilterCalalog";
import style from "./style.module.css";


interface IProps  {
    setValue: UseFormSetValue<IFormData>;
    register: UseFormRegister<IFormData>;
  }
  
  const FilterPrice: FC<IProps> = ({ register, setValue }) => {
    return (
      <>
        <p>Цена, руб</p>
        <div className={style.filterPrice}>
          <input className={style.priceInput} type="number" min={0} max={99999} {...register("startPrice")} />
          <input type="number" min={0} max={99999} {...register("endPrice")} />
          <Nouislider
            range={{ min: 0, max: 99999 }}
            start={[1850, 25786]}
            orientation="horizontal"
            connect
            step={1}
            onChange={([start, end]) => {
              setValue("startPrice", Math.round(start));
              setValue("endPrice", Math.round(end));
            }}
          />
        </div>
      </>
    );
  };

  export default FilterPrice;