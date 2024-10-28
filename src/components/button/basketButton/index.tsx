import style from "./style.module.css";
import BASKET from "..//../images/Basket.svg";
import { useState } from "react";
import ModalBasketMini from "../../ModalPg/ModalBasketMini";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

function ButtonOrange() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const basketLength = useSelector<RootState, number>(
    (state) => state.basket.data.length
  );

  return (
    <>
      <button onClick={openModal} className={style.container}>
        Корзина
        <img className={style.imgBasket} src={BASKET} alt="BASKET" />
        <div className={style.containerCounter}>
          {" "}
          <p>{basketLength}</p>{" "}
        </div>
      </button>
      {isModalOpen && (
        <ModalBasketMini closeModal={closeModal} isModalOpen={isModalOpen} />
      )}
    </>
  );
}

export default ButtonOrange;
