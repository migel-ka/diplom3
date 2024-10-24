import { FC, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { IFormData } from "../FilterCalalog";
import style from "./style.module.css";

const sizesData = [35, 36, 37, 38, 39, 40, 41, 42, 43];

interface IProps {
  setValue: UseFormSetValue<IFormData>;
}

const FilterSizes: FC<IProps> = ({ setValue }) => {
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);

  const handleSizeChange = (size: number) => {
    console.log(selectedSizes);
    setSelectedSizes((prevSelectedSizes) => {
      const newSizes = prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((s) => s !== size)
        : [...prevSelectedSizes, size];
      setValue("sizes", newSizes);
      return newSizes;
    });
  };

  return (
    <>
      <p>Размер</p>
      <ul className={style.filterSize}>
        {sizesData.map((size) => (
          <li key={size}>
            <input
              type="checkbox"
              id={size.toString()}
              name="sizes"
              onChange={() => handleSizeChange(size)}
            />
            <label htmlFor={size.toString()}>{size.toString()}</label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FilterSizes;
