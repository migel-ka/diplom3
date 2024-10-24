import style from "./style.module.css";
import ButtonOne from "../../button/button";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch,RootState } from "..//..//..//store";
import { ISneakers } from "..//..//slices/basketSlice";
import { fetchSneakers } from "..//..//slices/sneakersSlice";
import { changeLimit } from "..//..//slices/dataSlice";
import SneakersCard from "../SneakersCard";


interface IProps {
  gender: string;
}

const SneakersCards: FC<IProps> = ({ gender }) => {
  const dispatch = useDispatch<AppDispatch>();
  const sneakers = useSelector<RootState, ISneakers[]>(
    (state) => state.sneakers.data
  );
  const limit = useSelector<RootState, number>((state) => state.data.limit);

  React.useEffect(() => {
    dispatch(
      fetchSneakers({
        priceFrom: 0,
        priceTo: 99999,
        gender: gender,
        sizes: [],
      })
    );
  }, [dispatch, gender, limit]);

  return (
    <>
     <div
      id="catalog"
      className={style.containerGrid}>
         {sneakers
          .filter((_, index) => index < limit)
          .map((item: ISneakers) => (
            <SneakersCard key={item.id} item={item} />
          ))}
      </div>
      <ButtonOne text="Показать ещё" onClick={() => dispatch(changeLimit())} disabled={limit >= sneakers.length} />
    </>
   
  );
}

export default SneakersCards;
