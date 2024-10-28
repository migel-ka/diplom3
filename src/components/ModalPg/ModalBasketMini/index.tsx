import { FC, useState } from "react";
import style from "./style.module.css";
import ButtonOne from "../../button/button";
import ModalBasket from "../ModalBasket";
import TRASH from "..//..//images/modal/trash.svg";
import Modal from "../../feature/Modal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { ISneakers } from "../../slices/sneakersSlice";
import { delBasket } from "../../slices/basketSlice";

type Props = {
  closeModal: () => void;
  isModalOpen: boolean;
};

const ModalBasketMini: FC<Props> = ({ closeModal, isModalOpen }) => {
  const items = useSelector<RootState, ISneakers[]>(
    (state) => state.basket.data
  );
  const dispatch = useDispatch<AppDispatch>();

  const [isModalOpenBasket, setIsModalOpenBasket] = useState(false);
  const openModal = () => {
    setIsModalOpenBasket(true);
  };
  const closeModalBasket = () => {
    setIsModalOpenBasket(false);
  };

  const totalPrice = items.reduce((acc, sneake) => acc + sneake.price, 0);

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <div>
        <div className={style.containerBord}>
          {items.map((sneake) => (
            <div key={sneake.id} className={style.sneakerItem}>
              <img
                className={style.sneakerItemImg}
                src={sneake.imgUrl}
                alt={sneake.title}
              />
              <div className={style.sneakerTitle}>
                <p>{sneake.title}</p>
                <span>{sneake.price} ₽</span>
              </div>
              <button
                className={style.sneakerItemBtn}
                onClick={() => dispatch(delBasket(sneake.id))}
              >
                <img src={TRASH} alt="TRASH" />
              </button>
            </div>
          ))}
        </div>
        <div className={style.containerBtn}>
          <div>
            <p>
              <b>Итого: {totalPrice} </b>
            </p>
          </div>
          <ButtonOne onClick={openModal} text="Перейти в корзину" />
          <ModalBasket
            closeModalBasket={closeModalBasket}
            isModalOpenBasket={isModalOpenBasket}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ModalBasketMini;
