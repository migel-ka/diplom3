import { FC } from "react";
import { IFormData } from "../FilterCalalog";
import { UseFormSetValue } from "react-hook-form";
import style from "./style.module.css";

interface IProps {
  setValue: UseFormSetValue<IFormData>;
}

const genders = [
  {
    value: "мужской",
    label: "male",
  },
  {
    value: "женский",
    label: "female",
  },
];

const FilterGender: FC<IProps> = ({ setValue }) => {
  return (
    <>
      <p>Пол</p>
      <div className={style.filterGender}>
        {genders.map((gender) => (
          <div key={gender.label}>
            <input
              type="radio"
              id={gender.label}
              name="gender"
              onChange={() => setValue("gender", gender.value)}
            />
            <label htmlFor={gender.label}>{gender.value}</label>
          </div>
        ))}
      </div>
    </>
  );
};


export default FilterGender;
