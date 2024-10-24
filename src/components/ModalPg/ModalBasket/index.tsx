import { FC } from "react";
import style from "./style.module.css";
import ButtonOne from "../../button/button";
import Modal from "../../feature/Modal";
import FormBasket from "../../Review/formBasket";
import { useSelector } from "react-redux";

import { ISneakers } from "../../slices/basketSlice";
import { RootState } from "../../../store";

type Props = {
    closeModalBasket: () => void;
    isModalOpenBasket: boolean;
}

const ModalBasket: FC<Props> = ({ closeModalBasket, isModalOpenBasket }) => {

    // const totalPrice = sneaker.reduce((sum, sneake) => sum + sneake.price, 0);
    const sneaker = useSelector<RootState, ISneakers[]>(
        (state) => state.basket.data
      );

    const handleClick = () => {
        // clearBasket();
    };

    return (
        <Modal isOpen={isModalOpenBasket} onClose={closeModalBasket}>
            <div className={style.container}>
                <h2>Оформление заказа</h2>
                <div className={style.containerBord}>
                    {sneaker.length > 0 ? (
                        <>
                            <p>Товаров в заказе: <b>{sneaker.length} шт.</b></p>
                            <p>Общая сумма: <b>{sneaker.length} ₽</b></p>
                            <p>Состав заказа</p>
                            {sneaker.map(sneake => (
                                <div key={sneake.id} className={style.sneakerItem}>
                                    <p>Название: {sneake.title}</p>
                                    <p>Цена: {sneake.price} ₽</p>
                                </div>
                            ))}
                        </>
                    ) : (
                        <p>Корзина пуста</p> 
                    )}
                </div>
                {sneaker.length > 0 && <FormBasket />} 
                <ButtonOne onClick={handleClick} text="Оформить заказ" />
            </div>
        </Modal>
    );
}

export default ModalBasket;
