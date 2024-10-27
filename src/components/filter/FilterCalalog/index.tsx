import { FC } from 'react';
import style from "./style.module.css";
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AppDispatch } from '../../../store';
import FilterPrice from '../FilterPrice';
import FilterGender from '../FilterGender';
import FilterSizes from '../FilterSize';
import { getBaseLimit } from '../../slices/dataSlice';
import { fetchSneakers } from '../../slices/sneakersSlice';

interface IProps {
  setGender: (gender: string) => void;
}

export interface IFormData {
  startPrice: number;
  endPrice: number;
  gender: string;
  sizes: number[];
}

const FilterCatalog: FC<IProps> = ({ setGender }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { register, handleSubmit, setValue } = useForm<IFormData>({
    defaultValues: {
      startPrice: 1000,
      endPrice: 50000,
      gender: "",
      sizes: [],
    },
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    setGender(data.gender);
    dispatch(
      fetchSneakers({
        priceFrom: data.startPrice,
        priceTo: data.endPrice,
        gender: data.gender,
        sizes: data.sizes,
      })
    );
  };

  return (
      <form className={style.container} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h3>Подбор по параметрам</h3>
        </div>
        <div className={style.filterContainer}>
          <FilterPrice register={register} setValue={setValue} />
          <FilterGender setValue={setValue} />
          <FilterSizes setValue={setValue} />
        </div>
          
          <div className={style.containerBTN}>
            <button className={style.BTN} type="submit" onClick={() => dispatch(getBaseLimit())}>
              Применить
            </button>
            <button
              className={style.BTNnone}
              type="reset"
              onClick={() =>
                onSubmit({ startPrice: 0, endPrice: 99999, gender: "", sizes: [0] })} >
              сбросить
            </button>
          </div>


      </form>
  );
};

export default FilterCatalog;

//<ButtonTwo text="Применить" type="submit" onClick={() => dispatch(getBaseLimit())} />